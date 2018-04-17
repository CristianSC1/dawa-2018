var http = require('http'),
  fs = require('fs'),
  querystring = require('querystring'),
  parser = require('./parser_operaciones.js'),
  parser2 = require('./parser_valores.js'),
  p = parser.parse_operaciones,
  p2 = parser2.parse_valores,
  dataString = ''

var form = fs.readFileSync('./operando.html')

http.createServer(function (req, res) {
  if (req.method == 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(form)
  }else if (req.method == 'POST') {
    req
      .on('data', function (data) {
        dataString += data
      })
      .on('end', function () {
        var respuesta = p2(dataString),
          parametros = respuesta['parametros'],
          valores = respuesta['valores']

        var resultado = p(valores[0], valores[1], valores[2])
        var html = '<!DOCTYPE html>'
        html += '<html>'
        html += '<head>'
        html += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'
        html += '</head>'
        html += '<body>'
        html += '<h1>'
        html += 'El resultado de la operacion es: '+resultado['resul']
        html += '</h1>'
        html += '</body>'
        html += '</html>'
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write(html)
        
      })
  }
}).listen(8080)
