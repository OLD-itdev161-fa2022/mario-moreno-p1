import React, {useState} from "react";
import axios from "axios";

function CreateNote(){
    const [input, setInput] = useState({
        title: "",
        content: ""
    });

    function handleChange(e){
        const {name, value} = e.target;

        setInput(prevInput => {

            return {
                 ...prevInput,
            [name]: value
            }
           
        });
    }

    function handleClick(e){
        e.preventDefault();
       

        const newNote = {
            title: input.title,
            content: input.content
        }
        console.log(newNote);
        axios.post("http://localhost:5000/create", newNote)
        .then(res => {
            console.log(`statusCode: ${res.status}`)
            console.log(res)
        })
        .catch(error => {
            console.error(error)
        });

        alert("note added");

        setInput({
            title: "",
            content: ""

        });
    }

    return(
        <div className="container">
        <h1>Create New Note</h1>
       <form>
        <div className="mb-3">
            <input onChange = {handleChange} name="title" value ={input.title} className="form-control" autoComplete="off" placeholder="Note Title" />
        </div>
        <div className="mb-3">
            <textarea onChange = {handleChange} name="content" value ={input.content} className="form-control" autoComplete="off" placeholder="What's on your mind?">
            </textarea>
        </div>
       <button onClick ={handleClick} className="btn btn-large btn-warning">ADD NOTE</button>
       
       </form>
        </div>
        
    )
}

export default CreateNote;