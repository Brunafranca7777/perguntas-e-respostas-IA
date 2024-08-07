const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Handebol é uma modalidade esportiva jogada em equipe que faz parte dos esportes de invasão. Nela, a bola deve ser conduzida e arremessada somente com as mãos. Se uma pessoa que tenha deficiễncia em um de seus braços é possível jogar handebol?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Pois o eesporte não interfere, você consegue ter a habilidade em uma de suas mãos. "
            },
            {
                texto: "Não",
                afirmacao: "Porque o esporte se utiliza as duas mãos para o equilíbrio."
            }
        ]
    },
    {
        enunciado: "Qual esporte é menos praticado?",
        alternativas: [
            {
                texto: "vôlei",
                afirmacao: " O vôlei, futebol e basquete são mais praticados que o handebol."
            },
            {
                texto: "Handebol",
                afirmacao: "Mesmo que o handebol tenha certa representatividade no país, esse esporte ainda é menos praticado em comparação com o vôlei, futebol e basquete"
            }
        ]
    },
    {
        enunciado: "Em qual ano a seleção feminina de handebol venceu o campeonato mundial?",
        alternativas: [
            {
                texto: "2016",
                afirmacao: "Nesse ano teve a vitória da seleção masculina que foi nos campeonatos Pan-Americano."
            },
            {
                texto: "2013",
                afirmacao: "Nesse ano a seleção feminina se destacou e conseguiu a vitória no campeonato mundial de handebol."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
