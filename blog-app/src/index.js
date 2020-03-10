const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts.js');
// const fs = require('fs');

const port = process.env.PORT || 3000;

// fs.appendFile('myDB.txt', 'Cool DB:!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

app.get("/api/v0.1/status", (req, res) => {
    res.send({
        status: "ok"
    });
});

app.put("/api/v0.1/update", (req, res) => {
    res.send({
        status: "ok"
    });
});

app.use(bodyParser.json());

app.use("/api/v0.1/posts", postRoutes);

app.listen (port, () => {
    console.log(`app is ready on port ${port}`);
});

module.exports = app;