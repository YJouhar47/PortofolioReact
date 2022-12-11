import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles  from "./ShoppingList.module.css"

export interface Item {
    name:string,
    quantity:number
}

const ListShopping = () => {
  const [name, SetName] = useState<string>("");  
  const [Quantity,SetQuantity] = useState<number>(0);
  const [shoppingList, setShoppingList] = useState<Item[]>([]);

  const handleNameChange : ChangeEventHandler<HTMLInputElement> = (event) => {
    SetName(event.target.value);
  }

  const handleQuantityChange : ChangeEventHandler<HTMLInputElement> = (event) => {
    SetQuantity(parseInt(event.target.value));
  }

  const handleBtnClick : MouseEventHandler<HTMLButtonElement> = (event) => {
    let item : Item = {
      name:name,
      quantity:Quantity
    }
    setShoppingList([...shoppingList, item]);
    SetQuantity(0);
    SetName("")
  }

  const handleRemove : MouseEventHandler<HTMLButtonElement> = (event) => {
    setShoppingList([...shoppingList.filter((item,index)=> index.toString() != event.currentTarget.dataset.index)]);
  }
    return (
      <div>
      <Navbar></Navbar>
        <div className={styles.container}>
          
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="name">Name :</label>
              <input type="text" onChange={handleNameChange} value={name}/>
            </div>
            <div className={styles.field}>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" onChange={handleQuantityChange} value={Quantity}/>
            </div>
            <button onClick={handleBtnClick}>Add</button>
          </div>
          <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody >
          {shoppingList.map((item:Item,index) => 
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              <button key={index} data-index={index} onClick={handleRemove}>Remove</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
        </div>
        </div>
    );
}
export default ListShopping