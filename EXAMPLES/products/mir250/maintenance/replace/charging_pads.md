# Charging pads {% tag="replace_charging_pads_mir250" %}

Date: 2025-07-21

Document version: 1.0

Document number: 300112

Order number: 450377

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: All

<image: "module.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

MiR250 has four charging pads that are located underneath the robot. They are used to connect the robot to MiR Charge 48V for automatic charging. The four charging pads are collected into a single charging module that can be replaced as a whole.

This guide describes how to replace the charging module.

## Things you will need

  * Torque wrenches for the following:

    * 2.6 Nm with a T25 bit

    * 1.7 Nm with a 3 mm hex bit

  * A ratchet with a T30 bit

  * A ratchet with a T27 bit

  * A large flat-head screwdriver

  * A T30 screwdriver

  * A lifting device

  * A secure structure for the robot where it is elevated from the ground

## Before replacing the charging pads

  1. Remove the rear cover by pressing the two white buttons and pulling off the cover. When removing the cover, un-click the two bottom corners first and then the two top corners.

<image: "rear\_cover\_buttons\_2.png"> <image: "rear\_cover\_remove\_2.png">

  2. Disconnect the battery.

     * Hardware 1.0 only

Turn the Battery lock pin clockwise, and pull the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down. Turn the Battery lock pin counterclockwise to lock the Battery lever.

<image: "unlock\_battery\_connected.png"> <image: "disconnect\_battery.png">

     * Hardware 2.0 and higher only

Pull the Battery lock pin out while pulling the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down.

<image: "250\_mkII\_disconnect\_battery.png">

  3. Using a lifting device, raise the robot from the ground onto a secure structure where you can safely access the area under the front cover. You can, for example, place the robot on the edge of a pallet or some other sturdy platform.

Make sure you have access to the charging pads beneath the robot.

<image: "block.png">

  4. Remove the front cover by unscrewing the two screws and pulling off the cover. Use a T30 screwdriver to unscrew the screws. When removing the cover, un-click the two bottom corners first and then the two top corners.

<image: "remove\_front\_screws.png"> <image: "remove\_front.png">

## Replacing the charging pads

  1. Disconnect the charging cables by loosening the four screws. They are located behind the broom. Use a wrench with a flat-head bit for the two middle pads and a 3 mm hex bit for the two outer pads.

Label the cables so that you know which cables to connect to which of the four replacement pads.

<image: "charging\_pads\_hex.png">

  2. Remove the pull handle from the robot by unscrewing the two screws. Use a ratchet with a T27 bit.

<image: "remove\_handle.png">

  3. Remove the charging module by unscrewing the four screws. Use a ratchet with a T30 bit. Reuse the screws when mounting the new module.

<image: "remove\_charging\_module.png">

<image: "module\_down.png">

  4. Replace the charging module with the new module, and mount the new module to the robot using the same four M6×25 screws. Tighten the screws to 2.6 Nm. Use a torque wrench with a T30 bit.

  5. Connect the charging cables to the new pads. Use the labels you put on the cables in Step 1 to identify which cable to connect to which pad. Tighten the screws to 1.7 Nm. Use a torque wrench with a flat-head bit for the two middle pads and a 3 mm hex bit for the two outer pads.

Reassemble the robot by following the steps in Before replacing the charging pads in reverse.

## Testing

Send the robot to dock to a charging station and verify that it begins charging correctly. If the robot does not charge, verify that you have connected the charging cables correctly to the charging pads as described in Step 5.

If the charging module seems to be correctly installed but the robot is still not charging, use the guide _Troubleshoot docking issues_ to ensure that the robot is docking to the charging station correctly.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.2
 * 2025-06-17
 * Corrected hex bit size from 30 mm to 3 mm.

---

 * 1.1
 * 2023-03-28
 * Added information about new charging cable screws. Corrected the required Nm for connecting the charging cables to the new pads from 2.6 to 1.7. Updated styling. General improvements throughout the document.

---

 * 1.0
 * 2022-09-17
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the charging pads on MiR250 1.0\_en.pdf