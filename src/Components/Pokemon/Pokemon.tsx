import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Pokedex.module.css";

export interface Pokemon {
    name:string,
    url:string
}

const Pokedex = ({limit =151}:{limit?:number}) => {
    const [pokemons,setPokemons] = useState<Pokemon []>([]);
    const [filterField,setFilterField] = useState<string>("");
    const [limiet,setLimiet] = useState<number>(limit);
    useEffect(() => {
        const fetchPokemons = async () => {
            let result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limiet}`);
            let json = await result.json();
            let results : Pokemon[] = await json.results as Pokemon[];
            setPokemons(results);
        }
        fetchPokemons();
    },[limiet])
    const changeInputHandler : ChangeEventHandler<HTMLInputElement> = (event)=> {
        setFilterField(event.target.value);
    }
    const btnClickHandler : MouseEventHandler<HTMLButtonElement> = ()=> {
        const input = document.getElementById("limit") as HTMLInputElement;
        setLimiet(parseInt(input.value));
    }
  return (
    <>
    <input type="text" value={filterField} onChange={changeInputHandler}/> <br />
    {(pokemons == null || pokemons == undefined || pokemons.length == 0) && <img className={styles.img} src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"/>}
    <ul>
        {pokemons.filter(item => (new RegExp(`^.*${filterField}.*$`,"i")).test(item.name)).map((item) => <li key={item.name}>{item.name}</li>)}
    </ul>
    <input type="number" id="limit"/>
    <button onClick={btnClickHandler}>Set Limit</button>
    </>
  )
}

export default Pokedex