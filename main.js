const users = [
  { id: 1, name: "Ali", age: 20 },
  { id: 2, name: "Vali", age: 25 },
  { id: 3, name: "Sami", age: 18 }
];
const user = users.find(u => u.id === 2);
if (user) {
  user.name = "Rustam";
}
console.log(users);
