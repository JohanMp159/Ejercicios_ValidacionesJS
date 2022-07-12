//Crea un programa que escriba el número 7 en pantalla

const mostrarNumero = () =>{
	let ejercicio1 = document.getElementById("ejercicio1").value;
	if(ejercicio1 = " ") mensaje.innerHTML = "7"
}


// Crea un programa que escriba lo siguiente en pantalla: 1234567890
const cadenaNumero = () =>{
	let ejercicio2 = document.getElementById("ejercicio2").value;
	(!ejercicio2)
		?mensajeCad.innerHTML = `El campo esta vacio!..`//Forma 1 de imprimir en pantalla
		:document.getElementById("mensajeCad").innerHTML = `${ejercicio2}`//Forma 2 de imprimir en pantalla
}

//Crea un programa que escriba 1234 de forma vertical
function listarNumeros(){
	let ejercicio3 = document.getElementById("ejercicio3").value;
	if(ejercicio3 = " "){
		document.getElementById("mensajeLista").innerHTML = `<table><tr><td>1</td></tr> <tr>  <td>2</td></tr><tr>  <td>3</td></tr> <tr>  <td>4</td></tr></table>`
	}
}

//Crea un programa que nos muestre el resultado de sumar 427 y 88
function sumarNumero(){
	let valor1 = document.getElementById("valor1").value,
		valor2 = document.getElementById("valor2").value
	
		valor1 = parseInt(valor1);
		valor2 = parseInt(valor2);
	
	if(!valor1){
		return document.getElementById("resultadoSuma").innerHTML = `No ingresaste un primer válor`
	} else if(!valor2){
		return document.getElementById("resultadoSuma").innerHTML = `No ingresaste un segundo válor`
	}
	 else {
		document.getElementById("resultadoSuma").innerHTML = `= ${valor1+valor2}`
	}
}

//Crea un programa resuelva las siguientes operaciones:
function resultadoOperaciones(){
	let ejercicio5 = document.getElementById("ejercicio5").value;
	
	let operacion1 = (333/3) *27;
	let operacion2 = 333+408-(227*23);
	let operacion3 = (47-2)/3;
	let operacion4 = 2347*39;
	
	if(ejercicio5 = " "){
		document.getElementById("resultado").innerHTML = `<table> <tr><td>= ${operacion1}</td></tr> <tr><td>= ${operacion2}</td></tr> <tr><td>= ${operacion3}</td></tr> <tr><td>= ${operacion4}</td></tr> </table>`
	}
}

//Crea un programa que nos diga cuántas horas tiene un año no bisiesto
function horaAnios(){
	let ejercicio6 = document.getElementById("ejercicio6").value;
	
	//if(typeof ejercicio6 !== "number") return document.getElementById("mensajeHoras").innerHTML = `El valor "${ejercicio6}", no es un número.`
	if(!ejercicio6) {
		return document.getElementById("mensajeHoras").innerHTML = `No ingresaste ningun número.`
	} else if(Math.sign(ejercicio6)=== -1){
		document.getElementById("mensajeHoras").innerHTML = `El número no puede ser negativo`
	} else if(ejercicio6 == 0){
		document.getElementById("mensajeHoras").innerHTML = `El número no puede ser 0`
	} else {
		document.getElementById("mensajeHoras").innerHTML = `${ejercicio6} año(s), tiene ${(24*365)*ejercicio6} Horas`
	}
}


//Escribe un programa que nos diga cuántos minutos tiene una década. No tengas en cuenta los años bisiestos.

function minutosDecadas(){
	let ejercicio7 = document.getElementById("ejercicio7").value;
	
	if(!ejercicio7){
		document.getElementById("mensajeDecadas").innerHTML = `No ingresaste ningun número`
	} else if(Math.sign(ejercicio7)=== -1){
		document.getElementById("mensajeDecadas").innerHTML = `El número no puede ser negativo`
	} else if(ejercicio7 == 0){
		document.getElementById("mensajeDecadas").innerHTML = `El número no puede ser 0`
	} else {
		document.getElementById("mensajeDecadas").innerHTML = `${ejercicio7} decada(s) tiene ${60*24*365*(ejercicio7*10)} minutos`
	}
}


//Escribe un programa que nos diga cuántos meses tiene un siglo
const mesesSiglos = () =>{
	let ejercicio8 = document.getElementById("ejercicio8").value;
	
	if(!ejercicio8){
		document.getElementById("mensajeSiglos").innerHTML = `No ingresaste ningun número`
	} else if(Math.sign(ejercicio8)=== -1){
		document.getElementById("mensajeSiglos").innerHTML = `El número no puede ser negativo`
	} else if(ejercicio8 == 0){
		document.getElementById("mensajeSiglos").innerHTML = `El número no puede ser 0`
	} else {
		document.getElementById("mensajeSiglos").innerHTML = `${ejercicio8} Siglo(s) tiene ${(12*100)*ejercicio8} meses`
	}
}

//Escribe un programa que nos diga cuánto chocolate vas a comer en tu vida teniendo  en cuenta el que comes cada día y que vas a vivir 80 años. Desprecia los años bisiestos.
const comerChocolate = () =>{
	let chocolates = document.getElementById("chocolates").value,
		anios = document.getElementById("anios").value
	
	if(!chocolates){
		document.getElementById("mensajeChocolate").innerHTML = `No Ingresaste una cantidad de Chocolates`
	} else if(!anios){
		return document.getElementById("mensajeChocolate").innerHTML = `No ingresaste ningun año`
	} else if(Math.sign(chocolates)=== -1 || Math.sign(anios)=== -1){
		document.getElementById("mensajeChocolate").innerHTML = `El número no puede ser negativo`
	} else if(chocolates == 0){
		document.getElementById("mensajeChocolate").innerHTML = `No comiste ningun chocolate en ${anios} año(s)`
	} else if(anios == 0){
		document.getElementById("mensajeChocolate").innerHTML = `El número no puede ser 0`
	}
	 else {
		document.getElementById("mensajeChocolate").innerHTML = `En toda la vida comes ${chocolates*(anios*365)} Chocolates`
	}
}

