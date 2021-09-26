import './Total_price.css';

function TotalPrice(props) {
    const itemsData = props.itemsData;
  
    let totalPrice = 0;
  
    for(let i = 0; i < itemsData.length; i++) {
      const item = itemsData[i];
      totalPrice += item.quantity * item.price;
    }

    return (
      <div class="price">
        <div class="item-left-content">
            <div class="item-details">
            </div>
        </div>
        <div class="subtotal">
            <h3>Subtotal</h3>
            <p>${totalPrice}</p>
        </div>
      </div>
    );
  }
  console.log('TotalPrice');
  
  export default TotalPrice;