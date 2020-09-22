import React, { useState, useEffect} from 'react';
import './Style.css';
import axios from 'axios';

import User from './components/User';

function App() {

  const client_id = "Iv1.b542251ffcd08c12";
  const client_secret = "198c4449f06c59e036655e4aa7cca47c0051549c";

  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('github');
  const [search, setSearch] = useState('')
  const [error, setError] = useState ("")
  const [color, setColor] = useState ("element");

  useEffect(() => { 

    const getUsers = async () => {

      const Req = `https://api.github.com/users/${query}?client_id=${client_id}&client_secret=${client_secret}`;

      axios.get(Req)
      .then(response => {

        const info = response.data;
        setColor("element");
        setError("");
        setUsers( info );

      })
      .catch(error => {

        setColor("element2");
        setError(" The username you entered does not match ! ");
        console.log(" The username you entered does not match ! Please enter a valid username .", error);

      })
       
  
  
    }
    
    getUsers();
  
  }, [ query ]);



  const updateSearch = (e) => {

    setSearch(e.target.value)

  }

  const getSearch = (e) =>
  {
    e.preventDefault();
    const word = search.replace(/\s+/g, '');
    setQuery(( word === "" ) ? "github" : word);
    setSearch('');
  }


  return (

    <div className = "home">

      <header>

        <h1>Github - Profile Finder</h1>

        <p>Check out the repos, followers and more just by entering a username ! </p>

      </header>

      <form onSubmit = { getSearch }>

        <input  
          className = "search-bar" 
          value = { search } 
          onChange = { updateSearch }
          type = "text" 
          placeholder = "Enter a username . . ."
        />

        <button className = "search-button" type = "submit">SEARCH</button>

      </form>

      <h3 className = { color } >{ error }</h3>

      <User 
        picture = { users.avatar_url }
        bio = { users.bio ? users.bio : " User has no biographic ." }
        email = { ( users.mail ) ? users.email : " User has no public mail ."}
        repoes = { users.public_repos }
        location = { ( users.location ) ? users.location : " Location is unknown ." }
        link = { users.html_url }
        name = { users.name }

      />

    </div>
  );

}

export default App;
