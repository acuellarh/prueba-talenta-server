import express from "express";


const app = express();

app.use(express.json());

app.get("/ping", (_req, res) => {
  console.log("Hola Mundo otra vez")
  res.send("Hello Alejo")
})









app.listen(process.env.PORT || 3001, () => {
  console.log(`runnig in port ${process.env.PORT || 3001}`)
})