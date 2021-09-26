//import {GroceryItemType} from '../typeDefs/typeDefs';
//import {GroceryListType} from './typeDefs/typeDefs';
import GroceryItem from './GroceryItem';

export default function GroceryList( props:any ) {

    return (
      <div>
        <h2>Grocery List:</h2>
        <table>
          <thead>
            {!props.groceries.length ? <tr><th>Empty!</th></tr> :
            <tr>
              <th>Product</th>
              <th>Remove?</th>
            </tr>
            }
          </thead>
          <tbody>
            { props.groceries.map( (product: string) => (
              <GroceryItem
                  product={product}
                  groceries = {props.groceries}
                  handleCheck={props.handleCheck}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
}