/* WS2812B Controller*/
#include <TimerOne.h>
#include <Encod_er.h>
#include <Button.h>
#include <FastLED.h>
#include <SoftwareSerial.h>
#include <Wire.h>

#define I2CAddressESPWifi 8
#define FPS 24
#define flagPin A1
char slaveResponse[4];
String previousCommand;
/*--- Variables declaration - START ---*/
// PINs declaration
#define DIN			12	// LED strip's DIN pin declaration
#define pinA		6	// Encoder's A line pin
#define pinB		4	// Encoder's B line pin
#define pinButton	5	// Encoder's button pin
#define D13LED		13	// Mode indication on Arduino board (Built-in LED on pin 13)
#define pin_RX		3
#define pin_TX		7
// Timers and delays variables
uint32_t lastMillisRainbowCycle = 0;
uint32_t lastMicrosUpdate = 0;
uint32_t lastMillisD13Indication = 0;
// Flags
volatile bool stopAndReadI2CFlag = LOW;
bool blowingFlag = LOW;
bool changeColorFlag = HIGH;
// Other variables
#define NUM_LEDS 5
uint8_t LEDMode = 1;
uint8_t varChanger = 0;
uint8_t gHue = 0;
uint8_t brightness = 100;
int8_t spd = 7;
uint8_t width = 5;
uint8_t lastBrightness = brightness;
// Objects declaration
CRGB leds[NUM_LEDS];
Encod_er encoder(pinA, pinB, 4);
Button button(pinButton, 15);
SoftwareSerial ArduinoSerial(pin_RX, pin_TX);	// RX, TX
/*--- Variables declaration - END ---*/

void setup() {
	// Serial_
	Serial.begin(115200);
	Serial.println("R: I'm ready!");
	// I2C
	Wire.begin(I2CAddressESPWifi);
	Wire.onReceive(espWifiReceiveEvent);
	Wire.onRequest(espWifiRequestEvent);
	pinMode(flagPin, INPUT_PULLUP);
	// Encoder
	pinMode(D13LED, OUTPUT);
	Timer1.initialize(250);							// инициализация таймера 1, период 250 мкс
	Timer1.attachInterrupt(timerInterrupt, 250);	// задаем обработчик прерываний
	// LED strip
	FastLED.addLeds<WS2812B, DIN, GRB>(leds, NUM_LEDS);
	FastLED.setBrightness(brightness);
}

void loop() {
	switch (LEDMode) {
		case 1:
			solidColor(brightness, brightness/1.5, brightness/6);
			break;
		case 2:
			solidColor(brightness, brightness, brightness);
			break;
		case 3:
			rainbowCycle();
			break;
		case 4:
			rainbowWithGlitter();
			break;
		case 5:
			confetti();
			break;
		case 6:
			juggle();
			break;
	}
	update();
}

void espWifiReceiveEvent(int count) {
	char command[5];
	Serial.print("Received command from server(from ESP8266): ");
	while (Wire.available()) {
		for (uint8_t i = 0; i <= 3; i++) {
			command[i] = Wire.read();
			slaveResponse[i] = command[i];
			Serial.print(command[i]);
		}
		command[4] = '\0';
		Serial.print('\n');
	}
	if (String(command) != previousCommand) {
		previousCommand = String(command);
		applyChangesFromServer(command);
	}
}

void espWifiRequestEvent() {
	Wire.write(slaveResponse);
}

