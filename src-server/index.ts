import express from 'express';
import path from 'path';
import { authHandler, authMiddleware, refreshTokenHandler } from './controllers/auth';
import { marketShareHandler } from './controllers/receipts';

// TODO Create a database readonly user

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '..', 'docs')));

app.post('/api/auth', express.json(), authHandler);

app.post('/api/refresh-token', authMiddleware, refreshTokenHandler);

app.get('/api/market-share', authMiddleware, marketShareHandler);

app.use((req, res, next) => {
    // Redirect any non-existing route to index.html
    res.sendFile(path.resolve(__dirname, '..', 'docs', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server up & running at port ${PORT}`);
});
