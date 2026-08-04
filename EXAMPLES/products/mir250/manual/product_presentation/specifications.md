# MiR250 specifications {% tag "specifications" /%}

## Battery and charger

{% table %}

* Specification
* Result

---

* Active standby time where robot is idle (100–0%)
* 22 h

---

* Battery voltage
* Nominal: 47.7 V 
    
    Minimum: 42.0 V
    
    Maximum: 54.0 V

---

* Charging time from 10–90% with cable charger
* 1 h 10 min

---

* Charging time from 10–90% with MiR Charge 48V
* 52 min

---

* Minimum number of full charging cycles before the battery capacity drops below 80%
* 3000 cycles

---

* Runtime after 60 min charging, maximum payload
* 10 h 30 min

---

{% /table %}

## Communication

{% table %}

* Specification
* Result

---

* Antenna interface
* Antenna connection for top module (RP-SMA connector)

---

* Auxiliary emergency stop interface
* Support for Emergency stop buttons on  top modules  (8+2 pole XLR connector)

---

* Auxiliary safety function interface
* Support for safety-related functions for top modules  (3.81 mm pitch, 7p connector and 6p connector)

---

* Communication protocols
* REST, Modbus

---

* Ethernet interface
* M12 plug, 4p. 10/100 Mbit Ethernet with Modbus protocol, adapter for external antenna.

---

* GPIO interface
* 4 digital inputs, 4 digital outputs (GPIO), 1 Ethernet port, 1 Auxiliary emergency stop.

---

* Power interface
* 24 V and 48 V power outputs for top modules (M23 6p connector)

---

* Safety I/O connections
* 6 digital inputs, 6 digital outputs

---

* Wi-Fi
* 2.4 GHz and 5 GHz, 2 external antennas.

---

{% /table %}

## Compliance and approvals

{% table %}

* Specification
* Result

---

* Cleanroom
* Optional variant, Class 4 (ISO 14644-1)

---

* Compliant with
* ISO 13849-1

    
    ISO 12100

    
    ISO 13850

    
    ISO 3691-4 (except Clause 4.4, 4.9.4, 5.1, 5.2, 6, and Annex A)

---

* Designed to meet safety standards for industrial vehicles
* ITSDF B56-5

    
    RIA R15.08-1

---

* EMC
* EN 61000-6-4, EN 61000-6-2, EN 12895

---

* ESD
* Optional variant

---

{% /table %}

## Dimensions

{% table %}

* Specification
* Result

---

* Caster wheel diameter
* 125 mm

---

* Drive wheel diameter
* 200 mm

---

* Ground clearance
* 25-28 mm

---

* Height
* 300 mm

---

* Length
* 800 mm

---

* Load surface
* 800 x 580 mm

---

* Weight
* 94 kg (+21 kg on robots with traction kits)

---

* Width
* 580 mm

---

{% /table %}

## Environment

{% table %}

* Specification
* Result

---

* Ambient temperature range for continuous use
* 5–25°C

---

* Ambient temperature, storage
* 1 month: -20–60°C

    
    3 months: -20–45°C

---

* Environment
* For indoor use only

---

* Floor conditions
* Clean and dry

---

* Floor to wheel frictional coefficient
* 0.60–0.80

---

* Maximum altitude
* 2000 m

---

* Maximum ambient temperature for 1 hour operation
* 40°C

---

* Maximum traversable gap and step
* 0-20 mm from all angles
    
    20-30 mm at maximum 40° angle with reduced speed

---

{% /table %}

## General information

{% table %}

* Specification
* Result

---

* Color
* RAL7011, Iron grey

---

* Designated use
* Autonomous mobile robot (AMR) for internal transportation of small- and medium-sized loads

---

* Drive wheel material
* Thermoplastic Polyurethane

---

* IP rating
* IP 21

---

* Product design life
* 5 years or 20.000 hours

---

* Top plate
* Anodized aluminum, 5 mm

---

* Type
* Autonomous Mobile Robot

---

{% /table %}

## Lights and audio

{% table %}

* Specification
* Result

---

* Audio
* Speaker

---

* Indicators lights
* Status lights to indicate the robot status.

    
    Signal lights to indicate robot driving behavior and direction.

---

{% /table %}

## Payload

{% table %}

