import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Banana");
  const [price, setPrice] = useState(2.99);

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
    };
  
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      return count;
    });
    };

    const handlerItemChange = (value) => {
      setName(value);
    }; 

    const handlerPriceChange = (value) => {
      if (value > 0) {
        setPrice(value);
      } else {
      setPrice(0.01);
      }
    }; 

  return (
    <>
      <h2>{name}</h2>
      <Button label="-" onClick={handlerMinus} />
      {/* <button onClick={handlerMinus}>-</button> */}
      <span>{count}</span>
      <Button label="+" onClick={handlerPlus} />
      {/* <button onClick={handlerPlus}>+</button> */}
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      <Input value={name} label="Item Name" type="text" onChange={handlerItemChange} />
      <Input value={price} label="Item Price" type="number" onChange={handlerPriceChange} />
    </>
  );
}
export default Counter;