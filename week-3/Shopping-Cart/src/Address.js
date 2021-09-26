
function Address(props) {
    return (
        <div class="Address">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <h3> Address</h3>
        <label for="fname"><i class="fa fa-user"></i> Full Name</label>
        <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
        <label for="email"><i class="fa fa-envelope"></i> Email</label>
        <input type="text" id="email" name="email" placeholder="john@example.com"></input>
        <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
        <label for="city"><i class="fa fa-institution"></i> City</label>
        <input type="text" id="city" name="city" placeholder="New York"></input>

        <div class="row">
          <div class="col-50">
            <label for="state">State</label>
            <input type="text" id="state" name="state" placeholder="NY"></input>
          </div>
          <div class="col-50">
            <label for="zip">Zip</label>
            <input type="text" id="zip" name="zip" placeholder="10001"></input>
          </div>
        </div>
      </div>
    );
  }
  
  export default Address;