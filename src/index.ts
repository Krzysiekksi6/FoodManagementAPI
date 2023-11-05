import app from "./app";
import { connectDb } from "./config/connectDb";
import config from "./config";

connectDb.initialize()
  .then(async () => {
    app.listen();
    app.listen(config.port);
    console.log(`
    Express server has started on port ${config.port}. 
    Postgres connect on port ${config.pg_port}
    Open http://localhost:${config.port}/users to see results
    Open http://localhost:${config.port}/docs to see documentation swagger API
    `);
  })
  .catch((error) => console.log(error));
