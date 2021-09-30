import React, {useState} from "react";
import axios from "axios";

function CreateNote(){

    const [input, setInput] = useState({
        title: "",
        content: ""
    });
    

    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput => {

            return {
                 ...prevInput,
            [name]: value
            }
           
        })
    }

    function handleClick(event){
        event.preventDefault();

        const newNote = {
            title: input.title,
            content: input.content
        }

        axios.post("http://localhost:5000/new-note", newNote );
        

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
       <button onClick ={handleClick} className="btn btn-large btn-secondary">ADD NOTE</button>
       
       </form>
        </div>
        
    )
}

export default CreateNote;