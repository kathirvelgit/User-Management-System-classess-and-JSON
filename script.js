// User Management System (Using Classes)

// class User {
//     constructor(username, mobileNum, age) {
//         this.username = username;
//         this.mobileNum = mobileNum;
//         this.age = age;
//     }

//     getUserDetails() {
//         return `Username: ${this.username}, Mobile: ${this.mobileNum}, Age: ${this.age}`;

//     }

//     isAdult() {

//         return this.age >= 18;

//     }
// }

// const user1 = new User("Alice", 9876543210, 22);
// const user2 = new User("Bob", 8654751474, 20);
// const user3 = new User("Charlie", 8878477444, 16);

// const users = [user1, user2, user3];

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].getUserDetails());
//     console.log("Adult:", users[i].isAdult());


// }

//Working with JSON Data

const jsonData = `[
 { "username": "Alice", "mobileNum": "9876543210", "age": 25 },
 { "username": "Bob", "mobileNum": "9123456780", "age": 30 },
 { "username": "Charlie", "mobileNum": "9001122334", "age": 17 }
]`

const users = JSON.parse(jsonData);


for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].username} - ${users[i].mobileNum} - ${users[i].age}`);
    
}

const jsonOutput = JSON.stringify(users);

console.log(jsonOutput);

