import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from '../src/pages/Home';
import { UserContext } from '../src/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const mockUserInfo = {
    username: 'testuser',
    email: 'testuser@example.com'
};

const mockUserTasks = [
    {
        id: 1,
        name: "clean the Pool",
        description: "Drain and clean the pool",
        imageUrl: "https://www.google.com",
        steps: [
            {
                id: 1,
                sequence: 1,
                name: "Skim the pool",
                description: "Skim the pool",
                imageUrl: "https://www.google.com",
                Links: [
                    {
                        id: 1,
                        displayText: "Skimmer",
                        url: "https://www.google.com"
                    }
                ]
            },
            {
                id: 2,
                sequence: 2,
                name: "pick up leaves",
                description: "Skim the leaves",
                imageUrl: "https://www.google.com",
                Links: [
                    {
                        id: 1,
                        displayText: "Skimmer",
                        url: "https://www.google.com"
                    }
                ]
            }
        ]
    }
];

const mockFetchData = jest.fn(() => Promise.resolve(mockUserTasks));

jest.mock('../pages/Home', () => ({
    ...jest.requireActual('../pages/Home'),
    fetchData: () => mockFetchData()
}));

describe('first', () => { second })
describe('Home Component', () => {
    it('renders without crashing', () => {
        render(
            <UserContext.Provider value={{ userInfo: mockUserInfo, userTasks: mockUserTasks, setUserTasks: jest.fn() }}>
                <Home />
            </UserContext.Provider>
        );
    });

    it('displays user information', async () => {
        render(
            <UserContext.Provider value={{ userInfo: mockUserInfo, userTasks: mockUserTasks, setUserTasks: jest.fn() }}>
                <Home />
            </UserContext.Provider>
        );

        expect(screen.getByText(`Welcome, ${mockUserInfo.username}!`)).toBeInTheDocument();
        expect(screen.getByText(`Email: ${mockUserInfo.email}`)).toBeInTheDocument();
    });

    it('displays tasks and steps', async () => {
        render(
            <UserContext.Provider value={{ userInfo: mockUserInfo, userTasks: mockUserTasks, setUserTasks: jest.fn() }}>
                <Home />
            </UserContext.Provider>
        );

        await waitFor(() => {
            expect(screen.getByText('Task:clean the Pool')).toBeInTheDocument();
            expect(screen.getByText('Drain and clean the pool')).toBeInTheDocument();
            expect(screen.getByAltText('clean the Pool')).toBeInTheDocument();
            expect(screen.getByText('Skim the pool')).toBeInTheDocument();
            expect(screen.getByText('pick up leaves')).toBeInTheDocument();
        });
    });

    it('displays no tasks message when there are no tasks', async () => {
        render(
            <UserContext.Provider value={{ userInfo: mockUserInfo, userTasks: [], setUserTasks: jest.fn() }}>
                    <Home />
            </UserContext.Provider>
        );
    
        expect(screen.getByText('No Tasks pending')).toBeInTheDocument();
    });
});