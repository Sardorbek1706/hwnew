function checkTitle(str) {
  return str.split(' ').every(word => word[0] === word[0].toUpperCase());
}

console.log(checkTitle("A Mind Boggling Achievement")); 
console.log(checkTitle("A Simple Java Script Program!")); 
console.log(checkTitle("Water is transparent"));