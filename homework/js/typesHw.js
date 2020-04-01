const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionTypes = ['number', 'string', 'boolean', 'null'];
const questionMap = {
  'number': 'Give an example of a number type and press enter.\n',
  'string': 'Give an example of a string type and press enter.\n',
  'boolean': 'Give an example of a boolean type and press enter.\n',
  'null': 'What primitive type has an incorrect type when `typeof` is used on it? Answer and press enter.\n',
};
const testAnswer = {
  'number': ans => !isNaN(+ans) && ((typeof +ans) === 'number'),
  'string': ans => {return ans.length && ((ans[0] === "'"  && ans[ans.length - 1] === "'") || (ans[0] === '"' && ans[ans.length - 1] === '"'))},
  'boolean': ans => ans === 'true' || ans === 'false',
}
let answerMap = {};

const askQuestions = () => {
  answerMap = {};

  // ask questions and collect each answer
  rl.question(questionMap['number'], (answer) => {
    answerMap['number'] = answer;

    rl.question(questionMap['string'], (answer) => {
      answerMap['string'] = answer;

      rl.question(questionMap['boolean'], (answer) => {
        answerMap['boolean'] = answer;

        rl.question(questionMap['null'], (answer) => {
          answerMap['null'] = answer;
          displayResults();
        });
      });
    });
  });
}

const displayResults = () => {
  let numCorrect = 0;

  questionTypes.forEach((type) => {
    const currAns = answerMap[type]
    console.log('\nYour answer was ' + currAns + ' for question: ' + questionMap[type])
    const redFont = "\x1b[31m%s\x1b[0m"
    const greenFont = "\x1b[32m%s\x1b[0m"
    let isCorrect;
    if (type === 'null') {
      isCorrect = currAns === type;
      console.log(isCorrect ? greenFont : redFont, isCorrect ? 'This was correct.' : 'This was incorrect.')
    } else {
      isCorrect = testAnswer[type](currAns);
      console.log(isCorrect ? greenFont : redFont, isCorrect ? 'This was correct.' : 'This was incorrect.')
    }
    if (isCorrect) numCorrect++;
  });

  console.log(`\nYou answered ${numCorrect} out of 4 questions correctly.`);

  rl.question('\nIf you wish to answer again, type R (case sensitive) and press Enter/return. Enter anything else to exit.\n', (ans) => {
    if (ans === 'R') {
      console.clear()
      askQuestions()
    } else {
      rl.close()
    }
  });
}

rl.on("close", () => {
  console.log("Exiting...");
  process.exit(0);
})

askQuestions();
