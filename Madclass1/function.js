function myAge(){
    console.log("helo world");
}
myAge();//normal function

let myage=function(){
    console.log("hello");
}
myage();//anoymonus function


let myagee=   ()=>{
    console.log("hello students");
}
myagee();//arrow function

let myName=()=>console.log('bisma');
myName();//short arrow function

// let age=15;
// age>16? console.log ('bisma'): console.log('jawad')


// let age=17;
// age>16 && console.log('hello');


// (2<3) && console.log('hello');

const arr=[];
arr[0]='mango';
arr[1]='apple';
console.log(arr);
const arr= ['mango','apple','banana']
console.log(arr);

let arr=new Array('bmw','wgga')
console.log(arr);

money=10;
Name="bisma";

console.log(money);
console.log(Name);

var age=10;
console.log(age);

var agee=10;
age=11;
console.log(agee);

var ager=10;
document.write(ager);

var result ='100';
var No=result/50;
console.log(No);

let arr=[1,2,3,4];
let res=arr.map((a)=>{
    return a*=3;

})
console.log(res);

let arr=[1,2,3,4];
let filtered=arr.filter((a)=>{
    return a!=1;

})
console.log(filtered);
object
// let obj={name:'bisma',salary:10};
// console.log(obj.salary);
// console.log(obj);
// destructing
// const obj={a:1,b:2};
// let {a,b}=obj;
// console.log(a);
//spread operator
let obj2={...obj,age:27};
console.log(obj2);

var check =(arr)=>{
var m=typeof(arr)
(m=="string")?console.log("successful"):console.log("error");
}
var arr=["bisma","najwa","grapes"];
check(arr);
let arr=()=>{
    let obj=[{Name:"Ali"},{model:2024}];
    console.log(obj);
};
const exp=arr()
module.export=exp
var num=10;
document.write("the num is:" + num);





