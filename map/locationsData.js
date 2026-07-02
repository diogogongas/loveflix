// =========================================
// LOVEFLIX
// locationsData.js
// =========================================

const rawLocations=[

{

title:"Onde nos conhecemos",

date:"25 Março 2026",

place:"Carvalhos",

lat:41.06702467162873,

lng:-8.575818847056254,

image:"../images/map/first_date.jpg",

description:"Foi aqui que eu te vi pessoalmente e percebi que quero ficar contigo para o resto da minha vida"

},

{

title:"Primeiro encontro",

date:"26 Março 2026  13:58 pm",

place:"Gaia",

lat:41.066792511855645,

lng:-8.575497408343526,

image:"../images/map/first_date.jpg",

description:"Por coincidência o nosso primeiro encontro foi o dia que nos conhecemos, mas mesmo assim estava muito ansioso por te conhecer pessoalmente"

},

{

title:"Primeiro beijo",

date:"3 Maio 2024",// tenho que confirmar

place:"Jardins do Morro",

lat:41.137307476813135,

lng:-8.609314960544975,

image:"../images/map/first_kisss.jpg",

description:"Aconteceu tudo tão rápido que no segundo encontro ja nos beijamos, a cada beijo que demos as borboletas da barriga aumentavam"

},

{

title:"Primeira vez em casa (Diogo)",

date:"Agosto 2024",//Ainda tenho q ver

place:"Aveiro",

lat:41.00096774821309,

lng:-8.566046739390618,
image:"../images/map/first_kisss.jpg",//mudar a foto

description:"Ainda me lembro muito bem deste dia, eu subi o Picoto para tar á tua espera e tava muito nervoso e com borboletas na barriga, depois fomos a conversar enquanto desciamos o Picoto. Inicialmente a ideia era passarmos a tarde no parque do Coteiro, mas como tavas com sede decidimos ir para minha casa e depois ficamos por casa. Esse dia foi mágico, deitamo-nos juntos na cama, beijamo-nos, enfim foi tudo de bom. Não contei no momento, mas quando tu voltaste a apanhar a camioneta para tua casa eu desci o Picoto a pular e a gritar porque eu amo-te mesmo muito meu amor"
// Ver se dá para diminuir o texto
},


{

title:"Segunda vez em casa (Diogo)",

date:"Agosto 2024",//Ainda tenho q ver

place:"Aveiro",

lat:41.00142118059128,

lng:-8.566225106650258,
image:"../images/map/first_kisss.jpg",//mudar a foto

description:"Este dia foi também muito especial para mim, almoçamos juntos com a minha familia ainda sem estarmos a namorar, para mim não foi só um almoço, foi quando eu te apresentei verdadeiramente aos meus pais"
// Ver se dá para diminuir o texto
}

];

// =========================================

const locations=rawLocations.map((location,index)=>({

id:index+1,

...location

}));