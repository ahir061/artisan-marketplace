/**
 * Converts a File object to a base64 encoded string.
 * @param file The file to convert.
 * @returns A promise that resolves with the base64 string (without the data URL prefix).
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // The result is in the format: "data:image/png;base64,iVBORw0KGgo..."
      // We need to strip the prefix, as the Gemini API expects just the base64 data.
      const base64String = (reader.result as string).split(',')[1];
      if (base64String) {
        resolve(base64String);
      } else {
        reject(new Error("Could not convert file to base64 string."));
      }
    };
    reader.onerror = (error) => reject(error);
  });
};
