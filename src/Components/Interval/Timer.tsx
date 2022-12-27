import { useState, useEffect } from "react";

const Timer = () => {

const [time, setTime] = useState(0);

useEffect(()=> {
    setInterval(() => {
        setTime((time)=> time +1);
    },1000)
},[])
return(
<>
{time}
</ >
)
  
} 
export default Timer;