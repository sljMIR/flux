# Motor controller carrier board {% tag "replace_motor_controller_carrier_board_mir250" /%}

<image: "carrier\_board.png">

Date: 2025-07-21

Document version: 1.0

Document number: 300068

Order number: 450694

Valid for: MiR250

Valid for software version: 2.14.0 and higher

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

This guide describes how to replace the motor controller carrier board on MiR250. The motor controller carrier board contains the two motor controllers used to facilitate information from the robot computer to the motors, ensuring correct driving behavior.

The board can be damaged due to short circuit wiring, broken components, robot vibration, incorrect wiring, loose connections, or broken cables. The symptoms of a damaged motor controller carrier board include the robot constantly going into Protective stop, motor noise, faulty driving patterns, and errors regarding the motors.

## Things you will need

  * A new motor controller carrier board from MiR

  * A T30 Torx screwdriver

  * A 10 Nm torque wrench with a T10 Torx head. If you have a long and thin tool, this can make it easier to remove and mount certain screws.

  * A flex extension (if you do not have this, you will need a threadlocking adhesive with the same properties as Loctite 2400 and a 3 mm six-point socket head for the torque wrench)

  * Thermal paste with the same properties as Electrolube HTS02S Silicone Heat Transfer Compound (see product [here](https://chilternconnections.co.uk/products/thermal-interface-materials/silicone-pastes/hts/electrolube-hts02s-silicone-heat-transfer))

## Before replacing the carrier board

*   1. Remove the rear cover by pressing the two white buttons and pulling off the cover. When removing the cover, un-click the two bottom corners first and then the two top corners.

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

## Replacing the carrier board

  1. Take a picture of the cables connected to the motor controller carrier board, or check that you can identify each of the cable labels. You will later need to verify that you have replicated the same setup with the new carrier board.

  2. Unplug the cables from the 3D cameras. This will make it easier to access the carrier board.

<image: "USB\_Camera-01.png">

  3. Disconnect all of the cables in the motor controller carrier board, one at a time. When pulling out a cable, make sure to grasp around the connector and to pull the connector straight out of the socket. Do not pull on the cables themselves. There are 10 cables in all that must be unplugged.

     * Be especially careful when unplugging the three large connectors in the center of the board. There is a higher risk of ruining the crimps in these connectors

<image: "carrier\_board\_unplug\_cables.png">

  4. After unplugging the connectors, check that the crimps in the three largest connectors (CAB-001, CAB-037, and CAB-038) are still correct. There are two main things to look for:

     * Check if some of the crimps have a larger gap like the crimp circled with red below. If there are any large gaps, try to push the crimps back together again. The crimp circled with green is a well functioning crimp.

<image: "bad\_crimps1.jpg">

     * Check if some of the crimps have been pushed out of place like the crimp circled in red below. Try to push any misplaced crimps back into place.

<image: "bad\_crimps2.jpg">

     * If a crimp is damaged beyond repair, contact MiR Technical Support.

  5. Remove the screws in each corner of the carrier board using the T10 Torx wrench. If you unscrew these screws from an angle, you risk damaging the screw. To prevent this:

     * Use a long thin screwdriver to remove the top two screws.

     * Either use a flex extension or demount the 3D cameras to remove the bottom two screws.

To demount the cameras, remove the two nuts on the back of each camera with a 3 mm wrench. The nuts are treated with Loctite, so you will have to apply some force to remove them.

When reassembling the robot, make sure to apply a new layer of Loctite 2400 to the threaded shafts on the cameras and tighten the nuts to 0.3 Nm.

<image: "carrier\_board\_screws.png">

  6. Gently remove the carrier board from the robot.

<image: "carrier\_board\_remove\_board.png">

  7. Wipe away excess thermal paste from the robot where the motor controller used to be. Use a clean cloth and rubbing alcohol or thermal paste cleaner to help remove the paste.

<image: "remove\_thermal\_paste.png">

  8. Apply thermal paste to the back of the new motor controller carrier board. Nine straight lines of paste distributed across the plate is the recommended amount.

<image: "apply\_cooling\_paste.png">

  9. Place the carrier board back in the robot, and mount it using the four screws. Tighten the screws to 10 Nm. Use the same tips from  while screwing in the screws to ensure you don't screw them in from an angle.

Make sure the carrier board is oriented so the side labeled LEFT is towards the left side of the robot.

  10. Reconnect all of the cables. Use the picture you took or labels you applied in the first step. If you are in doubt, see Table 1.1.

<image: "carrier\_board\_sockets-01.png">

**Table 1.1**
{% table %}

 * Identification of the carrier board sockets and the cables that connect to them Pos.
 * Description
 * Pos.
 * Description
 ---
 * 1
 * J23 socket - Unused
 * 2
 * J12 socket - Left Hall sensor cable

---

 * 3
 * J9 socket - Brake power cable (CAB-002, two yellow wires)
 * 4
 * J8 socket - Left encoder cable

---

 * 5
 * J3 socket- Unused
 * 6
 * J6 socket - Unused

---

 * 7
 * J4 socket - CAN bus cable (CAB-007)
 * 8
 * J2 socket - Protective stop cable (CAB-002, yellow and black wires)

---

 * 9
 * J13 socket - Right encoder cable
 * 10
 * J14 socket - Right motor cable (CAB-038)

---

 * 11
 * J22 - Unused
 * 12
 * J15 socket - Right Hall sensor cable

---

 * 13
 * J5 socket- Power cable (CAB-001)
 * 14
 * J11 socket - Left motor cable (CAB-037)

{% /table %}

You have now replaced the carrier board. Turn on the robot, and check that no motor errors are reported under Monitoring > Hardware health. If so, verify that the cables and orientation of the motor controller carrier board are correctly set up.

## Testing

Run the robot through a number of missions under supervision. Make sure the robot drives as expected and does not report any motor errors during the process.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.1
 * 2023-06-30
 * Updated for new version of the carrier board that requires software 2.14.0 or higher.

---

 * 1.0
 * 2021-06-08
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the motor controller carrier board on MiR250 1.0\_en.pdf