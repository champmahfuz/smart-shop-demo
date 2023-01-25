import { render, screen, cleanup } from '@testing-library/react';
import Payment from '../Dashboard/Accounts/Payment/Payment';


test('should render todo component', () => {
    render(<Payment />);
    const todoElement = screen.getByTestId('payment-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('ADD PAYMENT');
})