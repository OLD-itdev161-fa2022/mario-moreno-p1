import express from "express";
const router = express.Router();
const Note = require("../models/noteModel");


//post route
router.route("/create").post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;

    const newNote = new Note({
        title,
        content
    });

    newNote.save();

});

//get route
router.route("/notes").get((req, res) => {
    Note.find().then(foundNotes => res.json(foundNotes));
    
});


module.exports = router;