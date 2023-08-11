const main=document.querySelector('main')
const root=document.querySelector(':root')
const input = document.getElementById('input');
const resultadoInput = document.getElementById('resultado');
const raizquadrada=document.getElementById('raiz')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charkeyBtn){
    charkeyBtn.addEventListener('click',function(){
        const value = charkeyBtn.dataset.value
        input.value += value
    })
})
document.getElementById('clear').addEventListener('click',function(){
    input.value =' '
    input.focus()

})
document.getElementById('delete').addEventListener('click',function(){
    input.value= input.value.slice(0,-1)
})
input.addEventListener("keydown",function(ev){
    ev.preventDefault()
        if(allowedKeys.includes(ev.key)){
            input.value += ev.key
            return
        }
        if(  ev.key ==='Backspace'){
            input.value= input.value.slice(0,-1)
        }
        if(ev.key === "Enter"){
            calcular()
           
        }
})
document.getElementById("equal").addEventListener("click",calcularRaizQuadrada)


function calcular(){
    resultadoInput.value = "ERROR"
    resultadoInput.classList.add("error")
    const result = eval(input.value)
    resultadoInput.value= result
    resultadoInput.classList.remove("error")    
}
// Função para calcular a raiz quadrada
function calcularRaizQuadrada(inputValue) {
    return Math.sqrt(inputValue);
}

// Função para calcular o quadrado de um número
function calcularQuadrado(inputValue) {
    return inputValue ** 2;
}

// Função para calcular a expressão matemática
function calcular() {
    resultadoInput.value = "ERROR";
    resultadoInput.classList.add("error");
    const result = eval(input.value);
    resultadoInput.value = result;
    resultadoInput.classList.remove("error");
}

// Obtém os elementos do DOM


// Adicionar evento de clique ao botão de raiz
const raizButton = document.querySelector('.raiz');
raizButton.addEventListener('click', function () {
    const inputValue = parseFloat(input.value);

    if (!isNaN(inputValue)) {
        const resultado = calcularRaizQuadrada(inputValue);
        resultadoInput.value = resultado.toFixed(2);
        return calcular
    }
});

// Adicionar evento de clique ao botão de quadrado
const quadradoButton = document.querySelector('.elevado');
quadradoButton.addEventListener('click', function () {
    const inputValue = parseFloat(input.value);

    if (!isNaN(inputValue)) {
        const resultado = calcularQuadrado(inputValue);
        resultadoInput.value = resultado.toFixed(2);
        calcular();
    }
});

// Adicionar evento de clique ao botão de cópia
const copyButton = document.getElementById('copyclick');
copyButton.addEventListener('click', function () {
    resultadoInput.select();
    document.execCommand('copy');
});

// ... O resto do seu código para outros botões e eventos ...
