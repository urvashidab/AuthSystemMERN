import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDb from "./config/db.js";

const app = express();

// db connection
connectDb();

//middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//landing page
app.use("/", (req, res) => {
  res.status(200).send("Backend is working fine");
});

const port = process.env.PORT || 8081;
//inititalize server
app.listen(port, () => {
  console.log(`Server is running on http://localhost/:${port}`);
});
