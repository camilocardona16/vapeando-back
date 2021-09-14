import express from 'express';
import config from './config';
import productosRoutes from './routes/productos.routes';
import morgan from 'morgan';
import cors from 'cors';


const app=express();

app.set('port',config.PORT);


app.use(morgan('dev')); //mostrar por consola las rutas consultadas por el cliente

app.use(cors());// especificar los servidores permitidos para hacer peticiones.

app.use(express.json()) //entener los objetos json el las peticiones

app.use(express.urlencoded({extended:true})); // entender los campos enviados desde un formulario.

app.use(productosRoutes);

export default app;