import {FC} from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import List from './components/List';

const avengers = [
  {name: 'Captain America'},
  {name: 'Iron Man'},
  {name: 'Black Widow'},
  {name: 'Thor'},
  {name: 'Hawkeye'},
  {name:'Vision'},
  {name:'Hulk'}
];


const App:FC = () => {
  return (
    <div className="App">
      <HelloWorld />
      <List data={avengers} />
    </div>
  );
}

export default App;
