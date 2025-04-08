// server/index.js
//node.js code

const express = require("express");
const cors = require('cors');
const logger = require('mainLogger')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "Secure hello from server! (api)" });
    logger.info('api is called');
  });

app.get('/message', (req, res) => {
    res.json({ message: "Secure message from server! (message)" });
    logger.info('message is called');
});

app.listen(PORT, () => {
  logger.info(`Server listening on ${PORT}`);
});

