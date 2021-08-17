import React, { useState, useEffect } from 'react';
import { getPosts, getComments } from './components/api/api';

import './App.scss';
import { CurentPosts } from './components/CurentPost/CurentPost';
import { PostsList } from './components/PostsList/PostsList';

export const App = () => {
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState('');

  const [selectedUserId, setSelectedUserId] = useState('0');

  const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
  const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
  const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

  const getPosts = async () => {
    const searchResult = await fetch(POSTS_URL)
      .then(response => response.json());

    setPosts(searchResult);
  };

  // onClick={}

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <div className="App__sidebar">
        <div className="App__cards-container">
          {
            posts
              ? <PostsList posts={posts} />
              : console.log('posts is not defined')
          }
        </div>
        {
          console.log(comments,'lol')
        }
      </div>

      <div className="App__content">
        <div className="App__content-container">
          No user selected
          <CurentPosts />
        </div>
      </div>
    </div>
  );
};
