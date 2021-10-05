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

router.route("/delete/:id").delete((req, res) => {
    const id = req.params.id;
    Note.findByIdAndDelete(id)
    .then( data => {
        if(!data){
            res.status(404).send(`Id Not Found ${id}`);

        }else{
            res.send({message: "User deleted successfully"});
        }
    });

});


module.exports = router;