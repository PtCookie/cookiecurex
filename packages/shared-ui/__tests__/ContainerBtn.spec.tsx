import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContainerBtn from '../src/ContainerBtn';

describe('Container button test', () => {
  it("should render button's text", () => {
    render(<ContainerBtn>Hello button</ContainerBtn>);
    const element = screen.getByText(/Hello button/i);

    expect(element).toBeInTheDocument();
  });
});
