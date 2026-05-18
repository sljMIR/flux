# Proximity board {% tag="replace_proximity_board_mir250" %}

Date: 2025-07-21

Document version: 1.0

Document number:

Order number: 450614 (HW 1.0) and 450693 (HW 2.0 and higher)

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: All

<image: "proximity\_sensor.png">

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

  * 8 mm wrench

  * A screwdriver or wrench with the following exchangeable bits:

    * T10

    * T30

  * A torque wrench ranging from 0.4 to 7.5 Nm with the following exchangeable bits:

    * T7

    * T45

## Kit contents

1 × Proximity board

## Before replacing a proximity board

  1. Push the two buttons on the rear cover, and remove the cover from the robot.

<image: "rear\_press\_buttons.png"> <image: "rear\_remove.png">

  2. Disconnect the battery.

     * Hardware 1.0 only

Turn the Battery lock pin clockwise, and pull the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down. Turn the Battery lock pin counterclockwise to lock the Battery lever.

<image: "unlock\_battery\_connected.png"> <image: "disconnect\_battery.png">

     * Hardware 2.0 and higher only

Pull the Battery lock pin out while pulling the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down.

<image: "250\_mkII\_disconnect\_battery.png">

  3. Remove the top plate:

     1. Unscrew the antennas from the top compartment covers and remove them.

<image: "antenna\_unscrew.png">

     2. Unscrew the two nuts from the antenna connectors. Use an 8 mm wrench. Push the antenna connectors through the covers.

<image: "antenna\_bolt\_unscrew.png">

     3. Remove the top compartment covers from the top plate by unscrewing the eight screws. Use a T10 bit. Make sure the antenna cables are not connected to the compartment covers.

<image: "top\_unscrew.png">

     4. Remove the top plate from the robot by unscrewing the four screws. Use a T45 bit. Make sure the antenna cables are not connected to the top plate.

When reassembling, reuse the screws and washers, and tighten the screws to 7.5 Nm.

<image: "remove\_top\_cover\_all\_covers.png"> <image: "remove\_top\_cover\_no\_ends.png">

  4. Remove the covers around the corner with the proximity board you want to replace.

     * Remove the two screws in the front cover, and remove the cover from the robot. Use a T30 bit.

<image: "front\_unscrew.png"> <image: "front\_remove.png">

     * Turn the two screws counterclockwise on the side cover, and remove the cover from the robot. Use a T30 bit.

<image: "side\_unscrew.png">

  5. Lift the corner bracket.

     1. Loosen the four screws for the bumper plate. Use a T30 bit.

<image: "loosen\_corner\_bracket\_screws.png">

     2. Screw in the set screw on the front of the bumper plate. Use a T30 bit.

<image: "corner\_bracket\_set\_screw.png">

     3. Lift the bumper. Ensure the cables in the proximity sensors are not damaged.

<image: "open\_corner\_bracket.png">

## Replacing a proximity board

  1. Take a picture of how the cables are connected to the proximity board you want to replace.

  2. Unplug all of the connectors in the proximity board.

<image: "unplug\_proxy\_connectors.png">

  3. Unscrew the two mounting screws. Use a T7 bit.

<image: "remove\_mounting\_screws.png">

  4. Pull the proximity board off the bumper.

<image: "remove\_proxy.png">

  5. Adjust the dial on the new proximity board to match the old one. The knob assigns the CAN node ID number and must be set to the same number as the old board. The number that the flat side of the knob is facing is the number the board is assigned. The image shows example of the knob setting for boards 0 and 1.

<image: "replace\_proximity-sensors\_dial.png">

The proximity boards are ordered as shown.

<image: "overview\_order\_no\_covers.png">

  6. Place the new proximity board under the bumper.

<image: "insert\_proxy.png">

  7. Screw in the two mounting screws. Tighten the screws to 0.4 Nm. Use a T7 bit.

<image: "screw\_in\_mounting\_screws.png">

  8. Plug in all of the cables. See the MiR250 wiring diagram for the cable numbers for the proximity board you are replacing. You can find the wiring diagrams on [MiR Support Portal](https://supportportal.mobile-industrial-robots.com).

     * For proximity boards 0, 2, and 6, plug in J1, J3, and J4.

<image: "proxy\_6\_connectors.png">

     * For proximity boards 1, 3, 5, and 7, plug in all four connectors.

<image: "proxy\_5\_connectors.png">

     * For proximity board 4, plug in J1 and J3.

<image: "proxy\_4\_connectors.png">

  9. Reassemble the robot by following the steps in Before replacing a proximity board in reverse.

## Testing and Troubleshooting

See [Troubleshoot CAN bus, proximity board, and light issues](https://supportportal.mobile-industrial-robots.com/support-files/manuals/HTML/en/standard_troubleshooting_guide/Content/troubleshooting/mir_all/Troubleshoot_issues_CAN_bus_connection.htm) in the _MiR250, MiR600, and MiR1350 Troubleshooting Guide_.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.0
 * 2025-03-26
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace a proximity board on MiR250 1.0\_en.pdf