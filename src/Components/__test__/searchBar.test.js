import { render, screen, fireEvent, useState } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {

    const MockQuery = '';
    const MockSetQuery = jest.fn();
    const MockFetchProfil = jest.fn();
    // const [query, setQuery]= useState('')


    it('should render a searchBar input', () => {
        render(<SearchBar query={MockQuery} setQuery={MockSetQuery} fetchProfil={MockFetchProfil} />);
        const inputElement = screen.getByPlaceholderText(/rechercher un profil.../i)
        expect(inputElement).toBeVisible();
    });

    it('should render the search value typed', () => {
        render(<SearchBar query='reactjs' setQuery={MockSetQuery} fetchProfil={MockFetchProfil} />);
        const inputElement = screen.getByPlaceholderText(/rechercher un profil.../i)
        // fireEvent.change(inputElement, {target : { value : "reactjs"}})
        expect(inputElement.value).toBe("reactjs");
    });
    
    // it('should render the search value typed', () => {
    //     render(<SearchBar query='reactjs' setQuery={MockSetQuery} fetchProfil={MockFetchProfil} />);
    //     const inputElement = screen.getByPlaceholderText(/rechercher un profil.../i)
    //     const btnElement = screen.getByRole('button')
    //     expect(btnElement).toBeVisible();
    //     fireEvent.click(btnElement)

    // });


})
