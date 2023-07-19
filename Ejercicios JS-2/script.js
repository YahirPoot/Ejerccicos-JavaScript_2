//Ejercicio 1
function Ejercicio1() {
    var numeros = [];
    var numero;
    var numeroMasGrande;

    do {
        numero = prompt("Ingrese un número (o presione la letra 'm' para terminar):");

        if (numero.toLowerCase() === 'm') {
        break;
        }

        numero = parseFloat(numero);

        if (!isNaN(numero)) {
            numeros.push(numero);
            if (numeroMasGrande === undefined || numero > numeroMasGrande) {
                numeroMasGrande = numero;
            }
        }
    } while (true);

    if (numeros.length > 0) {
        document.getElementById("resultado1").innerHTML = ("El número más grande ingresado es: " + numeroMasGrande);
    } else {
        document.getElementById("resultado1").innerHTML = ("No se ingresaron números.");
    }
}

//Ejercicio 2
function Ejercico() {
    function esPalindromo(palabra) {
        palabra = palabra.replace(/[^\w]/g, "").toLowerCase();
        var  palabraInvertida = palabra.split("").reverse().join("");
    
        if(palabra === palabraInvertida) {
            return true;
        }
        else {
            return false;
        }
    }
    var entrada = prompt("Ingresa la palbra: ");

    if (esPalindromo(entrada)) {
        document.getElementById("resultado2").innerHTML = ("La palabra es un palidromo.");
    } else {
        document.getElementById("resultado2").innerHTML = ("La palabra no es un palindromo.");
    }
}

//Ejercicio 3
function Ejercicio3() {
    function sumaDigitos(numero) {
        var suma = 0;
        var numeros = numero.toString();

        for(var i = 0; i < numeros.length; i++) {
            suma += parseInt(numeros.charAt(i));
        }
        return suma;
    }
    var numero = parseInt(prompt("Ingrese un nummero: "));

    if(!isNaN(numero)) {
        var suma = sumaDigitos(numero);
        document.getElementById("resultado3").innerHTML = "El resultado de la suma es "+ suma;
    }
}

function Ejercicio4() {
    function numeroAleatorio(min, max) {
        if(min > max) {
            var temp = min;
            min = max;
            max = temp;
        }
        var numeroA = Math.floor(Math.random() * (max, min + 1)) + min;
        return numeroA;
    }
    var rangoMin = parseInt(prompt("ingrese el valor minimo del rango:"));
    var rangoMax = parseInt(prompt("Ingrese el valor maximo del rango:"));
    var numeroAl = numeroAleatorio(rangoMin, rangoMax);

    document.getElementById("resultado4").innerHTML = "El número aleatorio dentro del rango [" + rangoMin + ", " + rangoMax + "] es: " + numeroAl;
}

function Ejercicio5() {
    function secuencia(numeroMax) {
        var fibonacci = [];

        fibonacci.push(0);
        fibonacci.push(1);

        while(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= numeroMax) {
            var siguienteNumero =  fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
            fibonacci.push(siguienteNumero);
        }
        return fibonacci;
    }

    var numeroMax = parseInt(prompt("Ingrese el numero maximo de la secuencia Fibonicci:"));
    var secuenciaFibonacci = secuencia(numeroMax);

    document.getElementById("resultado5").innerHTML = "La secuencia de Fibonacci hasta el número máximo " + numeroMax + " es: " + secuenciaFibonacci.join(", ");

}