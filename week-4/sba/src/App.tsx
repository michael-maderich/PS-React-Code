import "./App.css"
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Switch, Route, Link
} from "react-router-dom";

//import { InputElement } from "./typeDefs/typeDefs";

import GroceryList from "./Components/GroceryList";
import AddGrocery from "./Components/AddGrocery";

const FRUIT_LIST = ['apples', 'bananas', 'oranges', 'kiwis', 'strawberries'];
const VEGETABLE_LIST = ['broccoli', 'carrots', 'zuccini', 'green beans'];
const PROTEIN_LIST = ['chicken', 'beef', 'pork', 'tofu', 'fish'];

let groceryList: string[] = [
	FRUIT_LIST[FRUIT_LIST.indexOf('apples')],
	VEGETABLE_LIST[VEGETABLE_LIST.indexOf('zuccini')],
	PROTEIN_LIST[PROTEIN_LIST.indexOf('beef')]
];

export const App = () => {
	const [groceries, setGroceries] = useState(groceryList);	// Selected groceries

	const handleCheck:React.ChangeEventHandler<HTMLInputElement> = (event) => {
		const target = event.target as HTMLInputElement;
		setGroceries( (prev) => {
			const product = target.getAttribute("id");
			console.log("handleCheck for ", product);
			if (!product) return prev;
			const pos = prev.indexOf(product);
			if (pos < 0) {		// product isn't in groceries, so add
				prev.push(product);
				return prev;
			}
			return prev.slice(0,pos).concat(prev.slice(pos+1));	// remove and return
		});
  	}

	const padding = {
		padding: 5
	};

	return (
		<div>
			<Router>
				<div>
					<Link style={padding} to='/'>
						Grocery List
					</Link>
					<Link style={padding} to='/fruits'>
						Fruits
					</Link>
					<Link style={padding} to='/vegetables'>
						Vegetables
					</Link>
					<Link style={padding} to='/protein'>
						Protein
					</Link>
				</div>
				<Switch>
					<Route path='/fruits'>
						<AddGrocery
							products={FRUIT_LIST}
							groceries={groceries}
							handleCheck={handleCheck}
						/>
					</Route>
					<Route path='/vegetables'>
						<AddGrocery
							products={VEGETABLE_LIST}
							groceries={groceries}
							handleCheck={handleCheck}
						/>
					</Route>
					<Route path='/protein'>
						<AddGrocery
							products={PROTEIN_LIST}
							groceries={groceries}
							handleCheck={handleCheck}
						/>
					</Route>
					<Route path='/'>
						<GroceryList
							groceries={groceries}
							handleCheck={handleCheck}
						/>
					</Route>
				</Switch>
			</Router>
			<div>
				<i>Grocery App, Michael Maderich 2021</i>
			</div>
		</div>
	);

};

ReactDOM.render(<App />, document.getElementById("root"));
