// ============================
// LOVEFLIX - 100 RAZÕES
// ============================

const seasonContainers = [
    document.getElementById("season1"),
    document.getElementById("season2"),
    document.getElementById("season3"),
    document.getElementById("season4")
];

const modal = document.getElementById("reasonModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const closeBtn = document.getElementById("closeModal");
const prevBtn = document.getElementById("prevReason");
const nextBtn = document.getElementById("nextReason");

const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const continueBtn = document.querySelector(".play-btn");

let currentReason = 0;

// ============================
// GERAR CARTÕES
// ============================

function createCards() {

    reasons.forEach(reason => {

        const card = document.createElement("div");
        card.className = "reason-card";

        card.innerHTML = `

            <img src="${reason.image}" alt="${reason.title}">

            <div class="reason-content">

                <h3>Razão nº ${reason.id}</h3>

                <p>${reason.title}</p>

            </div>

        `;

        card.addEventListener("click", () => {

            openReason(reason.id);

        });

        seasonContainers[reason.season - 1].appendChild(card);

    });

}

// ============================
// ABRIR RAZÃO
// ============================

function openReason(id){

    const reason = reasons.find(r => r.id === id);

    if(!reason) return;

    currentReason = id;

    modalImage.src = reason.image;
    modalTitle.innerHTML = `Razão #${reason.id}`;
    modalText.innerHTML = reason.text;

    modal.classList.remove("hidden");

    saveProgress(id);

}

// ============================
// FECHAR
// ============================

closeBtn.onclick = () => {

    modal.classList.add("hidden");

}

modal.addEventListener("click", e=>{

    if(e.target===modal){

        modal.classList.add("hidden");

    }

});

// ============================
// NAVEGAÇÃO
// ============================

nextBtn.onclick = ()=>{

    if(currentReason < reasons.length){

        openReason(currentReason + 1);

    }

}

prevBtn.onclick = ()=>{

    if(currentReason > 1){

        openReason(currentReason - 1);

    }

}

// ============================
// LOCAL STORAGE
// ============================

function saveProgress(id){

    localStorage.setItem("lastReason", id);

    updateProgress(id);

}

function updateProgress(id){

    const percent = (id / reasons.length) * 100;

    progressFill.style.width = percent + "%";

    progressText.innerHTML = `${id} / ${reasons.length}`;

}

// ============================
// CONTINUAR
// ============================

continueBtn.addEventListener("click", ()=>{

    const last = Number(localStorage.getItem("lastReason"));

    if(last){

        openReason(last);

    }else{

        openReason(1);

    }

});

// ============================
// TECLADO
// ============================

document.addEventListener("keydown",(e)=>{

    if(modal.classList.contains("hidden")) return;

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

    if(e.key==="Escape"){

        closeBtn.click();

    }

});

// ============================
// INICIAR
// ============================

window.onload = ()=>{

    createCards();

    const last = Number(localStorage.getItem("lastReason"));

    if(last){

        updateProgress(last);

    }else{

        updateProgress(0);

    }

}



const resetBtn = document.getElementById("resetProgress");

resetBtn.addEventListener("click", () => {

    localStorage.removeItem("lastReason");

    updateProgress(0);

});


document.querySelectorAll(".carousel").forEach(carousel=>{

    const container = carousel.querySelector(".episodes");

    const left = carousel.querySelector(".left");

    const right = carousel.querySelector(".right");

    right.addEventListener("click",()=>{

        container.scrollBy({

            left:700,
            behavior:"smooth"

        });

    });

    left.addEventListener("click",()=>{

        container.scrollBy({

            left:-700,
            behavior:"smooth"

        });

    });

});