* Specification
* Result

---

* Maximum payload
* 250 kg

---

{% /table %}

## Performance

{% table %}

* Specification
* Result

---

* Accuracy, docking to Bar-marker
* X-axis: ± 18 mm
    
    Y-axis: ± 4 mm
    
    Orientation: ± 1.5°

---

* Accuracy, docking to L-marker
* X-axis: ± 6 mm
    
    Y-axis: ± 3 mm
    
    Orientation: ± 1°

---

* Accuracy, docking to V-marker
* X-axis: ± 9 mm
    
    Y-axis: ± 17 mm
    
    Orientation: ± 3°

---

* Accuracy, docking to VL-marker
* X: ± 3 mm

    
    Y: ± 3 mm

    
    Orientation: ± 0.5°

---

* Accuracy, moving to position
* X-axis: ± 60 mm
    
    Y-axis: ± 85 mm
    
    Orientation: ± 4°

---

* Between VL-markers
* 0.03–0.04 m

---

* Maximum acceleration
* Automatic mode: 0.3 m/s2

    
    Manual mode: 0.6 m/s2

---

* Maximum docking and undocking time, Bar-marker
* Docking time: 16 s

    
    Undocking time: 11 s

    
    (bar length: 0.4 m, bar distance: 0.75 m, default offsets)

---

* Maximum docking and undocking time, charging station
* Docking time: 44s (includes time taken to start charging)

    
    Undocking time: 8s

---

* Maximum docking and undocking time, L-marker
* Docking time: 16 s

    
    Undocking time: 9 s 

    
    (undocking distance: 1.6 m, default offsets)

---

* Maximum docking and undocking time, V-marker
* Docking time: 13 s

    
    Undocking time: 6 s. 

    
    (X-offset: -0.45 m, Y-offset: 0.2 m, Orientation offset: 0°)

---

* Maximum docking and undocking time, VL-marker
* Docking time: 14 s

    
    Undocking time: 11 s 

    
    (X-offset: -0.55 m, Y-offset: 0.1 m, Orientation offset: 0°)

---

* Maximum noise level
* Standard wheels: 42-51 dBA

    
    Cleanroom wheels: 44-54 dBA

---

* Maximum speed (maximum payload, flat surface)
* 2.0 m/s

---

{% /table %}

## Safety

{% table %}

* Specification
* Result

---

* Emergency stop
* 8+2 pole XLR interface to connect Emergency stop buttons.

---

* Overspeed avoidance
* The robot stops if it drives faster than the predefined safety limit

---

* Personnel detection
* The robot stops when it detects personnel or obstacles too close to it.

---

* Safety functions
* 12 safety functions according to ISO 13849-1.

---

* Safety-function interfaces for top modules
* Support for shared Emergency stop buttons, motion signaling, and shelf status

---

{% /table %}

## Sensors and cameras

{% table %}

* Specification
* Result

---

* 3D cameras
* 2 pcs, for detecting obstacles in front of robot outside of safety laser scanner plane

---

* Minimum size of detectable object
* 9 × 9 × 9 cm

    
    (Object on floor in front of robot, default speed, and default camera configurations)

---

* Proximity sensors
* 8 pcs

---

* SICK safety laser scanners
* 2 pcs, (front and rear, mounted 200 mm from ground), for detecting personnel 360° around the robot

---

{% /table %}

## Space Requirements

{% table %}

* Specification
* Result

---

* 90° turn

    {% image id="1d441d57-0e0f-477d-b096-76dfb789a82a" alt="Measurement for 90° turn. " /%}

* Standard settings: 1.50 m
    
    Reduced safety settings: 1.00 m

---

* Between charging stations

    {% image id="badecd9b-22d6-4f55-bee9-8b86f8220d51" alt="Measurement for space between charging stations" /%}

* Standard settings: 0.8 m

---

* Between V-markers

    {% image id="863de580-a37d-496c-8651-834a653d2456" alt="Measurement for space between V-markers" /%}

* 0.44 m

---

* Doorway width

    {% image id="111f2813-ddae-42cf-8050-9e75dd2f94b9" alt="Measurement for doorway width" /%}

* Standard settings: 150 cm

---

