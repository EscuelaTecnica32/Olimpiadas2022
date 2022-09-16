#include <SoftwareSerial.h>
 
#define RxD 10
#define TxD 11
#define KEY 9
 
SoftwareSerial BTSerial(RxD, TxD);
 
void setup()
{
pinMode(KEY, OUTPUT);
digitalWrite(KEY, HIGH);   // Como se mencionó en configuración colocar a KEY en estado alto.
  
delay(500);
  
BTSerial.flush();
delay(500);
BTSerial.begin(38400); // comunicación directa al Modulo.
Serial.begin(9600);        // comunicación directa al Monitor.
Serial.println("Enter AT commands:");
  
BTSerial.print("AT\r\n");
delay(100);
  
}
  
void loop()
{
if (BTSerial.available())
  Serial.write(BTSerial.read());
  
if (Serial.available())
  BTSerial.write(Serial.read());
  
}
