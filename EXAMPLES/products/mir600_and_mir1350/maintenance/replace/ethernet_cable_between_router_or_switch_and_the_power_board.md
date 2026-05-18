# Ethernet cable between router or switch and the power board {% tag="replace_ethernet_cable_between_router_or_switch_and_the_power_board_mir250" %}

Date: 2025-07-21

Document version: 1.0

Document number: 300125

Order number: 450710

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: All

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

This guide describes how to replace the Ethernet cable between the switch and the power board on MiR250.

  * If you have a MiR250 hardware version 1.0, the Ethernet cable is a part of the internal wiring harness, and you should not remove the Ethernet cable. It should just be unplugged from the power board and the router, and left inside the robot.

  * If you have a MiR250 hardware version 2.0 or higher, the Ethernet cable is separated from the internal wiring harness, and the cable can be removed entirely from the robot if you replace it.

## Things you will need

  * A torque wrench ranging from 1.7 to 8 Nm with the following exchangeable bits:

    * T20

    * T30

  * An 8 mm wrench

  * A screwdriver with the following exchangeable bits:

    * T10

    * T45

## Disconnecting the battery

  1. Push the two buttons on the rear cover, and remove the cover from the robot.

<image: "rear\_press\_buttons.png"> <image: "rear\_remove.png">

  2. Disconnect the battery.

     * Hardware 1.0 only

Turn the battery lock pin clockwise, and pull the battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down. Turn the battery lock pin counterclockwise to lock the battery lever.

<image: "unlock\_battery\_connected.png"> <image: "disconnect\_battery.png">

     * Hardware 2.0 and higher only

Pull the battery lock pin out while pulling the battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down.

<image: "250\_mkII\_disconnect\_battery.png">

## Removing the battery and the fast swap assembly

  1. Enable fast swap. If you have not already enabled this, see your robot's manual for the procedure. The battery cannot be removed before fast swap has been enabled.

  2. Remove the battery from the robot.

<image: "250\_remove\_battery.png">

  3. Remove the two center screws on the fast swap assembly. Use a T30 bit. When reassembling the robot, tighten these screws to 8 Nm.

<image: "250\_remove\_inner\_screws.png">

  4. Remove the four outer screws on the fast swap assembly. Use a T30 bit. When reassembling the robot, tighten these screws to 8 Nm.

<image: "250\_remove\_outer\_screws.png">

  5. Unplug the status light cable.

<image: "250\_unplug\_status\_light.png">

  6. Gently remove the battery fast swap assembly from the robot. You can now access the power board.

<image: "250\_remove\_fast\_swap\_assembly.png">

  7. Unplug the Ethernet cable from the RJ45 port labeled J5 on the power board.

<image: "250\_unplug\_ethernet\_cable.png">

## Removing the top plate

  1. Unscrew the antennas from the top compartment covers and remove them.

<image: "antenna\_unscrew.png">

  2. Unscrew the two nuts from the antenna connectors. Use an 8 mm wrench. Push the antenna connectors through the covers.

<image: "antenna\_bolt\_unscrew.png">

  3. Remove the top compartment covers from the top plate by unscrewing the eight screws. Use a T10 bit. Make sure the antenna cables are not connected to the compartment covers.

<image: "top\_unscrew.png">

  4. Remove the top plate from the robot by unscrewing the four screws. Use a T45 bit. Make sure the antenna cables are not connected to the top plate.

When reassembling, reuse the screws and washers, and tighten the screws to 7.5 Nm.

<image: "remove\_top\_cover\_all\_covers.png">

## Unplugging the Ethernet cable from the router or switch

  1. Unplug the Ethernet cable from the router or switch in the right side compartment. The Ethernet cable coming from the power board is cable number 3.

     1. On MiR250 hardware version 1.0, unplug the cable in port three.

<image: "MiR250\_mk\_I\_powerboard\_ethernet\_disconnect.png">

     2. On MiR250 hardware version 2.0 or higher, unplug the cable from port two.

<image: "MiR250\_mk\_II\_powerboard\_ethernet\_disconnect.png">

  2. Plug in the new Ethernet cable into port two or three on the router/switch, depending on your hardware version, and route the Ethernet cable along with the harness down to the power board in the rear part of the robot. Connect the Ethernet cable to the RJ45 port labeled J5.

<image: "Route\_cables\_from\_switch\_250.png">

## Testing

  1. Remount the fast swap assembly and the battery by following the Removing the battery and the fast swap assembly instructions in reverse.

  2. Turn on the robot and verify that no communication errors occur.

  3. If the robot functions normally with no errors, remount the top plate and rear cover.

## Troubleshooting

If the robot experiences communication errors after replacing the Ethernet cable, verify that:

  * The new Ethernet cable is correctly inserted in both ports. You should be able to hear a click when inserting the connector into the RJ45 ports.

  * The new Ethernet cable works by testing it with another device.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.1
 * 2025-06-18
 * Corrected wrench size from 10 mm to 8 mm.

---

 * 1.0
 * 2023-07-14
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the Ethernet cable between router or switch and the power board on MiR250 1.0\_en.pdf