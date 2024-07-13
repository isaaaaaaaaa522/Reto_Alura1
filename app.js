//variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible)+1;
let numeroUsuario = 0; //sin valor
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 10;
console.log(numeroSecreto);
while(numeroUsuario != numeroSecreto){  
    numeroUsuario= prompt(`Me indicas un n�mero entre 1 y ${numeroMaximoPosible} por favor:`);

console.log(typeof(numeroUsuario));

if (numeroUsuario == numeroSecreto) {
    //llamamos a la variable ${}
    alert(`Acertaste,el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
//"?=evalua" si los intententos son diferentes a 1 evalua poner vez o veces
//operador ternario
}else{
    if (numeroUsuario > numeroSecreto) {
        alert("El número secreto es menor");
    }else{
        alert("El número secreto es mayor");
    }
    //Se va incremetando los intentos
    intentos ++;
    palabraVeces = "veces";
    if(intentos > maximosIntentos){
        alert(`LLegaste al número máximo de ${maximosIntentos} intentos`);
        break;
    }

    }
    
}

