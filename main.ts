basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
    basic.pause(200)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.pause(5000)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . . . #
            . . # . .
            . # . # .
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            # . . . #
            `)
    }
    basic.pause(5000)
    for (let index = 0; index < 6; index++) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . #
            # . . . #
            # . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    basic.pause(10000)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        # . . . #
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
    basic.pause(200)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.pause(5000)
    for (let index = 0; index < 6; index++) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . #
            # . . . #
            # . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    basic.pause(10000)
    basic.showIcon(IconNames.Yes)
    basic.pause(6000)
})
