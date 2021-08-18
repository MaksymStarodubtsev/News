import React, { useState } from 'react';
import './CurentPost.scss';

export const CurentPosts = () => {

  const [selectedPost, setSelectedPost] = useState('');

  return (
    <div
      className="card PostList__card-container"
      style={{ width: '18rem' }}
    >
      <div className="card-body PostList__card-body">
        <h5 className="card-title PostList__card-title">title</h5>
        <p className="card-text">
          body
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">userId </li>
        <li className="list-group-item">id </li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <button
          type="submit"
        >
          loading
        </button>
      </div>
    </div>
  );
};
