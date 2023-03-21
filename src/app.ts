// console.log('Hello World!');

// const str: string = 'Hello';
// console.log(str);

// let color: string = 'Red';
// console.log(color);
// console.log(typeof(color));

// const pi = 3.14;
// console.log(pi);

// const firstName = 'Ryunosuke';
// const lastName = 'Saito';

// テンプレートリテラル
// const message = `Hello! I am ${firstName} ${lastName}.`;
// console.log(message);

//関数
// function rectangle(height: number, width: number = 10):number {
    // return height * width;
// }

// console.log(rectangle(3, 5));

// 配列
// const colors: string[] = ['Red', 'Green', 'Blue'];
// console.log(colors);
// console.log(colors.length);

// colors.push('Black');
// console.log(colors);
// 
// colors.unshift('white');
// console.log(colors);
// 
// colors[1] = 'Aka';
// console.log(colors);

// 追加
// const insertArr = ['a', 'b', 'c'];
// insertArr.splice(1, 0, 'D');
// insertArr.splice(2, 0, 'X', 'Y', 'Z');
// console.log(insertArr);

// 削除
// insertArr.splice(2, 2);
// console.log(insertArr);
// 
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];
// 元の配列に変更なし
// const mergedArr = arr1.concat(arr2);
// console.log(mergedArr);

// 先頭を削除
// const arr3 = ['a', 'b', 'c'];
// arr3.shift();
// console.log(arr3);

// 末尾を削除
// arr3.pop();
// console.log(arr3);
// 
// const arr4 = [1, 2, 3];
// const arr5 = [4, 5, 6, ...arr4];
// console.log(arr5);

// オブジェクト
const user = {
    name : 'Ryunosuke Saito',
    gender : 'man',
    age : 29
};

console.log(user.name);
console.log(user.gender);
console.log(user.age);

console.log(user['name']);
console.log(user['gender']);
console.log(user['age']);

user.age = 30;
console.log(user.age);

// プロパティの個数を求める
console.log(Object.keys(user).length);
console.log(Object.keys(user));

// 型定義
const user2: {
    name:string,
    gender:string,
    age:number
} = {
    name: 'Ryunosuke Saito',
    gender: 'man',
    age: 29
};

// インターフェイス
interface UserObj {
    name:string,
    gender:string,
    age?:number
}

const user3: UserObj = {
    name: 'Ryunosuke Saito',
    gender: 'man',
    age: 29
}

console.log(user3.name);
console.log(user3.gender);
console.log(user3.age);