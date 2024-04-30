import React from 'react';
import { useTranslation } from 'react-i18next';
import WeatherCard from './WeatherCard';


const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 flex justify-center items-center">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">{t('Weather Forecast')}</h1>
        {/* <LanguageSelector /> */}
        <WeatherCard />
      </div>
    </div>
  );
};

export default LandingPage;


