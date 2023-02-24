import { useState } from "react";
import Payment from "./Payment"

function Basket(props) {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [Products, setProducts] = useState(null)
  

  function deleteItem(id) {
    return props.basket.filter((item) => item.id !== id);
  }

  if (props.basket.length > 0) {
    const basketList = props.basket.map((item) => {
      return (
        <div key={item.id}>
          <div>Name: {item.name} </div>
          <div>Price: {item.price}</div>
          <div>Quantity: {item.quantity}</div>
          <button
            onClick={() =>
              item.quantity <= item.units_in_stock
                ? setItemQuantity((item.quantity += 1))
                : alert(`Sorry, there is no more ${item.name} in stock`)
            }
          >
            +
          </button>
          <button
            onClick={() =>
              item.quantity > 1
                ? setItemQuantity((item.quantity -= 1))
                : setProducts(deleteItem(item.id))
            }
          >
            -
          </button>
        </div>
      );
    });

    return basketList;

  }
}
export default Basket;
