import Server from "./src/server/config.js";
import router from "./src/routes/index.routes.js";

// instanciamos la clase Server
const server = new Server();

// agregamos las rutas
server.app.use("/api", router);

// levantamos el servidor
server.listen();
