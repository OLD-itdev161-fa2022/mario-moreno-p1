import React from "react";
import "./home.css";

function Home(){
    return(
        <div className="container">
            <h1 className="title">My Personal Notes</h1>
            <h3>ITDEV-161 Mario Moreno- Project 1</h3>
            <h5>Project Description</h5>
            <p>My project creates notes/reminders that are saved to a data base.
            The notes will be displayed in a separate page. The user will have the ability to delete exiting notes, and create new ones.</p>
            <h5>Feature Technologies</h5>
            <ul class="list-group">
                <li class="list-group-item">NodeJS Express Server</li>
                <li class="list-group-item">MongoDB Atlas</li>
                <li class="list-group-item">Express Router to create routes to endpoints</li>
                <li class="list-group-item">React</li>
                <li class="list-group-item">Bootstrap for CSS</li>
            </ul>
        </div>
        
    )
}

export default Home;