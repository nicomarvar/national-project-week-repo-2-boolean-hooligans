import query from "../db/index.js";

export async function getAllWeeks() {
  const data = await query(`SELECT * FROM weeks;`);
  return data.rows;
}

export async function getWeekById(id) {
  const data = await query(`SELECT * FROM weeks WHERE weekid = $1;`[id]);
  return data.rows;
}
export async function getDayById(id) {
  const data = await query(`SELECT * FROM days WHERE Daysid = $1;`[id]);
  return data.rows;
}
export async function getResourceById(id) {
  const data = await query(`SELECT * FROM days WHERE Daysid = $1;`[id]);
  return data.rows;
}

export async function createResource(id) {
  const data = await query(`SELECT * FROM Resources WHERE Topicid = $1;`[id]);
  return data.rows;
}
