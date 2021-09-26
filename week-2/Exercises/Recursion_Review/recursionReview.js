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
var eve = { name: "Eve" };
var michael = { name: "Michael", friends: [eve] };
var olivia = { name: "Olivia", friends: [michael] };
var emma = { name: "Emma" };
var william = { name: "William", friends: [emma] };
var john = { name: "John", friends: [william, olivia] };
var adam = { name: "Adam", friends: [john] };
var person = adam;
function getAllTheNames(person) {
    var names = [person.name];
    if (person.friends) {
        return names.concat.apply(names, person.friends.map(getAllTheNames));
    }
    return names;
}
console.log(getAllTheNames(person));
// ["Adam", "John", "William", "Emma", "Olivia", "Michael", "Eve"]
// Bonus work 1
function getFirstLevelFriends(person) {
    var names = [];
    if (person.friends) {
        person.friends.forEach(function (friend) { return names = names.concat(friend.name); });
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
