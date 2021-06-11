import React from 'react';
import Posts from './getPosts';

export default function DisplayPosts() {
    return (
        <div className="container">   
        <div className="d-flex flex-wrap mt-3">
            <Posts/>
        </div>
   </div>
    )
}
