let intModuleScore = 100;
let gitModuleScore = 269;
let jsModuleScore = 565;

let totalScore = intModuleScore + gitModuleScore + jsModuleScore;

let firstName = "Svetlana";
let surname = "Gorodetskaya";
let shortName = firstName.slice(0, 1);
let fullName = shortName + "." + " " + surname;

console.log(`Total score for 3 modules for ${fullName} is ${totalScore}.`);
console.log(
  `Average score for 3 modules for ${fullName} is ${Math.trunc(
    totalScore / 3
  )}.`
);
