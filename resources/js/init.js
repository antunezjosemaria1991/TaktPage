var final = moment("2017-06-15");
setInterval(function() {
    var inicio = moment();
    var duracion = final.diff(inicio);
    var intervalo = moment(duracion);
    var mes = intervalo.month()+1;
    var diaDelMes = intervalo.date();
    var hora = intervalo.hour();
    var minuto = intervalo.minute();
    var segundo = intervalo.second();
    var resultado = (intervalo.format("MM/DD HH:mm:ss"));
    $("#resultado").html(mes + " Meses " + diaDelMes + " Dias " + hora + " Horas " + minuto + " Minutos " + segundo + " Segundos");
    $("#minuto").html(minuto);
    $("#segundo").html(segundo);
}, 1000);