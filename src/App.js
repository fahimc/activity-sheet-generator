import logo from "./logo.svg";
import "./App.css";
import { Container } from "./components/Container";
import { useEffect } from "react";

function App() {
  function generatePDF() {
    var opt = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        dpi: 300,
        letterRendering: true,
        width: 840,
        height: 1188,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    // Choose the element that your content will be rendered to.
    const element = document.querySelector(".page-container");
    // Choose the element and save the PDF for your user.
    window.html2pdf().set(opt).from(element).save();
  }

  return (
    <>
      <button onClick={() => generatePDF()}>pdf</button>
      <div className="page-container">
        <div className="pattern"></div>
        <div className="page">
          <div>
            <h1>
              {" "}
              <img className="bird" src="assets/images/bird.png"></img> Maths
              Worksheet
              <img className="bird2" src="assets/images/bird.png"></img>
            </h1>
            <h2>Additions</h2>
          </div>
          <Container />
          <div className="bottom">
            <img src="assets/images/bottom2.png"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
