import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import routes from "./routes/userRoute";
import cors from "cors";

const app = express();
const PORT = 8080;

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/E-commerceDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) =>{
    console.log(err)
});

// Bodyparser Setup
app.use(bodyparser.urlencoded({ extended:true}));
app.use(bodyparser.json());

// Cors Setup
app.use(cors());

routes(app);

app.get("/", (req,res) => 
res.send(`Server is Responding ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your TODO app Server is Running on PORT: ${PORT}`)
})
