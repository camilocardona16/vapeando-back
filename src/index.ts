import app from './app'
import './database'

const SocketIO = require('socket.io')

const server = app.listen(app.get("port"),()=>{
    console.log('server on in port '+process.env.PORT);
});

const io =SocketIO(server);
// module.exports = SocketIO(server);

io.on('connection',(socket:any)=>{
    console.log('usaurio conectado');
    socket.emit('hola','hola');
})

