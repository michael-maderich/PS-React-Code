import './Item.css';

function Item(prop) {
  return (
    <div class="item">
        <div class="item-left-content">
            <a href={prop.url}><img src={prop.image} alt=""></img></a>
            <div class="item-details">
              <h4>{prop.name}</h4>
              <p>Quantity: {prop.quantity}</p>
            </div>
        </div>
        <div class="item-price">
            <p>${prop.price}</p>
        </div>
    </div>
  );
}

export default Item;