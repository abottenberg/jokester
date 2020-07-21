import React, { useState } from 'react';
import LikeButton from './LikeButton';
import smile from '../images/JokesterSmile.svg';
import frown from '../images/JokesterFrown.svg';
import '../styles/_jokeCard.scss';

const JokeCard = ({ joke, activeJoke, setActiveJoke }) => {
  const [likeJoke, setLikeJoke] = useState(null);
  const [activeButton, setActiveButton] = useState(false);

  const onLike = (event) => {
    setLikeJoke(event.currentTarget.value);
    setActiveButton(true);
  };

  const onCardClick = () => {
    setActiveJoke(joke);
  };

  const activeCard = joke === activeJoke ? 'active' : '';
  const showLike = likeJoke === 'like' ? 'show' : '';
  const showFrown = likeJoke === 'dislike' ? 'show' : '';

  return (
    <div className={`joke-card ${activeCard}`} onClick={() => onCardClick()}>
      <div className="card-reverse-liked">
        <img className={`hidden-smile-${showLike}`} alt="Jokester logo" src={smile} />
        <img className={`hidden-frown-${showFrown}`} alt="Jokester logo" src={frown} />
      </div>
      <div className="card-content">
        <div className="card-text">
          <div className="joke-setup">{joke.setup}</div>
          <div className="joke-punchline">{joke.punchline}</div>
        </div>
        <div className="like-buttons">
          <LikeButton value={"like"} image={smile} onLike={onLike} likeJoke={likeJoke} activeButton={activeButton}/>
          <LikeButton value={"dislike"} image={frown} onLike={onLike} likeJoke={likeJoke} activeButton={activeButton}/>
        </div>
      </div>
    </div>
  );
};

export default JokeCard;

