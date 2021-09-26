import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Switch, Route, Link
} from "react-router-dom";

import { ToDoItemType } from "./typeDefs/typeDefs";
import { ToDoListType } from "./typeDefs/typeDefs";
import { InputElement } from "./typeDefs/typeDefs";

import { Home } from "./Components/Home";
import ToDoList from "./Components/ToDoList";
import ToDoItemPage from "./Components/ToDoItemPage";
import AddToDo from "./Components/AddToDo";

let toDoList: ToDoListType = [
	{ id: 1, title: "Get Milk", details: "2%", completed: false },
	{ id: 2, title: "Fix doorknob", details: "It squeaks", completed: true }
];

export const App = () => {
	const [newToDo, setNewToDo] = useState({} as ToDoItemType); // State vars of ToDo to be added
	const [toDos, setToDos] = useState(toDoList);

	const handleChange: React.ChangeEventHandler<InputElement> = (event: React.ChangeEvent<InputElement>) => {
		const { name, value } = event.currentTarget; //  Must pull these off event/target object now or will be null later. Not sure why
		console.log(name, ":", value);
		setNewToDo(prev => ({
			...prev,
			id: Date.now(),
			[name]: value,
			completed: false
		}));
	};

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!newToDo.title) return;
		setToDos((prev: ToDoListType) => [newToDo, ...prev]);
		setNewToDo({} as ToDoItemType);
//		<Redirect to='/' />;		// Doesn't work. Must implement some other way
	};

	const handleDelete: React.MouseEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement;
		setToDos(prev => prev.filter(toDo => `del${toDo.id}` !== target.getAttribute('id')));
	};

  const handleCheck:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target as HTMLInputElement;
    setToDos( (prev) => {
      prev.forEach( (toDo, index) => {
        if (`chk${toDo.id}` === target.getAttribute('id')) {
          toDo.completed = !toDo.completed;
          console.log(toDo);
//          console.log(prev);
          return prev;//.slice(0,index).concat(toDo).concat(prev.slice(index+1));
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
						Home
					</Link>
					<Link style={padding} to='/list'>
						To-Do List
					</Link>
					<Link style={padding} to='/add-new'>
						Add New To-Do
					</Link>
				</div>
				<Switch>
					<Route path='/list/:id'>
						<ToDoItemPage
							toDoList={toDos}
							handleCheck={handleCheck}
							handleDelete={handleDelete}
						/>
					</Route>
					<Route path='/list'>
						<ToDoList
							toDoList={toDos}
							handleCheck={handleCheck}
							handleDelete={handleDelete}
						/>
					</Route>
					<Route path='/add-new'>
						<AddToDo
							newToDo={newToDo}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
			<div>
				<i>To-Do App, Michael Maderich 2021</i>
			</div>
		</div>
	);

};

ReactDOM.render(<App />, document.getElementById("root"));
