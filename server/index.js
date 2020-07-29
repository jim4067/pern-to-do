const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());


const PORT = 3040;
app.listen(PORT , () => {
    console.log(`running server on port ${PORT}`);
});