* In front of Bar-marker

    {% image id="74c1f8b0-d525-433f-addf-d39c08f30db1" alt="Measurement for space in front of Bar-marker" /%}

* Standard settings: 2.15 m

---

* In front of charging station

    {% image id="45e9f5df-d45f-49e0-b07d-ce102a36c76a" alt="Measurement for space in front of charging stations" /%}

* Standard settings: 2.8 m

---

* In front of V-marker

    {% image id="7c2df32f-5b4f-402f-b28d-048fed1fa28e" alt="Measurement for space in front of V-marker" /%}

* Standard settings: 2.25 m

---

* In front of VL-marker

    {% image id="97fb78ba-7395-4891-9877-45194be3593e" alt="Measurement for space in front of VL-marker" /%}

* Standard settings: 2.40 m

    
    (X-offset: -0.55 m, Y-offset: 0.1 m, orientation offset: 0°)

---

* Pivoting

    {% image id="40d8f7b1-72c2-4efb-bfc9-72c85d9448b2" alt="Measurement for space when pivoting." /%}

* Standard settings: 1.80 m
    
    Reduced safety settings: 1.20 m

---

* Straight corridor

    {% image id="70f5bac1-9725-4a28-9245-5ecdd413a650" alt="Measurement for space in straight corridor." /%}

* Standard settings: 1.45 m

---

* To sides of charging station

    {% image id="bfe7261a-9f81-41e5-9d2c-2fa0a1b7ba46" alt="Measurement for space to sides of charging station to 0.5 m in front of the marker." /%}

* Standard settings: 0.55 m

---

* To sides of V-marker

    {% image id="a0c98cc0-9149-485a-a908-f0c507140b7b" alt="Measurement for space to sides of V-marker to 0.5 m in front of the marker." /%}

* Standard settings: 0.45 m

---

* To sides of VL-marker

    {% image id="cd3be6f7-a579-4c4f-a0c9-e3ff82759d85" alt="Measurement for space to sides of Vl-marker to 0.5 m in front of the marker." /%}

* Standard settings: 0.15 m

    
    (X-offset: -0.55 m, Y-offset: 0.1 m, orientation offset: 0°)

---

* To the sides from Bar-marker to Entry position

    {% image id="e6bfd98b-99c8-4fcf-9934-0803edbbd892" alt="Measurement for space to sides of Bar-marker up to the Entry position." /%}

* Standard settings - Right: 0.45 m
    
    Standard settings - Left: 0.45 m

    
    Reduced safety settings - Right: 0.20 m
    
    Reduced safety settings - Left: 0.20 m

---

* To the sides from charging station to Entry position

    {% image id="fc8d8678-0c3f-4fd7-b1fb-1b2d396e1823" alt="Measurement for space to sides of charging station up to the Entry position." /%}

* Standard settings - Right: 0.70 m
    
    Standard settings - Left: 0.35 m

---

* To the sides from V-marker to Entry position

    {% image id="57b2c5cd-79ef-4ff0-b3f0-55ffcc496020" alt="Measurement for space to sides of V-marker up to the Entry position." /%}

* Standard settings - Right: 0.65 m
    
    Standard settings - Left: 0.70 m

    
    (X-offset: -0.55 m, Y-offset: 0.2 m, orientation offset: 0°)

---

* To the sides from VL-marker to Entry position

    {% image id="b3ea5da7-e8e5-487a-9ccc-62ad44ed3ac9" alt="Measurement for space to sides of Vl-marker up to the Entry position." /%}

* Standard settings - Right: 0.45 m
    
    Standard settings - Left: 0.50 m

    
    Reduced safety settings - Right: 0.30 m
    
    Reduced safety settings - Left: 0.20 m

    
    (X-offset: -0.55 m, Y-offset: 0.1 m, orientation offset: 0°)

---

* Two robots passing

    {% image id="2a39a762-3742-40ed-804b-4b89e88d9f87" alt="Measurement for space when two robots are passing." /%}

* Standard settings: 3.00 m
    
    With zones: 2.80 m

---

* U-turn

    {% image id="47270d65-1b23-4ed2-abf1-c109d6bd0bb0" alt="Measurement for space when robot makes a U-turn around an obstacle." /%}

* Standard settings: 1.60 m
    
    Reduced safety settings: 1.15 m

---

{% /table %}

