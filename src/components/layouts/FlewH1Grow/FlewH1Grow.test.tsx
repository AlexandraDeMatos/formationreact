import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import FlewH1Grow from './FlewH1Grow';

describe('<FlewH1Grow />', () => {
  test('should mount', () => {
    render(<FlewH1Grow><div>Test</div></FlewH1Grow>);

    const flewH1Grow = screen.getByTestId('FlewH1Grow');

    expect(flewH1Grow).toBeInTheDocument();
  });
});
