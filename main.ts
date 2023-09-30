input.onButtonPressed(Button.A, function () {
    she.move(-1)
})
input.onGesture(Gesture.LogoDown, function () {
    she.move(1)
})
input.onButtonPressed(Button.B, function () {
    she.move(1)
})
input.onGesture(Gesture.LogoUp, function () {
    she.move(-1)
})
let she: game.LedSprite = null
she = game.createSprite(2, 2)
let dianxin = game.createSprite(0 % 4, 0 % 4)
basic.forever(function () {
    if (she.isTouching(dianxin)) {
        game.addScore(1)
        dianxin.delete()
        basic.pause(100)
        dianxin = game.createSprite(0 % 4, 0 % 4)
    }
    if (game.score() == 5) {
        basic.showIcon(IconNames.Heart)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        game.gameOver()
    }
})
