import express from "express";
import connectDatabase from "./config/db";
import cors from "cors";

//express init
const app = express();

//connects database
connectDatabase();

app.use(express.json({extended: false}));
app.route("/", require("./routes/noteRoute"));


app.get("/", (req, res) =>{
    res.send("http get request sent to root end point");
});



const port = 5000;
app.listen(port, () => console.log(`express server running on ${port}`));