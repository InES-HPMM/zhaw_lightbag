# Challenge 5: Mikrofon

Findest du das Mikrofon auf dem micro:bit? Das Mikrofon ist einer von vielen Sensoren auf dem micro:bit. Programmiere mit dem micro:bit eine Lautstärkenwarnung. Zeige dazu auf dem Bildschirm ein Symbol an, wenn die Lautstärke höher als 100 ist.

Schreie den micro:bit an, bis du das Symbol siehst. Wenn du nicht mehr schreist, sollte kein Symbol mehr angezeigt werden.

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

 - Wie laut kannst du Schreien? Spiele mit dem Vergleichswert der Lautstärke!
 - Versuche die aktuelle Lautstärke auf dem Bildschirm anzuzeigen. Nutze dazu den folgenden Block:

```blocks
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})

```

<script src="../../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "InES-HPMM/zhaw_lightbag");</script>