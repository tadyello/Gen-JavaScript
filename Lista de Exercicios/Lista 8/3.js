let hora , minutos
hora = parseInt(prompt("Informe a hora:"))
minutos = parseInt(prompt("Informe os minutos:"))

function convertHora(hora){
 return hora-12
}
function mostrarHora(hora,minutos){
    if (hora<=12){
        return alert(hora+":"+minutos+" A.M")
    }else{
        return alert(convertHora(hora)+":"+minutos+" P.M")
    }
}
mostrarHora(hora,minutos)