/*--- IR Reciver - START ---*/
void applyChangesFromServer(char recivedCommand[]) {
	char charCommand = recivedCommand[0];
	uint8_t intValue = atoi(recivedCommand[1]);
	char colorValue[8];
	int intValueLikeArray[3];
	uint8_t place = 100;
	if (charCommand != 'C')
		for (uint8_t i = 0; i <= 2; i++) {
			intValueLikeArray[i] = recivedCommand[i + 1] - 48;
			intValue += intValueLikeArray[i] * place;
			place /= 10;
		}
	Serial.print("Command is: ");
	Serial.println(charCommand);
	Serial.print("Value is: ");
	Serial.println(intValue);
	switch (charCommand) {
		case 'P':	// 'ON/OFF'
			if (intValue == 1) {
				changeColorFlag = HIGH;
				FastLED.setBrightness(0);
			}
			else {
				changeColorFlag = HIGH;
				FastLED.setBrightness(brightness);
			}	
			break;
		case 'B':	// Brightness
			changeColorFlag = HIGH;
			FastLED.setBrightness(intValue);
			break;
		case 'M':	// LED mode
			changeColorFlag = HIGH;
			LEDMode = intValue;
			break;
		case 'S':	// Speed
			changeColorFlag = HIGH;
			if (intValueLikeArray[1] == 1)
				spd = -(intValue - 100);
			else
				spd = intValue;
			break;
		case 'W':	// Width
			changeColorFlag = HIGH;
			width = intValue;
			break;
		case 'C':	//Color
			LEDMode = 1;
			break;
	}
}
/*--- IR Reciver - END ---*/
// Timer interruption
void timerInterrupt(void) {
	// Encoder scan
	encoder.scanState();
	if(encoder.timeRight != 0) {
		encoder.timeRight = 0;
		increaseBrightnessORMode();
	}
	if(encoder.timeLeft != 0) {
		encoder.timeLeft = 0;
		decreaseBrightnessORMode();
	}
	// Button scan
	button.scanState();
	if (button.flagClick) {
		button.flagClick = LOW;
		varChanged(1);
	}
	bool flagPinState = digitalRead(flagPin);
	if (flagPinState)
		stopAndReadI2CFlag = HIGH;
	else
		stopAndReadI2CFlag = LOW;
}
/*--- LED functions - START ---*/
void increaseBrightnessORMode(void) {
	switch (varChanger) {
		case 0:
			if (brightness == 255)
				brightness = 0;
			else
				brightness += 5;
			if (brightness % 5 != 0)
				brightness++;
			FastLED.setBrightness(brightness);
			Serial.print("R: Brightness set to: ");
			Serial.println(brightness);
			break;
		case 1:
			LEDMode++;
			if (LEDMode > 6)
				LEDMode = 1;
			Serial.print("R: LED mode set to: ");
			Serial.println(LEDMode);
			break;
		case 2:
			spd++;
			if (spd > 30)
				spd = 30;
			else if (spd == 0)
				spd++;
			Serial.print("R: Speed set to: ");
			Serial.println(spd);
			break;
		case 3:
			width++;
			if (width > 10 && LEDMode != 5)
				width = 10;
			Serial.print("R: Width set to: ");
			Serial.println(width);
			break;
	}
	changeColorFlag = HIGH;
}
void decreaseBrightnessORMode(void) {
	switch (varChanger) {
		case 0:
			if (brightness == 0)
				brightness = 255;
			else
				brightness -= 5;
			if (brightness % 5 != 0)
				brightness--;
			FastLED.setBrightness(brightness);
			Serial.print("R: Brightness set to: ");
			Serial.println(brightness);
			break;
		case 1:
			LEDMode--;
			if (LEDMode < 1)
				LEDMode = 6;
			Serial.print("R: LED mode set to: ");
			Serial.println(LEDMode);
			break;
		case 2:
			spd--;
			if (spd < -30)
				spd = -30;
			else if (spd == 0)
				spd--;
			Serial.print("R: Speed set to: ");
			Serial.println(spd);
			break;
		case 3:
			width--;
			Serial.print("R: Width set to: ");
			Serial.println(width);
			break;
	}
	changeColorFlag = HIGH;
}
void varChanged(bool b) {
	if (b) {
		varChanger++;
		if (varChanger > 3 || varChanger > 1 && (LEDMode == 1 || LEDMode == 2))
			varChanger = 0;
	}
	else {
		varChanger--;
		if (varChanger < 0)
		{
			varChanger = 3;	
			if(LEDMode == 1 && LEDMode == 2)
				varChanger = 1;
		}
	}
}
void solidColor(uint8_t R, uint8_t G, uint8_t B) {
	if (changeColorFlag) {
		changeColorFlag = LOW;
		for (uint8_t i = 0; i < NUM_LEDS; i++)
			leds[i] = CRGB(R, G, B);
	}
}
void rainbowCycle() {
	if (millis() - lastMillisRainbowCycle >= 1000 / 24) {
		lastMillisRainbowCycle = millis();
		gHue += spd;
		fill_rainbow(leds, NUM_LEDS, gHue, width);
	}
}
void rainbowWithGlitter() {
	if (millis() - lastMillisRainbowCycle >= 1000 / 24) {
		lastMillisRainbowCycle = millis();
		gHue += spd;
		fill_rainbow(leds, NUM_LEDS, gHue, width);
		addGlitter(120);
	}
}
void addGlitter(fract8 chanceOfGlitter) {
	if(random8() < chanceOfGlitter) {
		leds[random16(NUM_LEDS)] += CRGB::White;
	}
}
void confetti() {
	fadeToBlackBy(leds, NUM_LEDS, 10);
	int pos = random16(NUM_LEDS);
	leds[pos] += CHSV(gHue + width + random8(64), 200, 255);
}
void juggle() {
	fadeToBlackBy(leds, NUM_LEDS, 20);
	byte dothue = 0;
	for (uint8_t i = 0; i < 8; i++) {
		leds[beatsin16(i + 7, 0, NUM_LEDS-1)] |= CHSV(dothue, 200, 255);
		dothue += 32;
	}
}
void update() {
	if (micros() - lastMicrosUpdate >= 1000000 / FPS && !stopAndReadI2CFlag) {
		lastMicrosUpdate = micros();
		FastLED.show();
	}
	D13Indication();
}
void D13Indication(void) {
	switch (varChanger) {
		case 0:
			digitalWrite(D13LED, HIGH);
			break;
		case 1:
			digitalWrite(D13LED, LOW);
			break;
		case 2:
			if (millis() - lastMillisD13Indication >= 100) {
				lastMillisD13Indication = millis();
				blowingFlag = !blowingFlag;
				digitalWrite(D13LED, blowingFlag);
			}
			break;
		case 3:
			if (millis() - lastMillisD13Indication >= 500) {
				lastMillisD13Indication = millis();
				blowingFlag = !blowingFlag;
				digitalWrite(D13LED, blowingFlag);
			}
			break;
	}
}
/*--- LED functions - END ---*/