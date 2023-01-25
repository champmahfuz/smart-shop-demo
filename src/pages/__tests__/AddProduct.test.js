import { render, screen, cleanup } from '@testing-library/react';
import AddProduct from '../Dashboard/AddProduct/AddProduct';


test('should render todo component', () => {
    render(<AddProduct />);
    const todoElement = screen.getByTestId('product-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Add New Product');

})

// test('should render button component', () => {
//     render(<AddNewProduct />);
//     const todoElement = screen.getAllByRole("button");
//     expect(todoElement).toHaveLength(6);

// })