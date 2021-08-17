import React, { useState } from 'react';

import { getPostComents } from '../../api/api';

export const Post = ({ post }) => {

  const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
  const [comments, setComments] = useState(null);

  const { userId, id, title, body } = post;

  return (
    <div
      className="card PostList__card-container"
      style={{ width: '18rem' }}
    >
      <div className="card-body PostList__card-body">
        <h5 className="card-title PostList__card-title">{title}</h5>
        <p className="card-text">
          {body}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">userId - {userId}</li>
        <li className="list-group-item">id - {id}</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <button
          type="button"
          onClick={() => {
            getPostComents(id, setComments, COMMENTS_URL);
          }}
        >
          {
            console.log(comments)
          }
          lol
        </button>
      </div>
    </div>
  );
}
