let paginaQuestao = document.querySelector("#pergunta");
let paginaSabre = document.querySelector("#sabre");
let btnJedi = document.querySelector(".jedi");
let btnSith = document.querySelector(".sith");
let lamina = document.querySelector(".lamina");

function escolherSith(){
    paginaSabre.style.display = 'flex';
    paginaQuestao.style.display = 'none';
    lamina.style.background = 'linear-gradient(90deg, #e80808, #e48383, #e80808)';
    lamina.style.boxShadow = '0 0 50px #e80808';

}

function escolherJedi(){
    paginaSabre.style.display = 'flex';
    paginaQuestao.style.display = 'none';
    lamina.style.background = 'linear-gradient(90deg, #000ff37, #36fd61, #00ff37)';
    lamina.style.boxShadow = '0 0 50px #000ff37';

}

btnSith.onclick = escolherSith;
btnJedi.onclick = escolherJedi;


// Registra o service worker - ele chama o service work js -
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./service-worker.js')
    .then(function() { 
        console.log('Service Worker Registered'); 
    }, function(error){
        console.error(error);
    });
}