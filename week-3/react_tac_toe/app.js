class Header extends React.Component {
    render () {
        return (<h1>React Tac Toe</h1>);
    }
}

class Player extends React.Component {
    render () {
        return (
            <div>
                <h2>Player</h2>
                <h3>Wins:</h3>
            </div>
        );
    }
}
class App extends React.Component {
    render () {
        return (
          <div>
            <Header />
            <Player />
            <Player />
          </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);