// =========================================
// LOVEFLIX - O NOSSO MAPA INTERATIVO REFINADO
// map.js
// =========================================

// Configuração do mapa centrado em Vila Nova de Gaia com zoom otimizado
const map = L.map("map").setView([41.1340, -8.6120], 16); 

// Utilização de tiles do OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
}).addTo(map);

const container = document.getElementById("locationsContainer");
const timeline = document.getElementById("timelineContainer");

const modal = document.getElementById("locationModal");

const image = document.getElementById("locationImage");
const title = document.getElementById("locationTitle");
const date = document.getElementById("locationDate");
const place = document.getElementById("locationPlace");
const description = document.getElementById("locationDescription");

const count = document.getElementById("locationsCount");

const prev = document.getElementById("prevLocation");
const next = document.getElementById("nextLocation");

const close = document.getElementById("closeModal");

const explore = document.getElementById("exploreBtn");

let current = 0;

// =========================================
// CONTADOR
// =========================================

count.innerHTML = `${locations.length} Locais`;

// =========================================
// CARTÕES E MARCADORES (Onde a mágica acontece)
// =========================================

locations.forEach(location=>{

    // 1. Criar o Card na Grelha (Visual da Interface)
    const card = document.createElement("div");
    card.className = "location-card";
    card.innerHTML = `
        <img src="${location.image}">
        <div class="location-info">
            <h3>${location.title}</h3>
            <p>${location.place}</p>
        </div>
    `;

    card.onclick = ()=>{
        openLocation(location.id);
    }

    container.appendChild(card);

    // 2. Criar o Item na Timeline (Visual da Interface)
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
        <h3>${location.title}</h3>
        <span>${location.date}</span>
        <p>${location.description}</p>
    `;

    item.onclick = ()=>{
        openLocation(location.id);
    }

    timeline.appendChild(item);

    // =========================================
    // 3. NOVO PIN REFINADO (Implementação da Imagem Criada)
    // Usando CSS Avançado para criar o visual 3D
    // =========================================
    const refinedPinHtml = `
        <div class="custom-pin-container" style="
            position: relative;
            width: 40px;
            height: 48px;
            cursor: pointer;
        ">
            <!-- Camada de Sombra Suave Refinada -->
            <div style="
                position: absolute;
                bottom: -4px;
                left: 5px;
                width: 30px;
                height: 10px;
                background-color: rgba(0,0,0,0.25);
                border-radius: 50%;
                filter: blur(4px);
                z-index: -1;
            "></div>
            
            <!-- Camada do Pin Vermelho 3D (Corpo) -->
            <div style="
                position: absolute;
                width: 40px;
                height: 40px;
                background: radial-gradient(circle at 30% 30%, #ff1f1f 0%, #d10000 100%);
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                box-shadow: inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.3);
                border: 2px solid #ffffff;
                z-index: 1;
            "></div>

            <!-- Camada do Coração Central Brilhante (Implementação da Imagem) -->
            <div style="
                position: absolute;
                top: 8px;
                left: 8px;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2;
                color: #ff66a3;
                font-size: 20px;
                filter: drop-shadow(0 0 2px rgba(255,102,163,0.8));
                background: radial-gradient(circle, #ff66a3 0%, #ff3385 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 0 0 1px rgba(255,255,255,0.3);
            ">❤️</div>
            
            <!-- Adicionar um brilho pontual no coração -->
            <div style="
                position: absolute;
                top: 10px;
                left: 10px;
                width: 8px;
                height: 8px;
                background-color: rgba(255,255,255,0.6);
                border-radius: 50%;
                filter: blur(1px);
                z-index: 3;
            "></div>
        </div>
    `;

    const customIcon = L.divIcon({
        className: 'refined-loveflix-pin',
        html: refinedPinHtml,
        iconSize: [40, 48],
        iconAnchor: [20, 48], // A ponta inferior do pin aponta exatamente para a coordenada
        popupAnchor: [0, -48]
    });

    const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map);

    marker.bindPopup(`<b>${location.title}</b>`);

    marker.on("click",()=>{
        openLocation(location.id);
    });

});

// =========================================
// MODAL (Pop-up de Detalhes)
// =========================================

function openLocation(id){

    const location = locations.find(l=>l.id===id);

    if(!location) return;

    current = id;

    image.src = location.image;

    title.innerHTML = location.title;

    date.innerHTML = location.date;

    place.innerHTML = "📍 "+location.place;

    description.innerHTML = location.description;

    modal.classList.remove("hidden");

    localStorage.setItem("lastLocation",id);

    map.flyTo([location.lat,location.lng],17); // Zoom mais próximo para ver os detalhes do pin

}

close.onclick=()=>{

    modal.classList.add("hidden");

}

modal.onclick=e=>{

    if(e.target===modal){

        modal.classList.add("hidden");

    }

}

// =========================================
// BOTÕES DE NAVEGAÇÃO DO MODAL
// =========================================

prev.onclick=()=>{

    if(current>1){

        openLocation(current-1);

    }

}

next.onclick=()=>{

    if(current<locations.length){

        openLocation(current+1);

    }

}

// =========================================
// BOTÃO EXPLORAR (Continuar da Última Visita)
// =========================================

explore.onclick=()=>{

    const last = Number(localStorage.getItem("lastLocation"));

    if(last){

        openLocation(last);

    }else{

        openLocation(1);

    }

}

// =========================================
// NAVEGAÇÃO POR TECLADO
// =========================================

document.addEventListener("keydown",(e)=>{

    if(modal.classList.contains("hidden")) return;

    if(e.key==="Escape"){

        close.click();

    }

    if(e.key==="ArrowLeft"){

        prev.click();

    }

    if(e.key==="ArrowRight"){

        next.click();

    }

});