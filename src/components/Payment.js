import { useEffect, useState } from "react";

function Payment(props) {
  const [finalTotal, setFinalTotal] = useState(0);

  let total = 0;
  props.basket.forEach((item) => {
    total += item.price * item.quantity;
  });

  useEffect(() => {
    setFinalTotal(total);
  }, [total, setFinalTotal]);

  console.log(total)
  console.log(finalTotal)

  return (
    <div>
      <div>Total to pay: £{total}</div>
    </div>
  );
}

export default Payment;
