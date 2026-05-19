# Safety laser scanner Ethernet cables {% tag "replace_safety_laser_scanner_ethernet_cables_mir600_1350" /%}

Date: 2025-07-28

Document version: 1.0

Document number:

Order number: 450736 or 450738

Valid for: MiR600 and MiR1350

Valid for software version: N/A

Valid for hardware version: All

<image: "scanner_ethernet_cables.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

*   Safety shoes to protect from impact or puncture hazards.
    
*   Safety glasses and face shield to protect from flying debris or chemical agents.
    
*   Hard hat to protect from falling or flying objects.
    
*   Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.
    
*   Ear plugs or earmuffs to protect from high noise hazards.
    
*   Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

The safety laser scanner Ethernet cables enable data communication between the safety laser scanners and the safety PLC. The rear laser scanner (1) is connected to the safety PLC via the front laser scanner (2). This means if both laser scanners are disconnected, it may only be the cable to the front laser scanner that needs to be replaced.

<image: "scanner_cable_overview.png">

## Things you will need

*   The front or rear safety laser scanner cable from MiR.
    
*   A torque wrench ranging from 5 to 11.6 Nm with the following exchangeable bits
    
*   T30
        
*   T45
        
*   T50

## Kit contents

Kit 450736:

*   1 × front safety laser scanner Ethernet cable

Kit 450738:

*   1 × rear safety laser scanner Ethernet cable

## Handling the safety laser scanner connectors

When handling the safety laser scanner M12 connectors, grip the connector in the center area and only rotate the section closest to the safety laser scanner socket to lock and unlock the connector.

Do not rotate the section between the gripping area and the connector nut. This will loosen the connection to the cable.

<image: "connector_handling.png">

## Before replacing a laser scanner Ethernet cable

1.  Turn off the robot, and disconnect the battery in the left side compartment. To disconnect the battery, pull out the Battery lock pin, and pull the Battery lever downwards until the Battery lock pin is in the middle position.
    
    <image: "Disconnect_v2.png">
    
2.  Unscrew the six M8 screws and four M10 screws in the top plate. Use a T45 bit for the M8 and a T50 bit for the M10 screws. Tighten all 10 screws to 11.6 Nm when reassembling the robot.
    
    <image: "top_cover_all_screws.png"> <image: "top_cover_remove_screws_no_covers.png">
    
3.  Remove the top plate from the robot. Use a crane or be at least two people to lift it.
    
    <image: "top_cover_remove.png"> <image: "top_cover_remove_cover_no_covers.png">

To replace the rear laser scanner cable, see [Replacing the rear laser scanner Ethernet cable](#Replacin).

To replace the front laser scanner cable, see [Replacing the front laser scanner Ethernet cable](#Replacin2).

## Replacing the rear laser scanner Ethernet cable

The rear laser scanner cable connects to the first port in the rear laser scanner and the second port in the front laser scanner. Do not attempt to remove the old cable from the robot.

1.  Disconnect the Ethernet cable from the rear safety laser scanner. Unlock the connector by turning the part closest to the laser scanner socket—see [Handling the safety laser scanner connectors](#Handling).
    
    <image: "remove_rear_scanner_ethernet_cable.png">
    
2.  Disconnect the second Ethernet cable from the front safety laser scanner. Do not attempt to remove the cable from the robot.
    
    <image: "remove_front_scanner_ethernet_cable_2.png">
    
3.  Connect the new Ethernet cable to the first port in the rear laser scanner.
    
4.  Route the cable along the cable tubes to the front laser scanner and connect it to the second port.
    
    <image: "rear_scanner_ethernet_cable_route.png">
    
5.  Use cable ties to fix the Ethernet cable to the tube.

## Replacing the front laser scanner Ethernet cable

The front laser scanner cable connects to the first port in the front laser scanner and the Ethernet port in the safety PLC. Do not attempt to remove the old cable from the robot.

1.  Remove the front compartment cover by unscrewing the six M6×10 screws. Use a T30 bit. When reassembling, tighten these screws to 5 Nm.
    
    <image: "front_compartment_top_screws.png">
    
    <image: "front_copmartment_top_remove.png">
    
2.  Turn the two screws on the front compartment hatch 90˚, and pull out the electronics drawer.
    
    <image: "access_front_compartment_1.png"> <image: "access_front_compartment_2.png">
    
3.  Disconnect the Ethernet cable from the safety PLC.
    
    <image: "remove_plc_ethernet_cable.png">
    
4.  Disconnect the first Ethernet cable from the front safety laser scanner. Unlock the connector by turning the part closest to the laser scanner socket—see [Handling the safety laser scanner connectors](#Handling). Do not attempt to remove the cable from the robot.
    
    <image: "remove_front_scanner_ethernet_cable_1.png">
    
5.  Connect the new Ethernet cable to the first port in the front laser scanner.
    
6.  Route the cable along the cable tubes to the safety PLC and connect it to the top Ethernet port.
    
    <image: "front_ethernet_scanner_cable_route.png">
    
7.  Use cable ties to fix the Ethernet cable to the tube.

## Reassembling

If you replaced the front laser scanner, mount the front compartment cover to the robot. Make sure the new cable is not pinched under the cover.

Reassemble the robot by following the steps in [Before replacing a laser scanner Ethernet cable](#Before) in reverse.

## Testing

Turn on the robot, and verify the robot does not report any scanner connection errors under **Monitoring > Hardware health.**

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_(Undefined variable: how\_to/replace.replace\_safety\_laser\_scanner\_Eternet\_cables\_MiR600\_MiR1350) 1.0\_en.pdf