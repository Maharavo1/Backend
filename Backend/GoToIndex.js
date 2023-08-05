import express from "express";
import cors from "cors";
import { router } from "./routers/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


app.get("/", (req, res) => {
  res.send("go  to index.html");
});


app.listen(8000, () => {
  console.log("Serveur démarré (http://localhost:8000) !");
});
