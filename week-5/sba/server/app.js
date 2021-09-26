var express = require('express');
var mongoose = require('mongoose');
// Create Mongoose model
var toDoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date
    }
});
var ToDoModel = mongoose.model('ToDo', toDoSchema);
// DB Config
var DB_NAME = 'Week5SBA';
var DB_URL = "mongodb://localhost:27017/" + DB_NAME;
// Configure mongoose to tell us if we succeed or if we fail to connect to the DB
mongoose.connection.on('open', function () { return "MongoDB: Successfully connected to " + DB_URL; });
mongoose.connection.on('error', function (error) { return "MongoDB: Failed to connect to " + DB_URL + ". Error " + error.message; });
console.log('MongoDB: Connecting to DB...');
mongoose
    .connect(DB_URL)
    .then(function () { return console.log("Connected to MongoDB at " + DB_URL); })["catch"](function (error) { return console.log("Failed to connect to DB: " + error.message); });
// Add some test data to database, but only if not already there
// Create express server for our API
var app = express();
var PORT = 8888;
console.clear();
console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n');
// This allows us to parse HTTP POST request bodies
app.use(express.json());
// Create routes for our express server
app.use(function (req, res, next) {
    //    console.log(`${req.method} request on ${req.path}. Parameters:`, req.params);
    next();
});
app.get('/', function (req, res) {
    res.send('Lorem ipsum, world!');
});
app.get('/todos', function (req, res) {
    ToDoModel.find() // find all
        .then(function (toDos) {
        console.log("All ToDos:\n", toDos);
        if (toDos.length === 0)
            res.status(500).send('Empty list');
        res.status(200).json(toDos);
    })["catch"](function (error) {
        res.status(500).send('Error: ' + error.message);
    });
});
app.get('/todos/:id', function (req, res) {
    console.log('hmm'); // None of these console logs show up
    var id = req.params.id; // might not be correct
    console.log(id);
    ToDoModel
        .findById(id)
        .then(function (toDo) {
        console.log('Todo found:', toDo);
        res.status(200).send(toDo);
    })["catch"](function (error) { return res.status(500).send("Cannot locate endpoint: Invalid ID '" + id + ".' Please check ID number and try again. Thank you."); });
});
app.post('/todos', function (req, res) {
    var body = req.body;
    //   const {content} = req.body;
    //    console.log('content is ', content);
    console.log("POST /todos. Body is " + JSON.stringify(body));
    if (!body || !body.content) {
        res
            .status(400)
            .send("Error - malformed POST body: " + JSON.stringify(body));
    }
    console.log(body.content);
    var newToDo = new ToDoModel({
        content: body.content,
        date: Date.now()
    });
    newToDo.save()
        .then(function () { return res.status(200).send(newToDo); })["catch"](function (error) { return res.status(500).send(error.message); });
});
/**
 * PUT /todos/:id
 *
 * - create route
 * - confirm we are getting PUT request body
 * - create mongoose model
 * - save to database and return success message
 */
app.put('/todos/:id', function (req, res) {
    var body = req.body;
    var id = req.params.id;
    if (!body || !body.content) {
        res.status(400).send("Error, bad request: " + JSON.stringify(body));
        return;
    }
    // Get todo from DB if it exists
    // ToDoModel.findByIdAndUpdate({id}, body.content, {new:true})
    //     .then(data => res.status(200).send(`${data}`))
    //     .catch(error => res.status(500).send(`Error updating: ${error}`));
    ToDoModel.findById(id)
        .then(function (toDoToUpdate) {
        toDoToUpdate.content = body.content;
        toDoToUpdate.save().then(function (data) { return res.status(200).send(data); })["catch"](function (error) { return res.status(500).send("Error updating: " + error); });
    })["catch"](function (error) {
        return res.status(500).send("Error updating: Invalid ID '" + id + ".' Please check ID number and try again. Thank you.");
    });
});
/**
 * DELETE /todos/:id
 * - create route
 * - get the note from the database
 * - successfully delete todo and return message
 */
// Code below seems to be correct format for findByIdAndDelete(), but neither one returns an error for
// invalid Id. Instead, 'null' is returned in docs and err not triggered
// ToDoModel.findByIdAndDelete(id, (err, docs) => {
//     res.status(err ? 500 : 200)
//         .send(err
// 			? `Error on deletion: Invalid ID '${id}.' Please check ID number and try again. Thank you.`
// 			: `Successfully deleted ${docs}`
// 	);
// });
// So we flipped around the ternary boolean to check if docs exists..
app["delete"]('/todos/:id', function (req, res) {
    var id = req.params.id.toString().trim();
    ToDoModel.findByIdAndDelete(id, function (err, docs) {
        res.status(docs ? 200 : 500) // Should be something other than 500 for fail. Not really server error. More of bad request
            .send(docs
            ? docs
            : "Error on deletion: Invalid ID '" + id + ".' Please check ID number and try again. Thank you.");
    });
    // ToDoModel.findByIdAndDelete(id)
    // 	.then(doc => {
    // 		console.log(`Successfully deleted ${doc}`);
    // 		res.status(200).send(doc);
    // 	})
    // 	.catch(error =>
    // 		res
    // 			.status(500)
    // 			.send(
    // 				`Error on deletion: Invalid ID '${id}.' Please check ID number and try again. Thank you.`
    // 			)
    // 	);
});
app.listen(PORT, function () { return console.log('Express server started on port', PORT); });
