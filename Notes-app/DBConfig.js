import pkg from "pg";
const { Pool } = pkg;
const itemsPool = new Pool({
    connectionString: process.env.DBConnLink,
    ssl: process.env.DBConnLink ? {
        rejectUnauthorized: false
    } : false
});

export default itemsPool;