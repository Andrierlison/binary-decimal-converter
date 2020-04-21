function converterParaDecimal(){
	var decimal = document.getElementById("decimal").value
	decimal = parseInt(decimal)
	binario = decimal.toString(2);
	document.getElementById("resultadoBinario").innerHTML = binario
}
function converterParaBinario(){
	var binario = document.getElementById("binario").value
	var decimal = parseInt(binario, 2);
	document.getElementById("resultadoDecimal").innerHTML = decimal
}