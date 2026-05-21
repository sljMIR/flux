# Control panel interfaces {% tag "replace_control_panel_interfaces_mir250" /%}

Date: 2025-07-21

Document version: 1.0

Document number:

Order number: 450603

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: All

<image: "button\_interfaces.png">

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

  * A screwdriver or wrench with the following drivers:

    * 8 mm hex socket or wrench

    * T10

  * A torque wrench ranging from 1 to 7.5 Nm with the following drivers:

    * T45

    * 19 mm wrench

    * 22 mm wrench

## Kit contents

  * 1 × Stop button with CAB-050

  * 1 × Restart button with CAB-051

  * 1× Power button with CAB-052

  * 1 × Operating mode key switch with CAB-053 and a new Operating mode key

## Before replacing the interfaces

  1. Disconnect the battery.

     * Hardware 1.0 only

Turn the Battery lock pin clockwise, and pull the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down. Turn the Battery lock pin counterclockwise to lock the Battery lever.

<image: "unlock\_battery\_connected.png"> <image: "disconnect\_battery.png">

     * Hardware 2.0 and higher only

Pull the Battery lock pin out while pulling the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down.

<image: "250\_mkII\_disconnect\_battery.png">

  2. Remove the top plate:

     1. Unscrew the antennas from the top compartment covers and remove them.

<image: "antenna\_unscrew.png">

     2. Unscrew the two nuts from the antenna connectors. Use an 8 mm wrench. Push the antenna connectors through the covers.

<image: "antenna\_bolt\_unscrew.png">

     3. Remove the top compartment covers from the top plate by unscrewing the eight screws. Use a T10 bit. Make sure the antenna cables are not connected to the compartment covers.

<image: "top\_unscrew.png">

     4. Remove the top plate from the robot by unscrewing the four screws. Use a T45 bit. Make sure the antenna cables are not connected to the top plate.

When reassembling, reuse the screws and washers, and tighten the screws to 7.5 Nm.

<image: "remove\_top\_cover\_all\_covers.png"> <image: "remove\_top\_cover\_no\_ends.png">

  3. Lift the corner bracket.

     1. Loosen the four screws for the bumper plate. Use a T30 bit.

<image: "loosen\_corner\_bracket\_screws.png">

     2. Screw in the set screw on the front of the bumper plate. Use a T30 bit.

<image: "corner\_bracket\_set\_screw.png">

     3. Lift the bumper. Ensure the cables in the proximity sensors are not damaged.

<image: "open\_corner\_bracket.png">

## Replacing the interfaces

  1. Disconnect the four connectors for the interfaces. These are the connectors in ports J5, J8, J10, and J11.

<image: "disconnect\_control\_panel\_buttons.png">

  2. Remove the interface nuts. Use a 19 mm wrench for the buttons and a 22 mm wrench for the operating mode switch.

<image: "uncrew\_button\_nuts.png">

  3. Pull out the interfaces.

<image: "remove\_buttons.png">

  4. Insert the new interfaces as follows:

{% table %}

 * Pos.
 * Description
 * Pos.
 * Description
 ---
 * 1
 * Operating mode key: CAB-053 Orient the interface so the flat side faces upward and the operating mode key is in a straight line towards the Locked state.
 * 2
 * Power button: CAB-052

---

 * 3
 * Restart button: CAB-051
 * 4
 * Stop button: CAB-050

{% /table %}

<image: "button\_locations.png">

  5. Fasten the interfaces with the interface nuts. Tighten the nuts to 1 Nm.

<image: "fasten\_interface\_nuts.png">

  6. Reconnect the interface connectors as follows:

     * CAB-050 to J5

     * CAB-051 to J8

     * CAB-052 to J11

     * CAB-053 to J10

<image: "interface\_connection\_overview.png">

  7. Reassemble to the robot by following the steps in Before replacing the interfaces in reverse.

## Testing

Turn on the robot, and test that each button works as expected and that you can change between Manual mode and Automatic mode.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.1
 * 2024-05-08
 * Corrected the wrench size for removing the antenna nuts. Changed from 10 mm to 8 mm.

---

 * 1.0
 * 2024-05-02
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the control panel interfaces on MiR250 1.0\_en.pdf