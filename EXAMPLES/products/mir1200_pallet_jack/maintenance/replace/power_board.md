# Power board {% tag "replace_power_board_mir250" /%}

<image: "power\_board.png">

Date: 2025-07-21

Document version: 1.0

Document number: 300060

Order number: 450315

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

This guide describes how to replace the power board on a MiR250. The power board is responsible for powering many of the electrical components in MiR250. If the power board does not provide the correct amount of power from one of its sockets, you may need to replace it.

When replacing the power board, make sure to operate in an ESD protected work area.

## Things you will need

  * A MiR250 power board from MiR

  * A torque wrench ranging from 1.7 to 8 Nm with the following exchangeable bits:

    * T20

    * T30

## Before replacing the power board

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

## Removing the fast-swap assembly

  1. Enable fast swap. If you have not already enabled this, see your robot's manual for the procedure. The battery cannot be removed before fast swap has been enabled.

  2. Remove the battery from the robot.

<image: "250\_remove\_battery.png">

  3. Remove the two center screws on the fast swap assembly. Use a T30 bit. When reassembling the robot, tighten these screws to 8 Nm.

<image: "250\_remove\_inner\_screws.png">

  4. Remove the four outer screws on the fast swap assembly. Use a T30 bit. When reassembling the robot, tighten these screws to 8 Nm.

<image: "250\_remove\_outer\_screws.png">

  5. Unplug the status light cable.

<image: "250\_unplug\_status\_light.png">

  6. Gently remove the battery fast swap assembly from the robot. You can now access the Power board.

<image: "250\_remove\_fast\_swap\_assembly.png">

  7. Disconnect the Ethernet cable from the rear Ethernet port.

## Replacing the power board

To avoid damaging the connectors or cables:

  * Do not twist or pull the cables forcefully.

  * Unplug the connectors by unlocking the connector mechanism and pulling out the connectors vertically while gripping the connector.

  * Do not touch, push, or pull the connector pins.

  1. Unplug the cables from the power board. If necessary, you can lift the plate with the safety PLC slightly to better access the inner cables.

<image: "power\_board\_with\_cables\_unplug.png">

  2. Remove the three screws at the front of the power board, and remove the pull handle. Use a T20 bit.

<image: "remove\_handle\_screws.png">

  3. Gently pull the power board to slide it out of the robot.

<image: "remove\_power\_board.png">

  4. Slide the new power board into the robot, making sure that it is pushed into the placement clips and is oriented correctly.

<image: "insert\_power\_board.png">

  5. Mount the pull handle on the robot using the same three screws that held it in place. Tighten these screws to 1.7 Nm.

<image: "mount\_pull\_handle.png">

  6. Plug the cables into the new power board while lifting the battery plate to access the cables in the back.

Plug in the inner cables first so the front cables are not in the way.

<image: "power\_board\_with\_cables\_plug\_in.png">

  7. Reassemble the robot, and reconnect the battery. You have now replaced the power board.

## Testing

Turn on the robot, sign in to the robot interface, and go to Monitoring > Hardware health and check that all components are functioning correctly.

If there is a missing connection or missing data from any components, this indicates that they may be missing power. If this occurs, check the cables you connected to the power board and make sure they are plugged in correctly. If you want to identify which cable connects the fault component to the power board, see the MiR250 wiring diagram. You can find this on MiR Support Portal.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.2
 * 2023-06-23
 * Updated with instructions for MiR250 hardware version 2.0. Updated style.

---

 * 1.1
 * 2021-06-01
 * Updated for the new Support site.

---

 * 1.0
 * 2020-01-21
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the power board on MiR250 1.0\_en.pdf