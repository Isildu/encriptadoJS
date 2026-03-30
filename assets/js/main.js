let num1 = parseFloat(prompt("Ingrese el primer numero"));
let num2 = parseFloat(prompt("Ingrese el segundo numero"));
if (isNaN(num1) || isNaN(num2)) {
    alert("numero invalido");
}
else {
    if (num1 > num2)
        alert("El numero mayor es: " + num1);
    else if (num2 > num1)
        alert("El numero mayor es: " + num2);
    else
        alert("Los numeros son iguales");
}