// ======================================
// LOVEFLIX - CARTAS PARA O FUTURO
// letters.js
// ======================================

const container = document.getElementById("lettersContainer");

const modal = document.getElementById("letterModal");
const letter = document.getElementById("letter");

const title = document.getElementById("letterTitle");
const text = document.getElementById("letterText");
const date = document.getElementById("letterDate");

const closeBtn = document.getElementById("closeModal");
const prevBtn = document.getElementById("prevLetter");
const nextBtn = document.getElementById("nextLetter");
const continueBtn = document.getElementById("continueBtn");

let currentLetter = 0;

// ======================================
// GERAR CARTÕES
// ======================================

function createLetters() {

    letters.forEach(letterData => {

        const card = document.createElement("div");

        card.className = "letter-card";

        card.innerHTML = `

            <div class="icon">
                ✉️
            </div>

            <h3>${letterData.title}</h3>

            <p>${letterData.subtitle}</p>

        `;

        card.addEventListener("click", () => {

            openLetter(letterData.id);

        });

        container.appendChild(card);

    });

}

// ======================================
// ABRIR CARTA
// ======================================

function openLetter(id){

    const selected = letters.find(letter => letter.id === id);

    if(!selected) return;

    currentLetter = id;

    title.innerHTML = selected.title;

    text.innerHTML = selected.text;

    date.innerHTML = selected.date;

    modal.classList.remove("hidden");

    letter.classList.remove("hidden");

    localStorage.setItem("lastLetter", id);

}

// ======================================
// FECHAR
// ======================================

closeBtn.onclick = ()=>{

    modal.classList.add("hidden");

}

modal.addEventListener("click", e=>{

    if(e.target === modal){

        modal.classList.add("hidden");

    }

});

// ======================================
// CARTA ANTERIOR
// ======================================

prevBtn.onclick = ()=>{

    if(currentLetter > 1){

        openLetter(currentLetter - 1);

    }

}

// ======================================
// PRÓXIMA CARTA
// ======================================

nextBtn.onclick = ()=>{

    if(currentLetter < letters.length){

        openLetter(currentLetter + 1);

    }

}

// ======================================
// CONTINUAR
// ======================================

continueBtn.onclick = ()=>{

    const last = Number(localStorage.getItem("lastLetter"));

    if(last){

        openLetter(last);

    }else{

        openLetter(1);

    }

}

// ======================================
// TECLADO
// ======================================

document.addEventListener("keydown",(e)=>{

    if(modal.classList.contains("hidden")) return;

    if(e.key==="Escape"){

        modal.classList.add("hidden");

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});

// ======================================
// INICIAR
// ======================================

window.onload = ()=>{

    createLetters();

}