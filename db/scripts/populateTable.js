import query from "../index.js";

// async function populateTable(topicname, id) {
// 	const sqlQuery = `INSERT INTO subjects (subjectname, subjectid) VALUES ($1, $2) RETURNING *;`;

// 	const res = await query(sqlQuery, [topicname, id]);

// 	console.table(res.rows);
// 	return res.rows;
// }

// const topics = ["HTML","CSS","Algorithms","Javascript 101","Objects", "Arrays","DOM","Event Listeners", "Fetch", "Data Structures", "UX", "CSS Variables", "CSS Flexbox","UI", "CSS Grid", "Node js", "Servers", "Express","REST", "HTTP Requests", "Middleware", "SQL", "SQL Join", "PG", "Databases", "Dotenv", "12 Factors App", "Testing", "Unit Testing", "Testing API's", "Cypress", "Cross Origin React", "React createElement", "JSX/BABEL", "Props,Children and Conditional Rendering", "React useState", "React Components", "React List and Keys", "Map method js", "React useEffect", "React useReducer", "Reduce method js", "React Testing", "React Router" ]

async function populateTable(link, id) {
    const sqlQuery = await query(
        `UPDATE subjects SET links = $1 WHERE Subjectid = $2 RETURNING *;`,
        [link, id]
      );

	const res = await query(sqlQuery, [link, id]);

	console.table(res.rows);
	return res.rows;
}


const links = [
    ["https://www.codecademy.com/learn/learn-html"],
    ["https://cssbattle.dev/"],
    ["https://computer.howstuffworks.com/what-is-a-computer-algorithm.htm"],
    ["https://www.codecademy.com/learn/introduction-to-javascript"],
    ["https://dev.to/shreyazz/javascript-objects-57ob"],
    ["https://www.freecodecamp.org/news/the-javascript-array-handbook/amp/"],
    ["https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/amp/"],
    ["https://www.freecodecamp.org/news/javascript-addeventlistener-example-code/amp/"],
    ["https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data.amp"],
    ["https://medium.com/swlh/data-structures-101-e18fc33579fa"],
    ["https://uxdesign.cc/we-have-lost-track-of-what-ux-actually-means-8d55259dacb0"],
    ["https://css-tricks.com/a-complete-guide-to-custom-properties/"],
    ["https://flexboxfroggy.com/"],
    ["https://workingmouse.com.au/ux-design/user-interface-101-the-good-the-bad-the-basics/"],
    ["https://cssgridgarden.com/"],
    ["https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1"],
    ["https://www.lifewire.com/servers-in-computer-networking-817380"],
    ["https://expressjs.com/"],
    ["https://www.redhat.com/en/topics/api/what-is-a-rest-api"],
    ["https://medium.com/swlh/the-basics-of-http-request-methods-27c7c93a864"],
    ["https://developer.okta.com/blog/2018/09/13/build-and-understand-express-middleware-through-examples"],
    ["https://sqlbolt.com/"],
    ["https://www.postgresqltutorial.com/postgresql-joins/"],
    ["https://node-postgres.com/"],
    ["https://www.guru99.com/introduction-to-database-sql.html"],
    ["https://www.npmjs.com/package/dotenv"],
    ["https://12factor.net/"],
    ["https://medium.com/welldone-software/an-overview-of-javascript-testing-7ce7298b9870"],
    ["https://www.xenonstack.com/insights/what-is-unit-testing?hs_amp=true"],
    ["https://www.postman.com/use-cases/api-testing-automation/"],
    ["https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell"],
    ["https://reactjs.org/docs/add-react-to-a-website.html"],
    ["https://learn.co/lessons/react-create-element"],
    ["https://www.freecodecamp.org/news/jsx-in-react-introduction/amp/"],
    ["https://reactjs.org/docs/render-props.html"],
    ["https://reactjs.org/docs/hooks-state.html"],
    ["https://reactjs.org/docs/web-components.html"],
    ["https://dev.to/rahxuls/what-are-list-and-keys-in-react-3em2"],
    ["https://www.javascripttutorial.net/es6/javascript-map/"],
    ["https://flaviocopes.com/react-hook-useeffect/"],
    ["https://flaviocopes.com/react-hook-usereducer/"],
    ["https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce.amp"],
    ["https://testing-library.com/docs/react-testing-library/intro/"],
    ["https://v5.reactrouter.com/web/guides/primary-components"] ]

function populate(){

    for(let i = 0; i < links.length; i++){
        populateTable(links[i], i+1)
    }
}

populate()




// ,"https://reactjs.org/docs/conditional-rendering.html","https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891"