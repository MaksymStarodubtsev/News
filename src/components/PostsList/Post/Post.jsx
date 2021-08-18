import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import './Post.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getPostComents } from '../../api/api';
import { Comment } from './Comment/Comment';

export const Post = ({ post }) => {
  const [open, setOpen] = useState(false);
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
        <li className="list-group Post__collapse">
        <Button
          onClick={() => {
            getPostComents(id, setComments, COMMENTS_URL);
            setOpen(!open);
          }}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Comments
        </Button>
        <div className="Post__collapse-text">
          <Collapse in={open}>
            <div id="example-collapse-text">
              <ul className="list-group list-group-flush">
                {Array.isArray(comments)
                  ? (comments.map(comment => {
                    const { body, email } = comment;

                    return (
                      <li className="list-group-item Post__collapse-text">
                        {body}
                        <Comment email={email} />
                      </li>
                    );
                  }))
                  : 'loading'
                }
              </ul>
            </div>
          </Collapse>
        </div>
      </li>
      </ul>

    </div>
  );
}
