import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "argonautes",
});

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

//Gestion des fichiers statiques
app.use(express.static("public"));

app.get("/api/argonautes", (req, res) => {
  connection.query("SELECT * FROM membres ORDER BY id", (error, result) => {
    if (error) throw error;
    res.json(result);
  });
});

app.post("/api/argonaute", (req, res) => {
  connection.query(
    "INSERT INTO membres (nom) VALUES('" + req.body.nom + "')",
    (error, result) => {
      if (error) throw error;
      res.json(result);
    }
  );
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("serveur lancé sur le port " + PORT);
});
