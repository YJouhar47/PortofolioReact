
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import { decode } from "html-entities";
import { question } from "../../pages/QuizPage/QuizApp";
import TrueOfFalseQuestion from "./TrueOfFalseQuestion";

interface IQuestion {
    questions:question[]
    answers:string[]
    onAnswersChange:(newAnswers:string[])=>void
}
const Question = ({questions,answers,onAnswersChange}:IQuestion) =>
{
    const answerHandler = (answer:string,index:number) =>
    {
        let newAnswers:string[] = [];
        for (let i = 0 ; i < answers.length;i++)
        {
            if(i === index)
            {
                newAnswers[i] = answer
            }
            else
            {
                newAnswers[i] = answers[i]
            }
        }
        onAnswersChange(newAnswers);
    }
    return (
        <div>
            {questions.map((question,index) => question.type === "multiple" ? 
                (answers[index] == "" ||  answers[index] == null ? <MultipleChoiceQuestion question={question} onAnswer={answerHandler} index={index}/>:
                (answers[index] === questions[index].correct_answer? 
                    <div style={{backgroundColor:"green"}}>
                        <p>{decode(question.question)}</p>
                        <p style={{fontWeight:"bold"}}>You answered {decode(answers[index])} which was the correcnt answer</p>
                    </div>
                    :<div style={{backgroundColor:"red"}}>
                        <p>{decode(question.question)}</p>
                        <p style={{fontWeight:"bold"}}>You answered {decode(answers[index])}, but the correct answer was {decode(questions[index].correct_answer)}</p>
                    </div>))
            :
                (answers[index] == "" ||  answers[index] == null ? <TrueOfFalseQuestion question={question} onAnswer={answerHandler} index={index}/>:
                (answers[index] === questions[index].correct_answer? 
                    <div style={{backgroundColor:"green"}}>
                        <p>{decode(question.question)}</p>
                        <p style={{fontWeight:"bold"}}>You answered {decode(answers[index])} which was the correcnt answer</p>
                    </div>
                    :<div style={{backgroundColor:"red"}}>
                        <p>{decode(question.question)}</p>
                        <p style={{fontWeight:"bold"}}>You answered {decode(answers[index])}, but the correct answer was {decode(questions[index].correct_answer)}</p>
                    </div>)))}
        </div>
    )
}
export default Question;