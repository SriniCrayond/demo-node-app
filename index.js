const express = require('express');
const app = express();
const port = 3000; // Choose any port number you like

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
