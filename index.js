const express = require('express')
const session = require('express-session');
const app = express();
const PORT = 5000;
const userRoutes = require('./routes/userRoutes')


app.use(session({
    name: 'dbdb',
    secret: 'try not to get caught or Ill come for you',
    cookie:{
        maxAge: 2 * 60 * 1000,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false
}))
app.use(express.json());
app.use('/auth', userRoutes)

app.get('/', (req, res) => res.json({
    message: 'Welcome'
}))
app.listen(PORT, () => console.log(`App listening to http://localhost:${PORT}`))