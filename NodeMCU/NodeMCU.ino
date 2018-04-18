#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <SoftwareSerial.h>
#include <stdio.h>
#include <stdlib.h>

const char* ssid = "NodeMCU";
const char* password = "1q2w120195";

void setup() {
	Serial.begin(9600);
	WiFi.begin(ssid, password);
	while (WiFi.status() != WL_CONNECTED) {
		delay(1000);
		Serial.print("Connecting..");
	}
}

void getData() {
	if (WiFi.status() == WL_CONNECTED) {                                            //Check WiFi connection status
		HTTPClient http;                                                              //Declare an object of class HTTPClient
		http.begin("http://sheltered-plains-47183.herokuapp.com/data");
		int httpCode = http.GET();                                                    //Send the request
		if (httpCode > 0) {                                                           //Check the returning code
			String payload = http.getString();
			Serial.println(payload);                                                    //Print the response payload
		}
		http.end();                                                                   //Close connection
	}
	delay(1000);                                                                   //Send a request every 30 seconds
}

void loop() {
	getData();
}
