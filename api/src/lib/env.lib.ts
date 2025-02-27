import dotenv from 'dotenv';

dotenv.config();

export const PORTENV= process.env.PORT
export const DB_URL= process.env.DATABASE_URL!