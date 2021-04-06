import express from 'express';
import path from 'path';
import { authHandler, authMiddleware, refreshTokenHandler } from './controllers/auth';

// TODO Connect to database

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.post('/api/auth', express.json(), authHandler);

app.post('/api/refresh-token', authMiddleware, refreshTokenHandler);

app.use((req, res, next) => {
    // Redirect any non-existing route to index.html
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server up & running at port ${PORT}`);
});
