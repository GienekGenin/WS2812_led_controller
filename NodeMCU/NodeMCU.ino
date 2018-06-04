/* NodeMCU Scetch for WS2812B LED strip controller */
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <Wire.h>

// Wi-Fi variables
HTTPClient http;  //Declare an object of class HTTPClient

const char* ssid = "NodeMCU";    // Change to your SSID
const char* password = "1q2w120195";  // Change to your password
// Timers
uint32_t lastMillisWIFI = 0;
// Flags
bool permissionToListenServer = HIGH;
// Server's variables
String lastServerResponse;

#define flagPin 12

void setup() {
  Serial.begin(115200);
  //Wire.begin(4, 5);
  WiFi.begin(ssid, password);
  pinMode(flagPin, OUTPUT);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.print('\n');
    Serial.println("Connecting..");
  }
}
void loop() {
  getData();
}

void getData() {
  if (WiFi.status() == WL_CONNECTED && millis() - lastMillisWIFI >= 100) {  // Check WiFi connection status and timer
  lastMillisWIFI = millis();
  http.begin("http://sheltered-plains-47183.herokuapp.com/data/gendos123");
  http.GET();
  String serverResponse = http.getString();
  if (serverResponse != lastServerResponse) {
    lastServerResponse = serverResponse;
    Serial.print("Raw response from server: ");
    Serial.println(serverResponse);
    String data = "";
    for(int i = 0;i<serverResponse.length();i++){
      if(serverResponse[i] != '"'){
        data = data + serverResponse[i];
      }
    }
    Serial.print("Data to arduino: ");
    Serial.println(data);
  }
  http.end();
  }
}
