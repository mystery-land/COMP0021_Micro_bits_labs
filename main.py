def on_button_pressed_a():
    global mode
    mode = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global mode
    mode = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

last_mode2 = 0
mode = 0
# 1 for on, 0 for off
led.set_brightness(0)
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)

def on_forever():
    global last_mode2
    if mode != last_mode2:
        if mode == 1:
            _2 = 0
            while _2 < 3:
                index = 0
                while index < 51:
                    led.set_brightness(led.brightness() + 5)
                    basic.pause(2)
                    index += 1
                index = 0
                while index < 51:
                    led.set_brightness(led.brightness() - 5)
                    basic.pause(2)
                    index += 1
                _2 += 1
            index = 0
            while index < 51:
                led.set_brightness(led.brightness() + 5)
                basic.pause(2)
                index += 1
            led.set_brightness(255)
        else:
            _2 = 0
            while _2 < 3:
                index = 0
                while index < 51:
                    led.set_brightness(led.brightness() - 5)
                    basic.pause(2)
                    index += 1
                index = 0
                # basic.show_string("Hello!")
                while index < 51:
                    led.set_brightness(led.brightness() + 5)
                    basic.pause(2)
                    index += 1
                _2 += 1
            index = 0
            while index < 51:
                led.set_brightness(led.brightness() - 5)
                basic.pause(2)
                index += 1
            led.set_brightness(0)
        last_mode2 = mode
basic.forever(on_forever)
