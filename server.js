const express = require("express");
const app = express();

// Accept raw binary audio bytes from Omi
app.use(express.raw({ type: "application/octet-stream", limit: "10mb" }));

app.post("/audio", (req, res) => {
  const audioBytes = req.body;
  console.log("Received audio bytes:", audioBytes.length);
  res.status(200).send("ok");
});

app.get("/", (req, res) => {
  res.send("VocalQ webhook is running");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
