# Challenge 1: Hallo Welt

```blocks
basic.showString("Hallo Welt")
```

## Zusatzaufgabe

```blocks
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.forever(function () {
    basic.showString("Hallo Welt")
    basic.showIcon(IconNames.Surprised)
    basic.pause(200)
    basic.showIcon(IconNames.Asleep)
    basic.pause(200)
    basic.showIcon(IconNames.Surprised)
    basic.pause(200)
})
```

<script src="../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "ines-hpmm/pxt-luma-matrix");</script>