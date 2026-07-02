// =========================================
// LOVEFLIX - O NOSSO MAPA
// map.js
// =========================================

const map = L.map("map").setView([41.1579, -8.6291], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
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
// CARTÕES
// =========================================

locations.forEach(location=>{

    // CARD

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

    // TIMELINE

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

    // MARCADOR

    const marker = L.marker([location.lat,location.lng]).addTo(map);

    marker.bindPopup(`<b>${location.title}</b>`);

    marker.on("click",()=>{

        openLocation(location.id);

    });

});

// =========================================
// MODAL
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

    map.flyTo([location.lat,location.lng],15);

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
// BOTÕES
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
// CONTINUAR
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
// TECLADO
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