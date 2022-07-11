//10. How to read a file line by line using node.js ?
const fs = require('fs');
try{
    const data = fs.readFileSync("/home/veirichr/Cursos/Exercicios Node/arquivos/texto.txt", "utf-8")
    console.log(data)
}
catch(err){
    console.log(err)
}