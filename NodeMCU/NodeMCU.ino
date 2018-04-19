#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <SoftwareSerial.h>
#include <stdio.h>
#include <stdlib.h>

const char* ssid = "NodeMCU";
const char* password = "1q2w120195";

#define ledStrip 6

int lastMode = 0;
String response;
int intRes;

String keys [10] = {"0","1","2","3","4","5","6","7","8","9"};

void setup() {
  Serial.begin(9600);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print("Connecting..");
  }
  FastLED.addLeds<WS2812B, ledStrip, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(brightness);
}

void getData() {
  if (WiFi.status() == WL_CONNECTED) {                                            //Check WiFi connection status
    HTTPClient http;                                                              //Declare an object of class HTTPClient
    http.begin("http://sheltered-plains-47183.herokuapp.com/data");
    int httpCode = http.GET();                                                    //Send the request
    if (httpCode > 0) {                                                           //Check the returning code
      String payload = http.getString();
      parseData(payload);
      Serial.println(response);
      Serial.println(intRes);
      //mode(payload);
    }
    http.end();                                                                   //Close connection
  }
  delay(1000);                                                                   //Send a request every 30 seconds
}

void loop() {
  getData();
}

void parseData(String data){
  String trueData  = "";
  for(int i = 0;i<10;i++){
    for(int g = 0;g<data.length();g++){
      String symbol = "";
      symbol = symbol + data[g];  
      if(symbol==keys[i]){
        trueData = trueData + symbol;  
      }
    }  
  }
  response = trueData;
  intRes = response.toInt();
}

void mode(int currentMode){
  Serial.println("In mode");
    switch(currentMode){
      case 1: solidColor(0,0,0);
        Serial.println("In mode 1");
      break;
      case 2: solidColor(150,0,0);
        Serial.println("In mode 2");
      break;
      case 3: solidColor(0,150,0);
      Serial.println("In mode 3");
      break;
      case 4: solidColor(0,0,150);
      Serial.println("In mode 4");
      break;
      default: return;
      break;
    }
}
