import { useEffect, useRef, useState } from "react";
import { MathBlock } from "./MathBlock";

export function Container(props) {
  const containerRef = useRef(null);
  let contentHeight = 1188;
  const numberOfRows = 6;
  const [items, setItems] = useState([]);
  useEffect(() => {
    // if (containerRef.current) {
    // contentHeight = 1188;
    const HeightOfBlocks = 100;
    console.log("HeightOfBlocks", HeightOfBlocks);
    const arr = [];
    for (let a = 0; a < props.items.length; ++a) {
      const question = props.items[a];
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
    // }
  }, [items]);
  return (
    <div ref={containerRef} className="content">
      {items}
    </div>
  );
}
