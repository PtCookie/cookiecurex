import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Currency, CurrencySelector } from '../src';

describe('Currency selector test', () => {
  const options: Currency[] = [{ code: 'krw', name: 'South Korean won' }];

  it('should render placeholder text', () => {
    // Arrange
    render(<CurrencySelector options={options} open={false} />);

    // Act
    const element = screen.getByLabelText(/Currency/i);

    // Assert
    expect(element).toBeInTheDocument();
  });

  it('should render currency name', async () => {
    // Arrange
    render(<CurrencySelector options={options} open={true} />);

    // Act
    const element = screen.getByText(/South Korean won/i);

    // Assert
    expect(element).toBeInTheDocument();
  });

  it('should render selected value', async () => {
    // Arrange
    const { container } = render(<CurrencySelector options={options} value={options[0]} open={false} />);

    // Act
    const element = container.querySelector('input');

    // Assert
    expect(element).toHaveValue('South Korean won');
  });
});
