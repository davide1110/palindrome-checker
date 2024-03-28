
function isAPalindrome() {
  let inputValue = document.querySelector("#text-input");
  let value = inputValue.value;
  if(value === undefined || value === "") {
    alert('You have inserted nothing');
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
    let result = document.querySelector("#result-text");
    console.log(isAPalindromeText);
    result.textContent = isAPalindromeText;
    
}