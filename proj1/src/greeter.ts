class student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName : string;
    lastName : string;
}
function greeter(person: Person) {
    return "Hello, " + person;
}

var user = {firstName:"xiaolong", lastName : "fan"};

document.body.innerHTML = greeter(user); 