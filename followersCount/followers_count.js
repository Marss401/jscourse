let count = 0;


function increaseCount(){
    count++;
    countDisplay();//display the count
    checkCountValue();//display celebatory message!
}
function countDisplay(){
    document.getElementById("countDisplay").innerHTML = count;    
}
const checkCountValue = () => {
    if (count === 10){
        alert("Your post gained 10 followers! CongratulationS")
    } else if(count === 20){
        alert("You just gained 20 followers, welldone!");
    }
}
function resetCount(){
    count = 0;
    countDisplay();
    alert("your followers count has been reset");
}