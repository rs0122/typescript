// class User{
//     name: string = '';
//     age: number = 0;
// }

// const olivia = new User();
// console.log(olivia.name);
// console.log(olivia.age);

// olivia.name = 'Olivia';
// olivia.age = 23;
// console.log(olivia.name);
// console.log(olivia.age);

// オプションナルなプロパティ
// class User{
    // name?: string;
    // age: number = 0;
// }
// 
// const olivia = new User();
// console.log(olivia.name);//undefinedで出力
// console.log(olivia.age);
// 
// olivia.name = 'Olivia';
// console.log(olivia.name);

// プロパティを読み取り専用に
// class User{
    // readonly name: string = 'Saito Ryunosuke';
    // age: number = 0;
// }
// 
// const olivia = new User();
// olivia.name = 'Olivia';//エラー