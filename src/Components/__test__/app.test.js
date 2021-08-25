import { render, screen, fireEvent, getByTestId, getByRole } from '@testing-library/react';
import App from '../../App';

describe('App', () => {

    describe('App-searchBar', () => {
    
        it('should render a searchBar input', () => {
            render(<App />);
            const inputElement = screen.getByPlaceholderText(/rechercher un profil.../i);
            expect(inputElement).toBeVisible();
        });
        
        it('should modify the input value when we type', () => {
            render(<App />);
            const inputElement = screen.getByPlaceholderText(/rechercher un profil.../i);
            fireEvent.change(inputElement, { target : { value : 'reactjs'}});
            expect(inputElement.value).toBe('reactjs');
        });
    
        it('should clear the input field when click on search button', async() => {
            // render(<App />);
            // const inputElement = screen.getByPlaceholderText(/rechercher un profil.../i);
            // const searchButton = screen.getByRole('button');
            // fireEvent.change(inputElement, { target : { value : 'reactjs'}});
            // fireEvent.click(searchButton);
            // expect(inputElement.value).toBe('reactjs');
        });
    
    })


    describe('App-Dashboard', () => {

        it('should render a dashboard avatar and profil name', async() => {
            render(<App />);
            const inputElement = screen.getByPlaceholderText(/rechercher un profil.../i);
            const searchButton = screen.getByRole('button');
            fireEvent.change(inputElement, { target : { value : 'reactjs'}});
            fireEvent.click(searchButton);
            const avatar = await screen.findByRole('img');
            const profilName = await screen.findByTestId('profilName')
            expect(avatar).toBeVisible();
            expect(profilName).toBeVisible();
            
        });

        it('should render an error message if profil name doesnt exist', async() => {
            render(<App />);
            const inputElement = screen.getByPlaceholderText(/rechercher un profil.../i);
            const searchButton = screen.getByRole('button');
            fireEvent.change(inputElement, { target : { value : 'sjhfjhgofkjlfdhj'}});
            fireEvent.click(searchButton);
            const errorMessage = await screen.findByText(/Ce profil n'existe pas.../i);
            expect(errorMessage).toBeVisible();           
        });

        it('should render a single repository', async() => {
            render(<App />);
            const inputElement = screen.getByPlaceholderText(/rechercher un profil.../i);
            const searchButton = screen.getByRole('button');
            fireEvent.change(inputElement, { target : { value : 'reactjs'}});
            fireEvent.click(searchButton);
            const firstRepo = await screen.findByTestId('repo-item-0')
            expect(firstRepo).toBeVisible();
        });

        it('should render all repositories of reactjs profil', async() => {
            render(<App />);
            const inputElement = screen.getByPlaceholderText(/rechercher un profil.../i);
            const searchButton = screen.getByRole('button');
            fireEvent.change(inputElement, { target : { value : 'reactjs'}});
            fireEvent.click(searchButton);
            const allRepo = await screen.findAllByTestId(/repo-item/i);
            expect(allRepo.length).toBe(30);
        });

        it('should render repository details when the repository is clicked', async() => {
            render(<App />);
            const inputElement = screen.getByPlaceholderText(/rechercher un profil.../i);
            const searchButton = screen.getByRole('button');
            fireEvent.change(inputElement, { target : { value : 'reactjs'}});
            fireEvent.click(searchButton);
            const allRepo = await screen.findAllByTestId(/repo-item/i);
            fireEvent.click(allRepo[0]);
            const repoDetail = await screen.findAllByTestId('repo-detail')
            expect(repoDetail[0]).toBeInTheDocument();
        });
    })
})