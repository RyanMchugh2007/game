let score_a = 0
input.onButtonPressed(Button.A, function () {
    score_a += 1
})
input.onButtonPressed(Button.AB, function () {
    score_a = score_a - 1
})
input.onButtonPressed(Button.B, function () {
    score_a += 2
})
input.onGesture(Gesture.Shake, function () {
    score_a = 0
})
basic.forever(function () {
    basic.showNumber(score_a)
})
