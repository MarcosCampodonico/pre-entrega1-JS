//primer pre-entrega
/*let tipoDeBien =prompt("Ingrese a que tipo de bien pertenece")
let precio =parseInt(prompt("ingrese el precio del producto"))
let imp=parseFloat(prompt("ingrese el porcentaje de impuestos que se le aplica al producto"))
if(precio>1000 && tipoDeBien =="producto de lujo"){
    let resultado= precio * imp
    alert(`Precio final del producto: ${resultado}`)
}else if(precio<1000 && tipoDeBien=="producto de consumo"){
    let descuento = parseInt(prompt("ingrese el descuento"))
    let resultado = precio - descuento
    alert(`Precio final del producto: ${resultado}`)
} else{
    alert("el producto no esta disponible para la comercializacion")
}*/


/*let bien=prompt("tipo de producto")
if(bien == "producto nacional"){
    let pre=parseInt(prompt("ingrese el precio del producto"))
    let descuento=parseInt(prompt("Ingrese el descuento que se le aplica al producto"))
    let resultado = pre - descuento
    alert(`El precio final del producto es: ${resultado}`)
} else if(bien == "producto importado"){
    let pre=parseInt(prompt("ingrese el precio del producto"))
    let imp = parseFloat(prompt("ingrese el porcentaje de impuestos a aplicar"))
    let resultado = pre * imp
    alert(`El precio final del producto es: ${resultado}`)
} else{
    alert("Producto fuera de comercializacion")*/
//}
//ejercicio de ciclo for
for(let i = 1;i<=10;i++){
    let nombre1=prompt("ingrese su nombre")
    let ape=prompt("ingrese su apellido")
    let edad=parseInt(prompt("ingrese su edad"))
    let genero=prompt("ingrese su genero")
    if(genero !="femenino" && "masculino"){
        alert(`Dato erroneo vuelva a ingresar su genero`)
    }else if(genero=="masculino"){
        alert(`sr. ${nombre1} ${ape} usted tiene el turno n° ${i} en el edificio M`)
    } else if(genero=="femenino"){
        alert(`srta. ${nombre1} ${ape} usted tiene el turno n° ${i} en el edificio M`)
    }else{
        alert("no tiene un genero identificado, vuelva a cargar los datos")
    }
}
/*const resta = (a,b) => a-b;
let añoActual =parseInt(prompt("ingrese el año que transcurre"))
let fechaNacimiento= parseInt(prompt("ingrese la fecha de nacimiento"))
let edad=resta(añoActual,fechaNacimiento)

if(edad<18){
    alert(`Usted tiene ${edad} años, no esta en etapa laboral`)
    }else if(18<edad<55){
    alert(`Usted tiene ${edad} años, esta en la etapa laboral`)

    }else{
    alert(`Usted tiene ${edad} años, esta en la edad jubilatoria`)
}*/