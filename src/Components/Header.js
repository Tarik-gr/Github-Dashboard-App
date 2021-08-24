import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Header = ({name}) => {
    // return the title with the name of the profil when existing
    return (
        <div className="header-container">
            <div className="header-row">
                <AiFillGithub size="3rem" color = "white"/>
                <h1 className="title">Github Dashboard {name && (`- ${name}`)}</h1>
            </div>
        </div>
    )
}

export default Header;
