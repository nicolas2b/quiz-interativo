import {aleatorio} from './aleatorio.js'
import {perguntas} from './perguntas.js'

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlterntiva = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;

botaoIniciar. addEventListener('click', iniciaJogo);

function iniciarjogo() {
    atual = 0
    telaInicial.computedStyleMap.display = 'nome';
    caixaPerguntas.classList.remove(".mostrar");
    caixaAlterntiva.classList.remove(".mostrar");
    caixaResultado.classList.remove(".mostrar");
    mostraPergunta();
}

function mostraPergunta() {};