//Crea un programa que te diga los segundos que tiene un día
const segundosDia = () =>{
	let ejercicio10 = document.getElementById("ejercicio10").value;
	
	if(!ejercicio10){
		document.getElementById("mensajeSegundos").innerHTML = `No ingresaste ningun número`
	} else if(Math.sign(ejercicio10)=== -1){
		document.getElementById("mensajeSegundos").innerHTML = `El número no puede ser negativo`
	} else if(ejercicio10 == 0){
		document.getElementById("mensajeSegundos").innerHTML = `El número no puede ser 0`
	} else {
		document.getElementById("mensajeSegundos").innerHTML = `${ejercicio10} dia(s) tiene ${(60*60*24)*ejercicio10} segundos`
	}
}

//Escribe un programa que nos muestre en pantalla el resultado de las siguientes operaciones lógicas con números con :

const expresionesLogicas = () =>{
	let expresion1 = document.getElementById("expresion1").value,
		operador = document.getElementById("operador").value,
		expresion2 = document.getElementById("expresion2").value;
	
	expresion1 = parseInt(expresion1);
	expresion2 = parseInt(expresion2);
	
	let validacion = false
	if(!expresion1){
		document.getElementById("mensajeOperaciones").innerHTML = `No Ingresaste un primer válor`
	} else if(!operador){
		return document.getElementById("mensajeOperaciones").innerHTML = `No ingresaste ningun Operador Relacional`
	} else if(!expresion2){
		return document.getElementById("mensajeOperaciones").innerHTML = `No ingresaste un segundo válor`
	} else {
		if(operador === "<" ){
			if(expresion1 < expresion2){
				validacion = true;
			   	document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
			   } else {
				   validacion = false;
			   	document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
			   }
			} else if (operador === ">" ){
				if(expresion1 > expresion2){
					validacion = true;
			   		document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
			   } else {
				   validacion = false;
			   		document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
			   }
			} else if (operador === "<=" ){
				if(expresion1 <= expresion2){
					validacion = true;
			   		document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
			   	} else {
				   	validacion = false;
			   		document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
			   }
			} else if (operador === ">=" ){
				if(expresion1 >= expresion2){
					validacion = true;
			   		document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
			   } else {
				    validacion = false;
				    document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
			   }
			} else if (operador === "==" ){
				if(expresion1 == expresion2){
					validacion = true;
			   		document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
			   } else {
				    validacion = false;
					document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
				}
			} else if (operador === "!=" ){
				if(expresion1 != expresion2){
					validacion = true;
					document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
			} else {
			    validacion = false;
				document.getElementById("mensajeOperaciones").innerHTML = `${validacion}`
			}
		}
	}		
}

//Escribe diferentes programas que muestren en pantalla el resultado de las siguientes operaciones lógicas con cadenas de texto e indica lo que pasa

const operadorDatos = () => {
	let expresions1 = document.getElementById("expresions1").value,
		operadors = document.getElementById("operadors").value,
		expresions2 = document.getElementById("expresions2").value;
	let validacion = false;
	if(!expresions1){
		document.getElementById("mensajeDatos").innerHTML = `No Ingresaste un primer válor`
	} else if(!operadors){
		return document.getElementById("mensajeDatos").innerHTML = `No ingresaste ningun Operador Relacional`
	} else if(!expresions2){
		return document.getElementById("mensajeDatos").innerHTML = `No ingresaste un segundo válor`
	} else{
		if(operadors === "==="){
			if(expresions1 === expresions2){
				validacion = true;
				document.getElementById("mensajeDatos").innerHTML = `${validacion}, El válor y tipo de dato son iguales`
			} else {
				validacion = false;
				document.getElementById("mensajeDatos").innerHTML = `${validacion}, El válor y tipo de dato No son iguales`
			}
		} else if(operadors === "=="){
			if(expresions1 == expresions2){
			validacion = true;
				document.getElementById("mensajeDatos").innerHTML = `${validacion}, Los valores son  iguales`
			} else {
				validacion = false;
				document.getElementById("mensajeDatos").innerHTML = `${validacion}, Los valores No son iguales`
			}
		}
		else if(operadors === "<"){
			if(expresions1 < expresions2){
			validacion = true;
				document.getElementById("mensajeDatos").innerHTML = `${validacion}, "${expresions1}" es menor que "${expresions2}"`
			} else {
				validacion = false;
				document.getElementById("mensajeDatos").innerHTML = `${validacion}, "${expresions1}" No es menor que "${expresions2}"`
			}
		}
		else if(operadors === ">"){
			if(expresions1 > expresions2){
			validacion = true;
				document.getElementById("mensajeDatos").innerHTML = `${validacion}, "${expresions1}" es mayor que "${expresions2}"`
			} else {
				validacion = false;
				document.getElementById("mensajeDatos").innerHTML = `${validacion}, "${expresions1}" No es mayor que "${expresions2}"`
			}
		}else if(operadors === "!="){
			if(expresions1 != expresions2){
			validacion = true;
				document.getElementById("mensajeDatos").innerHTML = `${validacion}, el valor "${expresions1}" es diferente de "${expresions2}"`
			} else {
				validacion = false;
				document.getElementById("mensajeDatos").innerHTML = `${validacion}, el valor "${expresions1}" No es diferente de "${expresions2}"`
			}
		}
	}
}
