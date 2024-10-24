// DOM ELEMENTS
const countdown = document.getElementById('countdown')  // div del countdown
const countdownText = document.getElementById('instructions')  // p testo del countdown
const randomNumbersList = document.getElementById('numbers-list')  // lista dei numeri da generare
const form = document.getElementById('answers-form')  // form per inserire i numeri
const formButton = document.querySelector('.btn.btn-primary.mt-2.d-block.mx-auto')  // form button
const resultMessage = document.getElementById('message')  // p testo esito form


// Funzione per il countdown
function countdownFrom30To0(n, callback) {
    let timeLeft = n // Secondi rimanenti

    const timer = setInterval(() => {
        countdown.innerText = timeLeft + " Secondi rimanenti"
        timeLeft--  // decremento n di -1 alla volta

        if (timeLeft < 0) {
            clearInterval(timer)  // Stoppo l'esecuzione di timer quando n < 0
            countdown.innerText = "Tempo scaduto!"
            if (callback) callback()  // Chiamo il callback se esiste
        }
    }, 1000)
}

// Funzione che genera 5 numeri interi da 1 a 50
function random5NumIntFrom1To50() {
    let numbers = []
    for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * 50) + 1
        numbers.push(num)
    }
    return numbers
}

// Funzione per inserire i numeri nella lista
function appendNumbersToList(numbers) {
    const randomNumbersList = document.getElementById('numbers-list')
    randomNumbersList.innerHTML = '' // Pulisci la lista prima di aggiungere nuovi numeri

    for (let i = 0; i < numbers.length; i++) {
        let listItem = document.createElement('li')
        listItem.innerText = numbers[i]
        randomNumbersList.appendChild(listItem)
    }
}

// Funzione che gestisce gli eventi quando il countdown è a 0
function countdownAtZero() {
    randomNumbersList.innerHTML = ''
    countdownText.innerHTML = 'Inserisci i numeri che ricordi!'
    form.classList.remove('d-none')
    form.classList.add('d-block')
}

// Funzione per verificare i numeri inseriti dall'utente
function checkUserNumbers(userNumbers, generatedNumbers) {
    let correctNumbers = userNumbers.filter(num => generatedNumbers.includes(num))
    return correctNumbers
}


// Gestisco l'invio del form
form.addEventListener('submit', function (event) {
    event.preventDefault()

    const inputFields = document.querySelectorAll('#input-group input')  // Recupero gli input di input group
    const userNumbers = Array.from(inputFields).map(input => parseInt(input.value, 10))
    const correctNumbers = checkUserNumbers(userNumbers, generatedNumbers)

    resultMessage.innerText = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}`
})


// INIZIALIZZO LE FUNZIONI
// Countdown
countdownFrom30To0(5, countdownAtZero)  // 30 secondi

// Aggiungere gli elementi alla lista
const generatedNumbers = random5NumIntFrom1To50()
appendNumbersToList(generatedNumbers)


