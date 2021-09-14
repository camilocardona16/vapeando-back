// propiedades configuracion de aplicacion

// leer el archivo .env
import dotenv from 'dotenv';
dotenv.config();

export default {
    MONGO_DATABASE:process.env.MONGO_DATABASE,
    MONGO_HOST:process.env.MONGO_HOST,
    MONGO_USER:process.env.MONGO_USER,
    MONGO_PASSWORD:process.env.MONGO_PASSWORD,
    PORT:process.env.PORT,
}