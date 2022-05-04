//Chiedere di inserire un numero
const userNumber = Number(prompt("Inserisci un numero"));
//SE il numero è pari, stampalo.
//ALTRIMENTI stampa il numero successivo a quello inserito.
if (userNumber % 2 === 0) {
    console.log(userNumber);
} else {
    console.log(userNumber + 1);
}