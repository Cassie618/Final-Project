const textInput = document.getElementById("text-input"); 
const checkButton = document.getElementById("check-btn");    
const result = document.getElementById("result");
const textInput1 = document.getElementById("text-input1");  
const textInput2 = document.getElementById("text-input2");
const checkButton2 = document.getElementById("check-btn2");
const result2 = document.getElementById("result2");
const textInput3 = document.getElementById("text-input3");
const result3 = document.getElementById("result3");
const checkButton3 = document.getElementById("check-btn3");

checkButton.addEventListener("click",() => {
    const replaced = result.innerText.replace(/[^A-Za-z0-9]/g,"")
    if (textInput.value === ""){
        alert("please put in a word")
    } else if (textInput.value.length === 1) {
      result.innerText = `${textInput.value} is a palindrome`
} else if (replaced === [...replaced].reverse().join("")) {
result.innerText = `${textInput.value} is a palindrome`
} else {
result.innerText = `${textInput.value} is not a palindrome`
}});

checkButton2.addEventListener("click",() => {
    const replaced = result2.innerText.replace(/[^A-Za-z]/g,"")
    if (textInput1.value === ""); {
        alert("please put in a name")
    if (textInput2.value === ""); {
        alert("please put in your full name")    
    } { (textInput1.value.length === 1);
             (textInput2.value.length === 1);   
    result2.innerText = `your name is ${textInput1.value} ${textInput2.value}`}
    
}});
checkButton3.addEventListener("click",() => {
    const replaced = result3.innerText.replace(/[^0-9]/g,"")
    if (textInput3.value === ""){
        alert("please put in a 5 digit number")
    } else if (textInput3.value.length === 1) {
      result3.innerText = `${textInput3.value} is your zipcode`
} else if (replaced === [...replaced].reverse().join("")) {
result3.innerText = `${textInput3.value} is a zipcode`
} else {
result3.innerText = `${textInput3.value} is not a zipcode`
}
});