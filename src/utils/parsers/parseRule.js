import { parseOperator } from "./parseOperator.js";

export const parseRule = ({ operand, value, operator }) => {
  return operator === "in" 
    ? `${JSON.stringify(value)}.includes(person.${operand})` 
    : `person.${operand} ${parseOperator(operator)} ${operator === "=" ? JSON.stringify(value) : Number(value)}`;
};
