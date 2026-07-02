// ==========================================
// LOVEFLIX - 100 RAZÕES
// reasonsData.js
// ==========================================

const rawReasons = [

    // =========================
    // TEMPORADA 1 (1-25)
    // O QUE MAIS AMO EM TI
    // =========================

    {
        title: "O teu sorriso",
        text: "Porque consegue iluminar até os meus dias mais difíceis."
    },

    {
        title: "O teu abraço",
        text: "Porque é o lugar onde me sinto verdadeiramente em casa."
    },

    {
        title: "O teu olhar",
        text: "Porque diz muito mais do que qualquer palavra."
    },

    {
        title: "A tua gargalhada",
        text: "Porque basta ouvi-la para eu sorrir também."
    },

    {
        title: "A tua bondade",
        text: "Porque tens um coração enorme."

    },

    

    // Continua até às 100...

];

// ==========================================
// GERAÇÃO AUTOMÁTICA
// NÃO PRECISAS DE ALTERAR NADA ABAIXO
// ==========================================

const reasons = rawReasons.map((reason, index) => {

    const id = index + 1;

    return {

        id,

        season: Math.ceil(id / 25),

        title: reason.title,

        text: reason.text,

        image: `images/reasons/${id}.jpg`

    };

});