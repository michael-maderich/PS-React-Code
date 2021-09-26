interface Person {
    name:string;
    friends?:Array<Person>;
}

// const person: Person = {
//   name: "Adam",
//   friends: [
//     {
//       name: "John",
//       friends: [
//         {
//           name: "William",
//           friends: [
//             {
//               name: "Emma",
//             },
//           ],
//         },
//         {
//           name: "Olivia",
//           friends: [
//             {
//               name: "Michael",
//               friends: [
//                 {
//                   name: "Eve",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
//};

let eve:Person = {name:"Eve"};
let michael:Person = {name:"Michael", friends:[eve]};
let olivia:Person = {name:"Olivia", friends:[michael]};
let emma:Person = {name:"Emma"};
let william:Person = {name:"William", friends:[emma]};
let john:Person = {name:"John", friends:[william, olivia]};
let adam:Person = {name:"Adam", friends:[john]};

const person:Person = adam;

function getAllTheNames(person:Person):Array<string> {
  const names:Array<string> = [person.name];
  if (person.friends) {
    return names.concat(...person.friends.map(getAllTheNames));
  }
  return names;
}

console.log(getAllTheNames(person));
// ["Adam", "John", "William", "Emma", "Olivia", "Michael", "Eve"]


// Bonus work 1
function getFirstLevelFriends(person:Person):Array<string> {
    let names:Array<string> = [];
    if (person.friends) {
        person.friends.forEach(friend => names = names.concat(friend.name));
    }
    return names;
}

console.log(getFirstLevelFriends(person));


// Bonus work 2 -- was trying to think of how to possibly do recursivley but too much other work to do.
/*function separation(person:Person, name:string):number {
    if (person.name.toLowerCase() === name.toLowerCase()) return 0;
    return 
//   const names: Array<string> = [person.name];
//   if (person.friends) {
//     return names.concat(...person.friends.map(getAllTheNames));
//   }
//   return names;
}*/

