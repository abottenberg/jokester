import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JokesList from './components/JokesList';
import Logo from './components/Logo';
import './styles/_app.scss';

const App = () => {
  const [jokes, setJokes] = useState([]);

  // spring react state for laugh animation
  const [logoWobble, setLogoWobble] = useState(true);
  const [index, setIndex] = useState(0)

  ///////////////////////////////

  // *** Uncomment to use local db.file ***
  // *** Also uncomment as instructed on components/JokeCard.js ***

  // useEffect(() => {
  //  const getData = async () => {
  //    const results = await axios.get("http://localhost:3001/jokes");
  //    setJokes(results.data);
  //  };
  //  getData();
  // }, []);

  ///////////////////////////////

  // Use jokes api

  useEffect(() => {
    const getJokes = async () => {
      const results = await axios.get(
        'https://official-joke-api.appspot.com/random_ten'
      );
      setJokes(results.data);
    };
    getJokes();
  }, []);

  ///////////////////////////////

  // react-spring functions for laugh animation
  const logoLaugh = () => {
    setLogoWobble(!logoWobble)
    setIndex(0)
  };

  const logoSigh =() => {
    setLogoWobble(!logoWobble)
    setIndex(1)
  }


  return (
    <div >
      <Logo logoLaugh={logoLaugh} logoWobble={logoWobble} logoSigh={logoSigh} index={index} />
      <JokesList jokes={jokes} logoLaugh={logoLaugh} logoSigh={logoSigh} />
    </div>
  );

};

export default App;
