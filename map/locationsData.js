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

description:"Foi exatamente neste lugar que os meus olhos se cruzaram com os teus pela primeira vez. Naquele instante, o mundo à minha volta parou e soube, no mais fundo do meu coração, que tinha encontrado o meu porto seguro e que queria partilhar contigo cada segundo do resto da minha vida."

},

{

title:"Primeiro encontro",

date:"26 Março 2026  13:58 pm",

place:"Carvalhos",

lat:41.066792511855645,

lng:-8.575497408343526,

image:"../images/map/first_date.jpg",

description:"Por uma coincidência do destino, o dia em que nos conhecemos acabou por ser também o do nosso primeiro encontro. Apesar do nervosismo e do coração a mil, a ansiedade de te ver em pessoa deu lugar ao momento mais bonito e especial da minha vida."

},

{

title:"Primeiro beijo",

date:"1 Abril 2026",// tenho que confirmar

place:"Jardim do Morro",

lat:41.137307476813135,

lng:-8.609314960544975,

image:"../images/banner1.jpeg",

description:"O nosso tempo parecia voar e a ligação era inegável: no segundo encontro, o nosso primeiro beijo aconteceu. Lembro-me perfeitamente de sentir o coração a acelerar e as borboletas no estômago a multiplicarem-se a cada segundo ao teu lado. Vou sempre lembrar-me desse momemto para sempre"

},

{

title:"Primeira vez em casa (Diogo)",

date:"Abril 2026",//Ainda tenho q ver

place:"Aveiro",

lat:41.00096774821309,

lng:-8.566046739390618,
image:"../images/1_casa.jpeg",//mudar a foto

description:"Ainda me lembro muito bem deste dia, eu subi o Picoto para tar á tua espera e tava muito nervoso e com borboletas na barriga, depois fomos a conversar enquanto desciamos o Picoto. Inicialmente a ideia era passarmos a tarde no parque do Coteiro, mas como tavas com sede decidimos ir para minha casa e depois ficamos por casa. Esse dia foi mágico, deitamo-nos juntos na cama, beijamo-nos, enfim foi tudo de bom. Não contei no momento, mas quando tu voltaste a apanhar a camioneta para tua casa eu desci o Picoto a pular e a gritar porque eu amo-te mesmo muito meu amor"
// Ver se dá para diminuir o texto
},


{

title:"Segunda vez em casa (Diogo)",

date:"Abril 2026",//Ainda tenho q ver

place:"Aveiro",

lat:41.00142118059128,

lng:-8.566225106650258,
image:"../images/letters_banner.jpeg",//mudar a foto

description:"Este dia foi também muito especial para mim, almoçamos juntos com a minha familia ainda sem estarmos a namorar, para mim não foi só um almoço, foi quando eu te apresentei verdadeiramente aos meus pais"
// Ver se dá para diminuir o texto
},

{

title:"Passeio no Porto",

date:"18 de Abril de 2026",//Ainda tenho q ver

place:"Porto",
 
lat:41.14518347807925,

lng:-8.61650983531953,
image:"../images/passeio_porto.jpeg",//mudar a foto

description:"Gostei mesmo muito deste dia, tivemos a passear pelo Porto, tiveste a ser a minha guia turística. Mas gostei mais por estar a conhecer um lugar que era importante para ti e confesso que neste dia comecei a pensar seriamente em mudar de clube hahahah"
// Ver se dá para diminuir o texto
},

{

title:"Pedido de Namoro",

date:"9 de Maio de 2026",//Ainda tenho q ver

place:"Porto",
lat:41.1378054008291,

lng:-8.609192599208841,
image:"../images/pedido.jpeg",//mudar a foto

description:"Mesmo que o pedido tenha sido descoberto e que a declaração que eu fiz não tenha sido tão boa, este dia foi um dos mais marcantes de toda a minha vida, foi neste dia que finalmente coloquei uma aliança no dedo na pessoa que eu amo e que quero construir uma vida e uma família"
// Ver se dá para diminuir o texto
},


{

title:"Ver o pôr do Sol",

date:"18 de Abril de 2026",//Ainda tenho q ver

place:"Porto",
lat:41.13829988182759,

lng:-8.608324878348716,
image:"../images/banner5.webp",//mudar a foto

description:"Adorei vêr o pôr do sol contigo minha princesa, não sei porque o pôr do sol tem mesmo um significado muito grande para mim e poder ve-lo contigo era um dos meus maiores sonhos que eu consegui realizar minha princesa"
// Ver se dá para diminuir o texto
},

{

title:"Date do pôr do Sol",

date:"18 Outubro 2026",

place:"Espinho",

lat:41.007759180349986,

lng:-8.646425620264717,

image:"../images/date_sunset.jpeg",

description:"Depois de meses a combinarmos finalmente conseguimos ter o nosso date na praia para ver-mos o pôr do sol juntos, posso dizer com toda a minha certeza que esse momento foi um dos mais especiais de toda a minha VIDA, porque consegui ver uma o pôr do sol que para mim já é muito simbólico, mas poder faze-lo com o amor da minha vida melhora sempre cada ocasião. Também tivemos a troca de presentes e nesse momento o meu coração derreteu-se todo com os presentes que me deste, não pelos presentes em si que também tavam muito lindos, mas foi mais pelo jesto, pelo tempo e pela intenção que depositaste em, cada palavra. Amei mesmo muito o nosso date "

},

];

// =========================================

const locations=rawLocations.map((location,index)=>({

id:index+1,

...location

}));