import express from "express";
import connectDatabase from "./config/db";
import cors from "cors";

//express init
const app = express();
app.use(cors());

//connects database
connectDatabase();

//middleware
app.use(express.json({extended: false}));
app.use("/", require("./routes/noteRoute"));

app.get("/", (req, res) =>{
    res.send("http get request sent to root end point from port 5000");
});

const port = 5000;
app.listen(port, () => console.log(`express server running on ${port}`));