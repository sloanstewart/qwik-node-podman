const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(JSON.stringify('howdy'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});

