# Top interface board {% tag "replace_top_interface_board_mir250" /%}

Date: 2025-07-21

Document version: 1.0

Document number: 300061

Order number: 500800

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: All

<image: "GPIO\_module.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

The top interfaces are used to send and receive signals between the robot and the top module. If the top module and robot do not always operate together correctly, it is possible that there is a fault in the GPIO connection. The GPIO connector is integrated in the top interface board.

You can always view and test the GPIO connections in the robot interface under Setup > I/O modules > MiR internal I/Os. Use this page to test each input and output.

If you have a MiR Shelf Carrier 250 top module, see the _MiR250 Shelf Carrier Manual_ for how to test the top module and GPIO connections.

## Things you will need

  * A top interface board from MiR

  * An 8 mm wrench

  * A torque wrench ranging from 0.3 to 15 Nm with the following exchangeable bits:

    * T6

    * T10

    * T30

    * T45

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

## Removing the top plate

  1. Proceed accordingly:

     1. If a top module is mounted to the robot, remove the top module according to the demounting instructions for the module.

     2. If the robot does not have its top plate beneath the top module, continue to Replacing the GPIO interface.

     3. If the robot still has its top plate after demounting the top module, follow the next steps to remove it.

  2. Unscrew the antennas from the top compartment covers and remove them.

<image: "antenna\_unscrew.png">

  3. Unscrew the two nuts from the antenna connectors. Use an 8 mm wrench. Push the antenna connectors through the covers.

<image: "antenna\_bolt\_unscrew.png">

  4. Remove the top compartment covers from the top plate by unscrewing the eight screws. Use a T10 bit. Make sure the antenna cables are not connected to the compartment covers.

<image: "top\_unscrew.png">

  5. Remove the top plate from the robot by unscrewing the four screws. Use a T45 bit. Make sure the antenna cables are not connected to the top compartment cover.

When reassembling, reuse the screws and washers, and tighten the screws to 7.5 Nm.

<image: "remove\_top\_cover\_all\_covers.png"> <image: "remove\_top\_cover\_no\_ends.png">

## Replacing the GPIO interface

  1. Remove the side covers. Turn the two screws counterclockwise, and remove the cover from the robot. Use a T30 bit.

<image: "side\_unscrew.png">

  2. Unscrew the two large screws mounting the interface plate to the robot. Use a T30 bit. Tighten these screws to 5 Nm when reassembling.

<image: "250\_gpio\_revised.png">

  3. Unscrew the four screws fixing the Auxiliary safety functions interfaces to the interface plate. Use a T6 bit. Tighten these screws to 0.3 Nm when reassembling.

<image: "unscrew\_auxiliary\_safety\_screws.png">

  4. Gently, pull up the interface frame to the top of the battery. Do not pull it far enough to strain any connected cables.

<image: "lift\_module.png">

  5. Pull up and twist the Auxiliary safety function interface connectors 90°, and remove them from the interface frame.

<image: "remove\_safety\_functions.png">

  6. Pull the interface frame further out, and when possible, disconnect the cable from the GPIO interface module beneath the frame.

<image: "lift\_module\_2.png"> <image: "GPIO\_with\_cables\_unplug.png">

  7. Connect the four cables to the new GPIO interface module. There are two 4-pin connectors that can be connected to either of the 4-pin sockets. It does not matter which of the two sockets the 4-pin connectors are connected to.

<image: "GPIO\_with\_cables\_plug\_in.png">

  8. Reassemble the interface module by following steps 1—5 in reverse. Make sure to tighten the screws to the correct torque.

  9. Mount the top plate or top module back on the robot and reconnect the battery by following the steps in Disconnecting the battery in reverse. Make sure to tighten the screws to the correct torque.

## Testing

You can view and test the GPIO connections in the robot interface under Setup > I/O modules > MiR internal I/Os. Use this page to test each input and output. If the GPIO interface is functioning correctly, the output pins deliver 24 V when activated and the Input pins are activated when they receive 24 V. Select an output to activate it. Active I/Os turn green and inactive ones are red.

<image: "io\_input\_0\_and\_2\_active.png">

If the internal I/Os are not displayed, make sure to activate I/O modules under System > Settings > Features.

If you have a MiR Shelf Carrier 250 top module, see the manual for how to test the top module and GPIO connections.

If you do not have a top module to test the GPIO modules, you can connect a wire from each output to an input. When you activate an output by selecting it in the robot interface, the input should also activate.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.1
 * 2025-06-17
 * Corrected wrench size from 10 mm to 8 mm. Corrected procedure for removing the GPIO interface. Updated to software version 3.x. Updated styling.

---

 * 1.0
 * 2020-01-28
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the top interface board on MiR250 1.0\_en.pdf