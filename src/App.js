import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JokesList from './components/JokesList';
import './styles/_app.scss';
import logo from './images/JokesterSmile.svg';


const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getJokes = async () => {
      const results = await axios.get('https://official-joke-api.appspot.com/random_ten');
      setJokes(results.data);
    };
    getJokes();
  }, []);


  return (
    <div >
      <div className="logo">
        <img alt="Jokester logo" src={logo} style={{width: "172px"}}/>
      </div>
      <JokesList jokes={jokes} />
    </div>
  );

};

export default App;
