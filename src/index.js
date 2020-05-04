import { query } from "./query.js";
import { getData } from "./utils/faker";
import { parseQuery } from "./utils/parsers/parseQuery";

const persons = getData();

const createFilterFunc = (query) => "return " + parseQuery(query);

const filtredPersons = persons.filter((person) => new Function("person", createFilterFunc(query))(person));

console.log(filtredPersons);
