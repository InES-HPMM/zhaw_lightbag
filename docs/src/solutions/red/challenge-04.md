# Challenge 4: Lauflicht

Auf deinem LED-Ring soll immer nur eine LED leuchten. Immer nach einer Sekunde springt das Licht zur benachbarten LED und bewegt sich so endlos im Kreis.

```blocks
let richtung = 0
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
richtung = 1
let led_index = 0
basic.forever(function () {
    led_index = led_index + richtung
    led_index = led_index % 12
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(led_index, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    basic.pause(1000)
})
```

## Zusatzaufgabe

 - Ändere bei Logoklick die Richtung.
 - Programmiere das Lauflicht so, dass es nach jedem Schritt eine andere Farbe hat.
 - Programmiere das Licht so, dass es langsam ausschaltet und währenddessen das nächste Licht langsam einschaltet. Tipp: Du brauchst dazu Variablen und Logikbauteile.
 - Lasse immer zwei benachbarte LEDs gemeinsam im Kreis laufen. Wie löst du den Übergang von der LED 11 zur LED 0?


```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    richtung = richtung * -1
})
let richtung = 0
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
richtung = 1
let led_index = 0
basic.forever(function () {
    led_index = led_index + richtung
    led_index = led_index % 12
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(led_index, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    basic.pause(1000)
})

```

<script src="../../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "InES-HPMM/zhaw_lightbag");</script>