import { render, screen, fireEvent } from '@testing-library/react';
import JoinModal from './JoinModal';
import '@testing-library/jest-dom';

describe('JoinModal Component', () => {
  it('renders without crashing', () => {
    render(<JoinModal isOpen={true} onClose={jest.fn()} />);
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
  });

  it('submits form successfully', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Form sent successfully!' }),
      })
    ) as jest.Mock;

    render(<JoinModal isOpen={true} onClose={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '1234567890' } });
    
    fireEvent.click(screen.getByText(/Submit/i));

    expect(await screen.findByText(/Form sent successfully!/i)).toBeInTheDocument();
  });
});