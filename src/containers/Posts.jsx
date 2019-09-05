import React from 'react';
import PostProperties from './PostProperties';
import Paper from '@material-ui/core/Paper';
import { store } from '../store';



function Posts() {
    return (
        <div>

            {store.map((post, index) =><Paper>
            <PostProperties title={post.title}
            comment={post.comment}
            url={post.url}
            key={index} /></Paper>
          )}
        </div>
    );
}

export default Posts;
