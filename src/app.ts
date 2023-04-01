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

// メソッドの利用
// class User {
    // name: string = '';
    // age: number = 0;
// 
    // isAdult(): boolean {
        // return this.age >= 18;
    // }
// 
    // setAge(age: number) {
        // this.age = age;
    // }
// }
// 
// const olivia = new User();
// console.log(olivia.isAdult());
// olivia.setAge(23);
// console.log(olivia.isAdult());
// 
// const liam = new User();
// liam.setAge(18);
// console.log(liam.isAdult());

// コンストラクタの利用
class User {
    name: string = '';
    private age: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age >= 18;
    }

}

const olivia = new User('Olivia', 23);
const liam: User = new User('Liam', 25);

// Userクラスの継承
class AdminUser extends User {
    adminRole: number = 1;

    public sayAdminRole() {
        console.log(`My adminRole is ${this.adminRole}`);
    }
}

const emma = new AdminUser('Emma', 16);
console.log(emma.name);
console.log(emma.isAdult());
emma.sayAdminRole();