// Creare due array con numero diverso di elementi
const shortArr = ["blue", "red", "green"];
const longArr = ["pink", "yellow", "violet", "black", "gray", "orange"];
// Aggiungere elementi all'array con lunghezza minore finchè non saranno di pari lunghezza
// Ciclo per la lunghezza dell'array con più elementi
for( i = 0; i <= longArr.length; i++) {
    //SE lunghezza di un array < lunghezza altro array, aggiungo elementi
    if (shortArr.length < longArr.length) {
    shortArr.push("jolly color");
    }
}
console.log(shortArr, longArr);