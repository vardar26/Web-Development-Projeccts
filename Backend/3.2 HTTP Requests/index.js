import express from "express";
const app = express();
const port = 3000;


app.get("/" , (req,res) => {
    res.send("<h1> Naber </h1")
})

app.get("/about" , (req,res) => {
    res.send("<h1> About </h1")
})

app.get("/contacts" , (req,res) => {
    res.send("<p> Lorem ipsum cırr <p")
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}.` );
})