import serial

arduino = serial.Serial('/dev/ttyACM0', 9600)  


while(True):
    valor = arduino.readline()
    valor = valor.decode("utf-8")
    print(valor)