import React, { useState } from "react";
import MissingNumber from "./components/math/MissingNumber";
import TraceNumber from "./components/trace/TraceNumber";
import MathApp from "./components/math/MathApp";

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "one":
        return <MissingNumber />;
      case "two":
        return <TraceNumber />;
      case "three":
        return <MathApp />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => setActiveComponent("one")}>MissingNumber</button>
      <button onClick={() => setActiveComponent("two")}>TraceNumber</button>
      <button onClick={() => setActiveComponent("three")}>MathApp</button>
      {renderComponent()}
    </div>
  );
};

export default App;
