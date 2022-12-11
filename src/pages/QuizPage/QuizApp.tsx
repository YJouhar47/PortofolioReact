import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import Navbar from '../../Components/Navbar/Navbar';
import Question from '../../Components/Quizapp/Question';
export interface question
{
  category:string,
  type:string,
  difficulty:string,
  question:string,
  correct_answer:string,
  incorrect_answers:string[]
}
const QuizApp = () =>
{
    const [questions,setQuestions] = useState<question[]>([]);
    const [answers,setAnswers] = useState<string[]>(["","","","","","","","","",""]);
    
    useEffect(() => {
        const fetchFunction = async() => {
            let result = await fetch("https://opentdb.com/api.php?amount=10");
            let json = await result.json(); 
            
            setQuestions([...questions,...json.results]);
        }
        fetchFunction();
    },[]);
    const answersHandler = (answers:string[]) =>
    {
        setAnswers(answers)
    }
    const clickHandle= () =>
    {
        const fetchFunction = async() => {
            let result = await fetch("https://opentdb.com/api.php?amount=10");
            let json = await result.json(); 
            
            setQuestions([...questions,...json.results]);
        }
        fetchFunction();
        setAnswers([...answers,...["","","","","","","","","",""]])
    }
    return (
        <Layout>
        <div>
            <Question questions={questions} answers={answers} onAnswersChange={answersHandler}/>
            <button onClick={clickHandle}>Load more</button>
        </div>
        </Layout>
    )
}
export default QuizApp;