//12. How do you zip a file in node.js?
var zlib = require('zlib')
var fs = require('fs')

var gzip = zlib.createGzip()
var r = fs.createReadStream('/home/veirichr/Cursos/Exercicios Node/arquivos/texto.txt')
var w = fs.createWriteStream('/home/veirichr/Cursos/Exercicios Node/arquivos/texto.txt.gz')
r.pipe(gzip).pipe(w)
