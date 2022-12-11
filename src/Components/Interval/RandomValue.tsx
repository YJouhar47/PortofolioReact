import { useEffect, useState } from "react";

const getRandomValue = (min:number, max:number) => {
    return Math.floor(Math.random() *(max-min))+min;
}

interface RandomValueProps {
    min: number;
    max : number;
}

const RandomValue = ({min, max} : RandomValueProps) => {
    const [randomValue, setrandomValue] = useState(getRandomValue(min,max));
    useEffect(()=> {
        let handle = setInterval(()=> {
            setrandomValue(getRandomValue(min,max));
        },1000);
        return () => {
            clearInterval(handle);
        }
    },[min, max])

    return (
        <div>
            <p>Random value between {min} and {max} : {randomValue}</p>
        </div>
    )
}
export default RandomValue;