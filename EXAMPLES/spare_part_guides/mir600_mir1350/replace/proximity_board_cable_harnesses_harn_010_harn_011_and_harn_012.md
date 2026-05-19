# Proximity board cable harnesses (HARN-010, HARN-011, and HARN-012) {% tag "replace_proximity_board_cable_harnesses_harn_010_harn_011_and_harn_012_mir600_1350" /%}

Date: 2025-07-28

Document version: 1.0

Document number:

Order number: 450752, 450753, 450754

Valid for: MiR600 and MiR1350

Valid for software version: N/A

Valid for hardware version: All

<image: "proxy_harnesses.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

*   Safety shoes to protect from impact or puncture hazards.
    
*   Safety glasses and face shield to protect from flying debris or chemical agents.
    
*   Hard hat to protect from falling or flying objects.
    
*   Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.
    
*   Ear plugs or earmuffs to protect from high noise hazards.
    
*   Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

This guide explains how to replace the proximity sensor cable harnesses. The kit includes the following harnesses and cables:

*   CAB-030 is used in the front-right corner between the status light and J1.
    
*   CAB-038 is used in all four corners with the safety laser scanners, between the signal light connector and J2.
    
*   CAB-039 is used in the rear-left corner between the status light connector and J1.
    
*   CAB-040 is used in front-right corner between J3 and J4.
    
*   HARN-010 is used in the front-left and rear-right corners with the safety laser scanners.
    
*   HARN-011 is used in the rear-left corner with the control panel.
    
*   HARN-012 is used in front-right corner with the Ethernet port.

The proximity boards are connected in a single CAN bus line in ascending order. This means that if there is a connection issue to one of the boards, all of the following boards may be disconnected. For example, an issue in board 5, may result in board 5, 6 and 7 becoming disconnected. Replace the cable to board 5 first and check if this resolves all of the issues from board 5 and up.

You only need to replace the harness that is relevant for your issue. Save the other cables in case issues develop in the other corners:

*   If you have an issue with a single proximity board, the status lights, or the signal lights, replace the harness in that corner.
    
