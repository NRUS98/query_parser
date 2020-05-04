// export const query = {
//   logicalOperator: "or",
//   children: [
//     {
//       type: "rule",
//       query: {
//         rule: "NAME",
//         operand: "name",
//         operator: "=",
//         value: "Ivan",
//       },
//     },
//     {
//       type: "group",
//       query: {
//         logicalOperator: "and",
//         children: [
//           {
//             type: "rule",
//             query: {
//               rule: "ID",
//               operator: ">",
//               operand: "id",
//               value: "2",
//             },
//           },
//           {
//             type: "rule",
//             query: {
//               rule: "COUNTRY",
//               operand: "country",
//               operator: "in",
//               value: ["China", "Russia"],
//             },
//           },
//         ],
//       },
//     },
//   ],
// };

export const query = {
  logicalOperator: "or",
  children: [
    {
      type: "rule",
      query: {
        rule: "NAME",
        operand: "name",
        operator: "=",
        value: "Ivan",
      },
    },
    {
      type: "rule",
      query: {
        rule: "ID",
        operand: "id",
        operator: "<",
        value: "2",
      },
    },
    
  ],
};