# Challenge 7: Helligkeit

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