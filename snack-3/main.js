//Chiedere per 10 volte all'utente di inserire un numero
let sum = 0;
for( i = 0; i < 10; i++ ) {
    let number = Number(prompt("inserisci un numero"));
    sum = sum + number;
}
//Stampare la somma di tutti i numeri inseriti dall'utente
console.log(sum);