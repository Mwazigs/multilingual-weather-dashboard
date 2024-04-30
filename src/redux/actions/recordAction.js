import {  records } from "./actionTypes";



export const fetchWeatherData = () => {
  const API_KEY = '76A9HTQMKFBVJHWDCWX7N2KF6';

  return async (dispatch) => {
    try {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Nairobi?unitGroup=metric&key=${API_KEY}&contentType=json`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      
      dispatch({ type: records.WEATHER_DATA, payload: data });

    } catch (error) {
      console.error('Error fetching weather data:', error);
      
    }
  };
};


