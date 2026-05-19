# Electrical interfaces{% tag "electrical_interfaces" /%}

The robot has seven electrical interfaces in the left and right top compartments:

* Robot's left top compartment:
	* Power
	* Emergency stop
	* Ethernet
* Robot's right top compartment:
	* GPIO A
	* GPIO B
	* Auxiliary Safety Functions A
	* Auxiliary Safety Functions B

{% partial file="products/_manual_partials/references/text_electrical_interfaces_location.md" /%}

## Emergency stop {% tag "electrical_interfaces_auxiliary_emergency_stop" /%}

For more information on how to use the Emergency stop interface, see {% tagref "emergency_stop" /%}.

{% image src="/images/mir250/interfaces/aux_e_stop.webp" alt="Emergency stop interface pins" /%}

{% table %}

* Pin
* Name
* Type
* Function

---

* 1
* SAFE_RETURN
* Ground
* Return for lamp signal.

---

* 2
* Test output 1
* Output
* Safety output 1. Should be connected through Emergency stop buttons to pin 4.

---

* 3
* Test output 2
* Output
* Safety output 2. Should be connected through Emergency stop buttons to pin 5.

---

* 4
* E-stop 1
* Input
* Safety input 1. Should be connected through Emergency stop buttons to pin 2.

---

* 5
* E-stop 2
* Input
* Safety input 2. Should be connected through Emergency stop buttons to pin 3.

---

* 6
* Restart
* Input
* Safety input 3. When receiving 24 V will restart the Emergency stop.

---

* 7
* RST_LAMP_24_V
* Output
* 24 V output for powering the lamp on the Emergency stop box.

---

* 8

*
*

* Not connected to the robot

---

* 9

*
*

* Not connected to the robot

---

* 10

*
*

* Not connected to the robot


{% /table %}

## Power

{% image src="/images/mir250/interfaces/power.webp" alt="Power interface pins"  /%}

{% partial file="products/_manual_partials/interfaces/caution_power_interface_usage.md" /%}


{% table %}

* Pin
* Name
* Current
* Voltage
* Function

---

* 1
* 48V power
* 10 A *

* 42–54 V

* Always active when robot is on. Intended for high-power loads like motors and actuators.

---

* 2
* GND

*
*

* Power ground.

---

* 3
* 48V safe power
* 10 A *

* 42–54 V

* Intended for high-power loads like motors or actuators.

	Power is disconnected during Protective or Emergency stop through safety-rated STO contactor.

---

* 4
* GND

*
*

* Power ground.

---

* 5
* Isolated 24V
* 2 A

* 23–25 V

* Must be used with pin 6 to be galvanically isolated from the rest of the robot. Still provides 24 V even when the robot is in Emergency or Protective stop.

---

* 6
* Isolated GND

*
*

* Must be used with pin 5 to be galvanically isolated from the rest of the robot.

---

* 7

*
*
*

* Unassigned

{% /table %}
*The maximum current across pins 1 and 3 combined is 10 A.

*The maximum capacitance of devices connected to pins 1 and 3 is 2 000 µF combined. If your device has a higher capacitance, you must integrate your own softstarter that keeps the current under 2 A for the first 100 ms, and thereafter under 10 A.

## Ethernet

{% partial file="products/_manual_partials/interfaces/text_ethernet_supported_protocols_and_speed.md" /%}

{% image src="/images/mir250/interfaces/ethernet.webp" alt="Ethernet pins"  /%}

{% table %}

* Pin no.
* Signal name
* Pin no.
* Signal name

---

* 1
* TX+
* 2
* RX+

---

* 3
* TX-
* 4
* RX-


{% /table %}

## GPIO A and B

{% partial file="products/_manual_partials/interfaces/list_gpio_pin_usage.md" /%}

If the GPIO pins are not working as expected, ensure that the **Shelf** feature is disabled under **System > Settings > Features**. This feature uses the GPIO with specific MiR features.

{% partial file="products/_manual_partials/interfaces/text_gpio_24v_to_in_ground_to_out.md" /%}

{% image src="/images/mir250/part_identification/right_compartment-2.webp" alt="GPIO interface pins" /%}

### Output interface

{% table %}

* Pin
* Name
* Limits
* Function

---

