import React,{useEffect,useState} from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {get} from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



export default function DisplayPost() {
    const [markDownCode,setMarkDownCode] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [uploadedBy,setUploadedBy] = useState("Test User");
    const [likes , setLikes] = useState(0);


    useEffect( () => {
        get(`http://localhost:8000/api/v1/md/find/60c276b6c4812538f49b96f7`)
        .then(res => {
            setMarkDownCode(res.data.markDownCode);
            setTitle(res.data.title);
            setDescription(res.data.description);
        });
    });

    return (
        <div className="container border p-3 my-3">
            <div className="container-sm border text-center"><h1 className="display-1">{title}</h1></div>
            <div className="container-sm border p-3 my-3" ><p className="p-3 lead">{description}</p></div>
            <div className="text-muted container border p-2 my-2">
            <div className="row mx-md-n5">
                <div className="col px-md-5"><div className="p-3 border bg-light lead text-center">Likes : {likes}</div></div>
                <div className="col px-md-5 text-center"><div className="p-3 border bg-light lead">Created By : {uploadedBy}</div></div>
            </div>
            </div>
            <div className="container-md border p-3 my-3"> <ReactMarkdown remarkPlugins={[gfm]} children={markDownCode} /></div>
            <div className="container-sm border p-1 my-1 text-center" ><button type="button" className="btn btn-outline-dark" >Like</button></div>
            <div className="container border"> Comments go Here</div>
        </div>
    )
}
