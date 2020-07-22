import React, { useState } from 'react';
import LikeButton from './LikeButton';
import smile from '../images/JokesterSmile.svg';
import frown from '../images/JokesterFrown.svg';
import '../styles/_jokeCard.scss';

const JokeCard = ({ joke, activeJoke, setActiveJoke, logoLaugh }) => {
  const [likeJoke, setLikeJoke] = useState(null);
  const laughAudio = new Audio("/Laugh.mp3")
  const sighAudio = new Audio("/Sigh.mp3")

  const onLike = (event) => {
    setLikeJoke(event.currentTarget.value);
    if (event.currentTarget.value === 'like') {
      logoLaugh();
      laughAudio.play()
    };
    if (event.currentTarget.value === 'dislike') {
      sighAudio.play()
    }
  };

  // Sets className for active card
  const activeCard = joke === activeJoke ? 'active' : '';

  // Sets className for smile/frown for liked/disliked cards
  const showLike = likeJoke === 'like' ? 'show' : '';
  const showFrown = likeJoke === 'dislike' ? 'show' : '';

  return (
    <div className={`joke-card ${activeCard}`} onClick={() => setActiveJoke(joke)}>
      {/* Smile or frown on reverse of card */}
      <div className="card-reverse-liked">
        <img className={`hidden-smile-${showLike}`} alt="Jokester logo" src={smile} />
        <img className={`hidden-frown-${showFrown}`} alt="Jokester logo" src={frown} />
      </div>
      {/* Card face */}
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

