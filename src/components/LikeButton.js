import React from 'react';
import '../styles/_likeButton.scss';

const LikeButton = props => {
  return (
    <button
      className={`like-button ${props.jokeLiked}${props.value}`}
      onClick={props.onLike}
      value={props.value}
    >
      <img alt={props.value} src={props.image} />
    </button>
  )
};

export default LikeButton;
