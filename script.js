const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O primeiro dia de aula do ano começou! Como você decide se apresentar para a turma nova?",
        alternativas: [
            {
                texto: "Fala com todo mundo com naturalidade.",
                afirmacao: "Você começou o ano com o pé direito e logo fez novas amizades."
            },
            {
                texto: "Fica na sua, observando o ambiente primeiro.",
                afirmacao: "Você foi mais reservada no início, mas isso te ajudou a entender melhor o grupo."
            }
        ]
    },
    {
        enunciado: "Uma amiga pede para colar na prova, mas você estudou bastante. O que faz?",
        alternativas: [
            {
                texto: "Ajuda discretamente, afinal é sua amiga.",
                afirmacao: "Você ajudou, mas ficou com medo de ser pega. No fim, deu tudo certo... dessa vez."
            },
            {
                texto: "Explica que prefere não se envolver com cola.",
                afirmacao: "Foi difícil dizer não, mas você se sentiu orgulhosa da sua postura."
            }
        ]
    },
    {
        enunciado: "Um crush começa a puxar assunto com você online. Você...",
        alternativas: [
            {
                texto: "Responde naturalmente e puxa papo também.",
                afirmacao: "Vocês começaram a conversar todo dia, e virou algo bem especial."
            },
            {
                texto: "Fica nervosa e só responde com emojis.",
                afirmacao: "Você ficou tímida no início, mas ele achou fofo e continuou insistindo."
            }
        ]
    },
    {
        enunciado: "Sua mãe pede ajuda em casa, mas você queria descansar vendo série. O que escolhe?",
        alternativas: [
            {
                texto: "Ajuda rápido e depois assiste tranquila.",
                afirmacao: "Sua mãe ficou super feliz, e você viu a série sem peso na consciência."
            },
            {
                texto: "Finge que não ouviu e continua assistindo.",
                afirmacao: "Você relaxou, mas depois ficou com um certo peso na consciência..."
            }
        ]
    },
    {
        enunciado: "Você está em dúvida entre sair com os amigos ou ficar estudando para a prova. O que faz?",
        alternativas: [
            {
                texto: "Sai com os amigos, a vida também é feita de momentos felizes.",
                afirmacao: "Aproveitou muito! Mas teve que correr para estudar depois."
            },
            {
                texto: "Decide estudar, mas marca algo legal para o fim de semana.",
                afirmacao: "Fez o que precisava e ainda se recompensou depois."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Essa foi a sua história... 💖";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

function reiniciarJogo() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.style.display = "none";
    mostraPergunta();
}


mostraPergunta();
