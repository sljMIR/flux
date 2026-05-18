# Switch {% tag="replace_switch_mir600_1350" %}

<image: "Router 2.0_for card.png">

Date: 2025-07-28

Document version: 1.0

Document number: 300103

Order number: 450554

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

This guide describes how to replace the switch on MiR600 and MiR1350. You may need to replace the switch if the robot is unable to connect to:

*   The robot computer
    
*   The Ethernet service port in the front-right corner of the robot
    
*   The top Ethernet interface
    
*   The power board

## Things you will need

*   A 2.6 Nm torque wrench with a 7 mm hex socket
    
*   A flat-head screwdriver

## Before replacing the switch

Turn off the robot, and disconnect the battery in the left side compartment. To disconnect the battery, pull out the Battery lock pin, and pull the Battery lever downwards until the Battery lock pin is in the middle position.

<image: "Disconnect_v2.png">

Turn the two screws on the front compartment hatch 90˚, and pull out the electronics drawer.

<image: "access_front_compartment_1.png"> <image: "access_front_compartment_2.png">

## Replacing the switch

**Disconnect the cables from the switch.**

<image: "PC0067.png">

**Loosen the four nuts around the router bracket.** Use a 7 mm hex socket. You do not have to remove the nuts completely from the spokes.

<image: "unscrew_bolts.png">

**Remove the switch and bracket from the robot.**

<image: "remove.png">

**Replace the old switch in the bracket with the new switch.**

<image: "swap.png">

**Slide the switch and bracket back into place.**

<image: "insert.png">

**Tighten the nuts to 2.5 Nm.** Use a torque wrench with a 7 mm hex socket.

<image: "screw_bolts.png">

**Reconnect all of the cables.** The cables are labeled according to which ports you must connect them to.

<image: "PC0068.png">

## Testing

Turn on the robot, and under Monitoring > Hardware health, verify that the robot can connect to all of the components that the switch connects to:

*   The robot computer
    
*   The Ethernet service port in the front-right corner of the robot
    
*   The top Ethernet interface
    
*   The power board

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the switch in MiR600 and MiR1350 1.0\_en.pdf