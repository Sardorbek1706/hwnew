function doubleChar(str) {
  return str.split('').map(char => char.repeat(2)).join('');
}

console.log(doubleChar("String")); 
console.log(doubleChar("Hello World!")); 
console.log(doubleChar("1234!_ ")); 