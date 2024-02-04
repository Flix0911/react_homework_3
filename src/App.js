import logo from './logo.svg';
import './App.css';
import GifDisplay from './components/GifDisplay';
import Header from './components/Header'
import Button from './components/Button'
import Footer from './components/Footer'
import { useState, useEffect } from 'react';

function App() {

  //create variable for apiKey
  const apiKey = "NZC8dqk4ZPZzWBbFvx8y5Y0cKQAfbQ6R"

  //destructure - set useState as null
  const [gif, setGif] = useState(null)

  //Where do I need state? gif is needed by GifDisplay ~ setGif is needed by the Button to change the gif

  //function to get a gif from the api ~ this updates states
  //Button click will always provide random, 1 arg of random
  const getGif = async() => {
  //url to fetch form
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

  //fetch gif data
  const response = await fetch(url)
  //get the json from the response
  const data = await response.json()

  setGif(data)

  }

  return (
    <div className="App">
      <Header/>
      <Button getGif={getGif}/>
      <GifDisplay gif={gif}/>
      <Footer/>
    </div>
  );
}

export default App;
