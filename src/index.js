import { query } from "./query.js";
import { getData } from "./utils/faker";
import { parseQuery } from "./utils/parsers/parseQuery";
import { checkGroup } from "./utils/checks/checkGroup";

const persons = getData();

const createFilterFunc = (query) => "return " + parseQuery(query);

const filtredPersons = persons.filter((person) => new Function("person", createFilterFunc(query))(person));

console.log("First method ", filtredPersons);


const createFilterFunc_2 = (query) => (person) => checkGroup(person, query.logicalOperator, query.children);

const filtredPersons_2 = persons.filter((person) => createFilterFunc_2(query)(person));

console.log("Second method ", filtredPersons_2);
