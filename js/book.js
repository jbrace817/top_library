const btn_addBook = document.querySelector(".add-book");
/**@type {HTMLElement} */
const modal = document.querySelector(".modal");
const form = document.querySelector("form");

const btn_addToLibrary = document.querySelector(".add-library");

//LIBRARY Array
const myLibrary = [];

//BOOK Object Variables
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

//CARD
const cardContainer = document.querySelector(".container");

//MODAL Window
btn_addBook.addEventListener(
  "click",
  () => {
    modal.style.visibility = "visible";
    console.log("test");
  },
  false
);

modal.addEventListener("click", (e) => {
  const isOutside = !e.target.closest("form");
  //   console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
});

function closeModal() {
  modal.style.visibility = "hidden";
}

//TOGGLE
function toggleSwitch() {
  const toggle = document.querySelectorAll(".fa-toggle-on");
  toggle.forEach((tog) => {
    tog.addEventListener("click", () => {
      tog.classList.toggle("off");
    });
  });
}

//BOOK OBJECT
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

//ADD TO LIBRARY

function createCard(index) {
  const cardContent = `
  <div class="card-container" id="${index}">
        <div class="card" >
          <p class="card-left">Title:</p>
          <p class="card-right">
            "${myLibrary[index].title}"
          </p>
          <p class="card-left">Author:</p>
          <p class="card-right">${myLibrary[index].author}</p>
          <p class="card-left">Pages:</p>
          <p class="card-right">${myLibrary[index].pages}</p>
          <p class="card-left center">Read:</p>
          <i class="fa-solid fa-toggle-on fa-2x"></i>
          <div class="card-bottom">
            <div class="trash">
              <i class="fa-solid fa-trash-can fa-lg"></i>
            </div>
          </div>
        </div>
      </div>`;

  return (cardContainer.innerHTML += cardContent);
}

function addBookToLibrary() {
  const newBook = myLibrary.push(
    new Book(title.value, author.value, pages.value)
  );
  let index = myLibrary.length - 1;
  console.log(index);
  createCard(index);
  title.value = "";
  author.value = "";
  pages.value = "";
  modal.style.visibility = "hidden";
  toggleSwitch();
  removeCard();
}

btn_addToLibrary.addEventListener("click", addBookToLibrary);

//REMOVE FROM LIBRARY
function removeCard() {
  const btn_trash = document.querySelectorAll(".fa-trash-can");
  for (let i = 0; i < btn_trash.length; i++) {
    const trash = btn_trash[i];
    trash.addEventListener("click", (e) => {
      const targetCard = e.target.closest(".card-container").id;
      const cardComponent = document.getElementById(targetCard);
      cardComponent.remove();
      myLibrary.splice(targetCard, 1);
    });
  }
}
