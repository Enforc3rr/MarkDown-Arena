import React,{useEffect,useState} from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {get} from 'axios';


export default function DisplayPost() {
    const [markDownCode,setMarkDownCode] = useState("");

    useEffect( () => {
        get(`http://localhost:8000/api/v1/md/find/60c276b6c4812538f49b96f7`)
        .then(res => setMarkDownCode(res.data.markDownCode));
    })

    return (
        <div>
            <ReactMarkdown remarkPlugins={[gfm]} children={markDownCode} />
        </div>
    )
}
