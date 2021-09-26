import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Switch, Route, Link
} from "react-router-dom";

import { GroceryItemType, GroceryListType } from "./typeDefs/typeDefs";
import { InputElement } from "./typeDefs/typeDefs";

import GroceryList from "./Components/GroceryList";
import GroceryItemPage from "./Components/GroceryItemPage";
import AddGrocery from "./Components/AddGrocery";

const CATEGORY_LIST = ['Meat', 'Dairy', 'Fruit', 'Vegetables', 'Cleaning', 'Medicine'];

let groceryList: GroceryListType = [
	{ id: 1, product: "Milk", category: "Dairy", found: false },
	{ id: 2, product: "Bananas", category: "Fruit", found: true }
];

export const App = () => {
	const [newGrocery, setNewGrocery] = useState({category:CATEGORY_LIST[0]} as GroceryItemType); // State vars of Grocery to be added
	const [groceries, setGroceries] = useState(groceryList);
//	const [categories, setCategories] = useState(CATEGORY_LIST);
	const categories = CATEGORY_LIST;

	const handleChange: React.ChangeEventHandler<InputElement> = (event: React.ChangeEvent<InputElement>) => {
		const { name, value } = event.currentTarget; //  Must pull these off event/target object now or will be null later. Not sure why
		console.log(name, ":", value);
		setNewGrocery(prev => ({
			...prev,
			id: Date.now(),
			[name]: value,
			found: false
		}));
	};

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!newGrocery.product) return;
		setGroceries((prev: GroceryListType) => [...prev, newGrocery]);
		setNewGrocery({ category: CATEGORY_LIST[0] } as GroceryItemType);
	};

	const handleDelete: React.MouseEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement;
		setGroceries(prev => prev.filter(grocery => `del${grocery.id}` !== target.getAttribute('id')));
	};

  const handleCheck:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement;
    setGroceries( (prev) => {
      prev.forEach( (grocery, index) => {
        if (`chk${grocery.id}` === target.getAttribute('id')) {
          grocery.found = !grocery.found;
          console.log(grocery);
          console.log(prev);
          return prev.slice(0,index).concat(grocery).concat(prev.slice(index+1));
        }
      });
      return prev;
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
				</div>
				<Switch>
					<Route path='/list/:id'>
						<GroceryItemPage
							groceryList={groceries}
							handleCheck={handleCheck}
							handleDelete={handleDelete}
						/>
					</Route>
					<Route path='/list'>
						<GroceryList
							groceryList={groceries}
							handleCheck={handleCheck}
							handleDelete={handleDelete}
						/>
					</Route>
					<Route path='/'>
						<AddGrocery
							newGrocery={newGrocery}
							categories={categories}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
						<GroceryList
							groceryList={groceries}
							handleCheck={handleCheck}
							handleDelete={handleDelete}
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
