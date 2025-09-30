# Challenge 7: Helligkeit

Dein micro:bit kann die Helligkeit messen. Die Helligkeit wird mit einer Zahl von 0 bis 255 angegeben, wobei 0 der dunkelste und 255 der hellste Wert ist. Lasse deinen micro:bit einen Warnton abspielen, wenn der Helligkeitswert grösser als 150 wird.

```blocks
basic.forever(function () {
    if (input.lightLevel() > 100) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
    } else {
    	
    }
})
```

## Zusatzaufgabe

 - Versuche die aktuelle Helligkeit auf dem Bildschirm anzuzeigen. Nutze dazu den folgenden Block:

```blocks
basic.forever(function () {
    led.plotBarGraph(
    255 - input.lightLevel(),
    255
    )
    music.play(music.tonePlayable(input.lightLevel() * 4, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})
```

<script src="../../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "InES-HPMM/zhaw_lightbag");</script>