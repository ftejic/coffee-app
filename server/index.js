const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/getImage", async (req, res) => {
  try {
    const response = await axios.get(
      "https://coffee.alexflipnote.dev/random.json"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
