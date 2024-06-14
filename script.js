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
                texto: "A) Bernardo Rezende ",
                afirmacao: "1.Errouuu "
            },
            {
                texto: "B)Jose Roberto Guimaraes",
                afirmacao: "2. Acertouu!"
            }
        ]
    },
    {
        enunciado: "Quantos metros de altura tem a Bicampeã Olímpica Thaisa Daher?",
        alternativas: [
            {
                texto: "A) 1,96 ",
                afirmacao: "2. Acertouu"
            },
            {
                texto: "B) 1,92",
                afirmacao: "2.Errouu"
            }
        ]
    },
    {
        enunciado: "Quem foi a melhor central do Mundial de 2022?",
        alternativas: [
            {
                texto: "A)Carol",
                afirmacao: "3. Acertouu"
            },
            {
                texto: "B)Thaisa",
                afirmacao: "3.Errouu"
            }
        ]
    },
    {
        enunciado: "Quem ganhou as olimpíadas de Tokyo?",
        alternativas: [
            {
                texto: "A)EUA",
                afirmacao: "4. Acertouu"
            },
            {
                texto: "B)Brasil",
                afirmacao: "4.Errouu"
            }
        ]
    },
    {
        enunciado: "Qual o nome da melhor oposta da atualidade?",
        alternativas: [
            {
                texto: "A) Paola Egonu",
                afirmacao: "5. Errouu"
            },
            {
                texto: "B) Tijana Boskovic",
                afirmacao: "5.Acertouu"
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
