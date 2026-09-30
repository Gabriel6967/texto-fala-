const textarea = document.querySelector("#text")
    const button = document.querySelector("#btn")
   
    button.addEventListener("click", () => {
   
        window.speechSynthesis.cancel() //Parar qlq fala em andamento antes de iniciar uma nova
   
        const text = textarea.value // pega o valor digitado
        const speaks = new SpeechSynthesisUtterance(text)//Objeto que representa o texto que será falado
        speaks.lang = 'pt-BR'
   
        window.speechSynthesis.speak(speaks)// Inicia leitura do texto
    } )
 
const CACHE_NAME = 'leitor-cache-v1';
const urlsToCache = [
    './index.html',
    './style.css',
    './script.js'
];
 
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});
 
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});