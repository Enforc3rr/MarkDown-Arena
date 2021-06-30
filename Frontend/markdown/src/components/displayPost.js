import React,{useEffect,useState} from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {useParams } from "react-router-dom";
import {get,post} from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



export default function DisplayPost() {
    const [markDownCode,setMarkDownCode] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [comments,setComments] = useState([]);
    const [newComment , setNewComment] = useState("");
    const [loading, setLoading] = useState(false);
    const [like, setLike] = useState(false);

    // eslint-disable-next-line 
    const [uploadedBy,setUploadedBy] = useState("Test User");
    // eslint-disable-next-line 
    const [likes , setLikes] = useState(0);

    let {postID} = useParams();


    const addComment = async ()=>{
        const url = `http://localhost:8000/api/v1/md/comment/addcomment/${postID}`;
        const data = {
            actualComment : newComment,
            addedBy : "Test Comment User"
        }
        const config = {
            headers: {
                "content-type":"application/json"
            }
        }
        await post(url,data,config)
        .then(res =>{
            console.log(res);
        })
        .catch(error=>{
            console.log(error.response.data);
        });
        setComments(comment=>[...comments,{actualComment:newComment , addedBy:"User logged in"}])
    }

    useEffect( () => {
        get(`http://localhost:8000/api/v1/md/find/${postID}`)
        .then(res => {
            console.log(res.data);
            setMarkDownCode(res.data.markDownCode);
            setTitle(res.data.title);
            setDescription(res.data.description);
            setComments(res.data.comment);
        });
    },[postID,comments]);

    const getComments = ()=>{
        console.log(comments);
        setLoading(true);
    }
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
            <div className="container-md border p-3 my-3"> <ReactMarkdown remarkPlugins={[gfm]} children={markDownCode}/></div>
            <div className="container-sm border p-1 my-1 text-center" ><button type="button" className="btn btn-outline-dark" >Like</button></div>
            <div className="container border"> 
                <div className="input-group mb-3 mt-3">
                    <input type="text" className="form-control" placeholder="Write A Comment" onChange={e=>setNewComment(e.target.value)} value={newComment} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={addComment}>Add</button>
                    </div>
                </div>
                <div className="container border mb-3 mt-3 text-center">
                    <button className="btn btn-outline-secondary mt-3" type="button" onClick={getComments}>Load Comments</button>
                        <div className="container border mb-3 mt-3">
                            {loading ? comments.map(comment => {
                                return <div className="container border p-3">
                                    <blockquote class="blockquote text-left">
                                            <p class="mb-0">{comment.actualComment}</p>
                                            <footer class="blockquote-footer text-right">{comment.addedBy}</footer>
                                        </blockquote>
                                </div>
                            }): (
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                </div>
                            </div>
                            )}
                        </div>
                </div>
            </div>
        </div>
    )
}
//<button className="btn btn-outline-secondary" type="button" onClick={getComments}>Load Comments</button>
