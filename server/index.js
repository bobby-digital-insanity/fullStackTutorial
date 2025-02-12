// server/index.js
//node.js code

const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "Secure hello from server! (api)" });
  });

app.get('/message', (req, res) => {
    res.json({ message: "Secure message from server! (message)" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

