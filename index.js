//import de dependecias y archivos
const express = require('express');
const { connectDB } = require('./src/utils/database');
const routerDesencanto= require(`./src/api/routes/desencanto.routes`);
const routerUser = require('./src/api/routes/user.routes');
const env = require (`dotenv`)
env.config()


// configuración del servidor
const server = express();
server.use(express.json());
connectDB();

//configurar el servidor con las rutas
server.use (`/`, routerDesencanto);
server.use('/user', routerUser);

//ejecucion del servidor
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Escuchando puerto http://localhost:${PORT}`);
});
