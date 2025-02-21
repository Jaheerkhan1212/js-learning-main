const User={
    _email:"hello",
    _pass:"password123",
    
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value;
    }
}
console.log(User.email);
console.log(User._email);
User.email="changed";
console.log(User.email);
console.log(User._email);

