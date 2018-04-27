/* NodeMCU Scetch for WS2812B LED strip controller */
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <Wire.h>

#define I2CAddressESPWifi 8
// Wi-Fi variables
HTTPClient http;  //Declare an object of class HTTPClient

const char* ssid = "SSID";		// Change to your SSID
const char* password = "PASS";	// Change to your password
// Timers
uint32_t lastMillisWIFI = 0;
// Flags
bool permissionToListenServer = HIGH;
// Server's variables
String lastServerResponse;

#define flagPin 12

void setup() {
	Serial.begin(115200);
	Wire.begin(4, 5);
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
	if (WiFi.status() == WL_CONNECTED && millis() - lastMillisWIFI >= 100) {	// Check WiFi connection status and timer
	lastMillisWIFI = millis();
	http.begin("http://sheltered-plains-47183.herokuapp.com/telegramBot");
	http.GET();
	String serverResponse = http.getString();
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

void prepareDataForI2C(char serverCommand[]) {	// Function which prepare data from website to send on Arduino via I2C
	digitalWrite(flagPin, HIGH);	// Tell Arduino stop using FastLED.show() function
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

void transmitDataViaI2C(char sC[]) {	// Function which transmit prepared command from server to Arduino via I2C
	delay(10);
	Wire.beginTransmission(I2CAddressESPWifi);
	Wire.write(sC);
	Wire.endTransmission();
	delay(10);
}
