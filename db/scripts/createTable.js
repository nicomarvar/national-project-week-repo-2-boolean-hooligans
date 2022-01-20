import query from "../index.js";

const sqlQuery = `CREATE TABLE IF NOT EXISTS subjects (
    SubjectID SERIAL PRIMARY KEY,
    Subjectname TEXT,
    Links TEXT[]
);`

async function createTable(){
    const res = await query(sqlQuery)
    console.log("Table Created", res);
}

createTable();