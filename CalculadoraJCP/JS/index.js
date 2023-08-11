const main=document.querySelector('main')
const root=document.querySelector(':root')
const input=document.getElementById('input')
const resultadoInput=document.getElementById('resultado')
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
document.getElementById("equal").addEventListener("click",calcular)

function calcular(){
    resultadoInput.value = "ERROR"
    resultadoInput.classList.add("error")
    const result = eval(input.value)
    resultadoInput.value= result
    resultadoInput.classList.remove("error")    
}

  // Adicionar evento de clique ao botão de raiz
const raizButton = document.querySelector('.raiz');
raizButton.addEventListener('click', function () {

const inputValue = parseInt(input.value)
    
    if(inputValue) {
      const resultado = calcularRaizQuadrada(inputValue);
      document.getElementById('resultado').value = resultado.toFixed(2);
    }
  });
  function calcularRaizQuadrada(inputValue) {
    return Math.sqrt(inputValue);
  }
// Adicionar evento de clique ao botão de potencia
const potenciaButton=document.querySelector('.elevado').addEventListener('click',function(){
    const potenciaInput=parseInt(input.value)
    if(potenciaInput){
        const resultado = calcularPotencia(potenciaInput)
        document.getElementById('resultado').value=resultado
        
        
    }
})

function calcularPotencia(potenciaInput){
    return Math.pow(potenciaInput,2)
}
const juros=document.querySelector('.jcp').addEventListener('click',function(){
    
})
document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
    const button = ev.currentTarget
    if (button.innerText === "Copy") {
      button.innerText = "Copied!"
      button.classList.add("success")
      navigator.clipboard.writeText(resultInput.value)
    } else {
      button.innerText = "Copy"
      button.classList.remove("success")
    }
  })
// Adicionando o evento de clique ao botao de trocar tema
document.getElementById('temaSwitch').addEventListener('click',function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--BC','#f1f5f9')
        root.style.setProperty('--bodercolor','rebeccapurple')
        root.style.setProperty('--Fontcolor','#212529')
        root.style.setProperty('--Buttoncolor','grey')
        main.dataset.theme='light'
    } else{
        root.style.setProperty('--BC','#212529')
        root.style.setProperty('--bodercolor','rebeccapurple')
        root.style.setProperty('--Fontcolor','aliceblue')
        root.style.setProperty('--Buttoncolor','aliceblue')
        main.dataset.theme='dark'
    }
})

