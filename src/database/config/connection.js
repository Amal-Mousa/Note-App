require('dotenv').config();
const { Pool } = require('pg');

const { NODE_ENV, DB_URL, DEV_DB_URL } = process.env;

let dbUrl;
if (NODE_ENV === 'production') {
  dbUrl = DB_URL;
} else if (NODE_ENV === 'development') {
  dbUrl = DEV_DB_URL;
}
const options = {
  connectionString: dbUrl,
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

const connection = new Pool(options);

module.exports = { connection };
