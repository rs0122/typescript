import { User } from './user.js';
const user = new User();
user.name = 'test';
user.age = 20;
console.log(user.name);
console.log(user.age);
console.log(user.isAdult());
