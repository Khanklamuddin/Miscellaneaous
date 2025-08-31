// const stu1 = {
//     name: "adam",
//     age: 25,
//     marks: 98,
//     getMarks: function () {
//         return this.marks;

//     },
// };

// const stu2 = {
//     name: "bob",
//     age: 22,
//     marks: 99,
//     getMarks: function () {
//         return this.marks;

//     },
// };

// const stu3 = {
//     name: "eve",
//     age: 26,
//     marks: 90,
//     getMarks: function () {
//         return this.marks;

//     },
// };


function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`hi my name is ${this.name}`);
        },

    };
    return person;

    
}