import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserInforRoute from "./src/routes/UserInfoRoute"
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }); // change 

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.get("/", (req: any, res: { json: (arg0: { message: string }) => void }) => {
  res.json({ message: "ok" });
});

app.use('/api/', UserInforRoute);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  return;
});

console.log(process.env.DB_URI);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
    
    console.log("Error connecting to database");
  });

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
