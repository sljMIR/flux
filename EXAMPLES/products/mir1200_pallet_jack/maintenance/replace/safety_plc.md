# Safety PLC {% tag="replace_safety_plc_mir250" %}

Date: 2025-07-21

Document version: 1.0

Document number: 300080

Order number: 450323

Valid for: MiR250

Valid for software version: All

Valid for hardware version: N/A

<image: "safety\_plc.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

## Things you will need

  * A pair of pliers or scissors to cut cable ties

  * Cable ties

  * A screwdriver or wrench with the following exchangeable bits:

    * T30

    * T10

  * A 15 Nm torque wrench with a T45 head

## Kit contents

  * 1 × Safety PLC and battery tray assembly

## Before replacing the safety PLC

  1. Disconnect the battery.

     * Hardware 1.0 only

Turn the Battery lock pin clockwise, and pull the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down. Turn the Battery lock pin counterclockwise to lock the Battery lever.

<image: "unlock\_battery\_connected.png"> <image: "disconnect\_battery.png">

     * Hardware 2.0 and higher only

Pull the Battery lock pin out while pulling the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down.

<image: "250\_mkII\_disconnect\_battery.png">

  2. Remove the top plate:

     1. Unscrew the antennas from the top compartment covers and remove them.

<image: "antenna\_unscrew.png">

     2. Unscrew the two nuts from the antenna connectors. Use an 8 mm wrench. Push the antenna connectors through the covers.

<image: "antenna\_bolt\_unscrew.png">

     3. Remove the top compartment covers from the top plate by unscrewing the eight screws. Use a T10 bit. Make sure the antenna cables are not connected to the compartment covers.

<image: "top\_unscrew.png">

     4. Remove the top plate from the robot by unscrewing the four screws. Use a T45 bit. Make sure the antenna cables are not connected to the top plate.

When reassembling, reuse the screws and washers, and tighten the screws to 7.5 Nm.

<image: "remove\_top\_cover\_all\_covers.png"> <image: "remove\_top\_cover\_no\_ends.png">

  3. Remove the battery plate:

     1. Enable fast-swap—see your robot's manual. This enables you to remove the battery.

     2. Remove the battery from the robot.

<image: "250\_remove\_battery.png">

     3. Remove the six screws on the battery plate. Use a T30 bit. When reassembling the robot, tighten these screws to 8 Nm.

<image: "250\_remove\_battery\_plate\_screws.png">

     4. Unplug the status light cable.

<image: "unplug\_status\_light.png">

     5. Gently remove the battery fast swap assembly from the robot. You can now access the power board.

<image: "250\_remove\_fast\_swap\_assembly.png">

     6. Hardware 2.0 and higher only

Disconnect the Ethernet cable from the rear Ethernet port.

<image: "disconnect\_ethernet\_port.png">

## Replacing the safety PLC

  1. Remove the cable ties binding the cables to the battery plate.

<image: "remove\_cable\_ties.png">

  2. Unplug the main safety PLC connectors.

<image: "unplug\_sick\_main\_connectors.png">

  3. Pull the battery tray toward the rear of the robot and slowly tilt it up.

<image: "lift\_battery\_plate.png">

  4. Unplug the two Ethernet cables.

<image: "unplug\_ethernet\_connectors.png">

  5. Loosen the two screws on the MOC connector, and unplug the MOC cable.

<image: "unplug\_moc\_cable.png">

  6. Hardware 2.0 and higher only

Pull the MOC cable and Ethernet cables out of the cable clamps behind the safety PLC.

<image: "cable\_holder\_ethernet\_moc.png">

  7. Remove the battery tray with the safety PLC from the robot.

  8. Reconnect the MOC cable and Ethernet cables. Tighten the MOC cable screws with your fingers to avoid over tightening.

<image: "ethernet\_connectors.png"> <image: "unplug\_moc\_cable.png">

  9. Hardware 2.0 and higher only

Organize the cables into the cable clamps behind the safety PLC.

  10. Gently push the battery plate into place.

  11. Plug in the main safety PLC cables.

<image: "sick\_main\_connectors.png">

  12. Reassemble the robot by following the steps in Before replacing the safety PLC in reverse.

## Applying the SICK configuration file

Connect to the robot and upload the correct SICK configuration file to the robot. If you have never changed the SICK configuration file, see the guide How to apply the default SICK configuration using SICK Safety Designer. You can find this document on [MiR Support Portal](https://supportportal.mobile-industrial-robots.com).

## Testing

Turn on the robot, and sign in to the robot interface. Go to Monitoring > Hardware health, and verify that there are no errors under Safety system.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.2
 * 2025-02-17
 * Fixed typo.

---

 * 1.1
 * 2024-08-02
 * Updated for hardware 2.0 and higher. Corrected the process for removing the PLC from the robot.

---

 * 1.0
 * 2021-10-26
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the safety PLC on MiR250 1.0\_en.pdf