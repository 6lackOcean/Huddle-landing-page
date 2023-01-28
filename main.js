const RegisterButton = document.querySelector(".content_button");
const DisplayPopup = document.querySelector(".popup");

RegisterButton.addEventListener("click", () => {

    if (DisplayPopup.hasAttribute("data-visible")) {
        RegisterButton.setAttribute("aria-expanded", true);
    }
    else {
        DisplayPopup.toggleAttribute("data-visible");
        RegisterButton.setAttribute("aria-expanded", true);
        setTimeout(() => {
            DisplayPopup.removeAttribute("data-visible");
            RegisterButton.setAttribute("aria-expanded", false);
        }, 5000);
    }


});