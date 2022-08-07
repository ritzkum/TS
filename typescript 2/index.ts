export{}
// // hello ts program
// let a = "Hello World"
// console.log(a);

// //type program
// let b = 10;
// console.log(b);

// // array 
// let c =['hii','lets','work']

// console.log(c);

// let data =['hii','lets','work']
// data.push('singh')
// console.log(data);

// let value =['hii','lets','work',false]
// value.push(true)
// console.log(data);

// //type object
// let user={
//     name :'john',
//     age: 20,
//     email:'test@test.com',
// }

// console.log(user)

// let users={
//     name :'john',
//     age: 20,
//     email:'test@test.com',
// }
// users.name='doe';
// console.log(users)

// // object custom

// interface usersstyped{
//     name:string,
//     age:number,
//     email:string,
// }
// let userss:usersstyped={
//     name :'john',
//     age: 20,
//     email:'test@test.com',
// }
// console.log(userss)


//use of any
 
//union type

// interface type


//function


// function clcs(){
//     return 20+45
// }
// console.log(clcs())


// //class 

// class index {
//     name: "money"
//     getname() 
//     {
//         console.log(this.getname);
//     }
// }
// let a1=new index();
// a1.getname;

// // constructor

// class main {
//     name:string;
//     constructor(val){
//         this.name=  val
//     }
//     getname()
//     {
//         console.log(this.name)
//     }
// }

// let b1=new main('hello')
// b1.getname();


class main{
    name:string;
    constructor(val){
        this.name=val;
    }
    getVal(){
        return this.name;
    }
}
let a=new main('hello')
console.log(a.getVal())
// inheritance

class child{
    name:"rocky"
    getName()
    {
        return this.name
    }

}
let c1=new child();
c1.getName


