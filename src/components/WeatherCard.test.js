
import  React from 'react';

import { render, screen } from '@testing-library/react';

import WeatherCard from './WeatherCard';

test('renders weather card with loading message', () => {
  render(<WeatherCard />);
  const loadingElement = screen.getByText(/loadingWeather/i);
  expect(loadingElement).toBeInTheDocument();
});
