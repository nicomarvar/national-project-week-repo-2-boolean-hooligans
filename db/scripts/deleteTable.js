import query from "../index.js";

const sqlQuery = `DROP TABLE  days;`

async function deleteTable(){
    const res = await query(sqlQuery)
    console.log("Table Deleted", res);
}

deleteTable();