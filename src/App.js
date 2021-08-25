import React, {useState} from 'react'
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import axios from 'axios'
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';

function App() {

  // App states 
  const [dataProfil, setDataProfil] = useState({}) // save the dataProfil fetched with api
  const [repos, setRepos] = useState([]) // save the repositories fetched with api
  const [query, setQuery] = useState('') // save the input value of th search bar

  // Fetch the profil data and the repositories from github api
  const fetchProfil = async(e, profil) =>{
    e.preventDefault();
    // fetch the dataProfil and set it on dataProfil state
    const request = await axios.get(`https://api.github.com/search/users?q=${profil}`);
    setDataProfil(request.data.items[0]); // get the first result
    setQuery('');

    // fetch the repositories from github and set them on repos state
    const repos_url = (request.data.items[0] !== undefined) && request.data.items[0].repos_url;
    const getRepos = await axios.get(repos_url)
    getRepos.data && setRepos(getRepos.data)
    
  }


  return (
    <div className="App">
      <Header name={(dataProfil!== undefined) && dataProfil.login}/>
      <main>
        <SearchBar query={query} setQuery={setQuery} fetchProfil={fetchProfil}/>
        <Dashboard dataProfil={dataProfil} repos={repos}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
