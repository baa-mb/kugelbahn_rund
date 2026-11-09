function starte () {
    basic.showLeds(`
        . . # . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
    pins.analogWritePin(AnalogPin.P2, 59)
    // Servo-Signal abschalten
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P2, 180)
    runden = 0
}
input.onButtonPressed(Button.B, function () {
    starte()
})
let runden = 0
runden = 0
starte()
basic.forever(function () {
    if (runden > 100) {
        // Servo-Signal abschalten
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        // Schleife beenden: Programm bleibt hier stehen
        while (runden > 5) {
            basic.pause(1000)
        }
    } else {
        basic.pause(2000)
        runden += 1
    }
})
