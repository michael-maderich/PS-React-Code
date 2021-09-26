/*
Here is an array of student data:
```

const students = [

  { name: 'Quincy', grade: 96 },

  { name: 'Jason', grade: 84 },

  { name: 'Alexis', grade: 100 },

  { name: 'Sam', grade: 65 },

  { name: 'Katie', grade: 90 }

];

```

Use .map to get an array of the names of all the students
Do the same but get all the students names lowercase
Use .map to get an array of the grades of all the students
Use .filter to get an array of all students with a grade below 90
Use .filter to get an array of the students names with a grade above 90
Use .reduce to get the average (mean) grade of the entire class
Use .reduce to get a single object. Each property of the object should be the name of the student. The value of each property should be the students grade. It should look something like this:
```
{ quincy: 96, jason: 84  },


```

That is just an example - you want the object to have all the students. Each student’s name should be lowercase.



Here is an array of pets:
```
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

```


Use .reduce to get an object which has a property for each pet name and the value of each property is the number of times the pet name is in the array. Example:
{ dog: 2 }
*/

const students = [
  { name: "Quincy", grade: 96 },
  { name: "Jason", grade: 84 },
  { name: "Alexis", grade: 100 },
  { name: "Sam", grade: 65 },
  { name: "Katie", grade: 90 },
];

let studentNames:string[] = students.map(student => student.name);
console.log(`1: `, studentNames);

let lowercaseNames:string[] = students.map(student => student.name.toLowerCase());
console.log(`1a: `, lowercaseNames);

let studentGrades = students.map(student => student.grade);
console.log('2: ', studentGrades);

let studentsBelowA = students.filter(student => student.grade < 90);
console.log(`3: `, studentsBelowA);

let studentNamesWithA = students.filter((student => student.grade >=90 )).map(student => student.name);
console.log('4: ', studentNamesWithA);

let averageGrade = students.reduce((average, student, index) => {
    return (average*index + student.grade)/(index+1);
}, 0);
console.log('5: ', averageGrade);

type sObj = {[key:string]:number}
let studentObject:sObj = students.reduce( (obj:sObj, student) => {
    obj[student.name] = student.grade;
    return obj;
}, {} as sObj);
console.log('6: ', studentObject);

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

let petCount:any = pets.reduce( (obj:sObj, pet) => {
    if (obj.hasOwnProperty(pet)) ++obj[pet];
    else obj[pet] = 1;
    return obj;
},{});
console.log('7: ', petCount);