import Item from "./Item";
import './ItemList.css';

function ItemList(prop) {
  const itemsData = prop.itemsData;
  const itemsElements = [];

  for (let i = 0; i < itemsData.length; i++) {
    const item = itemsData[i];
    itemsElements.push(<Item url={item.url} image={item.image} name={item.name} quantity={item.quantity} price={item.price} />);
  }

  return (
    <div class="item-list">
      <h2 id="item-list-title">Shopping Cart</h2>
      {itemsElements}
    </div>
  );
}

export default ItemList;
