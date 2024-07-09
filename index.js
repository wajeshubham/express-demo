import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const app = express();

app.get("/api", (req, res) => {
  return res.json({
    message: "Hello World!",
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
});
