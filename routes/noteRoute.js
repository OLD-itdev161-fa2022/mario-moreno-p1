import express from "express";


const Note = require("../models/noteModel");
const router = express.Router();

router.route("/new-note").post((req, res) => {

    const title = req.body.title;
    const content = req.body.content;

    const newNote = new Note({
        title,
        content
    });

    newNote.save();

});


export default router;
