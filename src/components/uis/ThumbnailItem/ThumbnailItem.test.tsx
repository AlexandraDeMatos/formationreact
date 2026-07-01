import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ThumbnailItem from './ThumbnailItem';

describe('<ThumbnailItem />', () => {
  test('should mount', () => {
    render(<ThumbnailItem />);

    const thumbnailItem = screen.getByTestId('ThumbnailItem');

    expect(thumbnailItem).toBeInTheDocument();
  });
});
