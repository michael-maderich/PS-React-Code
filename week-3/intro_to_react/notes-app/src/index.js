import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*import {notesData, moreNotesData} from './notes-data';

let notesDataPropValue = notesData;
let isNotesData = true;
window.setInterval( () => {
  if (isNotesData) {
    notesDataPropValue = moreNotesData;
    isNotesData = false;
  }
  else {
    notesDataPropValue = notesData;
    isNotesData = true;
  }
}, 1000);*/
import notesData from './notes-data';

ReactDOM.render(
  <React.StrictMode>
    <App notesData={notesData} />
  </React.StrictMode>,
  document.getElementById('root')
);