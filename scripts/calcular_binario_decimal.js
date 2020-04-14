function converterParaDecimal(){
	var decimal = prompt("Digite o número decimal...");
	decimal = parseInt(decimal);
	binario = decimal.toString(2);
	alert("Valor em binário: " + binario);
}
function converterParaBinario(){
	var binario = prompt("Digite o número binário..");
	var decimal = parseInt(binario, 2);
	alert("Valor em decimal: " + decimal);
}
