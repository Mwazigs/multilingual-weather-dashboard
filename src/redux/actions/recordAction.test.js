import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchWeatherData } from './recordAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const expectedPayload = {
  resolvedAddress: 'Mock City',
  days: [
    {
      datetime: '2024-04-30',
      temp: 20,
      feelslike: 19,
      humidity: 85.3,
      precip: 83.4,
      windspeed: 13.9,
      cloudcover: 60,
      sunrise: '06:30 AM',
      sunset: '07:45 PM',
      uvindex: 5,
      preciptype: 'rain'
    },
    
  ]
};







describe('fetchWeatherData', () => {
  it('creates FETCH_WEATHER_SUCCESS after successfully fetching weather data', () => {
    const expectedAction = { type: 'FETCH_WEATHER_SUCCESS', payload: {expectedPayload} }; // Update payload as needed

   
    const store = mockStore({});

    
    return store.dispatch(fetchWeatherData()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual([expectedAction]);
    });
  });
});

