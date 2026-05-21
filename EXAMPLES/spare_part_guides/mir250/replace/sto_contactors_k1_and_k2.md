# STO contactors (K1 and K2) {% tag "replace_sto_contactors_k1_and_k2_mir250" /%}

Date: 2025-07-21

Document version: 1.0

Document number:

Order number: 450727

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: 2.0

<image: "contactors\_transparent\_isolated.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

This guide only applies for MiR250 hardware version 2.0. For hardware version 1.0, use spare part 450313 and the guide _How to replace the STO contactors (K1 and K2) on MiR250, MiR600, and MiR1350_.

## Things you will need

  * A screwdriver or wrench with the following exchangeable bits:

    * T45

    * T30

    * T10

  * A 1.7–5 Nm torque wrench with the following exchangeable bits:

    * 4 mm hex

    * PZ2

  * An 8 mm wrench

## Before replacing the contactors

  1. Push the two buttons on the rear cover, and remove the cover from the robot.

<image: "rear\_press\_buttons.png"> <image: "rear\_remove.png">

  2. Disconnect the battery. Pull the Battery lock pin out while pulling the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down.

<image: "250\_mkII\_disconnect\_battery.png">

  3. Remove the top cover.

Remove the top plate:

     1. Unscrew the antennas from the top compartment covers and remove them.

<image: "antenna\_unscrew.png">

     2. Unscrew the two nuts from the antenna connectors. Use an 8 mm wrench. Push the antenna connectors through the covers.

<image: "antenna\_bolt\_unscrew.png">

     3. Remove the top compartment covers from the top plate by unscrewing the eight screws. Use a T10 bit. Make sure the antenna cables are not connected to the compartment covers.

<image: "top\_unscrew.png">

     4. Remove the top plate from the robot by unscrewing the four screws. Use a T45 bit. Make sure the antenna cables are not connected to the top plate.

When reassembling, reuse the screws and washers, and tighten the screws to 7.5 Nm.

<image: "remove\_top\_cover\_all\_covers.png"> <image: "remove\_top\_cover\_no\_ends.png">

  4. Remove the two screws in the front cover, and remove the cover from the robot. Use a T30 bit.

<image: "front\_unscrew.png"> <image: "front\_remove.png">

  5. Turn the two screws counterclockwise on the side cover, and remove the cover from the robot. Use a T30 bit.

<image: "side\_unscrew.png">

## Replacing the contactors

  1. Disconnect the wires in the K1 and K2 STO contactors on the left side of the robot. Use a 4 mm hex bit for the outer terminals (1-6) and a PZ2 bit for the center terminals(13, 14, 21, 22, A1, and A2).

Do not remove the wires between the two contactors.

<image: "screw\_terminal\_drivers\_hw2.png">

  2. Remove the STO contactors from the DIN rail by sliding them up and off.

<image: "remove\_from\_din\_rail.png">

  3. Remove the three CAB-062 wires from between the two contactors.

<image: "disconnect\_cab\_62.png">

  4. Mount the new K1 contactor furthest to the rear of the robot. Make sure terminals 1 and 2 face downwards.

<image: "1\_2\_down\_slide\_rail.png">

  5. Connect the three CAB-062 wires to terminals 1, 3, and 5. Tighten the screw terminals to 5 Nm. Use a 4 mm hex bit.

<image: "connect\_cab\_62.png">

  6. Mount the new K2 contactor on the next DIN rail and connect the three CAB-062 wires to terminals 2, 4, and 6. Make sure terminals 1 and 2 face downwards towards the robot.

  7. Reconnect the remaining wires. Tighten the outer hex screw terminals to 5 Nm and the inner Pozidrive terminals to 1.7 Nm.

Each wire is labeled according to the terminal it connects to. You can also use the following overview.

<image: "cable\_overview.png">

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.2
 * 2024-05-08
 * Corrected the wrench size for removing the antenna nuts. Changed from 10 mm to 8 mm.

---

 * 1.1
 * 2024-01-16
 * Corrected torque tightening values and spare part number of the HW 1.0 kit.

---

 * 1.0
 * 2024-01-09
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the STO contactors (K1 and K2) on MiR250 1.0\_en.pdf