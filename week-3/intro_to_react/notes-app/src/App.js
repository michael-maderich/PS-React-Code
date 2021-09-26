import './App.css';
import Title from './Title';
import Note from './Note';

function App(props) {

  const notesData = props.notesData;
  const secondMessage = "It is awesome. I guess?";

  const NotesElements = [];
  for (let i = 0; i < notesData.length; i++) 
    NotesElements.push( <Note heading={notesData[i].title} message={notesData[i].message} /> );

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <div>
          <Note
            heading="First note"
            message="Today we are screwing up React!"
          />
          <Note
            heading={'Second note'}
            message={secondMessage}
          />
          {NotesElements}
        </div>
      </header>
    </div>
  );
}

export default App;
