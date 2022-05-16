var r = document.getElementById('resultado')
var v = document.getElementById('vencedor')
var m = document.getElementById('mao')
var scoreYou = document.getElementById('youS')
var scoreCpu = document.getElementById('cpuS')
var sy = 0
var sc = 0
function jokenpo(escolhido){
    var you = escolhido
    var sorteio = Math.floor(Math.random()*3)+1
    switch (you){
        case "pedra": 
        r.classList.add("azul")
        r.classList.remove("verde")
        r.classList.remove("roxo")
        break
        case "papel": r.classList.add("verde")
        r.classList.remove("azul")
        r.classList.remove("roxo")
        break
        case "tesoura": r.classList.add("roxo")
        r.classList.remove("verde")
        r.classList.remove("azul")
        break
    }
    switch(sorteio){
        case 1: var cpu = "pedra"
        break
        case 2: var cpu = "papel"
        break
        case 3: var cpu = "tesoura"
        break
    }
    
    if(
        (you=="pedra" && cpu=="tesoura")|| 
        (you=="papel" && cpu=="pedra") || 
        (you=="tesoura" && cpu=="papel")
    ){
        var final = "Voce venceu"
        sy++
    }
    else if(
        (cpu=="pedra" && you=="tesoura")|| 
        (cpu=="papel" && you=="pedra") || 
        (cpu=="tesoura" && you=="papel")
    ){
        var final = "Voce perdeu"
        sc++
    }
    else{
var final = "Voces empataram"       
    }
    r.innerText = `Você escolheu: ${you} e seu oponente é: ${cpu}`
    v.innerText = final
    scoreYou.innerText = sy
    scoreCpu.innerText = sc
}
function exibir(escolhido){
    var img = escolhido
    switch (img){
        case "pedra": 
        m.classList.add("mPedra")
        m.classList.remove("mPapel")
        m.classList.remove("mTesoura")
        break
        case "papel": 
        m.classList.add("mPapel")
        m.classList.remove("mPedra")
        m.classList.remove("mTesoura")
        break
        case "tesoura": 
        m.classList.add("mTesoura")
        m.classList.remove("mPapel")
        m.classList.remove("mPedra")
        break
    }
}
function limpar(){
    m.classList.remove("mTesoura")
    m.classList.remove("mPapel")
    m.classList.remove("mPedra")
}