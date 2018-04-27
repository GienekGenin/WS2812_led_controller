#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include <Wire.h>

#define I2CAddressESPWifi 8
//DynamicJsonBuffer jsonBuffer;
// Wi-Fi
HTTPClient http;  //Declare an object of class HTTPClient
const char* ssid = "LOLEC";
const char* password = "13052926";

uint32_t lastMillisWIFI = 0;
// Server
String lastServerResponse;
bool permissionToListenServer = HIGH;

#define flagPin 12

void setup() {
	Serial.begin(115200);
	Wire.begin(4, 5);	// Change to Wire.begin() for non ESP.
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
	if (WiFi.status() == WL_CONNECTED && millis() - lastMillisWIFI >= 100)  { //Check WiFi connection status
	lastMillisWIFI = millis();
	http.begin("http://sheltered-plains-47183.herokuapp.com/telegramBot");
	http.GET();
	String serverResponse = http.getString();
	//char * charArrayServerResponse = new char [serverResponse.length() + 1];
	//strcpy(charArrayServerResponse, serverResponse.c_str());
	if (serverResponse != lastServerResponse) {
		lastServerResponse = serverResponse;
		Serial.print("Raw response from server: ");
		Serial.println(serverResponse);
		char commandForSlave[5];
		Serial.print("Recived command from server: ");
		for (uint8_t i = 0; i <= 3; i++) {
			commandForSlave[i] = serverResponse[i + 1];
			Serial.print(commandForSlave[i]);
		}
		commandForSlave[4] = '\0';
		Serial.print('\n');
		prepareDataForI2C(commandForSlave);
	}
	http.end();
	}
}

void prepareDataForI2C(char serverCommand[])
{
	digitalWrite(flagPin, HIGH);
	char slaveResponse[5];
	transmitDataViaI2C(serverCommand);
	Wire.requestFrom(I2CAddressESPWifi, 4);
	Serial.print("Slave's response on master's request: ");
	while (Wire.available()) {
		for (uint8_t i = 0; i <= 3; i++) {
			slaveResponse[i] = Wire.read();
			Serial.print(slaveResponse[i]);
		}
		slaveResponse[4] = '\0';
		Serial.print('\n');
		digitalWrite(flagPin, LOW);
	}
}

void transmitDataViaI2C(char sC[]) {
	delay(10);
	Wire.beginTransmission(I2CAddressESPWifi);
	Wire.write(sC);
	Wire.endTransmission();
	delay(10);
}
