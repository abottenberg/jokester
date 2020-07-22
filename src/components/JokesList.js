import React, { useState } from 'react';
import JokeCard from './JokeCard';
import '../styles/_jokesList.scss';

const JokesList = ({ jokes, logoLaugh }) => {
  // FIXME - should load page with one card active/showing
  const [activeJoke, setActiveJoke] = useState(jokes[0]);

  const renderedList = jokes.map((joke) => {
    return <JokeCard joke={joke} key={joke.id} activeJoke={activeJoke} setActiveJoke={setActiveJoke} logoLaugh={logoLaugh}/>
  });

  return (
    <div className="jokes-list jokes-container">
      {renderedList}
    </div>
  );
};

export default JokesList;
