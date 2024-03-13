let student1={
    name: "Kevin",
    email: "kevin@gmail.com",
    grade101: 3.5,
    grade102: 3.8,
}

let student2={
    name: "Luke",
    email: "luke@gmail.com",
    grade101: 3.2,
    grade102: 3.3,
}

let student3={
    name: "Alex",
    email: "alex@gmail.com",
    grade101: 3.9,
    grade102: 3.7,
}

// let studentRoster = [student1, student2, student3];

// console.log(student1);
// console.log(student2.grade101);
// console.log(student3.grade102);

// function gradeSum(array){

//     var sum = 0.0;

//     for(i=0; i<=2; i++){
//         sum += array[i].grade101 + array[i].grade102;
//     }
    
//     console.log("Total sum of grades:  " + sum);
// }

// gradeSum(studentRoster);

let students = [student1, student2, student3];
console.log(students);
console.log(student2.grade101);
console.log(student3.grade102);

//display the sum of all the grades of the unit 101

function getSum(){
    for(let i=0;i<3;i++){
        document.write(students[i].grade101 + "\n");
    }
}
getSum();

let myArray = ["Hello cohort 46",true,10,5,7.6,null,undefined];
console.table(myArray);

console.log(myArray.length);

myArray[3]="new value"

console.table(myArray);