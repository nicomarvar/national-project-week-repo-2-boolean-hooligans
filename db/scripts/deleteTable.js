import query from "../index.js";

const sqlQuery = `DROP TABLE  subjects;`

async function deleteTable(){
    const res = await query(sqlQuery)
    console.log("Table Deleted", res);
}

deleteTable();