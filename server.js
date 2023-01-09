const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

let port = 3007

app.listen(port, () => {
    console.log(`server started at ${port}`);
})