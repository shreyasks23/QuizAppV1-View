import Question from "./Question";
import QuestionData from "./QuestionData";


export default function ViewQuestions(props) {

  const Questions = QuestionData();

  return (
    <div>
      {Questions.map((q, i) => {
        return <Question key={i} item={q} />;
      })}
    </div>
  );
}
