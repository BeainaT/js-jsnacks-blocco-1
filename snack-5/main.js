//Creare un array vuoto
let arr = [];
//Chiedere per sei volte all'utente di inserire un numero
for( i=0; i < 6; i++ ) {
    let userNumber = Number(prompt("Inserisci un numero"));
    //Inserire i numeri nell'array solo se sono dispari
    if(userNumber % 2 != 0) {
        arr.push(userNumber);
    }
}
console.log(arr);