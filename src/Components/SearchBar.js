import React from 'react';
import { GoSearch } from 'react-icons/go';

const SearchBar = ({query, setQuery, fetchProfil}) => {
    // return a form for search profil

    const handleChange = e =>{
        // insert the new value on the input field
        setQuery(e.target.value);
    }

    return (
        <div>
            <form className="search-bar" onSubmit={(e)=>fetchProfil(e,query)}>
                <input type="text" placeholder="Rechercher un profil..." value={query} onChange={e=>handleChange(e)}/>                
                <button type="submit"><GoSearch className="search-icon" color='black' size="2rem" /></button>
            </form>
        </div>
    )
}

export default SearchBar;
