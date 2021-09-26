import React, {useState} from 'react';
import './App.css';
import { useCookies } from 'react-cookie';
import {CookieSetOptions} from 'universal-cookie';

function App() {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [cookies, setCookie]: [
		{ Name?:string, Password?:string, user?: any },
		(
			name: "user",
			value: any,
			options?: CookieSetOptions | undefined
		) => void,
		(name: "user", options?: CookieSetOptions | undefined) => void
  ] = useCookies(["user"]);

  function identity<T>(arg: T): T { return arg; }

  localStorage.setItem('test', 'test');

  const handle = () => {
    setCookie('Name' as "user", name, { path: '/' });
    setCookie('Password' as "user", pwd, { path: '/' });
  };

  return (
    <div className="App">
      <h1>Name of the user:</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
        type="password"
        placeholder="name"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <div>
        <button onClick={handle}>Set Cookie</button>{' '}
      </div>
      <br />
      {cookies.Name && (
      <div>
        Name: <p>{cookies.Name}</p>
      </div>
      )}
      {cookies.Password && (
      <div>
        Password: <p>{cookies.Password}</p>
      </div>
      )}
      <div>
        <p>Value: 1000</p>
        <button onClick={() => console.log('click')}>Change State!</button>
      </div>
    </div>
  );
}

export default App;
