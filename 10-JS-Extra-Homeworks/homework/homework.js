// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    var arr = [];
    for(var dato in objeto) {
      arr.push([dato, objeto[dato]]);
    };
    return arr;
// Otra forma de hacerlo mas sencillo seria: return object.entries(objeto); esto devuelve un array con el par clave valor de un objeto
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //var stringAArray = string.split("")
  //var cantidadDeCaracteres = {}
  //for (let i = 0; i < stringAArray.length; i++) {
  //  if (!cantidadDeCaracteres[stringAArray[i]]) {
  //    cantidadDeCaracteres[stringAArray[i]] = 1
  //  } else {
  //    cantidadDeCaracteres[stringAArray[i]] = cantidadDeCaracteres[stringAArray[i]] + 1
  //  }
  //};
  //return cantidadDeCaracteres
  var cantidadDeCaracteres = {};
  for (let i = 0; i < string.length; i++) {
    cantidadDeCaracteres[string.charAt(i)] = 0;
  };
  //"string".includes("s")  busca en el string pasado antes del punto cualquier elemento que coincida con lo pasado entre parentesis.
  for (let i = 0; i < string.length; i++) {
    if (string.includes(string.charAt(i))) {
      cantidadDeCaracteres[string.charAt(i)] = cantidadDeCaracteres[string.charAt(i)] + 1
    };
  }; return cantidadDeCaracteres
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = "";
  var minus = "";
  for (let i = 0; i < s.length; i++) {
    if(s.charAt(i).toUpperCase() === s.charAt(i)) { mayus += s.charAt(i) } else { minus += s.charAt(i)}
  };
  return mayus.concat(minus);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  //var array = str.split("")
  //var arrareverse = array.reverse()
  //var newstring = array.join("")
  //var arrayFrase = newstring.split(" ")
  //var fraseReverce = arrayFrase.reverse()
  //var fraseUnida = fraseReverce.join(" ")

  var palabras = "";
  var espejo = "";
  for (let i = str.length; i > -1; i--) { if (str.charAt(i) != " ") {
    palabras = palabras + str.charAt(i);
  } else {
    espejo = " " + palabras + espejo; palabras = ""}
  }; 
  espejo = palabras + espejo; 
  return espejo
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numString = String(numero);
  var numAlreves = "";
  for (let i = 0; i < numString.length; i++) {
    numAlreves = numString.charAt(i) + numAlreves;
  };
  if(numString === numAlreves) {
    return "Es capicua"
  } else if (numString != numAlreves) {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var cadenanueva = ""
  if (cadena.includes("a") || cadena.includes("b") || cadena.includes("c")) {
    for (let i = 0; i < cadena.length; i++) {
      if(cadena.charAt(i) != "a" && cadena.charAt(i) != "b" && cadena.charAt(i) != "c") {
        cadenanueva += cadena.charAt(i);
      };  
    };
    return cadenanueva 
  } else {
    return cadena
  }
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  var newarr = [];
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let a = i + 1; a < arr.length; a++) {
      if(arr[i].length > arr[j].length) {
        var aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux
      }  
    }
  };
  
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  nuevoArray = []
  for (let i = 0; i < arreglo1.length; i++) {
    for (let a = 0; a < arreglo2.length; a++) {
      if (arreglo1[i] === arreglo2[a]) {
        nuevoArray.push(arreglo1[i]);
      }
    }
    
  };
  return nuevoArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

