import Item from './Item';
function Home({ store, shouldDiscount }) {
  return (
    <div>
      {store.map((product, index) => (
        <Item
          key={index}
          item={product.item}
          price={product.price}
          discount={product.discount}
          shouldDiscount={shouldDiscount}
        />
      ))}
    </div>
  );
}


export default Home;
