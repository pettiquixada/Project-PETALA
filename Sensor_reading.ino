#define pin_soilMoisture A0
#define pin_LDR A1

unsigned long delayEnvio;
int valor_soilMoisture;
int valor_LDR;

/*
void Read_soilMoisture(){
  Serial.println("Leitura Sensor de umidade");
  if( (millis() - delayEnvio) > 50){
    Serial.println(analogRead(pin_soilMoisture));
    delayEnvio = millis();
  } 
}

*/
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
  