*   If several proximity boards are failing, replace the harnesses in the following order starting from the first corner with an issue: front-left, rear-left, rear-right, and front-right—see [Overview](#Overview) for a visual overview of the proximity board connection order. Check between each replacement if the issue is resolved.
    
*   If you have an issue with the front status light, see the guide How to replace the front status light cable on MiR600 and MiR1350.

## Overview

The following image describes the proximity board order and the location of the different harnesses.

<image: "proximity_harness_overview.png">

The following image and table describe how the sockets in each proximity board are mapped.

<image: "connector_overview.png">

If you at any time swap the proximity boards, you can see which order the proximity board is assigned to and change it using the dial on the top. The flat side of the dial indicates which order placement the board is assigned to.

<image: "read_dial.png">

## Things you will need

*   A torque wrench ranging from 0.5 to 11.6 Nm with the following exchangeable bits:
    
*   T30
        
*   T20
        
*   An adjustable wrench

## Kit contents

*   450752:
    
*   2 × front-left and rear-right corner cable harnesses (HARN-010)
        
*   4 × CAB-38 cables
        
*   450753:
    
*   1 × front-right corner cable harness (HARN-012)
        
*   1 × CAB-030 cable
        
*   2 × CAB-38 cables
        
*   1 × CAB-040 cable
        
*   450754:
    
*   1 × rear-left corner cable harness (HARN-011)
        
*   2 × CAB-038 cables
        
*   1 × CAB-039 cable

## Before replacing the proximity sensor harnesses

1.  Turn off the robot, and disconnect the battery in the left side compartment. To disconnect the battery, pull out the Battery lock pin, and pull the Battery lever downwards until the Battery lock pin is in the middle position.
    
    <image: "Disconnect_v2.png">
    
2.  Turn the two screws on the front compartment hatch 90˚, and pull out the electronics drawer.
    
    <image: "access_front_compartment_1.png"> <image: "access_front_compartment_2.png">
    
3.  Press the two buttons on the rear hatch, and pull open the hatch.
    
    <image: "access_rear_compartment_1.png"> <image: "access_rear_compartment_2.png">
    
4.  Disconnect the status light cable.
    
    <image: "access_rear_compartment_3.png">
    
5.  Turn the two hinges in the bottom corners to release the hatch, and remove the hatch from the robot.
    
    <image: "access_rear_compartment_4.png">

## Removing the side compartment hatch

Remove the side compartment hatch for the corner with the cable harness you want to replace.

1.  Press the two buttons on the side hatch and pull open the hatch.
    
    <image: "press_hatch_buttons.png"> <image: "open_hatch.png">
    
2.  Disconnect the status light cable.
    
    <image: "disconnect_light.png">
    
3.  Turn the two hinges in the bottom corners to release the hatch, and remove the hatch from the robot.
    
    <image: "turn_hatch_hinges.png">
    
    <image: "remove_side_hatch.png">

## Removing the corner covers

1.  Press the Emergency stop button on the corner cover you want to remove. After reassembling, remember to release the button again.
    
2.  Remove the four screws from the corner cover. Use a T30 screwdriver. When reattaching the corner covers, tighten the screws to 11.6 Nm.
    
    <image: "access_corner_shield_1.png">
    
3.  Disconnect the main proximity board cable harness connector within the side compartment end that is closest to the corner cover you are removing.
    
    <image: "disconnect_main_proxy_harness_connector.png">
    
4.  If you are removing the front-left corner, disconnect CAB-029 and CAB-030. These are the cables for the front status light.
    
    <image: "disconnect_cab_30_cab_29.png">
    
5.  Remove the corner cover. It may require some force to disconnect the shield from the corner bumper. Pull it downward firmly to remove it from the bumper.
    
    <image: "corner_remove 1.png">

## Replacing the front-left and rear-right corner harness (HARN-010)

1.  Unplug all the white cables connected to the proximity boards and the signal light boards. You can pull the proximity board off the corner cover if you need easier access.
    
    <image: "disconnect_cables_harn_10.png">
    
2.  Remove the old proximity sensor cable harness from the cable tie holders and discard it.
    
    <image: "remove_harn_10.png">
    
3.  Connect the J2, J3 and J4 connectors of the new harness to the two proximity boards.
    
*   Place the harness so the large connector is placed in the open end of the corner cover where the Emergency stop button cutout is.
        
*   For an overview of the socket mapping and the proximity sensor order, see [Overview](#Overview).
        
*   Each cable is labeled according to the socket it connects to on the proximity board or signal light socket.
        
4.  If you removed the proximity boards from the robot, remount them to the corner cover. Order them correctly. Use the dial on the top to see which number the board is assigned to. If you have swapped the boards, you can change the dial to swap which order the board is assigned to.
    
5.  Connect the signal light connectors in their respective signal light boards.
    
6.  Route the cables into the cable holders and ensure that the cables are placed neatly inside the edges of the corner cover so they do not get pinched when reassembling.
    
    <image: "cable_layout_harn_10.png">

## Replacing the rear-left corner harness (HARN-011)

1.  Unplug all the white cables connected to the proximity boards and the signal light boards. You can pull the proximity board off the corner cover if you need easier access.
    
    <image: "disconnect_cables_harn_11.png">
    
2.  Remove the four bolts in the rear status light connector. Use a T20 bit and wrench.
    
    <image: "remove_rear_status_light_connector.png">
    
3.  Remove the four bolts in the side status light connector. Use a T20 bit and wrench.
    
    <image: "remove_status_light_connector.png">
    
4.  Remove the old proximity sensor cable harness from the cable tie holders and discard it.
    
    <image: "remove_harn_11.png">
    
5.  Connect the J1, J2, J3 and J4 connectors of the new harness to the two proximity boards.
    
*   Place the harness so the large connector is placed in the open end of the corner cover where the Emergency stop button cutout is.
        
*   For an overview of the socket mapping and the proximity sensor order, see [Overview](#Overview).
        
*   Each cable is labeled according to the socket it connects to on the proximity board or signal light socket.
        
6.  Mount the status light connectors to the corner cover with four bolts and nuts in each. Tighten the bolts to 0.5 Nm.
    
    <image: "mount_status_light_connector.png"> <image: "mount_rear_status_light_connector.png">
    
7.  If you removed the proximity boards from the robot, remount them to the corner cover. Order them correctly. Use the dial on the top to see which number the board is assigned to. If you have swapped the boards, you can change the dial to swap which order the board is assigned to.
    
8.  Connect the signal light connectors in their respective signal light boards.
    
9.  Route the cables into the cable holders and ensure that the cables are placed neatly inside the edges of the corner cover so they do not get pinched when reassembling.
    
    <image: "cable_layout_harn_11.png">

## Replacing the front-right corner harness (HARN-012)

1.  Unplug all the white cables connected to the proximity boards and the signal light boards. You can pull the proximity board off the corner cover if you need easier access.
    
    <image: "disconnect_cables_harn_12.png">
    
2.  Remove the four bolts in the side status light connector. Use a T20 bit and wrench.
    
    <image: "remove_status_light_connector.png">
    
3.  Remove the old proximity sensor cable harness from the cable tie holders and discard it.
    
    <image: "remove_harn_12.png">
    
4.  Connect the J1, J2, J3 and J4 connectors of the new harness to the two proximity boards.
    
*   Place the harness so the large connector is placed in the open end of the corner cover where the Emergency stop button cutout is.
        
*   For an overview of the socket mapping and the proximity sensor order, see [Overview](#Overview).
        
*   Each cable is labeled according to the socket it connects to on the proximity board or signal light socket.
        
5.  Mount the status light connector to the corner cover with four bolts and nuts. Tighten the bolts to 0.5 Nm.
    
    <image: "mount_status_light_connector.png">
    
6.  If you removed the proximity boards from the robot, remount them to the corner cover. Order them correctly. Use the dial on the top to see which number the board is assigned to. If you have swapped the boards, you can change the dial to swap which order the board is assigned to.
    
7.  Connect the signal light connectors in their respective signal light boards.
    
8.  Route the cables into the cable holders and ensure that the cables are placed neatly inside the edges of the corner cover so they do not get pinched when reassembling.
    
    <image: "cable_layout_harn_12.png">

## Reassembling

Reassemble the robot by following [Removing the corner covers](#Removing) in the opposite order. When mounting the corner covers, make sure to place the large proximity board harness connector outside the corner cover to make it easy to connect to the robot after mounting.

After reassembling, release the Emergency stop buttons.

Reconnect the battery, and turn on the robot.

## Testing

Verify that the indicator lights are behaving correctly.

Under Monitoring > Hardware health > Powerboard > CAN Communication bus, check that all of the nodes have the status node is OK.

If the indicator lights are not working as expected, check that the cables are correctly connected to the proximity board. You can use the MiR600 or MiR1350 wiring diagram to verify that you have connected them in the correct order.

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the proximity board cable harnesses on MiR600 and MiR1350 1.0\_en.pdf