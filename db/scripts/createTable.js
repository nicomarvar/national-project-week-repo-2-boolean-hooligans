import query from "../index.js";

const sqlQuery = `CREATE TABLE IF NOT EXISTS subjects (
    SubjectID INT,
    Subjectname TEXT,
    Links TEXT[]
);`

async function createTable(){
    const res = await query(sqlQuery)
    console.log("Table Created", res);
}

createTable();