# Motor controller carrier board {% tag="replace_motor_controller_carrier_board_mir600_1350" %}

<image: "Carrier-board.png">

Date: 2025-07-28

Document version: 1.0

Document number: 300097

Order number: 450549

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

This guide describes how to replace the motor controller carrier board on MiR600 and MiR1350. Before replacing the board, check that all of the cables are securely connected to the board. It is possible that a loose connection to the power board may cause symptoms that indicate you should replace the board.

## Things you will need

*   A motor controller carrier board for MiR600 and MiR1350 from MiR
    
*   Torque wrenches for the following:
    
*   1.2 Nm with a T10 head
        
*   5 Nm with a T25 head

## Before replacing the motor controller carrier board

Turn off the robot, and disconnect the battery in the left side compartment. To disconnect the battery, pull out the Battery lock pin, and pull the Battery lever downwards until the Battery lock pin is in the middle position.

<image: "Disconnect_v2.png">

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

Remove the seven screws on the rear cover using a T25 screwdriver. When reassembling, tighten these screws to 5 Nm.

<image: "access_rear_compartment_6.png">

Loosen the top three screws while holding the bottom of the cover. When reassembling, tighten these screws to 5 Nm.

<image: "access_rear_compartment_7.png">

Remove the cover by sliding it downwards and out to access the rear maintenance compartment.

<image: "access_rear_compartment_8.png">

**Slide the panel with the manual brake release switch and MiR remote interface toward you and unhook it from the robot.** This makes it easier to access the carrier board. If you cannot slide the panel off, loosen the screws on both ends. Make sure to not pull on any of the attached cables or wires.

<image: "remove_switches.png">

## Replacing the motor controller carrier board

**Take several pictures of the motor controller carrier board so you can see where each cable is connected.** Although this guide provides the expected overview of where each cable is connected, it is a good idea to have an image of the original setup as a cross reference in case a cable is missing a label.

**Disconnect all of the connected cables.** Make sure to pull the connectors out straight to avoid bending any pins.

**Unscrew the four screws in the corners of the motor controller carrier board using a T10 screwdriver.**

<image: "unscrew.png">

**Remove the board and replace it with the new board.** Make sure to orient the board correctly, and check that the holes in the corners align.

<image: "remove.png">

**Screw in the four M3×10 screws and tighten them to 1.2 Nm.** You can reuse the same screws that were used to mount the carrier board before.

<image: "mount.png">

**Reconnect all of the cables to the carrier board. Each cable is labeled with which connector on the carrier board it must be plugged into.**

<image: "connectors.png">

**Reassemble the robot by following the steps in** [Before replacing the motor controller carrier board](#Before) **in reverse.** Tighten the ten M3 x 10 screws in the rear panel to 5 Nm, and check that the border around the rear panel fits securely around the rear maintenance compartment. It is important that the rear panel closes the compartment completely to protect the contents from dust.

## Testing

Once the robot is reassembled, turn on the robot.

Check under Monitoring > Hardware health that all components have the OK status. If the CAN communication bus displays a warning, wait 15–20 minutes for the robot to connect to the new carrier board.

<image: "missing_CAN_connection.png">

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the motor controller carrier board on MiR600 and MiR1350 1.0\_en.pdf