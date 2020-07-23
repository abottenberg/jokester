import React, { useState } from 'react';
import JokeCard from './JokeCard';
import '../styles/_jokesList.scss';

const JokesList = ({ jokes, logoLaugh, logoSigh }) => {
  // FIXME - should load page with one card active/showing
  const [activeJoke, setActiveJoke] = useState(jokes[3]);

  const renderedList = jokes.map((joke) => {
    const renderLikes = joke.like ? joke.like : null

    return (
      <JokeCard
        joke={joke}
        key={joke.id}
        activeJoke={activeJoke}
        setActiveJoke={setActiveJoke}
        logoLaugh={logoLaugh}
        logoSigh={logoSigh}
        renderLikes={renderLikes}
      />
    )
  });

  return (
    <div className="jokes-list jokes-container">
      {renderedList}
    </div>
  );
};

export default JokesList;
