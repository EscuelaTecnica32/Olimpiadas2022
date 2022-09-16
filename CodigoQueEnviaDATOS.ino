#include <SoftwareSerial.h>
 
#define RxD 10
#define TxD 11
#define KEY 9
 
SoftwareSerial BTSerial(RxD, TxD);

int ID =  55  ; 
void setup()
{
  
delay(500);
BTSerial.begin(9600); // comunicación directa al Modulo.
Serial.begin(9600);        // comunicación directa al Monitor.
  
delay(100);
  
}
  
void loop()
{
  if (BTSerial.available())
  {
    BTSerial.write( ID  );
    Serial.println("Se envia dato");
    delay(1000);
  }
}
