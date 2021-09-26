import { GroceryItemType } from "../typeDefs/typeDefs";
import { useParams } from "react-router-dom";

export default function GroceryItemPage(props: any) {
    const targetId = useParams<{id:string}>().id;
    console.log(targetId);
    const groceryItem:GroceryItemType = props.groceryList.find( ({id}:{id:number}) => id === Number(targetId));
    console.log(groceryItem);
	return (
		<div>
			<h2>Grocery Item:</h2>
			<table>
				<thead>
					<tr>
						{!groceryItem ? (<th>Grocery Item not found!</th>) :
							(Object.keys(groceryItem).map(property =>
                                property === "id" ? null : ( // Render column headers from property keys. Id field is not rendered
                                    <th>{property.charAt(0).toUpperCase() + property.slice(1)}</th>
                                ) // 1st letter uppercase
							)
						)}
					</tr>
				</thead>
				<tbody>
                    <tr className='grocery-item' key={groceryItem.id}>
                        <td>{groceryItem.product}</td>
                        <td>{groceryItem.category}</td>
                        <td>
                            <input
                                type='checkbox'
                                id={`chk${groceryItem.id}`}
                                defaultChecked={groceryItem.found}
                                onChange={props.handleCheck}
                            />
                        </td>
                    </tr>
				</tbody>
			</table>
		</div>
	);
}