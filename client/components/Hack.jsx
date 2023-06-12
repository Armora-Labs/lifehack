import React, { useState } from 'react';

const Hack = () => {
  const { contents, user, likes, dislikes } = useState({ hackItems });

  return (
    <div className="aHack">
      <p>{contents}</p>
      <span>{user}</span>
      <button id="like" class="voteBtn">
        Like
      </button>
      <span>{likes}</span>
      <button id="dislike" class="voteBtn">
        <span>{dislikes}</span>
        Dislike
      </button>
    </div>
  );
};

export default Hack;
