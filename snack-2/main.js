//Chiedere all'utente due parole in successione
const firstWord = prompt("Inserisci una parola");
const secondWord = prompt("Inserisci una nuova parola");
//Stampare prima la parola più corta e successivamente quella più lunga
if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
} else if (firstWord === secondWord) { 
    console.log("le parole hanno la stessa lunghezza");
} else {
    console.log(firstWord, secondWord);
}