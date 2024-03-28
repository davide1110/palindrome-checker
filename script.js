
function isAPalindrome() {
  let inputValue = document.querySelector("#text-input");
  let value = inputValue.value;
  if(value === undefined || value === "") {
    alert('Please input a value');
    return;
  }
  let normalizedValue = normalizeValue(value);
  let isAPalindromeText = `${value} is not a palindrome`;
  let reversedString = normalizedValue.split("").reverse().join("");
 if(normalizedValue.toLowerCase() === reversedString.toLowerCase()) {
   isAPalindromeText = `${value} is a palindrome`;
 }
 
  showPalindromeResult(isAPalindromeText);
   inputValue.value = "";
}

function normalizeValue(value1) {
  
    const regex = /_|@|\s|,|\.|\(|\)|\/|\\|-/g;
  // const regex = /_/i;
   value1 = value1.replaceAll(regex, '');
    return value1;
}

function showPalindromeResult(isAPalindromeText) {
    let resultText = document.querySelector("#result-text");
    let result = document.querySelector("#result");
    console.log(isAPalindromeText);
    resultText.textContent = isAPalindromeText;
    if(isAPalindromeText.includes("is not")) {
      result.style.color = "#ca2f2f";
      return;
    }
    result.style.color = "#4aea20"; 
    
    
}