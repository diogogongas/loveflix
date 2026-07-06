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
        text: "Sempre que tu sorris fazes com que eu também fique feliz, mesmo que eu esteja mais para baixo ou cansado. O teu sorriso muda o meu humor no mesmo instante"
    },

    {
        title: "O teu abraço",
        text: "Quando estamos abraçados sinto-me seguro, sinto que posso ser eu mesmo, sem filtros. Amo mesmo muito estar abraçado a ti, parece mesmo que estou no céu"
    },

    {
        title: "O teu olhar",
        text: "Quando nos estamos a olhar nos olhos vejo nos teus tudo o que eu sempre sonhei e tudo o que sempre orei a Deus. O teu olhar tem um brilho tão único que sempre que tenho saudades lembro-me especialmente do brilho dos teus olhos"
    },

    {
        title: "A tua personalidade",
        text: "Já te contei varias vezes mas nunca vou cansar-me de dizer, amo mesmo do fundo do meu coração a tua personalidade e a tua energia, amo por ser única e contagiante. O ambiente pode não ser o melhor mas a tua personalidade animada e alegre muda tudo para melhor"
    },

    {
        title: "O teu cheiro",
        text: "Uma das coisas que eu mais amo em ti é o teu cheiro. Quando nos abraçamos ou tamos agarrados, o teu cheiro fica na minha roupa, mas sobretudo na minha cabeça. Quando tou com saudades tuas de vez em quando fico a cheirar alguma coisa que tenha o teu cheiro parta sentir que naquele momento estamos juntos"

    },

        {
        title: "A tua companhia",
        text: "Gosto mesmo muito de tar ao teu lado, não importa o lugar nem o horário, se eu tiver ao teu lado estou automaticamente feliz e de bom humor"

    },

        {
        title: "Os teus gostos",
        text: "Não sei se reparaste ou não, mas quando ainda nos estavamos a cohecer reparei que nós tinhamos muita coisa em comum, e quando nos aproximamos mais fomos descobrindo mais coisas que temos em comum"

    },

        {
        title: "A nossa conexão",
        text: "Mesmo que nos tenhamos conhecido á pouco tempo, sinto que já te conheço desde sempre, desde o inicio a nossa coenxão bateu, tem vezes que até falamos a mesma coisa ao mesmo tempo, pensamos nas mesmas coisas, enfim amo mesmo ter esta conexão contigo"

    },

            {
        title: "Os teus beijos",
        text: "Cada vez que nos beijamos penso sempre na sorte que tive em te ter conhecido"

    },

            {
        title: "O teu toque",
        text: "Sempre que tu me tocas do nada ou por algum motivo fico arrepiado, porque o teu toque é das coisas mais especiais para mim"

    },

                {
        title: "A tua força",
        text: "Admiro mesmo muito a força que tu tens, porque ja passaste por muita coisa que não merecias ter passado e mesmo assim consegues sempre colocar um sorriso na cara e ter uma energia contagiante"

    },

                    {
        title: "A tua voz",
        text: "Amo muito a tua voz porque independentemente do que estás a dizer ela consegue acalmar-me e consegue fazer com que o meu humor melhore no mesmo segundo"

    },

                        {
        title: "A tua dedicação",
        text: "Não importa o quão dificil seja o desafio, consegues sempre dedicar-te para conseguir alcançar as metas e os teus desejos. Aprecio mesmo muito essa característica tua"

    },

                            {
        title: "O teu carinho",
        text: "Quando tás a mexer no meu cabelo, ou quando estamos abraçados ou até mesmo quando nos estamos a beijar é como se o mundo parasse, posso não falar, mas amo muito mesmo o teu carinho"

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

        text: reason.text

    };

});