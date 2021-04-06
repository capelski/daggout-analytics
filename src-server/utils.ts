import mysql2 from 'mysql2';
import { config } from './config';

export const getDbConnection = () =>
    mysql2.createConnection({
        host: config.DB_SOCKET_PATH ? undefined : config.DB_HOST,
        port: config.DB_SOCKET_PATH ? undefined : 3306,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DB_DATABASE,
        socketPath: config.DB_SOCKET_PATH
    });
