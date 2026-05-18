# MOC cable {% tag="replace_moc_cable_mir250" %}

Date: 2025-07-21

Document version: 1.0

Document number: 76267800

Order number: 450369

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: All

<image: "MOC\_cable\_2.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

This guide describes how to replace the MOC cable that connects from the MOC module of the safety PLC to the motor encoders. The is the cable labeled CAB-036.

You will need to lift up the plate with the safety PLC mounted to it. This can be easier and safer to do with a second person to help hold it.

## Things you will need

  * A new MOC cable harness (CAB-036) from MiR

  * A pair of pliers or scissors to cut cable ties

  * Cable ties

  * An 8 mm wrench

  * A 15 Nm torque wrench with the following exchangeable bits:

    * T10

    * T30

    * T45

    * PZ0

## Disconnecting the battery

  1. Push the two buttons on the rear cover, and remove the cover from the robot.

<image: "rear\_press\_buttons.png"> <image: "rear\_remove.png">

  2. Disconnect the battery.

     * Hardware 1.0 only

Turn the Battery lock pin clockwise, and pull the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down. Turn the Battery lock pin counterclockwise to lock the Battery lever.

<image: "unlock\_battery\_connected.png"> <image: "disconnect\_battery.png">

     * Hardware 2.0 and higher only

Pull the Battery lock pin out while pulling the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down.

<image: "250\_mkII\_disconnect\_battery.png">

## Removing the front cover

  1. Remove the two screws in the front cover, and remove the cover from the robot. Use a T30 bit.

<image: "front\_unscrew.png"> <image: "front\_remove.png">

## Removing the top plate

  1. Unscrew the antennas from the top compartment covers and remove them.

<image: "antenna\_unscrew.png">

  2. Unscrew the two nuts from the antenna connectors. Use an 8 mm wrench. Push the antenna connectors through the covers.

<image: "antenna\_bolt\_unscrew.png">

  3. Remove the top compartment covers from the top plate by unscrewing the eight screws. Use a T10 bit. Make sure the antenna cables are not connected to the compartment covers.

<image: "top\_unscrew.png">

  4. Remove the top plate from the robot by unscrewing the four screws. Use a T45 bit. Make sure the antenna cables are not connected to the top plate.

When reassembling, reuse the screws and washers, and tighten the screws to 7.5 Nm.

<image: "remove\_top\_cover\_all\_covers.png"> <image: "remove\_top\_cover\_no\_ends.png">

## Accessing the MOC cable

  1. Pull out the battery. If you have not enabled battery fast-swap on the robot, be sure to lift the battery over the rear status light, and then pull it out gently.

<image: "remove\_battery\_1\_2.png"> <image: "remove\_battery\_2\_2.png">

  2. Unscrew the two screws on the battery plate. Use a T30 bit.

<image: "Battery\_tray\_screws\_2.png">

  3. Remove the plate beneath the battery that the safety PLC is mounted to. To remove the plate, lift the plate approximately 3 cm, and then pull it 5 cm towards the rear end of the robot. You should then be able to tilt the plate upwards and place it at the rear end of the robot.

<image: "remove\_SICK\_plate.png"> <image: "remove\_SICK\_plate\_2.png">

If you don't have anyone to help you hold the safety PLC plate, place an object beneath the safety PLC to support it while you finish the next steps.

<image: "remove\_SICK\_plate\_3.png">

## Removing the MOC cable

  1. In the front compartment, disconnect the two motor encorder cable connectors from the MOC cable connectors. The MOC cables are the two turquoise-colored cables connected to the circular connectors.

<image: "0013\_2.png"> <image: "0014\_2.png">

  2. Gently, pull the two MOC cables from the front compartment into the center compartment.

<image: "0015\_2.png"> <image: "0016\_2.png">

  3. Disconnect the D-sub connector from the MOC module on the safety PLC. This is the other end of the MOC cable. Use a PZ0 bit.

<image: "0017\_2.png">

  4. Cut any cable ties keeping the MOC cable tied to any other cables, and remove the MOC cable from the robot.

## Replacing the MOC cable

  1. Place the new cable into the center compartment, and feed the ends with the two connectors through to the front compartment.

  2. Connect the two connectors to the appropriate motor encoder cables. The turquoise cables from the center compartment are labeled Left and Right. The cable labeled Right must be connected to the encoder cable coming from the right side of the robot and vice-verse for the cable labeled Left. Under Testing you will run a test to check if you have connected the connectors correctly. Provided you run the test to verify the connection, you will not damage the robot if you accidentally swap the cables.

<image: "0013\_2.png">

  3. Use cable ties to group the MOC cable together with the other cables as they were before.

  4. Connect the D-sub MOC connector to the MOC module on the safety PLC.

  5. Reassemble the robot by following the guide from Accessing the MOC cable in reverse.

## Testing

The cable connecting the encoders to the MOC module provide the speed data the robot uses to change to the correct Protective field. To test if this is working correctly, follow these steps:

  1. Turn on the robot and wait for it to start up. If the robot reports any encoder related errors, it is possible that the circular connectors or the D-sub connector may not be securely connected. Check that the circular connectors are locked and the D-sub connector is properly connected.

  2. Approximately two meters in front of the robot, place a foam block or another piece of material that is at least 30 cm tall and will not damage the robot if it collides with it at full speed.

  3. Put the robot into Manual mode, and drive the robot toward the block at full speed.

If the robot stops before hitting the block, you have successfully replaced the MOC cable.

If the robot drives into the block before stopping, the encoder cables have been swapped. Open the front compartment and swap the encoder and MOC cable connections.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.1
 * 2025-06-17
 * Added missing 8 mm wrench to Things you will need. Added missing PZ0 bit to Things you will need. Updated styling.

---

 * 1.0
 * 2022-03-15
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the MOC cable on MiR250 1.0\_en.pdf