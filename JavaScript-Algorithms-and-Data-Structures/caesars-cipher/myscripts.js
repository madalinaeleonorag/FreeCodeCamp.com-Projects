function checkPalindrome() {
  let str = document.getElementById('toTest').value;
  let stringToTest = str.toLowerCase();
  stringToTest = stringToTest.replace(/\W/g, "");
  stringToTest = stringToTest.replace(" ", "");
  stringToTest = stringToTest.replace("_", "");
  stringToTest = stringToTest.replace(".", "");
  const result = stringToTest == stringToTest.split("").reverse().join("");
    alert(result ? 'Is a Palindrome :)' : 'nope, it\'s not a palindrome :(')
}
