const btn_addBook = document.querySelector(".add-book");
/**@type {HTMLElement} */
const modal = document.querySelector(".modal");
const form = document.querySelector("form");
const toggle = document.querySelectorAll(".fa-toggle-on");
const btn_addToLibrary = document.querySelector(".add-library");

//BOOK Element Variables
const myLibrary = [];
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

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
toggle.forEach((tog) => {
  tog.addEventListener("click", () => {
    tog.classList.toggle("off");
  });
});

//BOOK OBJECT
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  myLibrary.push(new Book(title.value, author.value, pages.value));
  console.log(myLibrary);
}

btn_addToLibrary.addEventListener("click", addBookToLibrary);
