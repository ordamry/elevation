
function Item({ item, price, discount, shouldDiscount }) {
  const finalPrice = shouldDiscount
    ? price * (1 - discount)
    : price;

  return (
    <div>
      <p>Item: {item}</p>
      <p>Price: ${finalPrice.toFixed(2)}</p>
    </div>
  );
}
export default Item