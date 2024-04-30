import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../utils/i18n';

const LanguageSelector = () => {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
      .then(() => console.log(`Language switched to ${language}`))
      .catch((error) => console.error('Failed to change language:', error));
  };

  return (
    <div className="mb-4 flex justify-between items-center">
     
      <div>
        <button className="mr-4 px-3 py-2 rounded bg-blue-500 text-white" onClick={() => changeLanguage('en')}>
          {t('English')}
        </button>
        <button className="px-3 py-2 rounded bg-green-500 text-white" onClick={() => changeLanguage('sw')}>
          {t('Swahili')}
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
