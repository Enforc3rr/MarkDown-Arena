import React,{useEffect,useState} from 'react';
import {get} from 'axios';

export default function GetPosts() {
    let [posts,setPosts] = useState([]);

    useEffect(() => {
        get("http://localhost:8000/api/v1/md/findall")
        .then(res => setPosts(res.data));
    }, [])

    return (
            
            posts.map(post =>(
            <div key={post._id} className="card-body card shadow p-3 mb-3 mr-3 ml-3 bg-white rounded" style={{width: "18rem"}}>
            <h5 className="card-title text-center" style={{textDecoration: "underline" , textDecorationColor:"#128C7E"}}>{post.title}</h5>
            <p className="card-text text-center">{post.description}</p>
            <p className="card-text text-center">{post.topic}</p>
            <div className="card-foote text-center">
            <a href={`http://localhost:8000/api/v1/md/find/${post._id}`} target={"_blank"}  rel = "noopener noreferrer"
            className="card-link">Click Here To View Post</a>
            </div>
            </div>
            ))
    )
}
