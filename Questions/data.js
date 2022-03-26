export default function getQuestions() {
  return [
    {
      id: 1,
      q: "Which of the following methods is used to access HTML elements using Javascript?",
      options: [
        "getElementById()",
        "getElementsByClassName()",
        "Both A and B",
        "None of the above",
      ],
      answer: "Both A and B",
    },
    {
      id: 2,
      q: "Which of the following methods can be used to display data in some form using Javascript?",
      options: [
        "document.write()",
        "console.log()",
        "window.alert()",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      id: 3,
      q: "How can a datatype be declared to be a constant type?",
      options: ["const", "var", "let", "constant"],
      answer: "const",
    },
    {
      id: 4,
      q: "What will be the output of the following code snippet?",
      code: ['a = 5 + "9";'],
      options: ["Compilation Error", "14", "Runtime Error", "59"],
      answer: "59",
    },
    {
      id: 5,
      q: "What will be the output of the following code snippet?",
      code: [
        'var a = "Scaler";',
        "var result = a.substring(2, 4);",
        "document.write(result);",
      ],
      options: ["al", "ale", "cal", "caler"],
      answer: "al",
    },
    {
      id: 6,
      q: "What will be the output of the following code snippet?",
      code: [
        "var x=12;",
        "var y=8;",
        'var res=eval("x+y");',
        "document.write(res);",
      ],
      options: ["20", "x+y", "128", "None of the above"],
      answer: "20",
    },
    {
      id: 7,
      q: "What will be the output of the following code snippet?",
      code: [
        "(function(){",
        "  setTimeout(()=> console.log(1),2000);",
        "  console.log(2);",
        "  setTimeout(()=> console.log(3),0);",
        "  console.log(4);",
        "})();",
      ],
      options: ["1 2 3 4", "2 3 4 1", "2 4 3 1", "4 3 2 1"],
      answer: "2 4 3 1",
    },
    {
      id: 8,
      q: "When an operator's value is NULL, the typeof returned by the unary operator is:",
      options: ["Boolean", "Undefined", "Object", "Ineger"],
      answer: "Object",
    },
    {
      id: 9,
      q: "What is the output of the following code snippet?",
      code: ["print(NaN === NaN);"],
      options: ["true", "false", "undefined", "Error"],
      answer: "false",
    },
    {
      id: 10,
      q: "What will be the output of the following code snippet?",
      code: ["print(typeof(NaN));"],
      options: ["Object", "Number", "String", "None of the above"],
      answer: "Number",
    },
  ];
}
