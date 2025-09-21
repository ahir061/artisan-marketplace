import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTextToSpeechReturn {
  speak: (text: string, onEnd?: () => void) => void;
  isSpeaking: boolean;
  isSupported: boolean;
}

export const useTextToSpeech = (lang: string): UseTextToSpeechReturn => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);

      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        if (availableVoices.length > 0) {
          setVoices(availableVoices);
        }
      };

      // Voices are loaded asynchronously
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;

      return () => {
        window.speechSynthesis.cancel();
        window.speechSynthesis.onvoiceschanged = null;
      };
    }
  }, []);

  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (!isSupported || isSpeaking) return;
    
    // Cancel any ongoing or queued speech to prevent overlap
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance; // Keep a reference to prevent garbage collection
    
    // Find the best voice for the current language using a scoring system
    const languageCode = lang.split('-')[0]; // e.g., 'en' from 'en-US'
    const langVoices = voices.filter(v => v.lang.startsWith(languageCode));

    if (langVoices.length > 0) {
        // Prioritize voices based on quality indicators
        const scoredVoices = langVoices.map(voice => {
            let score = 0;
            const name = voice.name.toLowerCase();
            
            // High priority for female voices based on common name identifiers
            const femaleIdentifiers = [
                'female', 'woman', 'girl', 'samantha', 'fiona', 'victoria', 
                'susan', 'zira', 'karen', 'moira', 'tessa', 'serena', 'katja'
            ];
            if (femaleIdentifiers.some(id => name.includes(id))) {
                score += 30; // Strong preference for female voices
            }

            // Highest priority for modern, high-quality voice engines
            if (name.includes('neural')) score += 20;
            if (name.includes('natural')) score += 15;

            // High priority for major providers known for good voices
            if (name.includes('google')) score += 15;
            if (name.includes('microsoft')) score += 12;
            if (name.includes('apple')) score += 12;

            // Prefer remote voices, as they are often higher quality
            if (!voice.localService) score += 10;
            
            // Lower priority for generic or older-sounding voices
            if (name.includes('desktop')) score -= 5;
            if (name.includes('mobile')) score -= 5;
            if (name.includes('compact')) score -= 10;

            // Penalize common male voice identifiers
            const maleIdentifiers = ['male', 'man', 'boy', 'alex', 'daniel', 'oliver'];
            if (maleIdentifiers.some(id => name.includes(id))) {
                score -= 15;
            }
            
            return { voice, score };
        });

        scoredVoices.sort((a, b) => b.score - a.score);
        utterance.voice = scoredVoices[0].voice;
    } else {
        // Fallback to browser default if no specific voice is found
        utterance.voice = null;
    }

    utterance.lang = lang;
    utterance.pitch = 1;
    utterance.rate = 0.9; // Slightly slower rate for better clarity and a more natural pace

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
        setIsSpeaking(false);
        utteranceRef.current = null; // Clear reference
        if (onEnd) {
            onEnd();
        }
    };
    utterance.onerror = (e) => {
        console.error("Speech synthesis error", e);
        setIsSpeaking(false);
        utteranceRef.current = null; // Clear reference
         if (onEnd) { // Also call onEnd on error to not block the flow
            onEnd();
        }
    };

    window.speechSynthesis.speak(utterance);
  }, [isSupported, isSpeaking, voices, lang]);

  return { speak, isSpeaking, isSupported };
};
