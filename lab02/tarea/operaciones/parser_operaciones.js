function parse_operaciones (n1, n2,op) {
  var resultado = 0
  if (op=='s') {
    resultado = parseInt(n1)+parseInt(n2)
  }
  else if (op=='r') {
    resultado = n1-Sn2
  }
  else if (op== 'm') {
    resultado = n1*n2
  }else if (op=='d') {
    resultado = n1/n2
  }
  else
  resultado = 'no escogio nada'

  return {
    resul : resultado,
    
  }
}
module.exports.parse_operaciones = parse_operaciones
