const RegisterButton = document.querySelector(".content_button");
const DisplayPopup = document.querySelector(".popup");

RegisterButton.addEventListener('click', () =>{
    DisplayPopup.classList.add("opened");
    setTimeout(()=>{DisplayPopup.classList.remove("opened")},5000);

});