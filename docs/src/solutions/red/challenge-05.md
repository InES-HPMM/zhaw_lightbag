# Challenge 5: Lautstärke anzeigen

Mit dem Mikrofon auf dem micro:bit kannst du die Lautstärke von deiner Umgebung messen. Zeige auf dem LED-Ring an, wie laut es ist. Je lauter, desto mehr LEDs sollen leuchten. Wiederhole die Messung dauerhaft und aktualisiere deine LEDs.

```blocks
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showBarGraph(input.soundLevel(), 255)
    strip.show()
})

```

## Zusatzaufgabe

 - Zeige den Lautstärkewert zusätzlich auf deinem micro:bit als Zahl an.
 - Spiele einen Warnton ab, wenn deine Umgebung zu laut wird.

```blocks
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.soundLevel() > 160) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
    	
    }
    strip.showBarGraph(input.soundLevel(), 255)
    strip.show()
})
// Das Anzeigen der Zahl blockiert den Block. Ein zweiter Dauerhaft Block kann helfen
basic.forever(function () {
    basic.showNumber(input.soundLevel())
})

```

<script src="../../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "InES-HPMM/zhaw_lightbag");</script>