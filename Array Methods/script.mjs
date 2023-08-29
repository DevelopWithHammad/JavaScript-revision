// toString Method

// let nums = [1, 2, 3, 4, 5, 6]
// console.log(nums);
// let stringnums = nums.toString(); // toString converts array to string

// console.log(stringnums);



// join Method

// let nums = [1, 2, 3, 4, 5, 6]
// console.log(nums, typeof nums);
// let joinedNums = nums.join("_"); // join each element of array
// console.log(joinedNums, typeof joinedNums);




// // pop Method

// let nums = [1, 2, 3, 4, 5, 6]
// console.log(nums, typeof nums);

// nums.pop()  // remove the last index of an array
// console.log(nums);


// let r = nums.pop()
// console.log(r); // return the last index of an array






// // push Method

// let nums = [1, 2, 3, 4, 5, 6]
// console.log(nums);

// let newIndex = nums.push(7)
// nums.push()  // add in the last index of an array
// console.log(nums);





// // shift Method

// let nums = [1, 2, 3, 4, 5, 6]
// console.log(nums);

// let removeIndex = nums.shift()  // remove the fisrt element of an array
// console.log(nums);






// // unshift Method

// let nums = [1, 2, 3, 4, 5, 6]
// console.log(nums);

// let addIndex = nums.unshift(0)  // add in the first index of an array
// console.log(nums);





// const actors = [
//     {
//         name: "Actor 1",
//         payment: 1000
//     },
//     {
//         name: "Actor 2",
//         payment: 2000
//     },
//     {
//         name: "Actor 3",
//         payment: 5000
//     },
// ]

// // for loop
// for (let i = 0; i < actors.length; i++) {
//     actors[i].payment = actors[i].payment - 100
//     console.log(actors[i]);
// }



// // forEach loop

// actors.forEach((eachActor) => {
//     eachActor.payment = eachActor.payment - 100
//     console.log(eachActor);
// })




//   // forOf loop

// for (let actor of actors) { // each actor of actors is in variable let

//     console.log(actor.payment);
//     actor.payment = actor.payment - 100 // deducted 100 rs of each actor
// }


// console.log(actors)






// filter


// const students = [
//     {
//         name: "Student 1",
//         marks: 45
//     },
//     {
//         name: "Student 2",
//         marks: 80
//     },
//     {
//         name: "Student 4",
//         marks: 51
//     },
//     {
//         name: "Student 5",
//         marks: 65
//     },
//     {
//         name: "Student 6",
//         marks: 47
//     },
//     {
//         name: "Student 7",
//         marks: 42
//     },
//     {
//         name: "Student 8",
//         marks: 45
//     },
//     {
//         name: "Student 9",
//         marks: 32
//     },
//     {
//         name: "Student 10",
//         marks: 44
//     }

// ]

// students.filter((eachStudent) => { // we are giving a parameter (eachstudent) which means by the help of .filter method each of the student in students array will stored in eachStudent


//     console.log(eachStudent);
// })

// // now we have to filter out our failed students which marks are less than 45. We can donr it by the help of filter in different methods

// Method 1:

// const failedStudents = students.filter((eachStudent) => {
//     if (eachStudent.marks < 45) {
//         return true // check if any student contained less than 45 marks it return true
//     }
//     else {
//         return false // else if no student contained less than 45 marks it return false
//     }
// })
// console.log(failedStudents);



// // Method 2:
// // method 1 and method 2 is same the only difference is we don't need to add else block in method 2
// const failedStudents = students.filter((eachStudent) => {
//     if (eachStudent.marks < 45) {
//         return true
//     }
//     return false
// })
// console.log(failedStudents);




// // Method 3:
// // in method 3 we don't even need to add if block and return
// const failedStudents = students.filter((eachStudent) => eachStudent.marks < 45)
// console.log(failedStudents);





//  Map

// const users = [
//     {
//         fName: "Hammad",
//         lName: "Ur Rehman"
//     },
//     {
//         fName: "Shafiq",
//         lName: "Ur Rehman"
//     },
//     {
//         fName: "Fazal",
//         lName: "Ur Rehman"
//     },
// ];

// // In users.map's parameter we are getting eachUser in the local variable. However, we can name it whatever we want

// const fullNamedUser = users.map((eachUser) => {
//     return {
//         fullName: `${eachUser.fName} ${eachUser.lName}`
//     }
// })

// console.log(users);
// console.log(fullNamedUser);







// // Reduce
// // adding each movie budget by reduce and forEach

// const movies = [
//     {
//         name: "Interstellar",
//         budget: 100
//     },
//     {
//         name: "Social",
//         budget: 150
//     },
//     {
//         name: "Matrix",
//         budget: 300
//     },
// ];

// // by forEach:

// let total = 0;

// movies.forEach((movie) => {
//     total = total + movie.budget
// })


// // by reduce:

// const total = movies.reduce((acc, movie) => {
//  //  0  =  0  +  100+150+300
//     acc = acc + movie.budget;
//     return acc;
// }, 0)

// console.log(total);




// //  indexOf 
// //  in indexOf we have to pass a value in side the paranthesis if that value is present in the array it returns true otherwise it returns -1

// const admins = [2, 1, 5];

// const user = {
//     name: "XYZ",
//     id: 5
// }

// const isAdmin = admins.indexOf(user.id) !== -1

// console.log(isAdmin);



// "Hammad", "Khan", "Sufiyan", "zakir", "Mohsin"

// const moniters = [2, 1, 5];

// const students = {
//     name: "XYZ",
//     id: 3 
// }

// const isMoniter = moniters.indexOf(students.id) !== -1

// console.log(isMoniter);




// // includes

// const students = ["Hammad", "Huzaifa", "Ali"];

// const moniter = {
//     name: 'Hammad'
// }

// console.log(students.includes(moniter.name));




// // find

// const users = [
//     {
//         name: "xyz",
//         id: 1
//     },
//     {
//         name: "abc",
//         id: 2
//     },
//     {
//         name: "pqr",
//         id: 3
//     },
// ]

// const myUser = users.find((user) =>  user.id === 3)

// console.log(myUser);






// // splice

// const names = ["John", "Jane", "Shyam", "Hammad", "Sameer", "Montu"]

// console.log(names);

// names.splice(1, 1)

// console.log(names);









// const countriesToTour = [
//     {
//         name: "Siberia",
//         budget: 5000,
//         passenger: 12
//     },
//     {
//         name: "Russia",
//         budget: 6000,
//         passenger: 12
//     },
//     {
//         name: "UK",
//         budget: 7000,
//         passenger: 12
//     },
//     {
//         name: "America",
//         budget: 1000,
//         passenger: 12
//     },
//     {
//         name: "India",
//         budget: 1000,
//         passenger: 12
//     },
//     {
//         name: "Italy",
//         budget: 1000,
//         passenger: 12
//     },
// ]



// for (let eachCountryTour of countriesToTour) {
//     console.log(`The countries to be tour are ${eachCountryTour.name} and will cost budget ${eachCountryTour.budget}`);
// }

// // we can get all the countries name through forEach method:
// countriesToTour.forEach((eachCountryName) => {
//   console.log(`Countries to tour are: ${eachCountryName.name}`);
// })

// // we can get all the countries name through map method:
// countriesToTour.map((eachCountryName) => {
//     console.log(`Countries to tour are: ${eachCountryName.name}`);
// })

// // we can get all the countries name through filter method:
// countriesToTour.filter((eachCountryName) => {
//     console.log(`Countries to tour are: ${eachCountryName.name}`);
// })





function createNowHandler() {
    
}