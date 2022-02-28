import pg from "pg";
import { dbcredentials } from "../config.js";

const connectionString = dbcredentials.url

const pool = new pg.Pool({
    connectionTimeoutMillis: 15000,
    user: dbcredentials.user,
    host: dbcredentials.host,
    database: dbcredentials.database,
    password: dbcredentials.passwrod,
    port: dbcredentials.port,
    connectionString,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
