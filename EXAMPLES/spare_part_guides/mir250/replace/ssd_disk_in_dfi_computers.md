# SSD disk in DFI computers {% tag="replace_ssd_disk_in_dfi_computers_mir250" %}

Date: 2025-07-21

Document version: 1.0

Document number:

Order number: 450732

Valid for: All robots with DFI computers

Valid for software version: N/A

Valid for hardware version: See overview in guide

<image: "ssd\_disk.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

The following robots are produced with DFI computers:

  * All MiR250, MiR500, MiR600, MiR1000, and MiR1350

  * MiR100 and MiR200 hardware version 5.0–7.0

If your MiR100 or MiR200 is hardware version 4.0 or lower, you may have replaced the NUC robot computer with a DFI.

## Things you will need

  * A torque wrench ranging from 0.4 to 11.6 Nm with the following exchangeable bits

    * PH2

    * T8

    * T10

    * T15

    * T25

    * T30

    * T45

## Kit contents

1 × SSD disk

## Before replacing the SSD disk

  1. Save the following data that will be lost after replacing the SSD disk:

     * The .site file. This can be exported from Setup > Maps. Select **Export** next to the site you want to export.

     * The robot serial number and name. These are found under **Help > Robot information**.

     * The camera serial numbers. These are found under **System > Robot setup**.

     * (MiR100 and MiR200 only) The laser scanner serial numbers. These are found under **System > Robot setup**.

  2. Generate and download an error log in the robot interface under **System > Error log**. MiR Technical Support can retrieve some data from the error log in case it is lost.

  3. Turn off the robot and disconnect the battery. See the manual for your robot application for more information.

## Removing the DFI computer

### MiR100 and MiR200

  1. Remove the top cover from the robot.

  2. Disconnect the front cover status light connectors.

<image: "disconnect\_status\_light.png">

  3. Remove the front cover from the robot by unscrewing the two bolts. Use a T25 bit.

<image: "Remove\_front\_screws\_2.png"> <image: "Remove\_front\_cover\_2.png">

  4. Take pictures of the cables connected to the top of the robot computer, or mark the cables in a way that helps you remember where to plug in each cable.

  5. Unplug all of the cables in the top of the robot computer. Use a screwdriver and wrench to disconnect some of the cables. Unplug the identified cable last when they are more accessible.

<image: "top\_cables.png">

  6. Unscrew the four bolts in the charging pad and camera bracket, and remove the bracket gently. You cannot disconnect the cables to the charging pads, so make sure not to strain the cables while removing the bracket.

<image: "DFI\_replace-04.png"> <image: "DFI\_replace-05.png">

  7. Unscrew the four bolts in the front plate, disconnect the cables to the ultrasound sensors gently, and remove the plate.

The pins in the ultrasound connectors are very delicate, so be sure not to apply more force than necessary and avoid bending or twisting the connectors while handling them.

<image: "DFI\_replace-06.png"> <image: "DFI\_replace-07.png">

When reconnecting the ultrasound sensors, make sure to orient the connectors correctly. The white wire should always be facing the opening on the plate's side flange.
<image: "DFI\_replace-08.png">

  8. Take pictures of the cables connected to the bottom of the robot computer, or mark the cables in a way that helps you remember where to plug in each cable.

<image: "bottom\_cables.png">

  9. Unplug the cables from the bottom of the computer. Make sure all cables are now disconnected from the robot computer.

<image: "DFI\_replace-09.png">

  10. Unscrew the three bolts mounting the computer to the robot. There is one screw below the computer and two at the top.

<image: "DFI\_replace-10.png">

### MiR250

  1. Remove the two screws in the front cover, and remove the cover from the robot. Use a T30 bit.

<image: "front\_unscrew.png"> <image: "front\_remove.png">

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

  3. Unscrew the four screws from the robot computer bracket. Use a T8 bit.

<image: "250\_dfi.png">

  4. Take pictures of the cable connections or label each cable.

  5. Unplug all of the cables from the robot computer on the front and back.

  6. Slide the robot computer out of the bracket.

