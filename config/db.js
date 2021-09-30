import mongoose from "mongoose";
import config from "config";

//gets the connection string from default.json
const db = config.get("mongoURI");

//connects to mongoDB notesDB
const connectDatabase = async () => {
    try{
        await mongoose.connect(db, {
            useUnifiedTopology: true
        });

        console.log("Connected to notesDB");

    }catch{
        console.log(error.message);
        process.exit(1);
    }
};

export default connectDatabase;