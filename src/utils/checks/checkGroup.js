import { checkRule } from "./checkRule";

export const checkGroup = (person, logicalOperator, group) => group[logicalOperator === "or" ? "some" : "every"](
    ({type, query}) => (
      type === "rule" 
        ? checkRule(person, query) 
        : checkGroup(person, query.logicalOperator, query.children)
    )
  );
  