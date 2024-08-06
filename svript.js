const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Era uma vez uma pequena cidade chamada Verdelândia, conhecida por suas ruas limpas e belas praças. Contudo, ultimamente, o problema do lixo nas ruas começou a surgir. Vamos acompanhar a história de João, um jovem morador que quer fazer a diferença em sua cidade. Ao longo do caminho, você ajudará João a tomar decisões. Escolha sabiamente, pois cada decisão terá uma consequência. João acorda cedo em um sábado ensolarado e decide dar uma volta pela cidade. Ele percebe que há muito lixo espalhado pelas ruas e praças.",
        alternativas: [
            {
                texto: "Ignorar o lixo e continuar seu passeio.",
                afirmacao: "João continua seu passeio, mas a visão do lixo o incomoda o dia inteiro, e ele se sente culpado por não ter feito nada."
            },
            {
                texto: "Começar a recolher o lixo que encontrar.",
                afirmacao: "João começa a recolher o lixo e acaba recebendo elogios de vários moradores, que se inspiram em sua atitude."
            }
        ]
    },
    {
        enunciado: "Enquanto João recolhe o lixo, ele encontra seu amigo Pedro, que pergunta por que ele está fazendo isso.",
        alternativas: [
            {
                texto: "Estou cansado de ver nossa cidade suja. Quero fazer a diferença.",
                afirmacao: "Pedro se junta a João, e juntos recolhem ainda mais lixo, atraindo a atenção de outros moradores."
            },
            {
                texto: "Não sei, só estou passando o tempo.",
                afirmacao: "Pedro acha a atitude de João estranha e vai embora, deixando João continuar sozinho."
            }
        ]
    },
    {
        enunciado: "Ao continuar sua jornada, João encontra um grupo de crianças brincando em um parque cheio de lixo.",
        alternativas: [
            {
                texto: "Pedir ajuda às crianças para recolher o lixo.",
                afirmacao: "As crianças aceitam ajudar e, ao final, aprendem sobre a importância de manter a cidade limpa."
            },
            {
                texto: "Recolher o lixo sozinho para não atrapalhar a brincadeira.",
                afirmacao: "João recolhe o lixo sozinho, mas as crianças continuam a sujar o parque, pois não entendem a importância de mantê-lo limpo."
            }
        ]
    },
    {
        enunciado: "Depois de um dia exaustivo recolhendo lixo, João decide visitar o prefeito para discutir o problema.",
        alternativas: [
            {
                texto: "Implementar mais lixeiras pela cidade.",
                afirmacao: "O prefeito concorda e, após instalar mais lixeiras, a quantidade de lixo nas ruas diminui consideravelmente."
            },
            {
                texto: "Realizar campanhas educativas sobre a importância de não jogar lixo no chão.",
                afirmacao: "As campanhas educativas são bem-sucedidas e a conscientização dos moradores aumenta, resultando em menos lixo nas ruas."
            }
        ]
    },
    {
        enunciado: "Com as ações de João, a cidade começa a mudar. Agora, ele precisa decidir como continuar ajudando a manter Verdelândia limpa.",
        alternativas: [
            {
                texto: "Organizar mutirões mensais de limpeza.",
                afirmacao: " Os mutirões mensais se tornam um evento popular e divertido, envolvendo toda a comunidade na limpeza da cidade. Independente das escolhas, João mostrou que pequenas ações podem ter grandes impactos. Verdelândia aprendeu com seu exemplo e tornou-se uma cidade modelo em termos de limpeza e consciência ambiental. E você, qual seria sua escolha?"
            },
            {
                texto: "Fundar uma ONG focada na preservação do meio ambiente.",
                afirmacao: "A ONG de João cresce rapidamente, promovendo várias ações ambientais e projetos educativos, inspirando outras cidades a seguirem o exemplo. Independente das escolhas, João mostrou que pequenas ações podem ter grandes impactos. Verdelândia aprendeu com seu exemplo e tornou-se uma cidade modelo em termos de limpeza e consciência ambiental. E você, qual seria sua escolha?"
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
    caixaPerguntas.textContent = "Fim...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
