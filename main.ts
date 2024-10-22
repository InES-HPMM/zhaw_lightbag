input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Eingeschaltet == true) {
        strip.setBrightness(0)
        strip.showColor(Farbe)
        strip.show()
    } else {
        strip.setBrightness(Helligkeit)
        strip.showColor(Farbe)
        strip.show()
    }
    Eingeschaltet = !(Eingeschaltet)
})
input.onButtonPressed(Button.A, function () {
    Helligkeit += 45
    if (Helligkeit > 255) {
        Helligkeit = 0
    }
    strip.setBrightness(Helligkeit)
    strip.showColor(Farbe)
    strip.show()
})
function wechsel_regenbogen () {
    while (true) {
        for (let Index = 0; Index <= 205; Index++) {
            if (input.buttonIsPressed(Button.B)) {
                return
            }
            strip.showRainbow(1, 360)
            strip.setBrightness(50 + Index)
            strip.show()
            basic.pause(10)
        }
        basic.pause(100)
        for (let Index2 = 0; Index2 <= 205; Index2++) {
            if (input.buttonIsPressed(Button.B)) {
                return
            }
            strip.showRainbow(1, 360)
            strip.setBrightness(255 - Index2)
            strip.show()
            basic.pause(10)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    FarbZaehler += 1
    if (FarbZaehler < FarbListe.length) {
        Farbe = FarbListe[FarbZaehler]
        strip.setBrightness(Helligkeit)
        strip.showColor(Farbe)
        strip.show()
    } else if (FarbZaehler == FarbListe.length) {
        strip.showRainbow(1, 360)
    } else if (FarbZaehler == FarbListe.length + 1) {
        wechsel_regenbogen()
    } else {
        wechsel_farbig()
        FarbZaehler = -1
    }
})
function wechsel_farbig () {
    st_rot = 0
    st_gruen = 127
    st_blau = 255
    st_delta_rot = 2
    st_delta_gruen = 2
    st_delta_blau = 2
    while (true) {
        if (input.buttonIsPressed(Button.B)) {
            return
        }
        Farbe = neopixel.rgb(st_rot, st_gruen, st_blau)
        strip.showColor(Farbe)
        strip.setBrightness(Helligkeit)
        strip.show()
        basic.pause(50)
        st_rot += st_delta_rot
        st_gruen += st_delta_gruen
        st_blau += st_delta_blau
        if (st_rot > 255) {
            st_rot = 255
            st_delta_rot = st_delta_rot * -1
        }
        if (st_rot < 0) {
            st_rot = 0
            st_delta_rot = st_delta_rot * -1
        }
        if (st_gruen > 255) {
            st_gruen = 255
            st_delta_gruen = st_delta_gruen * -1
        }
        if (st_gruen < 0) {
            st_gruen = 0
            st_delta_gruen = st_delta_gruen * -1
        }
        if (st_blau > 255) {
            st_blau = 255
            st_delta_blau = st_delta_blau * -1
        }
        if (st_blau < 0) {
            st_blau = 0
            st_delta_blau = st_delta_blau * -1
        }
    }
}
let st_delta_blau = 0
let st_delta_gruen = 0
let st_delta_rot = 0
let st_blau = 0
let st_gruen = 0
let st_rot = 0
let FarbListe: number[] = []
let Eingeschaltet = false
let Helligkeit = 0
let Farbe = 0
let strip: neopixel.Strip = null
let FarbZaehler = 0
FarbZaehler = 0
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
Farbe = neopixel.rgb(255, 200, 25)
strip.showColor(Farbe)
Helligkeit = 102
Eingeschaltet = true
strip.show()
FarbListe = [
neopixel.rgb(255, 0, 0),
neopixel.rgb(0, 255, 0),
neopixel.rgb(0, 0, 255),
neopixel.rgb(255, 200, 25)
]
