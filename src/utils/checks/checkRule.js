export const checkRule = (person, { value, operator, operand }) => {
  operand = person[operand]
  switch (operator) {
    case ">":
      return operand > Number(value);
    case "<":
      return operand < Number(value);
    case ">=":
      return operand >= Number(value);
    case "<=":
      return operand <= Number(value);
    case "<>":
      return operand != value;
    case "=":
      return operand == value;
    case "in":
      return value.includes(operand);
  }
};
