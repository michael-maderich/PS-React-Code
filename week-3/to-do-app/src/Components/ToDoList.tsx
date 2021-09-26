import {ToDoItemType} from '../typeDefs/typeDefs';
//import {ToDoListType} from './typeDefs/typeDefs';
import ToDoItem from './ToDoItem';

export default function ToDoList( props:any ) {

    return (
      <div>
        <h2>To-Do List:</h2>
        <table>
          <thead><tr>
            {!props.toDoList.length ? <th>Empty!</th> : Object.keys(props.toDoList[0]).map((property) =>
                property==='id'? null :     // Render column headers from property keys. Id field is not rendered
                (<th>{property.charAt(0).toUpperCase()+property.slice(1)}</th>)   // 1st letter uppercase
            )}
          </tr></thead>
          <tbody>
            { props.toDoList.map( (toDoItem: ToDoItemType) => (
              <ToDoItem
                  item={toDoItem}
                  handleDelete={props.handleDelete}
                  handleCheck={props.handleCheck}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
}
