import React from 'react';
import { MdError } from "react-icons/md";
import ReposList from './ReposList';

const Dashboard = ({dataProfil, repos}) => {
    // RETURN THE DASHBOARD APP WITH PROFIL NAME, PROFIL AVATAR AND PROFIL REPOSITOTIES

    const dashboardContainer =()=>(
        // RETURN PROFIL INFO ( AVATAR + NAME ) AND REPOSITORIES LIST 
        <div className="dashboard-container">
            {dataProfil.login && profilInfos()}
            {repos && <ReposList repos={repos}/>}
        </div>
    )
    
    const profilInfos = ()=>(
        // RETURN THE AVATAR, THE NAME AND THE LINK TO GITHUB
        <div className="infos-row">
            <div className="avatar-profil">
                { dataProfil.avatar_url && (<img src={dataProfil.avatar_url} alt="avatar" />)}
            </div>
            <div className="profil-info">
                <h2>Profil: <span className="name-profil" data-testid="profilName">{dataProfil.login}</span></h2>
                <div className="link-profil">Lien vers le <a href={dataProfil.html_url} target="_blank" rel="noopener noreferrer">GITHUB</a></div>
            </div>
        </div>
    )

    return (
        // MAKE CONDITION IF DATAPROFIL EXISTS OR NOT
        <div>
            {(dataProfil !== undefined) ? 
                dashboardContainer() : 
                (<div className="warning"><MdError /> Ce profil n'existe pas...</div>) 
            }
        </div>
    
    )
}

export default Dashboard;
