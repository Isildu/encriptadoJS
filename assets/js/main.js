let letra = "";
let num1 = 0;
let num2 = 0;
let salir = true;
do {
    salir = true;
    let edad = parseInt(prompt("Ingrese su edad en numeros (0-60)"));
    switch (edad) {
        case (edad >= 0 && edad < 18):
            letra = "X";
            break;
        case edad <= 35:
            letra = "A";
            break;
        case edad < 60:
            letra = "B";
            break;
        case 60:
            letra = "C";
            break;
        default:
            console.log("invecil repite");
            salir = false;
            break;
    }
} while (salir)

do {
    let nivel = prompt("Ingrese su nivel (junior, mid, senior)");
    salir = true;
    switch (nivel.toLowerCase()) {
        case "junior":
            num1 = 1;
            break;
        case "mid":
            num1 = 2;
            break;
        case "senior":
            num1 = 3;
            break;
        default:
            console.log("invecil repite");
            salir = false;
    }
} while (!salir)

do {
    num2 = parseInt(prompt("Ingrese su numero entero favorito"));
    salir = true;
    if (num2 % 2 === 0) {
        num2 *= 2;
    }
    else if (num2 % 2 === 1) {
        num2 += 5;
    }
    else {
        console.log("invecil repite");
        salir = false;
    }
} while (!salir)

alert(letra + parseStrnum1 + num2)
