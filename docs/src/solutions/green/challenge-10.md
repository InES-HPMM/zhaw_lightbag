# Challenge 10: Würfel

Du kannst den micro:bit auch als Würfel verwenden! Zeige auf dem Display nach dem Schütteln die gewürfelte Zufallszahl zwischen 1 und 6 an! Erweitere die Anzeige so, dass das Resultat wie bei einem normalen Würfel mit 7 Lichtpunkten angezeigt wird. 

```blocks
let wurfzahl = 0
input.onGesture(Gesture.Shake, function () {
    wurfzahl = randint(1, 6)
    if (wurfzahl == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (wurfzahl == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (wurfzahl == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (wurfzahl == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (wurfzahl == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (wurfzahl == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else {
    	
    }
})
```

## Zusatzaufgabe

 - Zeige während dem Würfeln (Schütteln) ein anderes Symbol (Zum Beispiel ein Smiley oder auch abwechselnd Nummern)
 - Zinke den Würfel, sodass der Würfel immer eine 6 anzeigt. Damit der gezinkte Würfel nicht auffällt, soll er nur eine 6 würfeln, wenn du gleichzeitig zum Schütteln das Logo berührst. 
 
```blocks
let wurfzahl = 0
basic.forever(function () {
    while (input.isGesture(Gesture.Shake)) {
        wurfzahl = randint(1, 6)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(50)
        basic.showIcon(IconNames.Diamond)
        basic.pause(50)
    }
    if (wurfzahl == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (wurfzahl == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (wurfzahl == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (wurfzahl == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (wurfzahl == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (wurfzahl == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else {
    	
    }
})
```

<script src="../../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "InES-HPMM/zhaw_lightbag");</script>