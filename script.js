const toggleButton = document.getElementsByClassName('toggle_button')[0];
const navbarLinks = document.getElementsByClassName('nav_link')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


function revealPayField() {
    document.getElementById("pay-label").hidden = false;

    const payScaleInput = document.getElementById("pay-input");
    payScaleInput.hidden = false;
    payScaleInput.required = true;

    
}

function hidePayField() {
    document.getElementById("pay-label").hidden = true;
    const payScaleInput = document.getElementById("pay-input");
    payScaleInput.hidden = true;
    payScaleInput.required = false;
  

    document.getElementById("hiring").checked = false;
}