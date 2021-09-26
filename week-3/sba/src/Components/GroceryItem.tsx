import {Link} from 'react-router-dom';

export default function GroceryItem(props:any) {

    return (
		<tr className='grocery-item' key={props.item.id}>
			<td>
            	<Link to={`/list/${props.item.id}`}>{props.item.product}</Link>
			</td>
			<td>{props.item.category}</td>
			<td>
				<input
					type='checkbox'
					id={`chk${props.item.id}`}
					defaultChecked={props.item.found}
					onChange={props.handleCheck}
				/>
			</td>
			<td>
				<input
					type='button'
					value='Delete'
					id={`del${props.item.id}`}
					onClick={props.handleDelete}
				/>
			</td>
		</tr>
	);
}