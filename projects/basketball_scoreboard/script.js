let scoredPointsHome = document.getElementById("scored-points-home")
let scoredPointsGuest = document.getElementById("scored-points-guest")
let matchStatus = document.getElementById("status")
let resetScoreBtn = document.getElementById("reset-btn")

let countHome = 0
let countGuest = 0

function add1Home() {
    countHome += 1
    scoredPointsHome.textContent = countHome
}

function add2Home() {
    countHome += 2
    scoredPointsHome.textContent = countHome
}

function add3Home() {
    countHome += 3
    scoredPointsHome.textContent = countHome
}
function add1Guest() {
    countGuest += 1
    scoredPointsGuest.textContent = countGuest
}

function add2Guest() {
    countGuest += 2
    scoredPointsGuest.textContent = countGuest
}

function add3Guest() {
    countGuest += 3
    scoredPointsGuest.textContent = countGuest
}

function resetScore() {
    countHome = 0
    countGuest = 0

    scoredPointsHome.textContent = countHome
    scoredPointsGuest.textContent = countGuest
}