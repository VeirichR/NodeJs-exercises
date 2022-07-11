//5. There is a given object, write node.js program to print the given object's properties, 
//delete the second property and get length of the object.

let user = {
    first_name: "John",
    last_name: "Smith",
    age: "38",
    department: "Software"
};
console.log(user)
console.log(Object.keys(user).length)

delete user["last_name"]

console.log(user)
console.log(Object.keys(user).length)