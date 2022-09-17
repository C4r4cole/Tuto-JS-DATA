// Rappel des types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // si rien n'est attribué à la variable comme ici alors le type est 'undefined'

//Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },

  {
    pseudo: "Ralph",
    age: 30,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },

  {
    pseudo: "Edouard",
    age: 52,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];

// console.log(data[2].pseudo);

// --------------------------
// Les structures de controle
// --------------------------

// if else

if (data[0].age > data[1].age) {
  //   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // valeur si faux
}

// while

let w = 0;

while (w < 10) {
  w++;
  //   console.log("La valeur de w est de : " + w);
}

// Do while

let d = 0;

do {
  d++;
  //   console.log(d);
} while (d < 5);

// Les boucles for

for (const user of data) {
  //   document.body.innerHTML +=
  //     "<li>" + user.pseudo + " - " + user.age + " ans" + "</li>";
}

// console.log(data.length);

// (1) on déclare la valeur de i / (2) jusqu'ou on boucle / (3) incrémentation de i jusqu'à ce que la condition 2 soit remplie
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i]);
  // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

document.body.addEventListener("click", (e) => {
  // console.log(e.target.id);
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});
