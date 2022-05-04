//Generare lista di nomi
let nameList = ["Arturo", "Luca", "Elisa", "Armando"]
//Generare lista di cognomi
let lastNameList = ["Rossi", "Bianchi", "Verdi", "Fumagalli"]
//Generare una lista randomica di nomi+cognomi
let fullNameList = [];
for( i=0; i < 4; i++ ) {
    nameRandom = Math.floor(Math.random() * 4);
    lastNameRandom = Math.floor(Math.random() * 4);
    fullNameList.push(`${nameList[nameRandom]} ${lastNameList[lastNameRandom]}`);
}
console.log(fullNameList);