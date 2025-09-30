# Challenge 2: LED Ring

Dein LED-Ring hat 12 LEDs. Bringe nun vier von diesen LEDs zum Leuchten. Arbeite mit der vorhin eingerichteten Neopixel Erweiterung und nutze das Element `rot (255) grün (255) blau (255)` aus der Neopixelerweiterung im Reiter **mehr**. 

LED an der Stelle 0: Rot<br>
LED an der Stelle 3: Orange <br>
LED an der Stelle 6: Blau <br>
LED an der Stelle 9: Grün <br>


```blocks
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
basic.forever(function () {
    strip.setPixelColor(0, neopixel.rgb(255, 0, 0))
    strip.setPixelColor(3, neopixel.rgb(255, 200, 0))
    strip.setPixelColor(6, neopixel.rgb(0, 0, 255))
    strip.setPixelColor(9, neopixel.rgb(0, 255, 0))
    strip.show()
})
```

## Zusatzaufgabe

Definiere vier Bereiche (range) mit je 3 LEDs auf dem Ring und lasse diese in unterschiedlichen Farben leuchten. Kannst du auch unterschiedliche Helligkeiten einstellen?

```blocks
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
let zone_1 = strip.range(0, 3)
let zone_2 = strip.range(3, 3)
let zone_3 = strip.range(6, 3)
let zone_4 = strip.range(9, 3)
basic.forever(function () {
    zone_1.showColor(neopixel.colors(NeoPixelColors.Green))
    zone_2.showColor(neopixel.colors(NeoPixelColors.Orange))
    zone_3.showColor(neopixel.colors(NeoPixelColors.Indigo))
    zone_4.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
})
```

<script src="../../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "InES-HPMM/zhaw_lightbag");</script>