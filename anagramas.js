
function convertir(c) {
    c = c.toLowerCase().split("").sort().reverse();
    return c;
}

function iguales(D, E) {

    if(D == E) return true;
        return false;
}

function solution(A, B) {

    var cont = 0;
    var inicio = 0;
    var fin = B.length;
    var unaPalabra;
    A = A.split(" ");
    B = convertir(B).join("");

    A.map(palabra => {
        
        while(fin <= palabra.length) {
            
            unaPalabra = convertir(palabra.slice(inicio, fin)).join("");

            if(iguales(unaPalabra, B)) cont++;
                cont;

            inicio+=1;
            fin+=1;

        }
        inicio = 0;
        fin = B.length;
           
    })  
    console.log(cont);
}

var frase = 'hola, que buena ola Laomir';
var palabra = 'OAL';

solution(frase, palabra);

