import './App.css';
import Title from './Title';
import ItemList from './ItemList';
import TotalPrice from './Total_price';
import Payment from './Payment';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="Amazon 2.0" subHeading="An Amazon Shopping Cart Copy...ish" />
      </header>
      <div class="shopping-cart">
        <ItemList itemsData={props.itemsData}/>
        <TotalPrice itemsData={props.itemsData}/>
        <Payment />     
      </div>
    </div>
  );
}

export default App;
