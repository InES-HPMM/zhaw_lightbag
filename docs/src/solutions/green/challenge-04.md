# Challenge 4: Schleifen

Befehle wiederholen sich beim Programmieren oft. Da Programmierer faul sind, möchten sie so wenig Blöcke wie möglich einsetzen. Dafür gibt es Schleifen. Eine Schleife wiederholt eine Reihe von Blöcken, bis eine Bedingung zum Abbrechen erfüllt ist. Mit der Variablen „Index“ weisst du, beim wievielten Durchgang die Schleife ist. 

Dein neues Programm soll von 0 bis 9 zählen und die Zahlen auf dem LED-Display anzeigen

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

## Zusatzaufgabe
 - Beim Drücken des Tasters A soll in 2er-Schritten gezählt werden.
 - Beim Drücken des Tasters B soll der Zähler auf 0 zurückgesetzt werden.

```blocks

```

<script src="../../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "InES-HPMM/zhaw_lightbag");</script>