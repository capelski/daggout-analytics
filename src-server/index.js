const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const path = require('path');
const config = require('./config');

// TODO Migrate to Typescript
// TODO Connect to database

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.post('/api/auth', express.json(), (req, res, next) => {
    const body = req.body;

    if (!body.username) {
        return res.status(400).json({ message: 'Missing username' });
    } else if (!body.password) {
        return res.status(400).json({ message: 'Missing password' });
    } else if (body.username !== config.MASTER_USER || body.password !== config.MASTER_PASSWORD) {
        return res.status(400).json({ message: 'Bad username or password' });
    } else {
        return res.json({
            token: jsonwebtoken.sign({ username: body.username }, config.JWT_SECRET, {
                expiresIn: '3h'
            })
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server up & running at port ${PORT}`);
});
