// Creare un array di numeri interi
let arrNumbers = [11, 20, 33, 15, 5, 15, 37, 20, 9, 10];
// Sommare tutti gli elementi in posizione dispari
let sum = 0; 
// Dichiaro variabile per la somma, poi eseguo ciclo per scorrere la lista
for( i = 0; i < arrNumbers.length; i++ ) {
    // SE l'indice della lista è dispari, aggiorno variabile somma (somma=somma+elementi in posizione dispari)
    if (i % 2 === 1) {
        sum += arrNumbers[i];
    }
}
console.log(sum);