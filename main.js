//input dati

//numero multiplo di 3
const multipleOf3 = "Fizz"

//numero multiplo di 3
const multipleOf5 = "Buzz"

//numero multiplo di 3 e 5
const multipleOf35 = "FizzBuzz"


// stampare in console i numeri da 1 a 100 utilizzando un cliclo for



for (let i = 1; i < 101; i++) {

    

    // per i numeri multipli di 3 e 5 stampare il messaggio "FizzBuzz" al posto del numero

    if (i % 3 == 0  && i % 5 == 0) {
        document.getElementById("risultato").innerHTML += `<div>${multipleOf35}</div>`;
        console.log (multipleOf35);

    }

    // per i numeri multipli di 5 stampare il nmessaggio "Buzz" al posto del numero
    else if (i % 5 == 0) {
        document.getElementById("risultato").innerHTML += `<div>${multipleOf5}</div>`;
        console.log (multipleOf5);

    }

    // per i numeri multipli di 3 stampare il messaggio "Fizz" al posto del numero
    else if (i % 3 == 0) {
        document.getElementById("risultato").innerHTML += `<div>${multipleOf3}</div>`;
        console.log (multipleOf3);

    }


    else {
        document.getElementById("risultato").innerHTML += `<div>${i}</div>`;
        console.log (i);
    }




};

