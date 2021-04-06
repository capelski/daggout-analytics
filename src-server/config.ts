import dotenv from 'dotenv';

dotenv.config();

export const config = {
    DB_DATABASE: process.env.DB_DATABASE,
    DB_HOST: process.env.DB_HOST,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: 3306,
    DB_SOCKET_PATH: process.env.DB_SOCKET_PATH,
    DB_USER: process.env.DB_USER,
    JWT_SECRET: process.env.MASTER_USER || "I bet you'll never find this out",
    MASTER_USER: process.env.MASTER_USER || 'admin',
    MASTER_PASSWORD: process.env.MASTER_PASSWORD || '1234'
};
