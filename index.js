const express = require('express')
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => res.json({
    message: 'Welcome'
}))
app.listen(PORT, () => console.log(`App listening to http://localhost:${PORT}`))