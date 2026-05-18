# Rear Ethernet port {% tag="replace_rear_ethernet_port_mir250" %}

Date: 2025-07-21

Document version: 1.0

Document number:

Order number: 450729

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: 2.0

<image: "ethernet\_port.png">

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

  * A small flat-head screwdriver

  * An 8 Nm torque wrench with a T30 head

## Kit contents

  * 1 × RJ45 Ethernet port

## Before replacing the Ethernet port

  1. Disconnect the battery.

     * Hardware 1.0 only

Turn the Battery lock pin clockwise, and pull the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down. Turn the Battery lock pin counterclockwise to lock the Battery lever.

<image: "unlock\_battery\_connected.png"> <image: "disconnect\_battery.png">

     * Hardware 2.0 and higher only

Pull the Battery lock pin out while pulling the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down.

<image: "250\_mkII\_disconnect\_battery.png">

  2. Enable fast swap. If you have not already enabled this, see your robot's manual for the procedure. The battery cannot be removed before fast swap has been enabled.

  3. Remove the battery from the robot.

<image: "250\_remove\_battery.png">

  4. Remove the two center screws on the fast swap assembly. Use a T30 bit. When reassembling the robot, tighten these screws to 8 Nm.

<image: "250\_remove\_inner\_screws.png">

  5. Remove the four outer screws on the fast swap assembly. Use a T30 bit. When reassembling the robot, tighten these screws to 8 Nm.

<image: "250\_remove\_outer\_screws.png">

  6. Unplug the status light cable.

<image: "250\_unplug\_status\_light.png">

  7. Gently remove the battery fast swap assembly from the robot.

<image: "250\_remove\_fast\_swap\_assembly.png">

  8. Disconnect the Ethernet cable from the rear Ethernet port.

<image: "disconnect\_ethernet\_port.png">

## Replacing the Ethernet port

  1. Push out the Ethernet port toward the rear side of the battery assembly plate. Use a small flat-head screwdriver to push down the tab on top of the Ethernet port.

<image: "remove\_port.png">

  2. Insert the new Ethernet port from the rear side of the plate at a downward-facing angle. The port must be placed as shown, with the two tabs at the bottom of the port against the front side of the battery plate.

<image: "mount\_port\_pt\_1.png">

  3. While pushing down the metal tab at the top of the Ethernet port with a flat-head screwdriver, push the port into place.

<image: "mount\_port\_pt\_2.png">

  4. Reassemble the robot by following the steps in Before replacing the Ethernet port in reverse.

## Testing

Turn on MiR250 and connect an Ethernet cable to the rear Ethernet port and your PC. Open a browser, and check that the robot interface opens when you go to 192.168.12.20.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.0
 * 2024-04-22
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the rear Ethernet port on the MiR250 1.0\_en.pdf