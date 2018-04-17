function parse_horas(req){
    
    var f=new Date();
    var horas = f.getHours();
    var minutos = f.getMinutes();
    var segundos = f.getSeconds();
    
    
    var horas1= horas+":"+minutos+":"+segundos;
    if(horas>12){
    var horas2= (horas-12)+":"+minutos+":"+segundos;
    }
    else{
    var horas2= horas+":"+minutos+":"+segundos;
    }
    return{
        horas1: horas1,
        horas2:horas2,
        
    };
}
module.exports.parse_horas = parse_horas;
