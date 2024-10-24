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

