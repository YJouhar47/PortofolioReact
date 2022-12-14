import { useState } from "react";
import styles from "./Colorpicker.module.css"


const ColorPicker = () =>
{
    const [color, SetColor] = useState("#000000");
    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        SetColor(event.target.value);  
    }
    const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        SetColor(event.target.value);  
    }
    return (
        <div>
            <h3>Choose your color :</h3>
            <input type="color" id="color" onChange={handleChangeInput} value={color}></input>
            <br></br>
            <select name="klaar" id="test" onChange={handleChange}>
                <option value="#000000">#000000</option>
                <option value="#FF0000">##FF0000</option>
                <option value="#00FF00">#00FF00</option>
                <option value="#0000FF">#0000FF</option>
            </select>
            <div className={styles.box} style={{backgroundColor:color}}>
                <p>Kleur</p>
            </div>
        </div>
    );
    
}

export default ColorPicker;