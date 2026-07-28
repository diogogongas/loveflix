// ==========================================
// LOVEFLIX - CARTAS PARA O FUTURO
// lettersData.js
// ==========================================

const rawLetters = [

    {
        title: "Abrir quando estiveres triste",
        subtitle: "Quero estar contigo, mesmo quando não posso.",
        date: "Escrito com ❤️",
        text: `Amor,

Se estás a ler esta carta, é porque hoje não foi um dos teus melhores dias.

Quero que te lembres de uma coisa: és muito mais forte do que imaginas.

Independentemente do que tenha acontecido, acredita em ti. Eu acredito.

Se eu pudesse, estava aí agora para te dar um abraço bem apertado.

Até lá, fica com estas palavras e lembra-te que nunca estarás sozinha.

Amo-te. ❤️`
    },

    {
        title: "Abrir quando tiveres saudades minhas",
        subtitle: "Porque a distância nunca muda o que sinto.",
        date: "Escrito com ❤️",
        text: `Se tens saudades minhas...

Então sorri.

Porque neste preciso momento, provavelmente eu também estou a pensar em ti.

Fecha os olhos e lembra-te de um dos nossos momentos juntos.

Prometo que em breve vamos criar muitos mais.

Amo-te infinitamente. ❤️`
    },

    {
        title: "Abrir no teu aniversário",
        subtitle: "Um pequeno presente em forma de palavras.",
        date: "🎂 Feliz Aniversário",
        text: `Parabéns, meu amor!

Hoje celebra-se o dia em que nasceu a pessoa que mudou completamente a minha vida.

Espero que tenhas um dia maravilhoso e que nunca te esqueças do quão especial és para mim.

Obrigado por existires.

Amo-te muito. ❤️`
    },

    {
        title: "Abrir quando duvidares de ti",
        subtitle: "Porque às vezes precisamos que alguém nos lembre do nosso valor.",
        date: "Escrito com ❤️",
        text: `Se estás a duvidar de ti...

Lembra-te que eu vejo em ti coisas que talvez tu ainda não consigas ver.

És inteligente.

És bonita.

És capaz.

És suficiente.

Nunca deixes que um momento difícil te faça esquecer isso.

Eu vou estar sempre aqui para te lembrar. ❤️`
    },

    {
        title: "Abrir quando precisares de sorrir",
        subtitle: "Espero que esta carta consiga fazê-lo.",
        date: "😊",
        text: `Sabias que...

Uma das minhas atividades favoritas é fazer-te rir?

Porque o teu sorriso é uma das coisas mais bonitas que conheço.

Por isso...

Sorri agora.

Missão cumprida? ❤️`
    },

    {
        title: "Abrir quando alcançares um objetivo",
        subtitle: "Porque quero celebrar todas as tuas conquistas.",
        date: "🎉",
        text: `Parabéns!

Sabia que ias conseguir.

Sempre acreditei em ti e vou continuar a acreditar.

Hoje celebra.

Amanhã continuamos a conquistar o mundo juntos. ❤️`
    },

    {
        title: "Abrir quando estivermos a viver juntos",
        subtitle: "O início de uma nova aventura.",
        date: "🏡",
        text: `Conseguimos.

Agora esta casa também é feita de nós.

Que nunca nos faltem gargalhadas, abraços e amor.

Mal posso esperar para construir uma vida inteira contigo. ❤️`
    },

    {
        title: "Abrir quando discutirmos",
        subtitle: "Porque o amor é maior do que qualquer discussão.",
        date: "❤️",
        text: `Se estamos zangados...

Quero que saibas que continuo a escolher-te.

Uma discussão nunca vai apagar tudo aquilo que vivemos.

Respira.

Vamos resolver isto juntos.

Como sempre fizemos.

Amo-te. ❤️`
    },

    {
        title: "Abrir daqui a 5 anos",
        subtitle: "Uma viagem no tempo.",
        date: "📅",
        text: `Olá, nós do passado.

Espero que estejas a sorrir enquanto lês isto.

Espero que muitos dos nossos sonhos já tenham acontecido.

E se ainda não aconteceram...

Não faz mal.

O importante é continuarmos juntos.

Amo-te tanto hoje como no dia em que escrevi esta carta. ❤️`
    },

    {
        title: "Abrir quando precisares de um abraço",
        subtitle: "Enquanto o verdadeiro não chega.",
        date: "🤗",
        text: `Imagina agora que estou aí.

Estou a abraçar-te.

Sem pressa.

Sem dizer nada.

Porque às vezes um abraço diz tudo.

Até poder dar-te um de verdade...

Fica com este.

❤️`
    }

];

// ==========================================
// NÃO ALTERAR
// ==========================================

const letters = rawLetters.map((letter, index) => ({

    id: index + 1,

    ...letter

}));