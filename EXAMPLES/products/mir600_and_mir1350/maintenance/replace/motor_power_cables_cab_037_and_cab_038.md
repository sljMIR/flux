# Motor power cables (CAB-037 and CAB-038) {% tag "replace_motor_power_cables_cab_037_and_cab_038_mir250" /%}

Date: 2025-07-21

Document version: 1.0

Document number:

Order number: 450721

Valid for: MiR250

Valid for software version: 2.14.0 and higher

Valid for hardware version: All

<image: "motor\_power\_cable\_250.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

This guide describes how to replace the motor power cables on MiR250 that connects the left and right-side motors to the motor controller carrier board.

## Things you will need

  * A screwdriver with the following bits:

    * T10

    * T30

  * An 8 mm wrench

  * A torque wrench with the following bits:

    * T10

    * T45

## Kit contents

The kit contains the following items:

  * The left-side cable labeled CAB-037

  * The right-side cable labeled CAB-038

## Before replacing the motor power cables

  1. Remove the rear cover by pressing the two white buttons and pulling off the cover. When removing the cover, un-click the two bottom corners first and then the two top corners.

<image: "rear\_cover\_buttons\_2.png"> <image: "rear\_cover\_remove\_2.png">

  2. Turn the Battery lever lock clockwise to unlock the battery connector.

<image: "unlock\_battery\_connected.png">

  3. Pull the Battery lever down to disconnect the battery.

<image: "disconnect\_battery.png">

  4. Turn the Battery lock switch counterclockwise to lock the battery connector again.

<image: "lock\_battery\_disconnected.png">

  5. Unscrew the two screws holding the front cover. Use a T30 screwdriver.

<image: "front\_unscrew.png">

  6. Loosen the bottom corners one at the time by pulling out each corner.

<image: "front\_bottom\_corners.png">

  7. Loosen the top corners one at the time by pulling each corner down, and then out.

<image: "front\_top\_corners.png">

  8. Pull off the cover.

<image: "front\_remove.png">

  9. On the side with the affected motor power cable, turn the two screws on the side cover counterclockwise. Use a T30 screwdriver.

<image: "side\_unscrew.png">

  10. Pull off the cover.

<image: "side\_remove.png">

  11. Loosen the bottom corners one at the time by pulling out each corner.

<image: "side\_bottom\_corners.png">

  12. Disconnect the antennas. Unscrew the antennas from the top compartment covers and remove them.

<image: "antenna\_unscrew.png">

  13. Disconnect the antenna cables from the top cover. Unscrew the two nuts from the antenna connectors. Use an 8 mm wrench. Push the antenna connectors through the covers.

<image: "antenna\_bolt\_unscrew.png">

  14. Remove the top compartment covers from the top plate by unscrewing the eight screws. Use a T10 screwdriver. Make sure the antenna cables are not connected to the compartment covers. When remounting the top compartment covers, tighten the screws to 0.7 Nm.

<image: "top\_unscrew.png">

  15. Remove the top plate from the robot by unscrewing the four screws. Use a T45 screwdriver. Make sure the antenna cables are not connected to the top cover. When remounting the top plate, tighten the screws to 15 Nm.

<image: "250\_remove\_screws\_top\_plate.png">

  16. Lift the top plate off the robot.

<image: "250\_remove\_top\_plate.png">

## Replacing the motor power cables

  1. Disconnect the affected motor power cable in the motor controller carrier board. When pulling out the cable, make sure to grasp around the connector and to pull the connector straight out of the socket. Do not pull on the cable itself.

<image: "disconnect\_motor\_connectors.png">

<image: "motor\_connectors.png">

**Table 1.2**
{% table %}

 * Identification of the carrier board motor power cable sockets Pos.
 * Description
 * Pos.
 * Description
 ---
 * 1
 * J11 socket - Left motor cable (CAB-037)
 * 2
 * J14 socket - Right motor cable (CAB-038)

{% /table %}

  2. Unplug the three cable endings on the affected motor power cable from the Safe Stop 1 (SS1) contactor on the side of the robot. Note that the bottom cable ending is gray, the middle one is black, and the top one is red. When attaching the replacement cable, the three cable endings must be attached similarly.

<image: "disconnect\_cables2.png">

<image: "disconnect\_cables.png">

  3. Note the path of the cable from the Safe Stop 1 (SS1) contactor to the motor controller carrier board, and pull out the cable from the robot.

  4. Connect the replacement cable to the carrier board.

<image: "motor\_connectors.png">

**Table 1.3**
{% table %}

 * Identification of the carrier board motor power cable sockets Pos.
 * Description
 * Pos.
 * Description
 ---
 * 1
 * J11 socket - Left motor cable (CAB-037)
 * 2
 * J14 socket - Right motor cable (CAB-038)

{% /table %}

  5. Guide the cable up to the Safe Stop 1 (SS1) contactor through the same path as the affected cable.

  6. Connect the replacement cable to the Safe Stop 1 (SS1) contactor on the side of the robot as shown in Step 2. The red cable ending goes into the top connector, the black ending in the middle connector, and the gray one in the bottom connector.

  7. Reassemble the robot by following the steps in Before replacing the motor power cables in reverse order.

## Testing

Turn on the robot, and check that no motor errors are reported under Monitoring > Hardware health.

The motor cables connects the left and right-side motors to the motor controller carrier board that contains the two motor controllers used to facilitate information from the robot computer to the motors, ensuring correct driving behavior.

The board can be damaged due to loose connections and broken cables, but also due to short circuit wiring, broken components, robot vibration, or incorrect wiring. The symptoms of a damaged motor controller carrier board include the robot constantly going into Protective stop, motor noise, faulty driving patterns, and errors regarding the motors.

Run the robot through a number of missions under supervision. Make sure the robot drives as expected and does not report any motor errors during the process.

If the motor controller carrier board needs to be replaced, see the guide How to replace the motor controller carrier board on MiR250.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.1
 * 2025-02-17
 * Corrected wrench size from 10 mm to 8 mm.

---

 * 1.0
 * 2024-01-26
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the motor power cables on MiR250 (CAB-037 and CAB-038) 1.0\_en.pdf