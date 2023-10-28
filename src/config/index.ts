require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    pg_port: process.env.PG_PORT || 5432

};
export default config;