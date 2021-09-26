import mongoose from 'mongoose';

const MONGO_BASE_URL = 'mongodb://';
const MONGO_HOST = 'localhost';
const MONGO_PORT = 27017;
const MONGO_DB_NAME = 'test';
//const MONGO_URL = `${MONGO_BASE_URL}${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`;
const MONGO_URL = 'mongodb://localhost:27017/test';

async function main() {
	console.log("Connecting to MongoDB at:", MONGO_URL);
	await mongoose.connect(MONGO_URL);

    console.log('Started..');

    const kittySchema = new mongoose.Schema({
        name:String,
        gender:String
    });
    
    kittySchema.methods.speak = function speak() {
        const greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    }
    const Kitten = mongoose.model('Kitten', kittySchema);

    const silence = new Kitten({ name: 'Silence', gender:'male' });
    const golden = new Kitten({name: 'Golden', gender:'female'});

    await silence.save();

    console.log(silence.name, 'adopted!');
    silence.speak();
}
main().catch(err => console.log(err));
