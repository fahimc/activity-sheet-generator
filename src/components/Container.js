import { useEffect, useRef, useState } from "react";
import { MathBlock } from "./MathBlock";

function generateMathQuestionForKids(operator) {
  // Generate two random numbers between 1 and 10
  const operand1 = Math.floor(Math.random() * 10) + 1;
  const operand2 = Math.floor(Math.random() * 10) + 1;

  // If no operator is provided, choose a random operator (+ or -)
  if (!operator) {
    const operators = ["+", "-"];
    operator = operators[Math.floor(Math.random() * operators.length)];
  }

  // Ensure the result is not negative for simplicity for 5-year-olds
  let question;
  if (operator === "-" && operand1 < operand2) {
    question = `${operand2} ${operator} ${operand1} = `;
  } else {
    question = `${operand1} ${operator} ${operand2} = `;
  }

  // Return an object containing each part of the question
  return {
    operand1: operand1,
    operand2: operand2,
    operator: operator,
    question: question,
  };
}

// Test the function
const mathQuestion = generateMathQuestionForKids();
console.log(mathQuestion);

export function Container() {
  const containerRef = useRef(null);
  let contentHeight = 0;
  const numberOfRows = 6;
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (containerRef.current) {
      contentHeight = containerRef.current.clientHeight;
      const HeightOfBlocks = contentHeight / numberOfRows;
      const arr = [];
      for (let a = 0; a < numberOfRows * 2; ++a) {
        const question = generateMathQuestionForKids("+");
        arr.push(
          <MathBlock
            firstValue={question.operand1}
            operator={question.operator}
            secondValue={question.operand2}
            height={`${HeightOfBlocks}px`}
          />
        );
      }
      setItems(arr);
      console.log(HeightOfBlocks);
    }
  }, []);
  return (
    <div ref={containerRef} className="content">
      {items}
    </div>
  );
}
