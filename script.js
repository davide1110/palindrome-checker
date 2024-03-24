
function isAPalindrome() {
  let inputValue = document.querySelector("#text-input");
  let value = inputValue.value;
  if(value === undefined || value === "") {
    alert('Please input a value');
  }
  let normalizedValue = normalizeValue(value);
  let isAPalindromeText = `${value} is not a palindrome`;
  let reversedString = normalizedValue.split("").reverse().join("");
 if(normalizedValue === reversedString) {
   isAPalindromeText = `${value} is a palindrome`;
 }
 
  showPalindromeResult(isAPalindromeText);
   inputValue.value = "";
}

function normalizeValue(value1) {
    const regex = "/_|@/i";
   value1 = value1.replace(regex, '');
    return value1;
}

function showPalindromeResult(isAPalindromeText) {
    let result = document.querySelector("#result");
    console.log(isAPalindromeText);
    result.textContent = isAPalindromeText;
}