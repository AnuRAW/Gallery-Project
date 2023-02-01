document.getElementById("img-2").disabled = true;
document.getElementById("img-3").disabled = true;
document.getElementById("img-4").disabled = true;
let formInfoArray = [];
let diceScore = [];

let attempt = 2;
let RemainingDiceClick = 3;
let totalScore = 0;
 
// Image 1 Function 
function openFormFunction() {
    document.getElementById('form').classList.remove('hidden');
}
 
// Form submit Function 
function submitFormInfoFunction() {
    let name = document.getElementById('name').value;
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    if (name && userName && email) {
        let obj = {
            Name: name,
            UserName: userName,
            Email: email,
        }
 
        formInfoArray.push(obj);
        document.getElementById("img-2").disabled = false;
        document.getElementById("img-1").disabled = true;
        alert('Your Info is Submitted successfully! Click on the next image to view your info.')
        document.getElementById('form').classList.add('hidden');
        // console.log(formInfoArray);
    } else {
        alert(`Please fill all the fields.`)
    }
}
 
 
// Image 2 Function : 
function displayFormInfoFunction() {
    document.getElementById('info').innerText = `Name:${formInfoArray[0].Name}, User Name:${formInfoArray[0].UserName}, Email:${formInfoArray[0].Email}`
    document.getElementById('displayInfo').classList.remove('hidden');
    document.getElementById("img-3").disabled = false;
    document.getElementById("img-2").disabled = true;
}