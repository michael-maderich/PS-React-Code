import './Payment.css';
function Payment(props) {
    return ( 
      <div class="payment">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h2>Payment</h2>

            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa fa-2x" style={{color:"navy"}}></i>
              <i class="fa fa-cc-amex fa-2x" style={{color:"blue"}}></i>
              <i class="fa fa-cc-mastercard fa-2x" style={{color:"red"}}></i>
              <i class="fa fa-cc-discover fa-2x" style={{color:"orange"}}></i>
            </div>
            
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>
            <div class="row">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"></input>
            </div>
          </div>
    );
  }
  
  export default Payment;