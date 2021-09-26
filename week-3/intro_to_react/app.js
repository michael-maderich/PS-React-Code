const message = `Hello World`;

// Using "Vanilla" JS:
/*document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector('.container');
    div.innerHTML = '<h1>' + message + '</h1>';
})*/

// Using React:
ReactDOM.render(
    <h1>{message}</h1>,
    document.querySelector('.container')
);