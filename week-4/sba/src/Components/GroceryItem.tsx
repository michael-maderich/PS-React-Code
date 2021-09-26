export default function GroceryItem(props:any) {
	const {product, groceries, handleCheck} = props;
    return (
		<tr className='grocery-item' key={product}>
			<td>
            	{product}
			</td>
			<td>
				<input
					type='checkbox'
					id={product}
					defaultChecked={groceries.indexOf(product) >= 0}	// Checked if item is in groceries
					onChange={handleCheck}
				/>
			</td>
		</tr>
	);
}