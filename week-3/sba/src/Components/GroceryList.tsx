import {GroceryItemType} from '../typeDefs/typeDefs';
//import {GroceryListType} from './typeDefs/typeDefs';
import GroceryItem from './GroceryItem';

export default function GroceryList( props:any ) {

    return (
      <div>
        <h2>Grocery List:</h2>
        <table>
          <thead>
            {!props.groceryList.length ? <tr><th>Empty!</th></tr> :
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Found?</th>
            </tr>
            }
          </thead>
          <tbody>
            { props.groceryList.map( (groceryItem: GroceryItemType) => (
              <GroceryItem
                  item={groceryItem}
                  handleDelete={props.handleDelete}
                  handleCheck={props.handleCheck}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
}
