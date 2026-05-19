# Router or switch {% tag "replace_router_or_switch_mir250" /%}

<image: "Router 2 1.png">

Date: 2023-06-22

Document version: 1.0

Document number: 300062

Order number:

450160 (router for MiR250 hardware version 1.0)

450554 (switch for MiR250 hardware version 2.0)

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: All

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

This guide describes how to replace the router or switch on MiR250 robots. You may need to replace the router or switch if you are unable to connect to the robot's internal access point or if the safety PLC, top module Ethernet interface, or robot computer are disconnected due to a fault in the router or switch.

Before replacing the router or switch, we recommend you try to reprogram it using the set up procedure described in the guide _How to set up the router or Ethernet switch on MiR robots_. If this does not fix the issue, try changing the Ethernet cable from the router or switch to the component it cannot connect to.

## Things you will need

*   * A Mikrotik router or switch from MiR

  * A screwdriver or wrench with the following exchangeable bits:

    * T30

  * A torque wrench ranging from 1.7 to 2.5 Nm.

## Remove the rear cover

To open the rear compartment, follow these steps:

  1. Push the two white buttons on the rear cover at the same time.

<image: "rear\_press\_buttons.png">

  2. Loosen the bottom corners one at the time by pulling out each corner.

<image: "rear\_bottom\_corners.png">

  3. Loosen the top corners one at the time by pulling each corner down, and then out.

<image: "rear\_top\_corners.png">

  4. Disconnect the battery (MiR250 hardware version 1.0).

     1. Turn the Battery lock pin clockwise to unlock the battery connector.

<image: "unlock\_battery\_connected.png">

     2. Pull the Battery lever downwards to disconnect the battery.

<image: "disconnect\_battery.png">

     3. Turn the Battery lock pin counterclockwise to lock the battery connector.

<image: "lock\_battery\_disconnected.png">

  5. Disconnect the battery (MiR250 hardware version 2.0 and higher)

     1. Pull out the Battery lock pin while pushing the Battery lever downwards.

<image: "250\_mkII\_disconnect\_battery.png">

     2. The Battery lock pin will click into place and lock the battery connector once the Battery lever has been pushed all the way down.

<image: "250\_mkII\_battery\_disconnected\_lock\_battery\_pin.png">

## Remove the side cover

Remove the right side cover by unscrewing the two screws, and pulling off the covers. Use a T30 screwdriver. When removing the cover, un-click the bottom of the cover, and then pull the cover down and out to pull it off.

  1. Turn the two screws counterclockwise. Use a T30 screwdriver.

<image: "side\_unscrew.png">

  2. Loosen the bottom corners one at the time by pulling out each corner.

<image: "side\_bottom\_corners.png">

  3. Pull off the cover.

<image: "side\_remove.png">

## Replacing the router or switch

Before replacing the router or switch, label all five Ethernet cables so you know which ports the cables should go in when reassembling.

  1. Locate the router or switch on the right side of the robot.

  2. Remove all five Ethernet cables as well as the power cable from the router or switch.

<image: "MiR250\_switch\_remove\_cables.png">

  3. Remove the four screws that hold the router or switch in place. Use a T30 screwdriver.

<image: "MiR250\_mkII\_switch\_no\_cables.png">

  4. The router or switch, and bracket can now be removed from the robot.

  5. Insert the new router or switch into the bracket.

  6. Reconnect the Ethernet cables to the same ports as on the old router or switch.

  7. Mount the new bracket with the new router or switch in the robot. Tighten the two inner screws to 2.5 Nm, and the two outer screws to 1.7 Nm. Use a T30 screwdriver.

## Ethernet cable overview for router and switch

The connections to the router or switch are different depending on hardware versions.

{% table %}

 * Port number (left to right)
 * MiR250 hardware version 1.0 (router)
 * MiR250 hardware version 2.0 (switch)
 ---
 * 1
 * PLC
 * Front scanner

---

 * 2
 * Robot computer
 * Power board

---

 * 3
 * Power board
 * Electrical interface (top)

---

 * 4
 * Front scanner
 * Corner

---

 * 5
 * Electrical interface (top)
 * Robot computer

{% /table %}

## Programming the router or switch and reassembling the robot

  1. Program the router or switch as described in the guide How to set up the router or Ethernet switch on MiR robots

  2. Turn off the robot, and reassemble it. Test the robot before mounting any top modules back on the robot—see Testing.

  3. You have now finished replacing the router or switch, and should be able to connect to the robot.

## Testing

To test the router or switch connection, try connecting to the robot's Wi-Fi and the robot interface. If you can connect, then you have successfully replaced the router or switch. If not, go through the guide again, and make sure you have completed all the steps.
If you need to reprogram the router or switch, make sure to reset it first, as described in the guide _How to set up the router or Ethernet switch on MiR robots_.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.2
 * 2023-06-21
 * Added information relevant for MiR250 hardware version 2.0. Changed the name of the guide to _How to replace the router or switch on MiR250_. Updated style and structure.

---

 * 1.1
 * 2021-06-01
 * Updated with tightening torques.

---

 * 1.0
 * 2021-05-02
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the router or switch on MiR250 1.0\_en.pdf