const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());



const PORT = 3040;
app.listen(PORT , () => {
    console.log(`running server on port ${PORT}`);
});