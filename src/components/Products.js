import ProductList from "./ProductList";
import Basket from "./Basket";
import { useState, useEffect } from "react";
import Payment from "./Payment";

function Products() {
  const [products, setProducts] = useState(null);
  const [basket, setBasket] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not get data for that resource.");
        }

        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  function addProduct(id, name, price, units_in_stock) {
    let object = {
      name: name,
      price: price,
      quantity: 1,
      units_in_stock: units_in_stock,
      id: id,
    };

    var basket = JSON.parse(localStorage.getItem("products")) || [];

    var item = basket.find((item) => item.name === name);

    if (item) {
      if (item.quantity <= units_in_stock) {
        alert(`You have added ${item.name} to your basket`);
        item.quantity += 1;
      } else {
        alert(`Sorry, there is no more ${item.name} in stock`);
      }
    } else {
      basket.push(object);
    }

    localStorage.setItem("products", JSON.stringify(basket));

    setBasket(basket);
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Wait...</div>}
      {products && <ProductList products={products} addProduct={addProduct} />}
      {basket && <Basket basket={basket} />}
      {basket && <Payment basket={basket} />}
    </div>
  );
}

export default Products;
