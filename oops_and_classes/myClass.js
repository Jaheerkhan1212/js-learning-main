//ES6

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    encyptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}
const chai=new User("chai","user@gmail.com","password");
console.log(chai.encyptPassword());
console.log(chai.changeUsername());

//behind the scene
function User(username,email,password){
    this.username=username;
    this.password=password;
    this.email=email;
}
User.prototype.encyptPassword=function(){
    return `${this.password}abc`;
}
const tea=new User("chai","user@gmail.com","password");
console.log(tea.encyptPassword());

