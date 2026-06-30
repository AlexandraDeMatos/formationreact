import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Flex from './Flex';

describe('<Flex />', () => {
  test('should mount', () => {
    render(<Flex><div>Test</div></Flex>);

    const flex = screen.getByTestId('Flex');

    expect(flex).toBeInTheDocument();
  });
});
