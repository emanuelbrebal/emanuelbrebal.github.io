const navigation = document.querySelector(".primary-navigation");
const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
);

const text = "Olá! Seja bem-vindo ao meu site!";
let index = 0;

function typeEffect() {
    const typingDiv = document.getElementById('typingEffect');
    if (index < text.length) {
        typingDiv.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

