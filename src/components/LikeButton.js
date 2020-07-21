import React from 'react';
import '../styles/_likeButton.scss';

const LikeButton = props => {
  console.log(props.likeJoke)
  return (
    <button className={`like-button ${props.likeJoke}`} onClick={props.onLike} value={props.value}>
      <img alt={props.value} src={props.image} />
    </button>
  )
};

export default LikeButton;
