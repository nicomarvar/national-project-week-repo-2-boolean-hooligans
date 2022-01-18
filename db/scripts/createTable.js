import query from "../index.js";

const sqlQuery = `CREATE TABLE IF NOT EXISTS test (
    testID SERIAL PRIMARY KEY,
    test TEXT
);`

async function createTable(){
    const res = await query(sqlQuery)
    console.log("Table Created", res);
}

createTable();