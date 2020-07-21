import React, { useState } from 'react';
import JokeCard from './JokeCard';
import '../styles/_jokesList.scss';

const JokesList = ({ jokes }) => {
  const [activeJoke, setActiveJoke] = useState(jokes[0]);

  const renderedList = jokes.map((joke) => {
    return <JokeCard joke={joke} key={joke.id} activeJoke={activeJoke} setActiveJoke={setActiveJoke}/>
  });


  return (
    <div className="jokes-list jokes-container">
      {renderedList}
    </div>
  );
};

export default JokesList;
