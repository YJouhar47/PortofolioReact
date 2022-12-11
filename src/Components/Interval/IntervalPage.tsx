import React, { useState } from 'react'; 
import Navbar from '../Navbar/Navbar';
import CurrentTime from './CurrentTime';
import RandomValue from './RandomValue';
import Timer from './Timer';

const IntervalPage = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  return (
      <>
      <Navbar></Navbar>
      <h3>Timer : </h3>
      <Timer></Timer>
      <CurrentTime></CurrentTime>
      <RandomValue min={1} max={100}></RandomValue>
      <RandomValue min={100} max={200}></RandomValue>
      <input type="number" onChange={(e) => setMin(parseInt(e.target.value))} value={min} />
      <input type="number" onChange={(e) => setMax(parseInt(e.target.value))} value={max} />
      
      <RandomValue min={min} max={max}/>
      </>
  );
}

export default IntervalPage;
