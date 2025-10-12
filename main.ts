/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Oct 2025
 * This program shows an if statement
*/


// variables
let neopixelStrip: neopixel.Strip = null

neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Zero out all colors

neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

if (input.lightLevel() <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
}
if (input.lightLevel() > 52) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
}

if (input.lightLevel() > 104 ){
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
}

if (input.lightLevel() > 156) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
}

if (input.lightLevel() > 208) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
    neopixelStrip.show()
}