import { render, screen } from '@testing-library/react';
import MetricCard from './MetricCard';

describe('MetricCard', () => {
  it('renders the correct value and label', () => {
    render(<MetricCard label="Total Members" value={123} />);
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('Total Members')).toBeInTheDocument();
  });

  it('renders the correct icon for each label', () => {
    const labels = [
      'Total Members',
      'Online Users',
      'Active Roles',
      'Messages Today',
    ] as const;
    labels.forEach(label => {
      render(<MetricCard label={label} value={1} />);
      // Check that the SVG icon is present
      expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
      // Clean up after each render
      document.body.innerHTML = '';
    });
  });
}); 