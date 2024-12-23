import "./TraceNumber.css";

const numberOfSheets = 30;
const numbersInWords = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty-one",
  "twenty-two",
  "twenty-three",
  "twenty-four",
  "twenty-five",
  "twenty-six",
  "twenty-seven",
  "twenty-eight",
  "twenty-nine",
  "thirty",
  "thirty-one",
  "thirty-two",
  "thirty-three",
  "thirty-four",
  "thirty-five",
];

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateNumberTrace(index) {
  const item = {
    word: numbersInWords[index - 1],
    number: index,
  };

  return item;
}
function generateProgressiveMathQuestions(numSheets) {
  const item = [];

  for (let i = 1; i <= numSheets; i++) {
    item.push(generateNumberTrace(i));
  }
  return item;
}
let pages = generateProgressiveMathQuestions(numberOfSheets);

function getTraceNumbers(number) {
  let length = 7;
  switch (number) {
    case 10:
      length = 4;
      break;
    case 4:
      length = 6;
      break;
    case 1:
      length = 12;
  }
  if (number === 11) length = 6;
  if (number > 11) length = 4;
  if (number > 19) length = 3;
  if (number === 21) length = 4;

  const items = [];
  for (let i = 0; i < length; i++) {
    items.push(<span className="trace-number">{number}</span>);
  }

  return items;
}

function createNumberArray(start, end, numberToRepeat, arrayLength) {
  if (start < 0) {
    console.warn("Start number is negative. It will be set to 0.");
    start = 0;
  }

  if (end < start || arrayLength < 0 || numberToRepeat < 0) {
    console.error("Invalid input");
    return;
  }

  let numberArray = [];

  const repeatCount = Math.floor(arrayLength * 0.3);
  for (let i = 0; i < repeatCount; i++) {
    numberArray.push(<span>{numberToRepeat}</span>);
  }

  for (let i = start; i <= end && numberArray.length < arrayLength; i++) {
    numberArray.push(<span>{i}</span>);
  }

  if (numberArray.length > arrayLength) {
    numberArray = numberArray.slice(0, arrayLength);
  }

  for (let i = numberArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numberArray[i], numberArray[j]] = [numberArray[j], numberArray[i]];
  }

  return numberArray;
}

// Example usage:
const start = 1;
const end = 10;
const numberToRepeat = 5;
const arrayLength = 20;
const resultArray = createNumberArray(start, end, numberToRepeat, arrayLength);

if (resultArray) {
  console.log(resultArray);
}

function MathApp() {
  return (
    <>
      <div className="book">
        <div className="page-container">
          <img className="title-cover" src="assets/images/title.png"></img>
        </div>
        {pages.map((item) => {
          return (
            <div className="page-container trace ">
              <div className="header">
                <div className="text">
                  <h1>LETS LEARN THE NUMBER</h1>
                  <span
                    className="highlight word"
                    style={{
                      fontSize: item.number > 10 ? "60px" : "100px",
                    }}
                  >
                    {item.word}
                  </span>
                </div>
                <div className="number">
                  <span>{item.number}</span>
                </div>
              </div>
              <div className="trace-container">
                <span className="title">TRACE THE NUMBERS</span>
                <hr></hr>
                <span className="trace-it">{getTraceNumbers(item.number)}</span>
                <hr></hr>
                <br></br>
                <hr></hr>
                <span className="trace-it">{getTraceNumbers(item.number)}</span>
                <hr></hr>
              </div>
              <br></br>
              <div className="color-circles">
                <span className="title">
                  COLOUR <span className="highlight">{item.word}</span> CIRCLES
                </span>
                <div className="circle-container">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </div>
              <br></br>
              <div className="trace-word">
                <span className="title">TRACE THE WORD</span>
                <hr></hr>
                <span
                  className="trace-it"
                  style={{
                    fontSize: item.number > 11 ? "100px" : "180px",
                  }}
                >
                  {item.word}
                </span>
                <hr></hr>
              </div>
              <br></br>
              <div className="find-number">
                <span className="title">
                  CIRCLE ALL NUMBER{" "}
                  <span className="highlight">{item.word}</span>
                </span>
                <div className="number-cloud">
                  {createNumberArray(
                    item.number - 10 || 1,
                    item.number + 10,
                    item.number,
                    10
                  )}
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
