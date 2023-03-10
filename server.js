const express = require('express');
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:{3007}}"
};

app.use(cors(corsOptions));
require("./api/routes/location.route")(app);
const db = require("./api/models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(express.json());

let port = 3007

app.get("/", (req, res) => {
    res.json({ message: "Welcome to read application." });
  });

app.listen(port, () => {
    console.log(`server started at ${port}`);
})