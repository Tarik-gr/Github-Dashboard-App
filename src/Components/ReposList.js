import React, {useState} from 'react';
import { GoRepo } from "react-icons/go";
import RepoDetails from './RepoDetails';

const ReposList = ({repos}) => {
    // LIST ALL THE REPOSITORIES AND THEIR CONTENT IF THE REPO IS CLICKED

    const initialReposShow = ()=>{// INITIALIZE THE DETAILS DISPLAY TO FALSE
        let res = [];
        for (let i=0; i<50; i++){ res.push(false) };
        return res;
    }
    const [show, setShow] = useState(initialReposShow());// STATE OF DETAILS DISPLAY

    const handleShow = (index)=>{ // IF A REPOSITORIES IS CLICKED, IT SHOWS ITS DETAILS
        let newShow = [...show];
        newShow[index] = !show[index];
        setShow(newShow);
    }

    return (    
    <div className="repos-list" >
        {repos.map((repo, index) =>(
        <div className="repo" key={index} onClick={()=>handleShow(index)} data-testid={`repo-item-${index}`}>
            <GoRepo size="1.2rem" />
            <div className="repo-name">{repo.name}</div>
            <RepoDetails repo={repo} show={show[index]} />
        </div>
        ))}
    </div>
    )
}

export default ReposList;