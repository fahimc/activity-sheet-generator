import { useState } from "react";
import "./MathApp.css";
import { Container } from "./Container";

const numberOfSheets = 30;
let currentOperator = "+";
let pages = generateProgressiveMathQuestions(numberOfSheets, currentOperator);

function getRandomOperator() {
  const num = randomIntFromInterval(0, 3);
  switch (num) {
    case 0:
      return "+";
    case 1:
      return "-";
    case 2:
      return "x";
    case 3:
      return "/";
    default:
      return "+";
  }
}

function getOperatorTitle(operator) {
  switch (operator) {
    case "+":
      return "Addition";
    case "-":
      return "Subtraction";
    case "x":
      return "Multiplication";
    case "/":
      return "Division";
    default:
      return undefined;
  }
}

function generateMathQuestionForKids(maxNumber, operator) {
  // Increase the range of numbers as the sheets progress

  let operand1 = randomIntFromInterval(1, maxNumber);
  let operand2 = randomIntFromInterval(1, maxNumber);
  // Ensure the division questions are solvable and the result is a whole number
  if (operator === "/") {
    operand2 = operand2 === 0 ? 1 : operand2; // Avoid division by zero
    const nextOp = operand1 * operand2;
    operand1 = nextOp <= 10 ? nextOp : 10; // Ensure the result is a whole number
  }

  // Ensure subtraction questions do not result in negative numbers
  if (operator === "-" && operand1 < operand2) {
    const temp = operand1;
    operand1 = operand2;
    operand2 = temp;
  }

  const question = `${operand1} ${operator} ${operand2} = `;

  return {
    operand1: operand1,
    operand2: operand2,
    operator: operator,
    question: question,
  };
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateProgressiveMathQuestions(numSheets, operator) {
  const item = [];

  for (let i = 1; i <= numSheets; i++) {
    let maxNumber = randomIntFromInterval(i <= 10 ? i : 10, 10);
    const questions = [];
    for (let a = 1; a <= 12; a++) {
      let op = operator || getRandomOperator();
      let quest = generateMathQuestionForKids(maxNumber, op);
      while (questions.find((obj) => obj.question === quest.question)) {
        maxNumber = maxNumber = randomIntFromInterval(i <= 10 ? i : 10, 10);
        quest = generateMathQuestionForKids(maxNumber, op);
      }
      questions.push(quest);
    }
    item.push(questions);
  }

  return item;
}

function MathApp() {
  const [currentPages, setCurrentPages] = useState(pages);
  return (
    <>
      <select
        onChange={(event) => {
          currentOperator = event.target.value;
          pages = generateProgressiveMathQuestions(
            numberOfSheets,
            currentOperator
          );
          setCurrentPages(pages);
        }}
      >
        <option value={"+"}>addition</option>
        <option value={"-"}>subtraction</option>
        <option value={"x"}>multiplication</option>
        <option value={"/"}>division</option>
        <option value={""}>mixed</option>
      </select>
      <div className="book">
        <div className="page-container">
          <img className="title-cover" src="assets/images/title.png"></img>
        </div>
        {currentPages.map((currentPage, key) => {
          return (
            <div className="page-container" key={key}>
              <div className="pattern"></div>
              <div className="page">
                <div>
                  <h1>
                    {" "}
                    <img
                      className="bird"
                      src="assets/images/bird.png"
                    ></img>{" "}
                    Maths Worksheet
                    <img className="bird2" src="assets/images/bird.png"></img>
                  </h1>
                  <h2>{getOperatorTitle(currentOperator)}</h2>
                </div>
                <Container items={currentPage} />
                <div className="bottom">
                  <img src="assets/images/bottom2.png"></img>
                </div>
              </div>
            </div>
          );
        })}
        <div className="page-container">
          <img
            style={{ pageBreakAfter: "before" }}
            className="title-cover"
            src="assets/images/colouring-back.png"
          ></img>
        </div>
      </div>
    </>
  );
}

export default MathApp;
