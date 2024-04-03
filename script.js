let textInput = document.getElementById("text-input");
let checkButton = document.getElementById("check-btn");
let userInput = document.getElementById("user-input");

const palindromeCheck = (str) =>{

  let re = /[\W_]/g;

  let lowCaseStr = str.toLowerCase().replace(re,'');

  let reverseStr = lowCaseStr.split('').reverse().join('');

  return lowCaseStr === reverseStr;
} 

const runPalindromeCheck = () =>{
  
  let input = textInput.value;

  if(input==""){

    alert("Please input a value");

  }else{

    if(palindromeCheck(input)){
      userInput.innerHTML = `<strong>${input}</strong> is a palindrome.`;
    }else{
      userInput.innerHTML = `<strong>${input}</strong> is not a palindrome.`;
    }
    
  }
}

checkButton.addEventListener("click", runPalindromeCheck);
