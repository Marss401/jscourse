// if/esle statement
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);
// if statement
let isLoggedIn = "true";
let userMessage;

if(isLoggedIn === "true"){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome User!";
    }
}else{
    userMessage = "Please log in to access FileSystem";
}
console.log("User Message:", userMessage);

// switch statement

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin": 
    userCategory = "Administrator";
    break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
        case "manager":
            userCategory = "Manager";
            break;
            default:
                userCategory = "Unknown";
}
console.log("User Category:", userCategory);

// ternary operator

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "authetincated" : "not authenticated";
console.log("Authentication Status:", authenticationStatus);