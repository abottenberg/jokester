import React, { useState } from 'react';
import LikeButton from './LikeButton';
import smile from '../images/JokesterSmile.svg';
import frown from '../images/JokesterFrown.svg';
import '../styles/_jokeCard.scss';

const JokeCard = ({ joke, activeJoke, setActiveJoke }) => {
  const [likeJoke, setLikeJoke] = useState(null);

  const onLike = (event) => {
    setLikeJoke(event.currentTarget.value);
  };

  const onCardClick = () => {
    setActiveJoke(joke);
  };

  const active = joke === activeJoke ? 'active' : '';

  return (
    <div className={`joke-card ${active}`} onClick={() => onCardClick()}>
      <div className="card-content">
        <div className="card-text">
          <div className="joke-setup">{joke.setup}</div>
          <div className="joke-punchline">{joke.punchline}</div>
        </div>
        <div className="like-buttons">
          <LikeButton value={"like"} image={smile} onLike={onLike} likeJoke={likeJoke}/>
          <LikeButton value={"dislike"} image={frown} onLike={onLike} likeJoke={likeJoke}/>
        </div>
      </div>
    </div>
  );
};

export default JokeCard;

