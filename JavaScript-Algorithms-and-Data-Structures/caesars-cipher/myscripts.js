function caesarCipher() {
  let str = document.getElementById("toTest").value;
  str = str.toUpperCase();
  let result = str.replace(/[A-Z]/g, rot13);

  function rot13(correspondance) {
    const charCode = correspondance.charCodeAt();
    return String.fromCharCode(
      charCode + 13 <= 90 ? charCode + 13 : ((charCode + 13) % 90) + 64
    );
  }

  alert(`Your text is: ${result}`);
}
