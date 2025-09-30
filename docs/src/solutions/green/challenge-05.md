# Challenge 5: Mikrofon

```blocks
basic.forever(function () {
    if (input.soundLevel() > 180) {
        basic.showIcon(IconNames.No)
    } else if (input.soundLevel() > 100) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
```

## Zusatzaufgabe

```blocks
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})

```

<script src="../../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "InES-HPMM/zhaw_lightbag");</script>