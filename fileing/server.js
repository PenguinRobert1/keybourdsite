// OPTIONAL: Node.js/Express server to serve static files
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});