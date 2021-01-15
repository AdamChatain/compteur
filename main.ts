input.onButtonPressed(Button.A, function () {
    number += 1
})
input.onButtonPressed(Button.B, function () {
    number += -1
})
let number = 0
basic.forever(function () {
    basic.showNumber(number)
})
