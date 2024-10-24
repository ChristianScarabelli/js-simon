/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

// Generare 5 numeri random interi da 1 a 50
// (allo stesso tempo) Far partire un countdown di 30 secondi
// Passati 30 secondi
//     - scompaiono i numeri
//     - appaiono gli input
// Tramite bottone di conferma, invio il form
//     - il software dice quanti e quali numeri sono stati indovinati



// DOM ELEMENTS
const countdown = document.getElementById('countdown')  // div del countdown
const countdownText = document.getElementById('instructions')  // p testo del countdown
const randomNumbersList = document.getElementById('numbers-list')  // lista dei numeri da generare
const form = document.getElementById('answers-form')  // form per inserire i numeri
const formButton = document.querySelector('.btn.btn-primary.mt-2.d-block.mx-auto')  // form button
const resultMessage = document.getElementById('message')  // p testo esito form


// Creo una funzione per il countdown
function countdownFrom30To0(n) {
    let timeLeft = n // Secondi rimanenti

    const timer = setInterval(() => {
        countdown.innerText = timeLeft + " Secondi rimanenti"
        timeLeft--  // decremento n di -1 alla volta

        if (timeLeft < 0) {
            clearInterval(timer)  // Stoppo l'esecuzione di timer quando n < 0
            countdown.innerText = "Tempo scaduto!"
            randomNumbersList.innerHTML = ''
            countdownText.innerHTML = 'Inserisci i numeri che ricordi!'
            form.className = 'd-block'
        }
    }, 1000)
}

// Creo una funzione che genera 5 numeri interi da 1 a 50
function random5NumIntFrom1To50() {
    let numbers = []
    for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * 50) + 1
        numbers.push(num)
    }
    return numbers
}

// Creo una funzione per inserire i numeri nella lista
function appendNumbersToList(numbers) {
    const randomNumbersList = document.getElementById('numbers-list');
    randomNumbersList.innerHTML = '' // Pulisci la lista prima di aggiungere nuovi numeri

    for (let i = 0; i < numbers.length; i++) {
        let listItem = document.createElement('li')
        listItem.innerText = numbers[i]
        randomNumbersList.appendChild(listItem)
    }
}

// Creo una funzione che gestisce gli eventi quando il countdown è a 0
function countdownAtZero() {
    randomNumbersList.innerHTML = ''
    countdownText.innerHTML = 'Inserisci i numeri che ricordi!'
    form.className = 'd-block'
}

// Richiamo la funzione per il countdown
countdownFrom30To0(5, countdownAtZero)  // 30 secondi

// Richiamo la funzione per aggiungere gli elementi alla lista
const numbers = random5NumIntFrom1To50()
appendNumbersToList(numbers)

