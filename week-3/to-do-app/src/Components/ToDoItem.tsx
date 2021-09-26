import {Link} from 'react-router-dom';

export default function ToDoItem(props:any) {

    return (
		<tr className='to-do-item' key={props.item.id}>
			<td>
            	<Link to={`/list/${props.item.id}`}>{props.item.title}</Link>
			</td>
			<td>{props.item.details}</td>
			<td>
				<input
					type='checkbox'
					id={`chk${props.item.id}`}
					defaultChecked={props.item.completed}
//                    defaultChecked={props.item.completed}
					onChange={props.handleCheck}
				/>
			</td>
			<td>
				<input
					type='button'
					value='Delete'
					id={`del${props.item.id}`}
					onClick={props.handleDelete}//`del${props.item.id}`)}
//					onChange={props.handleDelete(`del${props.item.id}`)}
				/>
			</td>
		</tr>
	);
}