import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSelector from './LangaugeSelector';




test('renders language selector buttons', () => {
  render(<LanguageSelector />);
  
  
  const englishButton = screen.getByText(/English/i);
  const swahiliButton = screen.getByText(/Swahili/i);
  expect(englishButton).toBeInTheDocument();
  expect(swahiliButton).toBeInTheDocument();

 
  fireEvent.click(englishButton);
  
  
  fireEvent.click(swahiliButton);
  
});
