
import express from "express";
import dotenv from "dotenv";

import { connectDb } from "./src/database/db.js";
import { StatusCodes } from "http-status-codes";
import router from "./src/routes/index.js";

dotenv.config()

const app = express();
const port = process.env.PORT

app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb',exetended: true}));

app.use("/api/v1",router)


app.get("/user", (req, res) => {
  return res.status(200).json({
    message: "morning guys"
  });
});

app.listen(port,"0.0.0.0", () => {
  console.log(`Server is running on port${port}`);
});
  connectDb()


app.use("/api/v1",router)


app.use((req,res)=>{
res.status(StatusCodes.BAD_GATEWAY).json({
success:false,
message:"router not found"
})


})