<image: "dfi\_out1.png">

### MiR500 and MiR1000

  1. Press the two buttons on the front hatch, and pull open the hatch.

<image: "front\_maintenance\_hatch.jpg"> <image: "press\_hatch\_button.jpg">

  2. Remove the compartment hatch. To do this, disconnect the status light cable, and turn the two hinges in the bottom corners.

<image: "front\_maitenance\_hatch\_remove.jpg">

  3. Turn the two levers 180°, and pull out the electronics drawer.

<image: "pull\_out\_electronics\_drawer.jpg">

  4. Take pictures of the cables connected to the robot computer or label each cable so you can plug them back into the same sockets later.

  5. Unplug all of the cables from the robot computer.

<image: "DFI\_cables\_up.png">

  6. Unscrew the four screws from the router and robot computer bracket. Use a T15 bit.

<image: "DFI\_unmount\_combo.jpg">

  7. Gently remove the bracket from the robot.

<image: "DFI\_out.jpg">

  8. Unscrew the four screws mounting the computer to the bracket. Use a 2.5 mm hex bit. The screws are inserted from behind the robot computer on the router side of the bracket.

<image: "umount\_DFI.jpg">

### MiR600 and MiR1350

  1. Pull open the right side hatch by pressing the two buttons on the hatch.

<image: "press\_hatch\_buttons.png"> <image: "open\_hatch.png">

  2. Disconnect the status light cable.

<image: "disconnect\_light.png">

  3. Turn the two hinges in the bottom corners to release the hatch, and remove the hatch from the robot.

<image: "turn\_hatch\_hinges.png"> <image: "remove\_side\_hatch.png">

  4. Turn the two screws on the front compartment hatch 90˚, and pull out the electronics drawer.

<image: "access\_front\_compartment\_1.png"> <image: "access\_front\_compartment\_2.png">

  5. Insert a piece of wood or foam under the rear end of the drawer to support it before detaching it from the robot.

<image: "support\_drawer\_600\_1350.png">

  6. Pull out the rail rings on both sides of the drawer to unlatch it from the robot. Pull out the drawer as far as you need to access the robot computer. Rest the back end of the drawer on the support object.

<image: "600\_1350\_pull\_rail\_rings\_on\_drawer\_2 1.png">

  7. Unplug all of the cables from the robot computer.

  8. Loosen the four screws mounting the computer to the bracket. Use a T10 bit.

<image: "0026.png">

  9. Remove the computer from the bracket.

<image: "PC0059.png">

## Replacing the SSD disk

  1. Remove the two screws on the back of the DFI computer. Use a PH2 bit.

<image: "remove\_rear\_panel\_screws.png">

  2. Remove the rear panel.

<image: "remove\_rear\_panel.png">

  3. Unplug the two cables to the SSD disk

<image: "unplug\_ssd\_connectors.png">

  4. Remove the four screws mounting the SSD disk in the computer. Use a PH2 bit.

<image: "remove\_ssd\_screws.png">

  5. Remove the SSD disk.

<image: "remove\_ssd.png">

  6. Remove the four screws for the SSD disk frame. Use a PH2 bit.

<image: "remove\_ssd\_mount\_screws.png">

  7. Unplug the cable from the old SSD disk and plug it into the new one.

<image: "unplug\_ssd\_cable.png">

  8. Mount the frame to the new SSD disk. Tighten the screws to 0.4 Nm.

  9. Mount the SSD disk into the DFI computer. Tighten the screws to 0.4 Nm.

  10. Plug in the two SSD cables.

  11. Mount the rear panel to the DFI. Tighten the screws to 0.4 Nm.

## Reassembly

Reassemble the robot by following the relevant disassembly steps in reverse.

Restore your robot data by following the last section in the USB restore guide for your robot application.

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.0
 * 2024-04-09
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the SSD disk in DFI computers 1.0\_en.pdf