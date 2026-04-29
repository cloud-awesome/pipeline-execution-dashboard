import { render, screen } from '@testing-library/react';

import { PipelineDashboard } from '../../src';

describe('PipelineDashboard', () => {
  it('renders the dashboard landmark', () => {
    render(<PipelineDashboard />);

    expect(
      screen.getByRole('region', {
        name: 'Pipeline execution dashboard',
      }),
    ).toBeInTheDocument();
  });

  it('applies a custom class name', () => {
    render(<PipelineDashboard className="custom-dashboard" />);

    expect(
      screen.getByRole('region', {
        name: 'Pipeline execution dashboard',
      }),
    ).toHaveClass('ped-dashboard', 'custom-dashboard');
  });
});
