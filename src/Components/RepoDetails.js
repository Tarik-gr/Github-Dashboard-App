import React from 'react';
import { GoStar } from "react-icons/go";

const RepoDetails = ({repo, show}) => {
    // RETURN REPOSITORY DETAILS


    const convertDate = (date)=>{// CONVERT THE DATE RECEIVED BY THE API TO A SUITABLE DATE
        let monthsOfTheYear = [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet' , 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
        const year = date.slice(0, 4);
        const month = monthsOfTheYear[parseInt(date.slice(5, 7))-1];
        const day = date.slice(8, 10);
        return `${day} ${month} ${year}`
    }


    return (
        <>
        {/* IF THE DETAILS DISPLAY IS TRUE THEN DISPLAY DETAILS  */}
        { show === true ? (
            <div className="repo-details">
                <h4>Description : {repo.description}</h4>
                <div className="stars">{repo.stargazers_count}<GoStar /></div>
                <p>Langage utilisé      : <span className="info">{repo.language}</span></p> 
                <p>Date de création     : <span className="info">{convertDate(repo.pushed_at)}</span></p> 
                <p>Dernière mise à jour : <span className="info">{convertDate(repo.updated_at)}</span></p> 
                <p>Lien vers le <a href={repo.html_url} target="_blank" rel="noopener noreferrer">dépôt</a></p>
            </div>):("")
        }
        </>
    )
}

export default RepoDetails;
