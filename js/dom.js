console.log("first file");

const wholeLi = document.getElementsByTagName("li");
console.log(wholeLi);

const AllTitles = document.getElementsByClassName("section-title");
console.log(AllTitles);

const secondCase = document.getElementById("second-section");
console.log(secondCase);

secondCase.style.backgroundColor = "violet";

const thirdCase = document.getElementById("third-section");
console.log(thirdCase);

thirdCase.style.color = "red";
thirdCase.style.backgroundColor = "yellow";

const fourthCase = document.getElementById("4th-section");
console.log(fourthCase);

fourthCase.style.backgroundColor = "green";

// document querySelectorAll
// querySelector

const li = document.createElement("li");
li.innerText = "my name is shila";
