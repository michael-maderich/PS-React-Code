const express = require('express');
//import express from 'express';
//import FS from 'fs';
const FS = require('fs');

const app = express();
const port = 3000;
//const DATA_URL = 'https://gist.githubusercontent.com/atduskgreg/3cf8ef48cb0d29cf151bedad81553a54/raw/82f142562cf50b0f6fb8010f890b2f934093553e/animals.txt';

app.get("/", (req, res) => {
  res.write('<!DOCTYPE html>\n<html>\n<head></head>\n<body>');
  res.write('\n\t<div style="text-align:center;">');
  res.write(`\n\t<h1><a href="animals">Click Here for Animals!</a></h1>`);
  res.write('\n\t</div>\n</body>\n</html>');
  res.end();
});

app.get("/animals", (req, res) => {

  FS.readFile("./animals.txt", "utf8", (err, data: string) => {
    if (err) {
      console.error(err);
      return;
    }
    const queryParams:{} = JSON.stringify(req.query);
//    console.log('Query parameters:', queryParams);
    let animalsArray:string[] = data.split("\n");
    
    const queryText: string | undefined = req.query.q;

    if (queryText) {    // If the url has a query string of '?q=XXXX'...
//      console.log('query =', queryText);
      const desiredAnimals = animalsArray.filter( animal => animal.toLowerCase().includes(queryText.toLowerCase()));
//      console.log(desiredAnimals);
      res.write(`<h1>Results for "${queryText}":</h1>`);
      if (desiredAnimals.length) {    // Use 'truthy' comparison to see if array is empty
        res.write('<ul>');
        desiredAnimals.forEach( animal => res.write(`<li style="font-size:1.5em;">${animal}</li>`) );
        res.write('</ul>');
      }
      else res.write(`<h2>${queryText} not found!</h2>`);
    }
    else {    // If no parameter in URL, display full animal list
      res.write(`<h1>Animal List:</h1><ul>`);
      animalsArray.forEach((animal) => {
        res.write(`<li style="font-size:1.5em;">${animal}</li>`);});
        res.write('</ul>');
    }
    res.end();
  });
});

// curl request to post new animal: curl -XPOST -d '["Awesome Iguana"]' -H 'content-type: application/json' localhost:3000/animals
app.post('/animals', (req, res) => {
  console.log(`Post request received at ${req.path}`);
  console.log(`Request body:`, req.body);
  const newAnimal = req.body[0];
  console.log('New animal: ', newAnimal);

  FS.writeFile('./animals.txt', newAnimal, { flag: 'a+' }, (err) => {
    if (err) console.log('Error: ', err);

    console.log('Success writing to file!');
    res.redirect('/animal');
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});