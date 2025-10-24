/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Oct 2025
 * This program shows an if statement
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
// let lightLevel = 0
// let neopixelStrip: neopixel.Strip = null

// comment
//basic.forever(function () {
    const neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    const lightLevel = input.lightLevel()
    led.plotBarGraph(
        lightLevel,
        255
    )

    input.onButtonPressed(Button.A, function () {
        // zero out all colors
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)

        // select # of neopixels based on light level
        if (lightLevel > 208) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
            neopixelStrip.show()
            basic.pause(1000)
            basic.showIcon(IconNames.Yes)
        } else if (lightLevel > 156) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.pause(1000)
            basic.showIcon(IconNames.Yes)
        } else if (lightLevel > 104) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.pause(1000)
        basic.showIcon(IconNames.Yes)
    } else if (lightLevel > 52) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
} else {
//    (lightLevel <= 51)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
}
    })
