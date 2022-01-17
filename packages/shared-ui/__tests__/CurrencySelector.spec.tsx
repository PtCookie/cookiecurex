import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import CurrencySelector from '../src/CurrencySelector';

describe('Currency selector test', () => {
  it('should render placeholder text', () => {
    render(<CurrencySelector />);
    const element = screen.getByLabelText(/Currency/i);

    expect(element).toBeInTheDocument();
  });

  it('should render loading text', async () => {
    // Arrange
    const { container } = render(<CurrencySelector />);
    const button = container.querySelector('button') as HTMLButtonElement;

    // Act
    fireEvent.click(button);

    await waitFor(() => screen.getByRole('progressbar'));

    // Assert
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('should render selected value', async () => {
    // Arrange
    const { container } = render(<CurrencySelector />);
    const button = container.querySelector('button') as HTMLButtonElement;

    // Act
    fireEvent.click(button);

    await waitFor(() => screen.getByText('South Korean won'));

    fireEvent.click(screen.getByText('South Korean won'));

    // Assert
    expect(container.querySelector('input')).toHaveValue('South Korean won');
  });
});
