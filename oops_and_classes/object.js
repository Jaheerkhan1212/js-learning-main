function multiply(num){
    this.num=num;
    return num*5;
}
multiply.power=2;
console.log(multiply(5));
console.log(multiply.prototype);
console.log(multiply.power);
//function can also behave like object

function createUser(username,score){
    this.username=username;
    this.score=score
}
createUser.prototype.increament=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
    ;
}
const chai=new createUser("chai",25);
const tea=new createUser("tea",25);
chai.printMe();

