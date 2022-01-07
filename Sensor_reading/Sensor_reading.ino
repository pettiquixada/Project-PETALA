#define pin_soilMoisture A0
#define pin_LDR A1


int valor_soilMoisture;
int valor_LDR;


void setup() {
  Serial.begin(9600);
  pinMode(pin_soilMoisture, INPUT);
  pinMode(pin_LDR, INPUT);
}

void loop() {
  Read_LDR();
  Read_soilMoisture();
  
  delay(2000);

}


void Read_LDR(){
  Serial.println("Leitura Sensor LDR");
  valor_LDR = analogRead(pin_LDR);
  Serial.println(valor_LDR);
  delay(5000);
}


void Read_soilMoisture(){
  Serial.println("Leitura Sensor de umidade");
  valor_soilMoisture = analogRead(pin_soilMoisture);
  Serial.println(valor_soilMoisture);
  delay(5000);
}
  
