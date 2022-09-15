"use strict"
const myModal = document.querySelector(".modal");
const myOverlay = document.querySelector(".overlay");
console.log(myOverlay)
const closeBtn = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".modal-button");
console.log(btnsOpenModal)
const addHiddenClass = () => {
    myModal.classList.add("hidden")
    myOverlay.classList.add("hidden")
    document.querySelector("body").style.backgroundColor = "cadetblue";
}
const toggleHiddenClass = () => {
    myModal.classList.toggle("hidden")
    myOverlay.classList.remove("hidden")
    document.querySelector("body").style.backgroundColor = "darkgreen"
}

/*btnsOpenModal.forEach(btn => btn.addEventListener("click", toggleHiddenClass))*/
/*for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", toggleHiddenClass);

}*/
for (let btn of btnsOpenModal) btn.addEventListener("click", toggleHiddenClass)


myOverlay.addEventListener("click", addHiddenClass)

closeBtn.addEventListener("click", addHiddenClass)
document.addEventListener("keydown", (e) => {
    console.log(e)
    if (e.key === "Escape" && !myModal.classList.contains("hidden")) addHiddenClass()
})