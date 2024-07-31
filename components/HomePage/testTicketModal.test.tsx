import { render, screen } from '@testing-library/react';
import TicketModal from './TicketModal';
import '@testing-library/jest-dom';

describe('TicketModal Component', () => {
    it('renders without crashing', () => {
        render(<TicketModal isOpen={true} onClose={jest.fn()} squareSiteLink="https://example.com" ticketPrice="$100" disclaimer="Test disclaimer" title="Test Event" />);
        expect(screen.getByText(/Pay with Square/i)).toBeInTheDocument();
        expect(screen.getByText(/Zelle/i)).toBeInTheDocument();
        expect(screen.getByText(/Test disclaimer/i)).toBeInTheDocument();
    });
});