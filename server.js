const express = require('express');
const path = require('path');
const routes = require('./routes.js');

const app = express();
const port = process.env.PORT || 3000;

// Use routes from routes.js
app.use('/', routes);

// Fallback to handle 404 and serve custom 404 page
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.shtml'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
