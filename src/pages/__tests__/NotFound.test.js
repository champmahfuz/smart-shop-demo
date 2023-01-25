import { render, screen, cleanup } from '@testing-library/react';
import NotFound from '../NotFound/NotFound';


test('should render todo component', () => {
    render(<NotFound />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('couldnt repair');

})