let hobbies = ["jogar", "ouvir musica", "desenhar", "fotografia", "correr"];

// -------------- Exercicio com forEach() ----------------

hobbies.forEach(function (hobby) {
    console.log("Olá, eu sou o hobby " + hobby + "!");
});

// -------------- Exercício com map() ---------------------

const bookTitles = hobbies.map(function (hobby) {
    return "O incrível mundo de " + hobby;
});
console.log(bookTitles);

// -------------- Exercício com filter() -------------------

const dHobbies = hobbies.filter(function (hobby) {
    return hobby[0] === 'd';
});
console.log(dHobbies)

// -------------- Exercício com findIndex() ------------------

const runningPosition = hobbies.findIndex(function (hobby) {
    return hobby === 'fotografia';
});

console.log("Fotografia está na posição: " + runningPosition);

// ---- ---------- Exercício com reduce() -------------------

const allHobbies = hobbies.reduce(function (accumulator, hobby) {
    return accumulator + " e " + hobby;
}, "");

console.log("Meus hobbies são: " + allHobbies);

// --------------- Exercício com some() -----------------------

const hasVHobby = hobbies.find(hobby => hobby.length === 8);

if(hasVHobby){
    console.log(`O hobby com oito letras é: ${hasVHobby}`);
}else{
    console.log("Nenhum dos hobbies possui oito letras");
}

// -------------- Exercício com every() -----------------------

const allShort = hobbies.every(str => str === str.toLowerCase());

if (allShort === true) {
    console.log("A lista não contém letras maiusculas");
} else {
    console.log("Algum item na lista possui letra maiuscula");
}

// --------------- Exercício com find() --------------------

const fiveLetterHobby = hobbies.find(item => item.includes("z"));
console.log("Meu hobby com: " + fiveLetterHobby);

// --------------- Exercício com slice() ----------------------

const firstThreeHobbies = hobbies.slice(1, 4);
console.log("Meus três primeiros hobbies são: ", firstThreeHobbies);