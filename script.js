const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. Qual a função do verbo na oração?",
        alternativas: [
            {
                texto: "a) Ação",
                afirmacao: "1.Acertouu "
            },
            {
                texto: " b) Substantivo",
                afirmacao: "1.Errou!"
            }
        ]
    },
    {
        enunciado: "2. Qual é a forma correta de escrever a palavra "fato" no plural?",
        alternativas: [
            {
                texto: "a) Fatos",
                afirmacao: "2. Acertouu"
            },
            {
                texto: "b) Fatoes",
                afirmacao: "2.Errouu"
            }
        ]
    },
    {
        enunciado: "3. Qual dessas palavras está corretamente acentuada?",
        alternativas: [
            {
                texto: " a) Javali",
                afirmacao: "3. Acertouu"
            },
            {
                texto: " b) Pásaro",
                afirmacao: "3.Errouu"
            }
        ]
    },
    {
        enunciado: "4. O que é um adjetivo?",
        alternativas: [
            {
                texto: "a)Palavra que caracteriza o substantivo",
                afirmacao: "4. Acertouu"
            },
            {
                texto: "b) Palavra que indica ação",
                afirmacao: "4.Errouu"
            }
        ]
    },
    {
        enunciado: "5. Qual a classe gramatical da palavra "alegria"?",
        alternativas: [
            {
                texto: " a) Substantivo",
                afirmacao: "5. Acertou"
            },
            {
                texto: " b) Advérbio",
                afirmacao: "5. Errou"
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
    caixaPerguntas.textContent = "Gabarito...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
