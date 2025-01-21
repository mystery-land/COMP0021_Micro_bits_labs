input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    mode = 1
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    mode = 0
})
let last_mode2 = 0
let mode = 0
//  1 for on, 0 for off
led.setBrightness(0)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function on_forever() {
    let _2: number;
    let index: number;
    
    if (mode != last_mode2) {
        if (mode == 1) {
            _2 = 0
            while (_2 < 3) {
                index = 0
                while (index < 51) {
                    led.setBrightness(led.brightness() + 5)
                    basic.pause(2)
                    index += 1
                }
                index = 0
                while (index < 51) {
                    led.setBrightness(led.brightness() - 5)
                    basic.pause(2)
                    index += 1
                }
                _2 += 1
            }
            index = 0
            while (index < 51) {
                led.setBrightness(led.brightness() + 5)
                basic.pause(2)
                index += 1
            }
            led.setBrightness(255)
        } else {
            _2 = 0
            while (_2 < 3) {
                index = 0
                while (index < 51) {
                    led.setBrightness(led.brightness() - 5)
                    basic.pause(2)
                    index += 1
                }
                index = 0
                //  basic.show_string("Hello!")
                while (index < 51) {
                    led.setBrightness(led.brightness() + 5)
                    basic.pause(2)
                    index += 1
                }
                _2 += 1
            }
            index = 0
            while (index < 51) {
                led.setBrightness(led.brightness() - 5)
                basic.pause(2)
                index += 1
            }
            led.setBrightness(0)
        }
        
        last_mode2 = mode
    }
    
})
