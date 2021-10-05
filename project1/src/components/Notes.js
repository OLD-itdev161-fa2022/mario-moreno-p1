import axios from "axios";
import React, {useEffect, useState} from "react";
import "./notes.css";


function Notes(){
    const [notes, setNotes]= useState([{
        title: "",
        content: "",
        _id: ""
       
    }])
    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok){
                return res.json()
            }
        }).then((jsonRes) => setNotes(jsonRes));
    },[]);

    function deleteNote(id){
        axios.delete("/delete/" + id);
        console.log(`deleted item with id: ${id}`);
        alert("item deleted");
    }


    return(
        <div className="container">
            <h1>Notes Page</h1>

            <div className="row justify-content-around">
            {notes.map((note) => 
                    <div className="card col-4" key={note._id}>
                        <div className ="card-body">
                            <button className="btn-close" onClick ={()=> deleteNote(note._id)}></button>
                            <h5>{note.title}</h5>
                            <p>{note.content}</p>
                        </div>
                    </div>
           
            )}
            </div>
        </div>
    )
}

export default Notes;