import dotenv from 'dotenv';

dotenv.config();

export const config = {
    JWT_SECRET: process.env.MASTER_USER || "I bet you'll never find this out",
    MASTER_USER: process.env.MASTER_USER || 'admin',
    MASTER_PASSWORD: process.env.MASTER_PASSWORD || '1234'
};
