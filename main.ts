input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Confused)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    basic.pause(10000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
basic.forever(function () {
    // Ruido
    // Calor
    // Frío
    // Luz
    if (input.soundLevel() > 120) {
        basic.showIcon(IconNames.Angry)
    } else if (input.temperature() > 28) {
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() < 10) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    } else if (input.lightLevel() > 100) {
        basic.showIcon(IconNames.Happy)
        led.enable(true)
    } else {
        led.enable(false)
    }
})
