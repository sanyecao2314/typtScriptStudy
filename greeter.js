var student = (function () {
    function student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return student;
}());
function greeter(person) {
    return "Hello, " + person;
}
var user = { firstName: "xiaolong", lastName: "fan" };
document.body.innerHTML = greeter(user);
