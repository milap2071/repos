const user = prompt("Username: ");
if(user == "Admin"){
    const pass = prompt("Password: ");
    if(pass == "TheMaster"){
        alert(`Welcome ${user}` );
    } else if( pass === '' || pass === null){
        alert("Cancelled");
    } else{
        alert("Wrong Password");
    }

} else if(user === '' || user === null){
    alert("Cancelled");
} else{
    alert("I don't know you");
}
