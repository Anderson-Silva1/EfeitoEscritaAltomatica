const conteinerEl = document.querySelector(".conteiner");

const careers = ["Developer Web", "Freelancer", "Web Designer"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++
    conteinerEl.innerHTML = `
    <h1>Anderson ${careers[careerIndex].slice(0,characterIndex)}</h1>`;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++
        characterIndex = 0
    }

    if (careerIndex === careers.length) {
        careerIndex = 0
    }

    setTimeout(updateText, 400)
}