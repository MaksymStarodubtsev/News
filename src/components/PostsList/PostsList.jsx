import React, { useState } from 'react';
import './PostList.scss';
import { Post } from './Post/Post';

export const PostsList = ({ posts }) => (
  <>
    {
      posts.map(post => <Post post={post} />)
    }
    )
  </>
);
