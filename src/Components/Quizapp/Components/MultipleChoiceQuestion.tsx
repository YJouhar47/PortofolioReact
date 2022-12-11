import {decode} from 'html-entities';
import { question } from '../QuizPage/QuizApp';

interface MultipleChoiceQuestion
{
    question:question
    onAnswer:(answer:string,index:number) => void
    index:number
}
const MultipleChoiceQuestion = ({question,onAnswer,index}:MultipleChoiceQuestion) =>
{   
    let answers: string[] = [...question.incorrect_answers,question.correct_answer];
    let test = ""
    answers = answers.sort(() => Math.random() - 0.5)
    return (
        <div key={index}>
            <p>{decode(question.question)}</p>
            <select id="cars" name="cars" onChange={(event) => onAnswer(event.target.value,index)}>
                <option value="">Select an answer</option>
                {answers.map((answer) => <option  value={answer}>{decode(answer)}</option>)}
            </select>
            
        </div>
    )
}

export default MultipleChoiceQuestion;