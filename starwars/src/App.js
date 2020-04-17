import React, {useEffect, useState} from 'react';
import './App.css';
import Character from './Character.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  //SELF NOTES: NO API_KEY TO INITIALIZE

  // const api_request = 'https://swapi.py4e.com/api/people/'
  
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

 const getAPI = async () => {
   const response = await fetch ('https://swapi.py4e.com/api/people/')
   const data = await response.json()
   setCharacters(data.results)
   console.log(data.results)

 }

  useEffect(() => {
    // console.log('Effect is working!!')
    getAPI()
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    {characters.map(character => (
      <Character />
    ))}
    </div>
  );
}

export default App;
