import React, { useState } from 'react';
// import axios from 'axios';             // *** Uncomment to use local db.json ***
import LikeButton from './LikeButton';
import smile from '../images/JokesterSmile.svg';
import frown from '../images/JokesterFrown.svg';
import '../styles/_jokeCard.scss';

const JokeCard = ({ joke, activeJoke, setActiveJoke, logoLaugh, logoSigh, renderLikes }) => {
  const [jokeLiked, setJokeLiked] = useState(renderLikes);

  const onLike = (event) => {
    setJokeLiked(event.currentTarget.value);

    // *** Uncomment to use local db.json ***

    // const url = `http://localhost:3001/jokes/${joke.id}`
    // axios.patch(url, {
    //   id: joke.id,
    //   like: event.currentTarget.value
    // })

    if (event.currentTarget.value === "like") {
      const laughAudio = new Audio("/Laugh.mp3")
      logoLaugh();
      laughAudio.play()
    };
    if (event.currentTarget.value === "dislike") {
      const sighAudio = new Audio("/Sigh.mp3")
      logoSigh();
      sighAudio.play()
    }
  };

  // Sets className for active card
  const activeCard = joke === activeJoke ? "active" : "";

  // Render logo on card reverse
  const renderCardReverse = (like) => {
    if (like === "like") {
      return (
        <div className="card-reverse-liked">
          <img
            className="hidden-smile-show"
            alt="Jokester logo"
            src={smile}
          />
        </div>
      );
    } if (like === "dislike") {
      return (
        <div className="card-reverse-liked">
          <img
            className="hidden-frown-show"
            alt="Jokester logo"
            src={frown}
          />
        </div>
      );
    }
  }

  return (
    <div
      className={`joke-card ${activeCard}`}
      onClick={() => setActiveJoke(joke)}
    >
      {renderCardReverse(jokeLiked)}
      <div className="card-content">
        <div className="card-text">
          <div className="joke-setup">{joke.setup}</div>
          <div className="joke-punchline">{joke.punchline}</div>
        </div>
        <div className="like-buttons">
          <LikeButton
            value={"like"}
            image={smile}
            onLike={onLike}
            jokeLiked={jokeLiked}
            joke={joke}
          />
          <LikeButton
            value={"dislike"}
            image={frown}
            onLike={onLike}
            jokeLiked={jokeLiked}
            joke={joke}
          />
        </div>
      </div>
    </div>
  );
};

export default JokeCard;

