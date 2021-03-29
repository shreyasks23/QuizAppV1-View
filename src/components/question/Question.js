export default function Question(props) {
  const Question = props.item;

  const borderStyle = {
    border: "1px solid black",
    margin: "5px",
    padding: "8px",
  };

  const LogClickEvent = (event) => {
    console.log(event.target.id);
    console.log(event.target.value);
  };

  return (
    <div className="container">
      <form style={borderStyle}>
        <h3>{`${Question.questionId}) ${Question.questionText}`}</h3>
        {Question.options &&
          Question.options.map((o, i) => {
            return (
              <p key={i}>
                <label htmlFor={`CB${o + i}`}>
                  <input
                    id={`CB${o + i}`}
                    className="with-gap"
                    name="radio"
                    onClick={LogClickEvent}
                    type="radio"
                    value={o}
                  />
                  <span>{o}</span>
                </label>
              </p>
            );
          })}
      </form>
    </div>
  );
}
