//const fetch = require('node-fetch');

let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=609f0e59de801ba310d96b5bec9b138c`;

fetch(url)
let promise = new Promise((resolve, reject) => {
  resolve("done");

//  reject(new Error("…")); // ignored
//  setTimeout(() => resolve("…")); // ignored
});