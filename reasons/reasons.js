// app.js




// Mapear temporadas a partir de rawReasons

// Estado da aplicação
let readReasons = new Set(JSON.parse(localStorage.getItem('loveflix_read_reasons') || '[]'));
let currentReasonId = 1;

// Elementos DOM
const seasonContainers = {
    1: document.getElementById('season1'),
    2: document.getElementById('season2'),
    3: document.getElementById('season3'),
    4: document.getElementById('season4')
};

const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const resetProgressBtn = document.getElementById('resetProgress');

const modal = document.getElementById('reasonModal');
const modalContent = document.getElementById('modalContent');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalBadge = document.getElementById('modalBadge');
const closeModalBtn = document.getElementById('closeModal');
const prevReasonBtn = document.getElementById('prevReason');
const nextReasonBtn = document.getElementById('nextReason');

const startBtn = document.getElementById('startBtn');
const finaleBtn = document.getElementById('finaleBtn');
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle Menu Mobile
if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Scroll Manual do Carrossel
function scrollCarousel(containerId, distance) {
    const container = document.getElementById(containerId);
    if (container) {
        container.scrollBy({ left: distance, behavior: 'smooth' });
    }
}

// Renderizar Cards
function renderCards() {
    Object.values(seasonContainers).forEach(container => {
        if (container) container.innerHTML = '';
    });

    reasons.forEach(reason => {
        const card = document.createElement('div');
        const isRead = readReasons.has(reason.id);
        const isGrandFinale = reason.id === 100;

        card.className = `reason-card ${isRead ? 'read' : ''} ${isGrandFinale ? 'grand-finale-card' : ''}`;
        card.id = `card-${reason.id}`;

        card.innerHTML = `
            <div class="card-top">
                <span class="ep-badge">${isGrandFinale ? 'FINALE' : `EP. ${reason.id}`}</span>
                <span class="read-badge">✓ LIDO</span>
            </div>
            <div class="card-play-overlay">
                <div class="play-circle">▶</div>
            </div>
            <div class="reason-content">
                <h3>${reason.title}</h3>
                <p>${reason.text}</p>
            </div>
        `;

        card.addEventListener('click', () => openModal(reason.id));
        if (seasonContainers[reason.season]) {
            seasonContainers[reason.season].appendChild(card);
        }
    });

    updateProgress();
}

// Atualizar Progresso
function updateProgress() {
    const count = readReasons.size;
    if (progressText) progressText.textContent = `${count} / 100`;
    const percentage = (count / 100) * 100;
    if (progressFill) progressFill.style.width = `${percentage}%`;
}

// Abrir Modal
function openModal(id) {
    currentReasonId = id;
    const reason = reasons.find(r => r.id === id);
    if (!reason) return;

    readReasons.add(id);
    localStorage.setItem('loveflix_read_reasons', JSON.stringify(Array.from(readReasons)));
    
    const cardElement = document.getElementById(`card-${id}`);
    if (cardElement) cardElement.classList.add('read');
    updateProgress();

    if (modalBadge) {
        modalBadge.textContent = reason.id === 100 ? "✨ SEASON FINALE • EPISÓDIO #100" : `TEMPORADA ${reason.season} • EPISÓDIO #${reason.id}`;
    }
    if (modalTitle) modalTitle.textContent = reason.title;
    if (modalText) modalText.textContent = reason.text;

    if (reason.id === 100) {
        if (modalContent) modalContent.classList.add('grand-finale-modal');
        triggerHeartAnimation();
    } else {
        if (modalContent) modalContent.classList.remove('grand-finale-modal');
    }

    if (modal) modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Fechar Modal
function closeModal() {
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Navegação Modal
if (prevReasonBtn) prevReasonBtn.addEventListener('click', () => { if (currentReasonId > 1) openModal(currentReasonId - 1); });
if (nextReasonBtn) nextReasonBtn.addEventListener('click', () => { if (currentReasonId < 100) openModal(currentReasonId + 1); });
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

document.addEventListener('keydown', (e) => {
    if (!modal || modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft' && currentReasonId > 1) openModal(currentReasonId - 1);
    if (e.key === 'ArrowRight' && currentReasonId < 100) openModal(currentReasonId + 1);
});

if (startBtn) startBtn.addEventListener('click', () => openModal(1));
if (finaleBtn) finaleBtn.addEventListener('click', () => openModal(100));

if (resetProgressBtn) {
    resetProgressBtn.addEventListener('click', () => {
        if (confirm("Tens a certeza que queres reiniciar o teu progresso de leitura?")) {
            readReasons.clear();
            localStorage.removeItem('loveflix_read_reasons');
            renderCards();
        }
    });
}

// Animação de Corações (canvas-confetti)
function triggerHeartAnimation() {
    if (typeof confetti === 'undefined') return;

    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 },
            shapes: ['emoji'],
            shapeOptions: { emoji: { value: ['❤️', '💖', '💕', '✨'] } }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 },
            shapes: ['emoji'],
            shapeOptions: { emoji: { value: ['❤️', '💖', '💕', '✨'] } }
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    }());
}

// Inicializar
window.addEventListener('DOMContentLoaded', renderCards);