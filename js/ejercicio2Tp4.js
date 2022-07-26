let cuenta = {
    titular : "Alex",
    saldo: 0,
    ingresar : function(objeto, deposito){
        objeto.saldo += deposito 
        console.log(objeto.saldo)
    },
    extraer : function(objeto, retiro){
        if (objeto.saldo >= retiro) {
            objeto.saldo -= retiro;
            
document.write(`<p>Se retiro ${retiro}</p>`)
        }else{
            document.write("<p>Saldo insuficiente</p>")
        }
    },
    informar :function(objeto){
        console.log(objeto)
        document.write(`<p>La cuenta de ${objeto.titular}, posee un saldo de ${objeto.saldo}</p>`)
    }
}

cuenta.informar(cuenta);

let deposito = parseFloat(prompt("Ingrese el monto deseado"));
cuenta.ingresar (cuenta, deposito);

let retiro = parseFloat(prompt("Ingrese el monto extraer"));
cuenta.extraer(cuenta, retiro);

cuenta.informar(cuenta);
