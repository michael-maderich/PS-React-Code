import { ToDoItemType } from "../typeDefs/typeDefs";
import { useParams } from "react-router-dom";

export default function ToDoItemPage(props: any) {
    const targetId = useParams<{id:string}>().id;
    console.log(targetId);
    const toDoItem:ToDoItemType = props.toDoList.find( ({id}:{id:number}) => id === Number(targetId));
    console.log(toDoItem);
	return (
		<div>
			<h2>To-Do Item:</h2>
			<table>
				<thead>
					<tr>
						{!toDoItem ? (<th>To-Do Item not found!</th>) :
							(Object.keys(toDoItem).map(property =>
                                property === "id" ? null : ( // Render column headers from property keys. Id field is not rendered
                                    <th>{property.charAt(0).toUpperCase() + property.slice(1)}</th>
                                ) // 1st letter uppercase
							)
						)}
					</tr>
				</thead>
				<tbody>
                    <tr className='to-do-item' key={toDoItem.id}>
                        <td>{toDoItem.title}</td>
                        <td>{toDoItem.details}</td>
                        <td>
                            <input
                                type='checkbox'
                                id={`chk${toDoItem.id}`}
                                defaultChecked={toDoItem.completed}
                                onChange={props.handleCheck}
                            />
                        </td>
                    </tr>
				</tbody>
			</table>
		</div>
	);
}