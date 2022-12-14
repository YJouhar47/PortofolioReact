import { question } from "./QuizPage/QuizApp";
import {decode} from 'html-entities';

interface TrueFalseQuestion
{
    question:question
    onAnswer:(answer:string,index:number) => void
    index:number
}
const TrueOfFalseQuestion = ({question,onAnswer, index}:TrueFalseQuestion) =>
{
    return (
        <div key={index}>
            <p>{decode(question.question)}</p>
            <div>
                <input type="checkbox" onChange={(event) => onAnswer('True',index)}/>True    
                <input type="checkbox" onChange={(event) => onAnswer('False',index)}/>False
            </div>
        </div>
    )
}

export default TrueOfFalseQuestion;