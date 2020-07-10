import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "hello word 2" });
});

app.listen(3333, () => {
  console.log("Server on on Port 3333");
});