* 1
* OUT1
* 1 A at 24 V
* Output 1

---

* 2
* GND

*

* Protected return

---

* 3
* OUT2
* 1 A at 24 V
* Output 2

---

* 4
* GND

*

* Protected return

---

* 5
* OUT3
* 1 A at 24 V
* Output 3

---

* 6
* GND

*

* Protected return

---

* 7
* OUT4
* 1 A at 24 V
* Output 4

---

* 8
* GND

*

* Protected return


{% /table %}

### Input interface

{% table %}

* Pin
* Name
* Limits
* Function

---

* 1
* IN1

*

* Input 1

---

* 2
* 24V
* 2 A
* 24 V output

---

* 3
* IN2

*

* Input 2

---

* 4
* 24V
* 2 A
* 24 V output

---

* 5
* IN3

*

* Input 3

---

* 6
* 24V
* 2 A
* 24 V output

---

* 7
* IN4

*

* Input 4

---

* 8
* 24V
* 2 A
* 24 V output


{% /table %}

## Auxiliary Safety Functions A and B {% tag "electrical_interfaces_auxiliary_safety_functions" /%}

{% partial file="products/_manual_partials/interfaces/text_aux_safety_functions_interface_supports_safety_function_section'.md" /%}

{% image src="/images/mir250/interfaces/safety.webp" alt="Auxiliary safety interface pins"  /%}

### Interface A

{% table %}

* Pin
* Name
* Description

---

* 1
* Test output 1

* Output. 24 V test signal. Sends test pulses (not on constantly).

---

* 2
* Safeguarded stop 1

* Input. When inactive, the robot enters Protective stop. If this pin and the other Safeguarded stop pin are unequally set for a period greater than three seconds, the robot must be restarted.

---

* 3
* System Emergency stop in 1

* Input. When inactive, the robot goes into Emergency stop.

---

* 4
* Reduced speed 1

* Input. When inactive, the robot drives with reduced speed. The reduced speed function is not a safety-rated function.

---

* 5
* Locomotion 1

* Output. Is active when the robot is standing still.

---

* 6
* Shared Emergency stop out 1
* Output. Inactive when an Emergency stop button is pressed. Active if all Emergency stop buttons are released, even if you have not pressed the Resume button.


{% /table %}

### Interface B

{% table %}

* Pin 
* Name
* Description

---

* 1
* Test output 2
* Output. 24 V out test signal. Sends test pulses (not on constantly).

---

* 2
* Safeguarded stop 2
* Input. When inactive, the robot enters Protective stop. If this pin and the other Safeguarded stop pin are unequally set for a period greater than three seconds, the robot must be restarted.

---

* 3
* System Emergency stop in 2
* Input. When inactive, the robot goes into Emergency stop.

---

* 4
* Reduced speed 2

* Input. When inactive, the robot drives with reduced speed. The reduced speed function is not a safety-rated function.

---

* 5
* Locomotion 2

* Output. Is active when the robot is standing still.

---

* 6
*  System Emergency stop out 2
*  Output. Inactive when an Emergency stop button is pressed. Active if all Emergency stop buttons are released, even if you have not pressed the Resume button.

---

* 7
* SAFE_RETURN
* Safe return for output signals.


{% /table %}

## Connector list

{% table %}

* Connector
* Description
* Manufacturer
* Part number

---

* Power
* Cable connector, M23, 6-way, male
* Phoenix Contact
* 1619775

---

* GPIO
* Single wire connector, female, pitch 3.5 mm 8-way.
* Phoenix Contact
* 1952322

---

* Ethernet
* Cable assembly, 1 m, M12, 4-way to RJ45
* Lumberg
* 0985 806 103/1M

---

* Auxiliary emergency stop
* Cable connector, 8 + 2-way, XLR, male
* Neutrik
* NC10MXX-14-B

---

* Auxiliary safety functions - long connector
* Single wire connector, female, pitch 3.81 mm, 7-way
* Phoenix Contact
* 1851287

---

* Auxiliary safety functions - short connector
* Single wire connector, female, pitch 3.81 mm, 6-way
* Phoenix Contact
* 1851274

---

* Antenna
* Cable connector, RP-SMA, male, gold
* AMPHENOL RF
* RSMA1111A1-3GT50G-1A-50


{% /table %}