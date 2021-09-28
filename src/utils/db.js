import pg from 'pg'
import dotenv from "dotenv"

dotenv.config()

const {DataBase_url: connectionString } = process.env;

const { Pool } =pg
//const connectionString = 'postgres://postgres:Krishna@1803@localhost:5432/postgres'
const pool = new Pool({
  connectionString,
})

async function test() {
    const res = await pool.query('select NOW()')
    console.log(res)
}

test()