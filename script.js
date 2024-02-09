document
  .querySelector("#coding-input")
  .addEventListener("change", filterCoding);
document
  .querySelector("#design-input")
  .addEventListener("change", filterDesign);
document
  .querySelector("#marketing-input")
  .addEventListener("change", filterMarketing);

function filterCoding() {
  hideAllCards();

  if (document.querySelector("#coding-input").checked) {
    var codingCards = document.querySelectorAll(".card-coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });

    document.querySelector("#design-input").checked = false;
    document.querySelector("#marketing-input").checked = false;
  } else {
    showAllCards();
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#design-input").checked) {
    var codingCards = document.querySelectorAll(".card-design");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });

    document.querySelector("#coding-input").checked = false;
    document.querySelector("#marketing-input").checked = false;
  } else {
    showAllCards();
  }
}

function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#marketing-input").checked) {
    var marketingCards = document.querySelectorAll(".card-marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "inline-block";
    });

    document.querySelector("#design-input").checked = false;
    document.querySelector("#coding-input").checked = false;
  } else {
    showAllCards();
  }
}

function hideAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "inline-block";
  });
}

document.getElementById("menuButton").onclick = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("nav").classList.toggle("show");
}
