class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);   
    }
    static createid(){  //prevent it from accessing
        return `123`;
    }
}
const me=new User("jaheer");
// console.log(me.createid()); will give error because it cannot be accessed as it is static    
