function parser_valores (req) {
  var arreglo_parametros = [],
    parametros = [],
    valores = []
  if (req.length > 0) {
    var arreglo_parametros = req.split('&')
    for (var i = 0;i < arreglo_parametros.length;i++) {
      var parametro = arreglo_parametros[i]
      var param_data = parametro.split('=')
      parametros[i] = param_data[0]
      valores[i] = param_data[1]
    }
  }
  return {
    parametros: parametros,
    valores: valores
  }
}
module.exports.parse_valores = parser_valores
