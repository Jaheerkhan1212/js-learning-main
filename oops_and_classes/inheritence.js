class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class teacher extends User{
 constructor(username,email,password)  {
    super(username);
    this.email=email;
    this.password=password;
 } 
 addCourse(){
    console.log(`A new course is ${this.username}`);
    
 }
}
const chai=new teacher("chai","mail","password");
chai.addCourse();
const tea=new User("masalaChai");
chai.logMe();
console.log(chai instanceof teacher);
console.log(chai instanceof User);


