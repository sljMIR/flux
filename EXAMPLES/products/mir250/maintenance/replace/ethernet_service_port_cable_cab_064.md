# Ethernet service port cable (CAB-064) {% tag="replace_ethernet_service_port_cable_cab_064_mir250" %}

Date: 2025-07-21

Document version: 1.0

Document number:

Order number: 450711

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: 2.0

<image: "MiR250.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

This guide describes how to replace the Ethernet cable between the switch and the service port in the rear compartment on MiR250 hardware version 2.0.

## Things you will need

  * A torque wrench ranging from 0.7 to 15 Nm with the following exchangeable bits:

    * T10

    * T45

  * A 10 mm wrench

  * A screwdriver with the following exchangeable bits:

    * T10

    * T30

    * T45

  * Cable ties

## Kit contents

  * The CAB-064 Ethernet cable

## Before replacing the Ethernet cable

  1. Remove the rear cover by pressing the two white buttons and pulling off the cover. When removing the cover, un-click the two bottom corners first and then the two top corners.

<image: "rear\_cover\_buttons\_2.png"> <image: "rear\_cover\_remove\_2.png">

  2. Pull the battery pin out while pulling the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down.

<image: "250\_mkII\_disconnect\_battery.png">

The Battery lock pin will automatically click into place and lock the battery connector once the Battery lever has been pulled all the way down.

<image: "250\_mkII\_battery\_disconnected\_lock\_battery\_pin.png">

  3. Disconnect the antennas. Unscrew the antennas from the top compartment covers and remove them.

<image: "antenna\_unscrew.png">

  4. Disconnect the antenna cables from the top cover. Unscrew the two nuts from the antenna connectors. Use a 10 mm wrench. Then, push the antenna connectors through the covers.

<image: "antenna\_bolt\_unscrew.png">

  5. Remove the top compartment covers from the top plate by unscrewing the eight screws. Use a T10 screwdriver. Make sure the antenna cables are not connected to the compartment covers. When remounting the top compartment covers, tighten the screws to 0.7 Nm.

<image: "top\_unscrew.png">

  6. Remove the top plate from the robot by unscrewing the four screws. Use a T45 screwdriver. Make sure the antenna cables are not connected to the top cover. When remounting the top plate, tighten the screws to 15 Nm.

<image: "250\_remove\_screws\_top\_plate.png">

  7. Lift the top plate off the robot.

<image: "250\_remove\_top\_plate.png">

  8. Pull out the battery. If you have not enabled battery fast-swap on the robot, be sure to lift the battery over the rear status light, and then pull it out, gently.

<image: "remove\_battery\_1\_2.png"> <image: "remove\_battery\_2\_2.png">

  9. Unscrew the two screws on the battery plate. Use a T30 bit.

<image: "Battery\_tray\_screws\_2.png">

  10. Remove the plate beneath the battery that the safety PLC is mounted to. To remove the plate, lift the plate approximately 3 cm, and then pull it 5 cm towards the rear end of the robot. You should then be able to tilt the plate upwards and place it at the rear end of the robot.

<image: "remove\_SICK\_plate.png"> <image: "remove\_SICK\_plate\_2.png">

  11. If you do not have anyone to help you hold the safety PLC plate, place an object beneath the safety PLC to support it while you finish the next steps.

<image: "remove\_SICK\_plate\_3.png">

## Replacing the Ethernet cable

  1. Unplug the Ethernet cable from port 2 in the switch in the right side compartment.

<image: "MiR250\_mk\_II\_service\_port\_ethernet\_disconnect.png">

  2. Unplug the Ethernet cable from the RJ45 port 2 in the rear compartment.

<image: "MiR250\_mk\_II\_service\_port\_ethernet\_disconnect2.png">

  3. If possible, disentangle the Ethernet cable from the harness and discard it. If not, keep the cable in the harness.

  4. Plug in the new Ethernet cable into port two on the switch, and route the Ethernet cable along with the harness down to port 2 in the rear compartment. Connect the Ethernet cable to port 2. Use cable ties to keep the Ethernet cable together with the harness.

<image: "MiR250\_mk\_II\_service\_port\_ethernet\_new\_cable.png">

  5. Reassemble the robot by following the steps in Before replacing the Ethernet cable in reverse. Be very careful when lowering the safety PLC back into the robot.

## Testing

Turn on the robot, connect to the robot via an Ethernet cable, and verify that no communication errors occur.

## Troubleshooting

If the robot reports communication errors after replacing the Ethernet cable, verify that:

  * The new Ethernet cable is correctly inserted in both ports. You should be able to hear a click when inserting the connector into the RJ45 ports.

  * The new Ethernet cable works by testing it with another device.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.0
 * 2024-02-01
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the Ethernet service port cable on MiR250 (CAB-064) 1.0\_en.pdf