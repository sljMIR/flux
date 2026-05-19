# Front status light cable {% tag "replace_front_status_light_cable_mir600_1350" /%}

Date: 2025-07-28

Document version: 1.0

Document number: 300121

Order number: 450705

Valid for: MiR600 and MiR1350

Valid for software version: N/A

Valid for hardware version: All

<image: "kit_contents.png">

# How to replace the front status light cable on MiR600 and MiR1350

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

*   A torque wrench ranging from 5–11.6 Nm with the following exchangeable bits:
    
*   T30 bit
        
*   T45 bit
        
*   6 mm hex bit
        
*   A flat-head screwdriver
    
*   Cable cutters
    
*   Electrical tape

## Kit contents

*   1 × CAB-029
    
*   1 × CAB-030
    
*   Cable ties

## Before replacing the cable

1.  Demount the top module from the robot. For MiR top modules, you can find demounting instructions in the manual for your robot application.
    
2.  Remove the top cover of the robot by unscrewing the six M8×25 screws and four M10×25 (may already be removed if you used these to mount a top module). Use a T45 bit and 6 mm hex bit. When reassembling, tighten these screws to 11.6 Nm.
    
    <image: "top_cover_all_screws.png">
    
    <image: "top_cover_remove.png">
    
3.  Remove the front compartment cover by unscrewing the six M6×10 screws. Use a T30 bit. When reassembling, tighten these screws to 5 Nm.
    
    <image: "front_compartment_top_screws.png">
    
    <image: "front_copmartment_top_remove.png">
    
4.  Turn the two screws on the front compartment hatch 90˚, and pull out the electronics drawer.
    
    <image: "access_front_compartment_1.png"> <image: "access_front_compartment_2.png">

## Replacing the cables

1.  Disconnect the cable in the J1 connector of the proximity board in the front-right corner, and connect CAB-030 to the J1 connector instead.
    
    <image: "disconnect_j1_2.png">
    
    <image: "connect_new_j1_2.png">
    
2.  Lead the cable under the chassis beam.
    
    <image: "route_CAB-30_2.png">
    
3.  Connect CAB-029 to the other end of CAB-030.
    
    <image: "connect_CAB-29.png">
    
4.  Lead the cable under the cable tubes and along the biggest tube into the front compartment.
    
    <image: "route_CAB-29.png">
    
5.  Disconnect the cable from the status light LED, and connect CAB-029 instead.
    
    <image: "disconnect_status_light_cable.png">
    
    <image: "connect_new_status_light_cable.png">
    
6.  Apply cable ties in the three indicated locations to organize the new cable with other cables.
    
    <image: "Apply_status_light_cable_strips.png">
    
7.  Connect the battery and turn on the robot to check that the front status light lights up.
    
8.  After testing that the front status light lights up correctly, turn off the robot, disconnect the battery, and cut off the connectors on the old cable you disconnected. This avoids confusion and prevents the risk of reconnecting the faulty cable in the future
    
    Cover the cut ends with electrical tape.
    
    <image: "cut_J1_connector.png">
    
9.  Reassemble the robot by following the steps from [Before replacing the cable](#Before) in reverse.

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the front status light cable on MiR600 and MiR1350 1.0\_en.pdf