let bothPlayed = 0
let playerOne = 0
let playerTwo = 0
input.onButtonPressed(Button.A, function () {
    if (bothPlayed == 0) {
        playerOne = randint(0, 10)
        bothPlayed = bothPlayed + 1
        basic.showNumber(playerOne)
    }
})
input.onButtonPressed(Button.B, function () {
    if (bothPlayed == 1) {
        playerTwo = randint(0, 10)
        bothPlayed = bothPlayed + 1
        basic.showNumber(playerTwo)
    }
})
basic.forever(function () {
    if (bothPlayed == 2) {
        basic.pause(200)
        basic.clearScreen()
        if (playerOne == playerTwo) {
            basic.showString("Draw")
            basic.pause(100)
        } else {
            music.playMelody("C5 A B G A F G E ", 120)
            if (playerOne > playerTwo) {
                basic.showString("P1 - Wins")
            } else {
                basic.showString("P2 - Wins")
            }
        }
        bothPlayed = 0
        basic.pause(200)
    }
})
