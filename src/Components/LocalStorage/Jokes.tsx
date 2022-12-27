/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styles from './Jokes.module.css';
interface Joke {
    id:string,
    joke:string,
    status:number
}

const Jokes = () => {
    const [joke,setJoke] = useState("");
    const [favorite,setFavorite] = useState(localStorage.getItem("favoriteJoke")??"");

    const loadJoke = async() => {
        let response = await fetch("https://icanhazdadjoke.com/", {
            headers:{
                "Accept":"application/json"
            }
        });
        let joke : Joke = await response.json();
        setJoke(joke.joke);
    }
    const SetFavoriteJoke = () => {
        setFavorite(joke); 
    }
    useEffect(()=> {
        localStorage.setItem("favoriteJoke",joke);
    },[favorite])
    /*eslint no-unused-vars: ["warn",{"argsIgnorePattern": "^_","varsIgnorePattern": "^_"}]*/
    useEffect(()=>{
        loadJoke();
    },[]);

    return (
        <div>
            <h3>Choose a joke</h3>
            <div className={styles.card}>
                <b>Random joke :</b>
                <div>{joke}</div>
            </div>
            <div>
                <button onClick={SetFavoriteJoke}>New favorite</button>
                <button onClick={loadJoke}>New joke</button>
            </div>
            {
                favorite && (
                    <div className={styles.card}>
                        <b>Heeft een favorite joke</b>
                        <div>{favorite}</div>
                    </div>
                )
            }
        </div>
    )
}
export default Jokes;