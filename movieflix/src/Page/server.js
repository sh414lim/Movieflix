const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send(`dalso react express test`);
})

app.listen(PORT, () => {
    console.log(`Active Server\nhttp://localhost:${PORT}/\nhttp://192.168.219.1:${PORT}/`
    );
})