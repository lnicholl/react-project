function ProductList(props) {
  const productList = props.products.map((product) => {
    return (
      <div key={product.id}>
        <div>Name: {product.ProductName} </div>
        <div>Price: {product.UnitPrice}</div>
        <button
          onClick={() =>
            props.addProduct(
              product.id,
              product.ProductName,
              product.UnitPrice,
              product.UnitsInStock
            )
          }
        >
          Add to basket
        </button>
      </div>
    );
  });

  return productList;
}
export default ProductList;
