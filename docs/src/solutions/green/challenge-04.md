# Challenge 4: Schleifen

```blocks
let zahl = 0
basic.forever(function () {
    zahl = 0
    for (let index = 0; index < 10; index++) {
        basic.showNumber(zahl)
        basic.pause(1000)
        zahl += 1
    }
})
```

## Alternative

```blocks
basic.forever(function () {
    for (let Index = 0; Index <= 9; Index++) {
        basic.showNumber(Index)
        basic.pause(1000)
    }
})
```

<script src="../../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "InES-HPMM/zhaw_lightbag");</script>