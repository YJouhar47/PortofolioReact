import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import ColorPicker from "../../Components/ColorPicker/ColorPicker";
import Layout from "../../Components/Layout/Layout";
import Jokes from "../../Components/LocalStorage/Jokes";
import Pokemon from "../../Components/Pokemon/Pokemon";
import ShoppingList from "../../Components/ShoppingList/ShoppingList";
import IntervalPage from "../../Components/Interval/Interval/IntervalPage";
import QuizApp from "../../Components/Quizapp/QuizPage/QuizApp";
import SlotMachine from "../../Components/Slots/SlotPage/Slotmachine";
import TodoListPage from "../../Components/TodoList/TodolistPage/TodoListPage";


const DetailPage = () => {
    let x:ReactNode;
    const {name} = useParams();
    if(name === "quizapp"){
        x = <QuizApp/>
    }
    else if(name==="pokemon"){
        x = <Pokemon/>
    }
    else if(name==="shoppinglist"){
        x = <ShoppingList/>
    }
    else if(name==="interval"){
        x = <IntervalPage/>
    }
    else if(name==="todo"){
        x = <TodoListPage/>
    }
    else if(name==="slots"){
        x = <SlotMachine aantalSlots={5}/>
    }
    else if(name==="jokes"){
        x = <Jokes/>
    }
    else if(name==="colorpicker"){
        x = <ColorPicker/>
    }
    return (
        <Layout>
            {x}
        </Layout>
    )
}
export default DetailPage;