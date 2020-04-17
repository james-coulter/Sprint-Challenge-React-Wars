import React, {useEffect, useState} from 'react';
import { Alert, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './App.css';
import Character from './Character.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  //SELF NOTES: NO API_KEY TO INITIALIZE

  // const api_request = 'https://swapi.py4e.com/api/people/'
  
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  //Fetch API 
  const getAPI = async () => {
   const response = await fetch (`https://swapi.py4e.com/api/people/?search=${query}`)
   const data = await response.json()
   setCharacters(data.results)
  //  console.log(data.results)
 }

  useEffect(() => {
    // console.log('Effect is working!!')
    getAPI()
  }, [query])


  //Search Query
  const updateSearch = e => {
    setSearch(e.target.value)
    // console.log(search)
  }

  
  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <Alert color="primary">Feel free to search for your favorite characters using SWAPI!</Alert>
      <h1 className="Header">Star Wars Characters</h1>
      <Form onSubmit={getSearch} className="search-form">
        <FormGroup className="formGroup">
        <Input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <Button className="search-button" type="submit">Search</Button>
        </FormGroup>
      </Form>
    {characters.map(character => (
      <Character key={character.name} name={character.name} height={character.height} 
      birthYear={character.birth_year} mass={character.mass} hairColor={character.hair_color} 
      eyeColor={character.eye_color}/>
    ))}
    </div>
  );
}

export default App;
