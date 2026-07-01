import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Thumbnails from './Thumbnails';

describe('<Thumbnails />', () => {
  test('should mount', () => {
    render(<Thumbnails />);

    const thumbnails = screen.getByTestId('Thumbnails');

    expect(thumbnails).toBeInTheDocument();
  });
});
