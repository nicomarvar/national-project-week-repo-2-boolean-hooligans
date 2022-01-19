import query from "../db/index.js";

export async function getAllWeeks() {
  const data = await query(`SELECT * FROM weeks;`);
  return data.rows;
}

export async function getWeekById(id) {
  const data = await query(`SELECT * FROM weeks WHERE Weekid = $1;`, [id]);
  return data.rows;
}

export async function getDayById(id) {
  const data = await query(`SELECT * FROM days WHERE Dayid = $1;`, [id]);
  return data.rows;
}
export async function getResourceById(id) {
  const data = await query(`SELECT * FROM topics WHERE Topicid = $1;`, [id]);
  return data.rows;
}

export async function createResource(body, id) {
  const data = await query(
    `UPDATE topics SET resources = $1 WHERE Topicid = $2 RETURNING *;`,
    [body.resources, id]
  );
  return data.rows;
}

export async function getAllTopics() {
  const data = await query(`SELECT * FROM topics;`);
  return data.rows;
}
