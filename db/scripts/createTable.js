import query from "../index.js";

const sqlQuery = `CREATE TABLE IF NOT EXISTS topics (
    TopicID SERIAL PRIMARY KEY,
    Topicname TEXT,
    Resources TEXT
);`

async function createTable(){
    const res = await query(sqlQuery)
    console.log("Table Created", res);
}

createTable();