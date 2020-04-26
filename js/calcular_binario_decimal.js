function converterParaDecimal() {
  var decimal = document.getElementById("decimal").value
  decimal = parseInt(decimal)
  binario = decimal.toString(2);
  if (isNaN(binario)) {
    document.getElementById("resultadoBinario").innerHTML = 'Aguardando a inserção dos números...'
  } else {
    document.getElementById("resultadoBinario").innerHTML = binario
  }
}

function converterParaBinario() {
  var binario = document.getElementById("binario").value
  var decimal = parseInt(binario, 2);
  if (isNaN(decimal)) {
    document.getElementById('resultadoDecimal').innerHTML = 'Por favor digite os valores em 0 e 1...'
  } else {
    document.getElementById("resultadoDecimal").innerHTML = decimal
  }
}