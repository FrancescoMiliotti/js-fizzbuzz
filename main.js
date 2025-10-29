//input dati
//numero multiplo di 3
const multipleOf3 = "Fizz"

//numero multiplo di 3
const multipleOf5 = "Buzz"

//numero multiplo di 3 e 5
const multipleOf35 = "FizzBuzz"


// stampare in console i numeri da 1 a 100 utilizzando un cliclo for



for (let i = 0; i < 101; i++) {

    

    if (i % 3 == 0) {
        document.getElementById("risultato").innerHTML += `<div>${multipleOf3}</div>`;
        
    }

    else if (i % 5 == 0) {
        document.getElementById("risultato").innerHTML += `<div>${multipleOf5}</div>`;

    }

    else if (i % 5 == 0 && i % 3 == 0) {
        document.getElementById("risultato").innerHTML += `<div>${multipleOf35}</div>`;

    }


    else {
        document.getElementById("risultato").innerHTML += `<div>${i}</div>`;
    }




};



//elaborazione
// verificare se i numeri stampati sono multipli di 3 o 5 oppure di entrambi
// per i numeri multipli di 3 stampare il messaggio "Fizz" al posto del numero
// per i numeri multipli di 5 stampare il nmessaggio "Buzz" al posto del numero
// per i numeri multipli di 3 e 5 stampare il messaggio "FizzBuzz" al posto del numero

//risultato
//stampare i messaggi in conole
