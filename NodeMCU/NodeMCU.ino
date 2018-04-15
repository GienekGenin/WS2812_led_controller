#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <SoftwareSerial.h>
#include <stdio.h>
#include <stdlib.h>

const char* ssid = "NodeMCU";
const char* password = "123456";

SoftwareSerial NodeSerial(D2, D3);
void setup() {
  // put your setup code here, to run once:
	pinMode(D2, INPUT);
	pinMode(D3, OUTPUT);
	Serial.begin(115200);
	NodeSerial.begin(9600);
	WiFi.begin(ssid, password);
	while (WiFi.status() != WL_CONNECTED) {
		delay(1000);
		Serial.print("Connecting..");
	}
}

void sendData(String data) {
	if (WiFi.status() == WL_CONNECTED) {                                            //Check WiFi connection status
		HTTPClient http;                                                              //Declare an object of class HTTPClient
		String request = "http://nameless-depths-36127.herokuapp.com/data?buttonStatus=" + data;
		Serial.println(request);
		http.begin(request);
		int httpCode = http.GET();                                                    //Send the request
		Serial.println("httpCode");
		//Serial.println(httpCode);
		Serial.println("GET");
		//Serial.println(http.GET());
		if (httpCode > 0) {                                                           //Check the returning code
			Serial.println("We've got response!");
			Serial.println("http response: " + httpCode);
			String payload = http.getString();                                          //Get the request response payload
			Serial.println(payload);                                                    //Print the response payload

		}

		http.end();                                                                   //Close connection

	}

	delay(10000);                                                                   //Send a request every 30 seconds
}

void getData() {
	if (WiFi.status() == WL_CONNECTED) {                                            //Check WiFi connection status
		HTTPClient http;                                                              //Declare an object of class HTTPClient
		http.begin("http://nameless-depths-36127.herokuapp.com/data/button");
		int httpCode = http.GET();                                                    //Send the request
		Serial.println("httpCode");
		Serial.println("GET");
		if (httpCode > 0) {                                                           //Check the returning code
			Serial.println("We've got response!");
			Serial.println("http response: " + httpCode);
			String payload = http.getString();                                          //Get the request response payload
			Serial.println(payload);                                                    //Print the response payload
		}
		http.end();                                                                   //Close connection
	}
	delay(10000);                                                                   //Send a request every 30 seconds
}

void loop() {
	Serial.println("In loop");
	if (NodeSerial.available() > 0) {
		Serial.println("In if");
		int val = NodeSerial.parseInt();
		Serial.println(val);
		char buffer[1];
		itoa(val, buffer, 10);
		Serial.println("buffer:___");
		Serial.println(buffer);
		Serial.println("After val");
		/*if (NodeSerial.read() == '\n') {
			Serial.println(val);
		}*/
		sendData(buffer);
		Serial.println("After send");
		getData();
		Serial.println("After get");
		Serial.println("One cycle is over!");
	}
	else
	{
		Serial.println("nodeSerial < 0");
	}
	delay(100);
}
