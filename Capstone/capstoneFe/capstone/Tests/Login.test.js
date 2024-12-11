import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Login } from './Login';

describe('Login Component', () => {
    test('renders Login component', () => {
        render(<Login />);
        expect(screen.getByPlaceholderText('Enter text 1')).toBeInTheDocument();
        expect(screen.getByText('blank')).toBeInTheDocument();
    });

    test('updates username and password input fields', () => {
        render(<Login />);
        const usernameInput = screen.getAllByPlaceholderText('Enter text 1')[0];
        const passwordInput = screen.getAllByPlaceholderText('Enter text 1')[1];

        fireEvent.change(usernameInput, { target: { value: 'user' } });
        fireEvent.change(passwordInput, { target: { value: 'pass' } });

        expect(usernameInput.value).toBe('user');
        expect(passwordInput.value).toBe('pass');
    });

    test('updates testText on login button click', () => {
        render(<Login />);
        const usernameInput = screen.getAllByPlaceholderText('Enter text 1')[0];
        const passwordInput = screen.getAllByPlaceholderText('Enter text 1')[1];
        const loginButton = screen.getByText('Log in');

        fireEvent.change(usernameInput, { target: { value: 'user' } });
        fireEvent.change(passwordInput, { target: { value: 'pass' } });
        fireEvent.click(loginButton);

        expect(screen.getByText('userpass')).toBeInTheDocument();
    });
});