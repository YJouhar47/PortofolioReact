import { useState, useEffect } from "react";

const CurrentTime= () => {

const [time, setTime] = useState(new Date());

useEffect(()=> {
    let handle = setInterval(() => {setTime(new Date());},1000);
    return () => {
        clearInterval(handle);
    }
},[])
return(
    <div>
        {time.toLocaleString()}
    </div>
)
} 
export default CurrentTime;