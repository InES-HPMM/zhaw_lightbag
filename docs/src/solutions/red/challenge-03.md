# Challenge 3: Regenbogen

Lasse auf deinem LED-Ring ein Regenbogen leuchten. Programmiere deinen micro:bit so, dass du den Regenbogen mit dem Berühren des Logos aus- und wieder einschalten kannst.

```blocks
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
let ring_zustand = 0
basic.forever(function () {
    if (input.logoIsPressed()) {
        if (ring_zustand == 0) {
            strip.showRainbow(1, 360)
            ring_zustand = 1
        } else if (ring_zustand == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            ring_zustand = 0
        } else {
        	
        }
        strip.show()
        // Diese Schleife Blockiert, bis das Logo wieder losgelassen wird
        while (input.logoIsPressed()) {
        	
        }
    }
})

```

## Zusatzaufgabe

 - Ändere die Helligkeit des Lichts. Klicke auf A und der Regenbogen wird heller. Klicke auf B und er wird dunkler. 
 - Was passiert, wenn die Helligkeit >255 ist oder kleiner 0? Programmiere, dass die Helligkeit nicht < 0 oder > 255 werden kann.

```blocks
input.onButtonPressed(Button.A, function () {
    ring_helligkeit += -16
    if (ring_helligkeit < 0) {
        ring_helligkeit = 0
    }
    strip.setBrightness(ring_helligkeit)
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    ring_helligkeit += 16
    if (ring_helligkeit > 255) {
        ring_helligkeit = 255
    }
    strip.setBrightness(ring_helligkeit)
    strip.show()
})
let ring_helligkeit = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
let ring_zustand = 0
ring_helligkeit = 128
basic.forever(function () {
    if (input.logoIsPressed()) {
        if (ring_zustand == 0) {
            strip.showRainbow(1, 360)
            ring_zustand = 1
        } else if (ring_zustand == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            ring_zustand = 0
        } else {
        	
        }
        strip.setBrightness(ring_helligkeit)
        strip.show()
        // Diese Schleife Blockiert, bis das Logo wieder losgelassen wird
        while (input.logoIsPressed()) {
        	
        }
    }
})
```

<script src="../../assets/js/gh-pages-embed.js"></script><script>makeCodeRender("https://makecode.microbit.org/", "InES-HPMM/zhaw_lightbag");</script>