//Generare lista di nomi
let nameList = ["Arturo", "Luca", "Elisa", "Armando"]
//Generare lista di cognomi
let lastNameList = ["Rossi", "Bianchi", "Verdi", "Fumagalli"]
//Generare una lista di nomi+cognomi
let fullNameList = [];
for( i=0; i < 4; i++ ) {
    fullNameList.push(`${nameList[i]} ${lastNameList[i]}`);
}
console.log(fullNameList)