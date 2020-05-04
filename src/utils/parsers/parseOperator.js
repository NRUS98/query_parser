export const parseOperator = (operator) => {
  switch (operator) {
    case "=":
      return "===";
    case "<>":
      return "!=";
    case "or":
      return " || ";
    case "and":
      return " && ";
    default:
        return operator
  }
};
