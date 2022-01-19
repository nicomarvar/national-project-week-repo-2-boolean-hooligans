import query from "../db/index.js";

export async function getAllWeeks() {
  const data = await query(`SELECT * FROM weeks;`);
  return data.rows;
}

export async function getWeekById(id) {
  const weekid = Number(id)
  const data = await query(`SELECT * FROM weeks WHERE weekid = $1;`[weekid]);
  return data.rows;
}
export async function getDayById(id) {
  const data = await query(`SELECT * FROM days WHERE dayid = $1;`[id]);
  return data.rows;
}
export async function createResource(id) {
  const data = await query(`INSERT INTO resources FROM topicid WHERE id=$1`, [
    id,
  ]);
  return data.rows;
}
// deleteResourceByTopicId(id){
//     const data = await query(`INSERT INTO resources FROM topics WHERE id=$1`, [
//         id,
//       ]);
//       return data.rows;
// };
