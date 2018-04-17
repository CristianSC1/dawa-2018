var http = require('http'),
  fs = require('fs'),
  parser = require('./parser_horas.js'),
  p = parser.parse_horas

http.createServer(function (req, res) {
  fs.readFile('./mostrar.html', function (err, html) {
    var html_string = html.toString()

    var respuesta = p(req),
      horas1 = respuesta['horas1'],
      horas2 = respuesta['horas2'],


      html_string = html_string.replace('{hora1}', horas1)
    html_string = html_string.replace('{hora2}', horas2)
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write(html_string)
    res.end()
  })
}).listen(8080); 