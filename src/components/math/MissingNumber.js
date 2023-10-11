import "./MathMissingNumber.css";

const numberOfSheets = 30;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateMissingNumberSequence(start, end, skip) {
  let sequenceHtml = [];
  for (let i = start; i <= end; i++) {
    if ((i - start) % skip === 0) {
      sequenceHtml.push(
        <div className="with-number">
          <img src="assets/images/apple-number.png"></img>
          <span>{i}</span>
        </div>
      );
    } else {
      sequenceHtml.push(
        <div className="with-number">
          <img src="assets/images/apple-number.png"></img>
        </div>
      );
    }
  }
  return sequenceHtml;
}
function generateProgressiveMathQuestions(numSheets) {
  const item = [];

  for (let i = 1; i <= numSheets; i++) {
    const startNumber = randomIntFromInterval(1, 20);
    const endNumber = startNumber + 19;
    item.push(generateMissingNumberSequence(startNumber, endNumber, 2));
  }
  return item;
}
let pages = generateProgressiveMathQuestions(numberOfSheets);

function MathApp() {
  return (
    <>
      <div className="book">
        <div className="page-container">
          <img className="title-cover" src="assets/images/title.png"></img>
        </div>
        {pages.map((item) => {
          return (
            <div className="page-container number ">
              <h1>Apple Orchard Sequencing</h1>
              <p>
                {" "}
                Fill in the missing apples to complete the sequence and help the
                farmer count his apples!
              </p>
              <div className="missing">{item}</div>
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
