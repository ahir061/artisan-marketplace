import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold font-serif text-brand-primary mb-2">Shilpo AI</h3>
            <p className="pr-4">{t('footer.description')}</p>
            <div className="mt-4 text-sm text-gray-500">
                {t('footer.poweredBy')}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.company.title')}</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-brand-primary transition-colors duration-300">{t('footer.company.about')}</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-primary transition-colors duration-300">{t('footer.company.careers')}</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-primary transition-colors duration-300">{t('footer.company.press')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.resources.title')}</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-brand-primary transition-colors duration-300">{t('footer.resources.blog')}</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-primary transition-colors duration-300">{t('footer.resources.help')}</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-primary transition-colors duration-300">{t('footer.resources.contact')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.legal.title')}</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-brand-primary transition-colors duration-300">{t('footer.legal.privacy')}</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-primary transition-colors duration-300">{t('footer.legal.terms')}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             {/* Social Icons Placeholder */}
             <a href="#" aria-label="Facebook" className="hover:text-amber-400 transition-all duration-300 transform hover:scale-110"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
             <a href="#" aria-label="Instagram" className="hover:text-amber-400 transition-all duration-300 transform hover:scale-110"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.25-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg></a>
             <a href="#" aria-label="Twitter" className="hover:text-amber-400 transition-all duration-300 transform hover:scale-110"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.06.088.607 1.882 2.372 3.256 4.464 3.293-1.722 1.34-3.882 2.112-6.22 2.112-.414 0-.82-.024-1.22-.074 2.226 1.423 4.873 2.25 7.748 2.25 9.284 0 14.376-7.699 14.048-14.377.98-.709 1.823-1.59 2.5-2.59z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;