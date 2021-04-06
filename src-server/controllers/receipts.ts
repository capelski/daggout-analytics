import express from 'express';
import { getDbConnection } from '../utils';

export const marketShareHandler: express.Handler = (req, res, next) => {
    try {
        const connection = getDbConnection();

        return new Promise<any>((resolve, reject) => {
            connection.query(
                `
SELECT brand, COUNT(*) as purchases, ROUND(SUM(amount), 2) as total
FROM receipt
GROUP BY brand;`,
                (error, results, fields) => {
                    try {
                        connection.end();
                    } catch {
                        // If socket has been closed by the other side, trying to end the connection
                        // will raise an exception; empty catch due to connection is already closed
                    }

                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                }
            );
        })
            .then((receipts) => res.json(receipts))
            .catch((error) => {
                console.error(error);
                return res.status(500).json({ message: 'Something went wrong' });
            });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
