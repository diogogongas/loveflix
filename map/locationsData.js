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
},

{

title:"Passeio no Porto",

date:"Agosto 2024",//Ainda tenho q ver

place:"Porto",
 
lat:41.14518347807925,

lng:-8.61650983531953,
image:"../images/map/cordo.jpg",//mudar a foto

description:"Gostei mesmo muito deste dia, tivemos a passear pelo Porto, tiveste a ser a minha guia turística. Mas gostei mais por estar a conhecer um lugar que era importante para ti e confesso que neste dia comecei a pensar seriamente em mudar de clube hahahah"
// Ver se dá para diminuir o texto
},

{

title:"Pedido de Namoro",

date:"Agosto 2024",//Ainda tenho q ver

place:"Porto",
lat:41.1378054008291,

lng:-8.609192599208841,
image:"../images/map/first_kiss.jpg",//mudar a foto

description:"Mesmo que o pedido tenha sido descoberto e que a declaração que eu fiz não tenha sido tão boa, este dia foi um dos mais marcantes de toda a minha vida, foi neste dia que finalmente coloquei uma aliança no dedo na pessoa que eu amo e que quero construir uma vida e uma família"
// Ver se dá para diminuir o texto
},


{

title:"Ver o pôr do Sol",

date:"Agosto 2024",//Ainda tenho q ver

place:"Porto",
lat:41.13829988182759,

lng:-8.608324878348716,
image:"../images/map/first_kiss.jpg",//mudar a foto

description:"Adorei vêr o pôr do sol contigo minha princesa, não sei porque o pôr do sol tem mesmo um significado muito grande para mim e poder ve-lo contigo era um dos meus maiores sonhos que eu consegui realizar minha princesa"
// Ver se dá para diminuir o texto
},

];

// =========================================

const locations=rawLocations.map((location,index)=>({

id:index+1,

...location

}));