//4. Write a node.js program to replace two or more a's with the letter b on 
//the given string using Regular Expression.
var texto = 'aaewewedasdewddsxac'
console.log(texto.replace(new RegExp("[Aa]{2,}"), "B"))