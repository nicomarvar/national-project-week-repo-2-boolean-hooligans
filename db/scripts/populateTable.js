import query from "../db/dbindex.js";

async function populateTable() {
	const sqlQuery = `INSERT INTO test (testname) VALUES ($1, $2, $3) RETURNING *;`;

	const res = await query(sqlQuery, ["testOne", "testTwo", "testThree"]);

	console.table(res.rows);
	return res.rows;
}

populateTable();
