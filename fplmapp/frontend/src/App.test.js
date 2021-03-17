import { render, screen } from '@testing-library/react';
import App from './App';
import { NavigationBar } from './components/NavigationBar';

test('renders navigation bar', () => {
    render(<NavigationBar />);
    expect(screen.getByText(/Home/)).toBeInTheDocument();
});