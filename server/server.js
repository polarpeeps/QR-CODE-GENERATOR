import express from "express";
import path from 'path'
import cors from 'cors'
const __dirname=path.resolve()
// import axios from "axios";

const app = express();
const PORT = 4002;
// const API_URL = "http://localhost:3000";

app.use(express.static("public"));
app.get("/", async (req, res) => {
  try {
  //   const response = await axios.get(`${API_URL}/posts`);
  //   console.log(response);
    res.sendFile(__dirname+"/public/index.html");
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts",data:error.message });
  }
});
app.listen(PORT,()=>{
  console.log(`Server is running at port:${PORT}`)
})