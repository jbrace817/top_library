const btn_add = document.querySelector(".add-book");
/**@type {HTMLElement} */
const modal = document.querySelector(".modal");
const addBook = document.querySelector(".add-book");
const form = document.querySelector("form");

//MODAL Window
btn_add.addEventListener(
  "click",
  () => {
    modal.style.visibility = "visible";
    console.log("test");
  },
  false
);

modal.addEventListener("click", (e) => {
  const isOutside = !e.target.closest("form");
  console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
});

function closeModal() {
  modal.style.visibility = "hidden";
}
