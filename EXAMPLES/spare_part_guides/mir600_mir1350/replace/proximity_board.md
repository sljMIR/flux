# Proximity board {% tag="replace_proximity_board_mir600_1350" %}

<image: "proximity_sensor.png">

Date: 2025-07-28

Document version: 1.0

Document number: 300088

Order number: 450614 and 450317

Valid for: MiR600 and MiR1350

Valid for software version: N/A

Valid for hardware version: All

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

*   Safety shoes to protect from impact or puncture hazards.
    
*   Safety glasses and face shield to protect from flying debris or chemical agents.
    
*   Hard hat to protect from falling or flying objects.
    
*   Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.
    
*   Ear plugs or earmuffs to protect from high noise hazards.
    
*   Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

The proximity boards are part of the CAN communication bus that connects to the power board. The indicator lights are also part of the communication bus, meaning that if a proximity sensor is faulty, you can identify that there is an issue because the connected indicator lights will be failing too.

## Determining which proximity board to replace

To determine which proximity sensor needs to be replaced on your robot, sign in to the robot interface, and go to Monitoring > Hardware health > Power board > CAN communication bus.

<image: "HW_health_powerboard_CAN_bus.png">

The nodes 10-17 represent each of the proximity boards. Each proximity board is numbered 0-7, which reflects the second digit in the ID number in the interface.

The proximity boards are connected in the same order as their node ID number. If one proximity board fails, all the following nodes will also fail. Meaning that although multiple nodes may be disconnected, it is often because the first of the disconnected nodes has a faulty connection. Once this is fixed, all following nodes are also reconnected.

<image: "proxies_mir600_1350.png">

### Proximity board versions

Due to supply issues, the proximity board has been revised. The revised version is only compatible with the positions in the robot where the proximity boards are not connected to a robot status light LED strip.

Each proximity module has a sticker with the item number on it:

*   Old proximity boards have item number 500801 (corresponds to order number 450317).
    
*   Revised proximity boards have item number 504707 and a yellow sticker on them (corresponds to order number 450614). These can only be used in the positions for boards 10, 11, 14, and 15.

**If you are replacing board 10, 11, 14, or 15**, the proximity board is not connected to an LED strip, and you can replace that proximity board directly.

**If you are replacing board 12, 13, 16, or 17**, check if the revised proximity boards have already been installed in the other positions. Robots with the following serial numbers (see you robot's identification label) have the revised proximity boards installed: 

*   For MiR600:
    
*   204903004
        
*   204903008
        
*   204903010 and higher
        
*   For MiR1350:
    
*   205003024
        
*   205003028
        
*   205003029
        
*   205003030
        
*   205003039 and higher

Apply the following instructions depending on whether the revised versions of the proximity boards are used in your robot: 

*   If the revised proximity boards are not already installed in your robot, remove the faulty proximity sensor, and replace it with an old proximity board (number 10, 11, 14, or 15). Install the new proximity sensor in the position where proximity board 10, 11, 14, or 15 was installed before. The following image illustrates that to replace proximity board 13, you first remove board 13, replace it with board 14, and install the new board as board 14.
    
    <image: "replace_proxies_mir600_1350.png">
    
*   If the proximity boards have already been replaced with the revised version, contact MiR Technical Support for assistance.

## Things you will need

*   A proximity board from MiR
    
*   A T30 screwdriver
    
*   A flat-head screwdriver

## Before replacing the proximity board

Turn off the robot, and disconnect the battery in the left side compartment. To disconnect the battery, pull out the Battery lock pin, and pull the Battery lever downwards until the Battery lock pin is in the middle position.

<image: "Disconnect_v2.png">

**Determine which two maintenance hatches are next to the corner cover that the proximity board you want to replace is mounted to.** You will need to remove these two hatches to remove the corner cover to access the proximity board. The following sections describe how to remove each hatch type. Only remove the two hatches on either side of the corner cover you need to remove.

To determine which proximity sensor needs to be replaced, see [Determining which proximity board to replace](#Determin).

## Removing the side compartment hatch

1.  Press the two buttons on the side hatch.
    
    <image: "press_hatch_buttons.png">
    
2.  Pull open the hatch.
    
    <image: "open_hatch.png">
    
3.  Disconnect the status light cable.
    
    <image: "disconnect_light.png">
    
4.  Turn the two hinges in the bottom corners to release the hatch.
    
    <image: "turn_hatch_hinges.png">
    
5.  Remove the hatch from the robot.
    
    <image: "remove_side_hatch.png">

Turn the two screws on the front compartment hatch 90˚, and pull out the electronics drawer.

<image: "access_front_compartment_1.png"> <image: "access_front_compartment_2.png">

## Accessing the rear compartment

1.  Press the two buttons on the rear hatch.
    
2.  Pull open the hatch.

You can now access the Manual brake release switch and MiR Controller interface.

To access the motor controller carrier board and dynamic brake contactors, you must remove the rear compartment cover.

To remove the cover, follow these steps:

1.  Disconnect the status light cable.
    
2.  Turn the two hinges in the bottom corners to release the hatch, and remove the hatch from the robot.

3.  Remove the seven screws on the rear cover.
    
4.  Loosen the top three screws while holding the bottom of the cover.
    
5.  Remove the cover by sliding it downwards and out to access the rear maintenance compartment.

Remove the corner cover:

1.  Hardware version 2.0 only
    
    Unscrew the six M8 screws and four M10 screws in the top plate. Use a T45 bit for the M8 and a T50 bit for the M10 screws. Tighten all 10 screws to 11.6 Nm when reassembling the robot.  
    
    <image: "top_cover_all_screws.png">
    
    Remove the top plate from the robot. It is recommended to have two persons lifting the top plate.  
    
    <image: "top_cover_remove.png">
    
2.  Press the Emergency stop button on the corner cover you are going to remove. After reassembling, remember to release the button again.
    
3.  Remove the four screws from the corner cover. Use a T30 bit. When reattaching the corner covers, tighten the screws to 11.6 Nm.
    
    <image: "access_corner_shield_1.png">
    
4.  Disconnect the main proximity board cable harness connector within the side compartment end that is closest to the corner cover you are removing.
    
    <image: "disconnect_main_proxy_harness_connector.png">
    
5.  Remove the corner cover. It may require some force to disconnect the cover from the corner bumper. Pull it downward firmly to remove it from the bumper.
    
    <image: "corner_remove 1.png">

## Replacing the proximity board

**Mark which cables in the proximity board connect to which sockets, or take a picture to make sure you plug in the cables correctly when reassembling the robot.**

<image: "replace_proximity-sensors_connectors.png">

**Unplug all the cables connected to the proximity board, and remove the board from the corner cover.**

**Use a flat-head screwdriver to adjust the ID knob on the new proximity board to the same number as the old board.** The knob assigns the CAN node ID number and must be set to the same number as the old board. The following image shows the proximity board knobs adjusted for board numbers 10 and 11.

<image: "replace_proximity-sensors_dial.png">

**Plug the cables back into the proximity board, and reattach the board to the corner cover.**

**Reassemble the robot by following the disassembly steps in the opposite order.**

**Reconnect the battery, turn on the robot, and verify that the indicator lights are behaving correctly.** If the indicator lights are not working as expected, check that the cables are correctly connected to the proximity board. You can use the MiR600 or MiR1350 wiring diagram to verify that you have connected them in the correct order.

After reassembling, make sure to release the Emergency stop buttons.

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace a proximity board on MiR600 and MiR1350 1.0\_en.pdf