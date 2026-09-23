// {
//     "id": 1,
//     "question": "What does === check in JavaScript?",
//     "options": [
//       "Only value",
//       "Only type",
//       "Value and type",
//       "Only reference"
//     ],
//     "answer": "Value and type"
//   }

  const question = {
  id: 1,
  question: "What does === check in JavaScript?",
  options: [
    "Only value",
    "Only type",
    "Value and type",
    "Only reference"
  ],
  answer: "Value and type"
};

let resutl=question.options;
resutl.map((elm)=>{
 console.log(elm)
})
