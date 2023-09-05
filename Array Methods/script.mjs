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





// // find 

// const studentsAge = [10, 13, 19, 21];
// console.log(studentsAge);

// const findingAge = studentsAge.find(age => age >= 18) 

// console.log(findingAge);




// // revision from yahoo baba array video
// // array intro

// let arrOfPrice = [180, 270, 100, 40, 250];
// let arrOfDishes = ["Biryani", "Tikka", "Chana", "Paratha", "Nihari"];
// let sum = 0;

// // document.write("<ul>")
// for(let i = 0; i < 5; i ++) {
//     document.write(`The ${arrOfDishes[i]} is Rs: ${arrOfPrice[i]} <br />`)
//     sum = sum + arrOfPrice[i]
// }
// document.write("<br />")

// // document.write("</ul>")
// document.write(`<b>Your total is: ${sum}</b>`)


// // Creating an array

// const arr = new Array()

// arr[0] = true;
// arr[1] = "Hammad"
// arr[2] = 12
// arr[3] = {
//     languages: ["Javascript", "C++", "Python", "Ruby"]
// }

// console.log(arr);



// let studentsData = [
//     ["Hammad", 19, "SMIT", "Karachi"],
//     ["Arham", 16, "HMIT", "Karachi"],
//     ["Junaid", 18, "HMIT", "Karachi"],
//     ["Aman", 14, "HMIT", "Karachi"],
//     ["Nabeel", 21, "HMIT", "Karachi"],
//     ["Haider", 25, "HMIT", "Karachi"],
//     ["Ali", 22, "HMIT", "Karachi"],
//     ["Usman", 20, "HMIT", "Karachi"],
//     ["Abdullah", 19, "HMIT", "Karachi"]
// ]
// let studentsCount = 1;
// // printing above array in log
// console.log("studentsData ===>>>", studentsData);

// console.log("Hammad's Data ====>>>>",studentsData[0]);

// console.log("Hammad's age ====>>>>",studentsData[0][1]);



// // printing above array in DOM

// document.write("<b>" + "studentsData:" + "<br />" + "<br />" + "</b>")
// document.write("<table border='1px'>")
// for(let i = 0; i < studentsData.length; i++) {
//     document.write("<tr>")
//     // document.write("<td>" )

//     document.write("<td>" + "<b>" + "Student "  + studentsCount++ + ":" + "</b>"    + " " + "</td>")
//     for(let j = 0; j < 4; j++) {
//         document.write("<td>" + studentsData[i][j]  + "</td>")
//     }
//     // document.write("</td>" )
//     document.write("</tr>")
//     document.write("<br />")

// }
// document.write("</table>")





// // Modify method 

// const studentData = ["Hammad", 19, "XI", "Software Engineer"];
// console.log(students);

// students[3] = "Mechinal Engineer"
// console.log(students);



// // Delete method:

// const students = ["Hammad", "Aman", "Arham", "Junaid"];
// console.log(students);

// delete students[0];

// console.log(students);
// document.write(students);



// // Sort Method

// // Example 1
// const students = ["Hammad", "Aman", "Arham", "Junaid"];
// console.log("Original students ==>>", students);

// students.sort();
// console.log("Sorted students ==>>", students);

// // Example 2
// const numbers = [3, 2, 5, 1 , 4];
// console.log("Original Numbers", numbers);

// numbers.sort();
// console.log("Sorted Numbers", numbers);

// // Example 3
// const numbers = ["ت", "پ", "ب", "ا"];
// console.log("Original Numbers", numbers);

// numbers.sort();
// console.log("Sorted Numbers", numbers);



// // reverse method

// const students = ["Hammad", "Aman", "Arham", "Junaid"];
// console.log("Original Students ===>>>", students);

// students.reverse();
// console.log("Reversed Students ===>>>", students);




// // Pop method

// const students = ["Hammad", "Aman", "Arham", "Junaid"];
// console.log("Original Students ===>>>", students);

// students.pop(); // pop removes the last index of an array
// console.log("Poped Students ===>>>", students);



// // Push method

// const students = ["Hammad", "Aman", "Arham", "Junaid"];
// console.log("Original Students ===>>>", students);

// students.push("Ali", "Yahya"); // push add the last index of an array
// console.log("Pushed Students ===>>>", students);




// // shift method

// const students = ["Hammad", "Aman", "Arham", "Junaid"];
// console.log("Original Students ===>>>", students);

// students.shift(); // shift remove the first index of an array
// console.log("Shifted Students ===>>>", students);




// unshift method

// const students = ["Hammad", "Aman", "Arham", "Junaid"];
// console.log("Original Students ===>>>", students);

// students.unshift("Yahya", "Ali"); // unshift add the first index of an array
// console.log("Unshifted Students ===>>>", students);



// // join

// const studentsData = ["Aman", "Arham", "Junaid", "Ali"];
// console.log(studentsData);

// const joinedStudents = studentsData.join(" Ahmed, ")
// console.log(joinedStudents);



// // join

// const students = ["Hammad", "Ali", "Khan", "Ahmed", ""]
// console.log(students);

// const fatherNameofStudents = students.join(" Rajput ")
// console.log(fatherNameofStudents, "\n");



// // slice

// const students = ["Hammad", "Aman", "Ali", "Khan"];
// console.log("original students ==>>>", students);

// const cheetayStudents = students.slice(1);
// console.log("cheetayStudents ==>>", cheetayStudents);



// // splice

// const students = ["Hammad", "Aman", "Ali", "Khan"];
// console.log("original students ==>>>", students);

// students.splice(2, 1, "Jawed")
// console.log("addedStudents ==>>", students);




// const arr = ["frwfwrfwe"];
// console.log(arr);

// //  checking condition with true-false
// const checkingArrayOrNot = Array.isArray(arr)
// console.log(checkingArrayOrNot);


// //  checking condition with if-else
// if(Array.isArray(arr)) {
//     console.log(arr + " is an array");
// }else {
//     console.log(arr + " is not an array");
// }

// //  checking condition with tenary operator
// const checkingArrayOrNot = Array.isArray(arr) ? arr + " is an array" : arr + " is not an array"
// console.log(checkingArrayOrNot);




// // IndexOf and lastIndexOf
// const students = ["Hammad", "Ali", "Khan", "Zakir", "Ali"];
// console.log("students ==>>", students);

// const checkingIndex = students.indexOf("Ali");
// console.log(checkingIndex);

// const checkingIndex2 = students.lastIndexOf("Ali");
// console.log(checkingIndex2);
