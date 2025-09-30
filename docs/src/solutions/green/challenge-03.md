# Challenge 3: Taster A+B

Mit den Tastern A und B kannst du den micro:bit steuern. Aber du musst den micro:bit zuerst so programmieren, dass er auf die Taster reagieren kann. Versuche, zum Beispiel, dass beim Drücken vom Taster A ein Smiley erscheint.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.showIcon(IconNames.Asleep)
```

## Alternative

```blocks
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
```

## Zusatzaufgabe

- Erweitere das Programm so, dass beim Drücken des Tasters B ein anderes Symbol angezeigt wird
- Verwende zusätzlich den Touch-Sensor „Logo“ um ein eigenes Symbol anzuzeigen

```blocks

```

<script src="../../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "InES-HPMM/zhaw_lightbag");</script>