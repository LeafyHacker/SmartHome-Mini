humidity = 0
temp_raum = 0
g_temp = 24
DHT11.set_pin(DigitalPin.P2)
neZha.set_motor_speed(neZha.MotorList.M4, 0)

def on_forever():
    global temp_raum
    global humidity
    humidity = DHT11.humidity()
    temp_raum = DHT11.temperature()
    PlanetX_Display.show_user_text(1, "Raumtemperatur:")
    PlanetX_Display.show_user_number(3, temp_raum)
    PlanetX_Display.show_user_text(5, "Luftfeuchtigkeit:")
    PlanetX_Display.show_user_number(8, humidity)
    pumpe()
basic.forever(on_forever)

def pumpe():
    drunter = g_temp - temp_raum
    if int(g_temp) == temp_raum:
        neZha.set_motor_speed(neZha.MotorList.M4, 0)
    elif drunter >= 3:
        neZha.set_motor_speed(neZha.MotorList.M4, 50)
    elif drunter >= 5:
        neZha.set_motor_speed(neZha.MotorList.M4, 100)
    elif drunter <= -1:
        neZha.set_motor_speed(neZha.MotorList.M4, -50)
    elif drunter <= -3:
        neZha.set_motor_speed(neZha.MotorList.M4, -100)