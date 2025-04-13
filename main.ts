let humidity = 0
let temp_raum = 0
let g_temp = 40
DHT11.setPin(DigitalPin.P2)
neZha.setMotorSpeed(neZha.MotorList.M4, 0)
basic.forever(function on_forever() {
    
    
    humidity = DHT11.humidity()
    temp_raum = DHT11.temperature()
    PlanetX_Display.showUserText(1, "Raumtemperatur:")
    PlanetX_Display.showUserNumber(3, temp_raum)
    PlanetX_Display.showUserText(5, "Luftfeuchtigkeit:")
    PlanetX_Display.showUserNumber(8, humidity)
    pumpe()
    led
})
function pumpe() {
    let drunter = g_temp - temp_raum
    if (Math.trunc(g_temp) == temp_raum) {
        neZha.setMotorSpeed(neZha.MotorList.M4, 0)
    } else if (drunter >= 3) {
        neZha.setMotorSpeed(neZha.MotorList.M4, 50)
    } else if (drunter >= 5) {
        neZha.setMotorSpeed(neZha.MotorList.M4, 100)
    } else if (drunter <= -1) {
        neZha.setMotorSpeed(neZha.MotorList.M4, -50)
    } else if (drunter <= -3) {
        neZha.setMotorSpeed(neZha.MotorList.M4, -100)
    }
    
}

