  function cambiarTextoBoton() {
    const operacion = document.getElementById("operacion").value;
    const boton = document.getElementById("btn");

    if (operacion === "primo" || operacion === "par") {
      boton.innerText = "Verificar";
    } else {
      boton.innerText = "Calcular";
    }
  }

  function calcular() {
    const n = parseInt(document.getElementById("numero").value);
    const operacion = document.getElementById("operacion").value;
    let resultado = "Resultado: ";

    if (isNaN(n)) {
      resultado += "Ingrese un número válido";
    } else {
      switch (operacion) {
        case "primo":
          resultado += esPrimo(n) ? "Es primo" : "No es primo";
          break;
        case "par":
          resultado += n % 2 === 0 ? "Es par" : "Es impar";
          break;
        case "factorial":
          resultado += "Factorial = " + factorial(n);
          break;
        case "suma_pares":
          resultado += "Suma de pares = " + sumaPares(n);
          break;
        case "suma_impares":
          resultado += "Suma de impares = " + sumaImpares(n);
          break;
      }
    }

    document.getElementById("resultado").innerText = resultado;
  }

  function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function factorial(n) {
    if (n<=15)
    {     
    if (n < 0) return "No definido";
    let total = 1;
    for (let i = 2; i <= n; i++) {
      total *= i;
    }
    return total;
}
else 
  return 0;
  }

  function sumaPares(n) {
    let suma = 0;
    for (let i = 2; i <= n; i += 2) {
      suma += i;
    }
    return suma;
  }

  function sumaImpares(n) {
    let suma = 0;
    for (let i = 1; i <= n; i += 2) {
      suma += i;
    }
    return suma;
  }