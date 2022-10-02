function showPerson(fname, lname, age){
    // Create an object:
    var person = {
        firstName: fname,
        lastName: fname,
        age: age,
    };
    
   // Display some data from the object:
   //Firstly using traditional string concatenation
   // document.getElementById("result").innerHTML =  person.firstName + " is " + person.age + " years old.";
   // Then using template strings.
    document.getElementById("result").innerHTML =  `${person.firstName}  is  ${person.age} years old.`;
    
    // Be careful with the type of quote marks used.
    //Template strings (or literals) are delimited with backtick (`) characters
    //The following statements do NOT work
    // document.getElementById("result").innerHTML =  '${person.firstName}  is  ${person.age} years old.';
   // document.getElementById("result").innerHTML = "${person.firstName}  is  ${person.age} years old.";
}
