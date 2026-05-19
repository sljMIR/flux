# Safety laser scanner cables {% tag "replace_safety_laser_scanner_cables_mir250" /%}

Date: 2025-07-21

Document version: 1.0

Document number: 300075

Order number:

450326 - SICK scanner system plug, front

450327 - SICK scanner system plug, rear

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: All

<image: "replace\_scanner\_cables-14.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

If your robot has lost connection to the front or rear safety laser scanner, it is possible that the connection to the scanner has been compromised. Before replacing one of the cables, it is a good idea to check if the existing cable is plugged in correctly:

  * The front scanner cable connects the front scanner to the router or switch with an Ethernet cable and to the safety PLC with a power and signal cable.

  * The rear scanner cable connects the rear scanner to the safety PLC with both an Ethernet cable and a power and signal cable.

<image: "cables-01.png">

For a better idea of which connectors you should check, see the steps in this guide that show the cable connections.

If one of the scanner cables are damaged, it must be replaced.

## Things you will need

  * A safety laser scanner front or rear scanner cable from MiR

  * A pair of pliers or scissors to cut cable ties

  * Cable ties

  * An 8 mm wrench

  * A screwdriver with the following exchangeable bits:

    * T10

    * T30

  * A torque wrench ranging from 1.3 to 15 Nm with the following exchangeable bits:

    * T10

    * T25

    * T45

  * The guide _How to replace the safety laser scanners on MiR250_

  * A clean anti-static lens cloth, such as SICK optics cleaning cloth part no. 4003353 (see SICK's product list)

  * An anti-static plastic cleaner, such as SICK Plastic cleaner and care product part no. 5600006 (see SICK's product list)

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

## Removing the covers

  1. Remove the two screws in the front cover, and remove the cover from the robot. Use a T30 bit.

<image: "front\_unscrew.png"> <image: "front\_remove.png">

  2. Turn the two screws counterclockwise on the side cover, and remove the cover from the robot. Use a T30 bit.

<image: "side\_unscrew.png">

## Remove the battery and PLC plate

  1. Pull out the battery. If you have not enabled battery fast-swap on the robot, be sure to lift the battery over the rear status light, and then pull it out, gently.

<image: "remove\_battery\_1\_2.png"> <image: "remove\_battery\_2\_2.png">

  2. Unscrew the two screws on the battery plate. Use a T30 bit.

<image: "Battery\_tray\_screws\_2.png">

  3. Remove the plate beneath the battery that the safety PLC is mounted to. To remove the plate, lift the plate approximately 3 cm, and then pull it 5 cm towards the rear end of the robot. You should then be able to tilt the plate upwards and place it at the rear end of the robot.

<image: "remove\_SICK\_plate.png"> <image: "remove\_SICK\_plate\_2.png">

  4. If you do not have anyone to help you hold the safety PLC plate, place an object beneath the safety PLC to support it while you finish the next steps.

<image: "remove\_SICK\_plate\_3.png">

  5. Loosen the four screws in the front corner bumper above the scanner with the cable you are replacing. Use a T30 bit.

<image: "control\_panel\_screws.png">

  6. Screw in the black set screw, and lift the corner bumper.

<image: "push\_release\_pin.png"> <image: "pull\_up\_bumper.png">

## Replacing the front scanner cable

  1. Remove the front scanner as described in the guide How to replace the safety laser scanners on MiR250. Handle the scanner carefully and place it somewhere clean and safe where it will not be contaminated or damaged.

  2. Cut the cable ties for the front scanner on the safety PLC and disconnect the front scanner cable. The front scanner cable is the inner cable with the multi-colored wires.

<image: "replace\_scanner\_cables-02.png">

  3. Disconnect the front scanner Ethernet cable from the router or switch.

     1. On MiR250 hardware version 1.0, the cable coming from the front scanner is connected to port 4 on the router.

<image: "MiR250\_mk\_I\_switch\_router\_remove\_cable\_port\_4.png">

     2. On MiR250 hardware version 2.0, the cable coming from the front scanner is connected to port 1 on the switch.

<image: "MiR250\_mk\_II\_switch\_router\_remove\_cable\_port\_1.png">

  4. Cut all of the zip ties around the two cables that lead to the scanner. Be careful not to cut any of the cables.

<image: "replace\_scanner\_cables-06.png">

  5. Gently pull the cables out from the robot through the front compartment and then up beneath the corner bumper and discard the cable.

<image: "replace\_scanner\_cables-04.png">

  6. Lead the Ethernet and safety PLC connector ends of the new front scanner cable under the bumper, to the front compartment, and into the center compartment. The cable should be placed where the old scanner cable was.

<image: "replace\_scanner\_cables-07.png">

  7. Connect the two connectors to the router or switch and safety PLC in the same sockets as the old cable.

<image: "replace\_scanner\_cables-05\_plc.png">

     1. On MiR250 hardware version 1.0, the Ethernet cable should be connected to port 4 on the router.

<image: "MiR250\_mk\_I\_switch\_router\_connect\_cable\_port\_4.png">

     2. On MiR250 hardware version 2.0, the Ethernet cable should be connected to port 1 on the switch.

<image: "MiR250\_mk\_II\_switch\_router\_connect\_cable\_port\_1.png">

  8. Collect the cables together and replace the zip ties you removed. Make sure all of the cables are collected and there is no unnecessary tension on any of them.

<image: "replace\_scanner\_cables-08.png">

  9. Bring the scanner back to the robot, connect it to the system plug, and mount it back into the robot as described in the guide How to replace the safety laser scanners on MiR250.

  10. Reassemble the robot by following the steps in How to replace the safety laser scanner cables on MiR250 in reverse. Be very careful when lowering the safety PLC back into the robot.

## Replacing the rear scanner cable

  1. Remove the rear scanner as described in the guide How to replace the safety laser scanners on MiR250. Handle the scanner carefully and place it somewhere clean and safe where it will not be contaminated or damaged.

  2. Cut the cable ties for the rear scanner on the safety PLC and disconnect the rear scanner cable. The rear scanner cable is the outer cable with the multi-colored wires.

<image: "replace\_scanner\_cables-03.png">

  3. Disconnect the rear scanner Ethernet cable from the safety PLC.

<image: "Ehternet\_port2.png">

  4. Cut any zip ties around the two cables that lead to the scanner.

<image: "replace\_scanner\_cables-09.png">

  5. Gently pull the cables in through the corner bumper compartment, and discard the cable.

<image: "replace\_scanner\_cables-12.png">

  6. Lead the Ethernet and safety PLC connector ends of the new front scanner cable into the center compartment of the robot.

<image: "replace\_scanner\_cables-13.png">

  7. Connect the two connectors to the safety PLC in the same sockets as the old cable.

<image: "replace\_scanner\_cables-11.png">

  8. Collect the cables together and replace the zip ties you removed. Make sure all of the cables are collected and there is no unnecessary tension on any of them.

<image: "replace\_scanner\_cables-10.png">

  9. Bring the scanner back to the robot, connect it to the system plug and mount it back into the robot as described in the guide How to replace the safety laser scanners on MiR250.

  10. Reassemble the robot by following the guide from Remove the battery and PLC plate in reverse. Be very careful when lowering the safety PLC back into the robot.

## Testing

Turn on the robot, and see if any errors are displayed regarding a missing connection to the safety laser scanners. If so, check the cables again, making sure that all of the connectors are correctly connected.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.2
 * 2025-06-18
 * Corrected wrench size from 10 mm to 8 mm.

---

 * 1.1
 * 2023-06-22
 * Added information for MiR250 hardware version 2.0. Updated style and layout.

---

 * 1.0
 * 2021-07-06
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the safety laser scanner cables on MiR250 1.0\_en.pdf