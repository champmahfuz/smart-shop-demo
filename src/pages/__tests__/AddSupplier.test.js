import { render, screen, cleanup } from '@testing-library/react';
import AddSupplier from '../Dashboard/AddSupplier/AddSupplier';


test('should render todo component', () => {
    render(<AddSupplier />);
    const todoElement = screen.getByTestId('supplier-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('ADD SUPPLIER');

})

test('should render button component', () => {
    render(<AddSupplier />);
    const todoElement = screen.getAllByRole("button");
    expect(todoElement).toHaveLength(6);

})

