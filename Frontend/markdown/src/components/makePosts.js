import React , {useState} from 'react';
import MDEditor from '@uiw/react-md-editor';
import "bootstrap/dist/css/bootstrap.min.css";
import {post} from "axios";
import Swal from 'sweetalert2'


export default function MakeMarkDown() {
    const [title,setTitle] =useState("");
    const [description,setDescription]=useState("");
    const [topic,setTopic] = useState("");
    const [text,setText] = useState("");

    const markdowndetails = {};
    const onCreate = () => {
        console.log(title);
        console.log(description);
        console.log(topic);
        console.log(text);

        markdowndetails.title = title;
        markdowndetails.description = description;
        markdowndetails.topic = topic;

        const formData = new FormData();
        formData.append("markDownCode",text);
        formData.append("markdowndetails",JSON.stringify(markdowndetails));
        const config = {
            headers: {
              'content-type': 'multipart/form-data'
            }
        }
        const url = "http://localhost:8000/api/v1/md/save";

        post(url, formData, config)
        .then((response) => {
            console.log(response);
            Swal.fire(response.data.message);
        });

    }
    return (
        <div className="container border">
              <div className="form-group row">
                  <label className="col-sm-2 col-form-label col-form-label-lg">Title</label>
                  <div className="col-sm-10">
                      <input type="text" className="form-control form-control-lg" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label col-form-label-lg">Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control"  style={{resize: "none"}} rows="4" placeholder="Enter Description" 
                        value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label col-form-label-lg">Topic</label>
                    <div className="col-sm-10">
                        <select className="form-select form-select-lg mb-3" value={topic} aria-label=".form-select-lg example" onChange={e => setTopic(e.target.value)}>
                        <option>Select a Topic</option>
                        <option value="generalTech">General Tech</option>
                        <option value="backend">Backend Development</option>
                        <option value="frontend">Frontend Development</option>
                        <option value="software">Software Development</option>
                        <option value="testing">Testing</option>                        
                        </select>
                    </div>
                </div>
            <div className="container border text-center mt-5">
                <label><h4 className="mt-2">Editor</h4></label> 
                <MDEditor value={text} onChange={setText} commands={[]} />
                <button type="button" onClick={onCreate} className="btn btn-outline-success mt-3">Create</button>
            </div>
        </div>
    );
}
