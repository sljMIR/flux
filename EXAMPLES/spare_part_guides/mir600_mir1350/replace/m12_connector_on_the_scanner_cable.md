# M12 connector on the scanner cable {% tag="replace_m12_connector_on_the_scanner_cable_mir600_1350" %}

Date: 2025-07-28

Document version: 1.0

Document number: 300133

Order number: 450714

Valid for: MiR600 and MiR1350

Valid for software version: All

Valid for hardware version: All

<image: "600_1350_M12_connector_alone.png">

# How to replace the M12 connector on the scanner cable on MiR600 and MiR1350

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

*   Safety shoes to protect from impact or puncture hazards.
    
*   Safety glasses and face shield to protect from flying debris or chemical agents.
    
*   Hard hat to protect from falling or flying objects.
    
*   Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.
    
*   Ear plugs or earmuffs to protect from high noise hazards.
    
*   Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

## Things you will need

*   A heat gun
    
*   A pair of wire cutters
    
*   A pair of scissors
    
*   A torque wrench ranging up to 11.6 Nm with the following exchangeable bits:
    
*   T45
        
*   T50

## Kit contents

*   3 x M12 connector
    
*   1 x shrink tubing piece

## Before replacing the M12 connectors

1.  Turn off the robot, and disconnect the battery in the left side compartment. To disconnect the battery, pull out the Battery lock pin, and pull the Battery lever downwards until the Battery lock pin is in the middle position.
    
    <image: "Disconnect.png">
    
2.  Unscrew the six M8 screws and four M10 screws in the top plate. Use a T45 bit for the M8 and a T50 bit for the M10 screws. Tighten all 10 screws to 11.6 Nm when reassembling the robot.
    
    <image: "600_1350_remove_top_plate_screws.png">
    
3.  Remove the top plate from the robot. It is recommended to have two persons lifting the top plate.
    
    <image: "600_1350_remove_top_plate.png">

## Replacing the M12 connector on the scanner cables

1.  Remove the cable that you want to replace the connector on.
    
    <image: "600_1350_remove_scanner_cable.png">
    
2.  Unscrew the M12 collar ring, and remove the M12 connector from the cable.
    
    <image: "600_1350_remove_M12_connector.png">
    
3.  Cut approximately 50 mm of heat shrink tubing, and place it on the cable. There should be approximately 10 mm of heat shrink tubing behind the new M12 connector, once it is attached to the cable.
    
    <image: "600_1350_add_heatshrink_tubing.png">
    
4.  Use a heat gun to crimp the heat shrink tubing so it fits snug around the cable.
    
    <image: "600_1350_crimp_heatshrink_tubing_cable.png">
    
5.  Attach the inner part of the new M12 connector to the cable.
    
    <image: "600_1350_add_new_M12_connector.png">
    
6.  Use a pair of wire cutters to cut off any exposed copper conductor on the wires.
    
    <image: "600_1350_cut_scanner_cable_wires.png">
    
7.  Bend the wires down into the four colored sockets on the inner part of the M12 connector. The wires should go approximately 3-5 mm over the edge of the sockets. Cut off any excess wire if necessary. The new M12 connector will establish a solder-free connection once it is attached to the cable.
    
    <image: "600_1350_bend_wires.png">
    
8.  Attach the outer part of the new M12 connector to the cable.
    
    <image: "600_1350_add_new_M12_connector_plug.png">
    
9.  Reattach the M12 collar ring to the new connector.
    
    <image: "600_1350_screw_on_M12_connector_collar.png">
    
10.  Reinsert the cable in the appropriate port on the scanner.
    
    <image: "600_1350_plug_scanner_cable_in_2.png">
    
11.  Repeat the process with the two remaining cables. Reassemble the robot following steps 1-3 under [Before replacing the M12 connectors](#Before) in reverse.

## Testing

1.  Open the robot interface and go to **Monitoring > Hardware health > Sensors**.
    
2.  Verify that the laser scanner is green and showing OK status.

## Troubleshooting

If the scanner is not showing OK status in **Hardware health**, power off the robot and disassemble the connector. Verify that the wires are mounted in the correct sockets, and that the connector is correctly assembled.

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the M12 connector on the scanner cable on MiR600 and MiR1350 1.0\_en.pdf