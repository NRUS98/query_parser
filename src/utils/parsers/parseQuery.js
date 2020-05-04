import { parseOperator } from "./parseOperator.js";
import { parseRule } from "./parseRule.js";

export const parseQuery = (query) => {
  return query.children.map((el) => (
    el.type === "rule" 
      ? parseRule(el.query) 
      : parseQuery(el.query))).join(parseOperator(query.logicalOperator));
};
