export function MathBlock(props) {
  return (
    <div className="math-block" style={{ height: props.height }}>
      <div className="math-question">
        <span>{props.firstValue}</span>
        <span>{props.operator}</span>
        <span>{props.secondValue}</span>
      </div>
      <div className="answer-block" style={{ width: props.height }}></div>
    </div>
  );
}
