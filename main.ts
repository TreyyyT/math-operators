let d = ""
let b = 0
let a = game.askForNumber("Give me a military time(hour)", 2)
if (a > 12) {
    b = a % 12
    d = "p.m."
} else if (a == 12) {
    b = 12
    d = "p.m."
} else if (a == 0) {
    b = 12
    d = "a.m."
} else {
    b = a
    d = "a.m."
}
let c = game.askForNumber("Give me a military time(minutes)", 2)
game.splash("The time is " + b + ":" + c + " " + d)
