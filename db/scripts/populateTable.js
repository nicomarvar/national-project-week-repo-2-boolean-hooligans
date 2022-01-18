import query from "../index.js";

async function populateTable(topicname, id) {
	const sqlQuery = `INSERT INTO topics (topicname, topicid) VALUES ($1, $2) RETURNING *;`;

	const res = await query(sqlQuery, [topicname, id]);

	console.table(res.rows);
	return res.rows;
}


const topics = ["HTML","CSS","Algorithms","Javascript 101","Objects", "Arrays","DOM","Event Listeners", "Fetch", "Data Structures", "UX", "CSS Variables", "CSS Flexbox","UI", "CSS Grid", "Node js", "Servers", "Express","REST", "HTTP Requests", "Middleware", "SQL", "SQL Join", "PG", "Databases", "Dotenv", "12 Factors App", "Testing", "Unit Testing", "Testing API's", "Cypress", "Cross Origin React", "React createElement", "JSX/BABEL", "Props,Children and Conditional Rendering", "React useState", "React Components", "React List and Keys", "Map method js", "React useEffect", "React useReducer", "Reduce method js", "React Testing", "React Router" ]

function populate(){

    for(let i = 0; i < topics.length; i++){
        populateTable(topics[i], i+1)
    }
}

populate()

