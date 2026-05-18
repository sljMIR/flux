# Safety laser scanner {% tag="replace_safety_laser_scanner_mir600_1350" %}

Date: 2025-07-28

Document version: 1.0

Document number:

Order number: 450860

Valid for: MiR600 and MiR1350

Valid for software version: N/A

Valid for hardware version: 2.2 and higher

<image: "600_1350_hw_2.2_bracket_assem_front.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

*   Safety shoes to protect from impact or puncture hazards.
    
*   Safety glasses and face shield to protect from flying debris or chemical agents.
    
*   Hard hat to protect from falling or flying objects.
    
*   Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.
    
*   Ear plugs or earmuffs to protect from high noise hazards.
    
*   Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

Manipulating the safety laser scanner bracket may compromise the safety laser scanner performance and the safety features of the robot.

*   Do not modify or make any adjustments to the safety laser scanner bracket.
    
*   Do not remove the safety laser scanner from the safety laser scanner bracket.

## Things you will need

*   A slim torque wrench ranging up to 11.6 Nm with the following exchangeable bits:
    
*   T30
        
*   T45
        
*   T50
        
*   A bit extender to reach the top right screw on the safety laser scanner bracket

## Kit contents

1 × pre-assembled and pre-calibrated safety laser scanner assembly consisting of a SICK microScan3 safety laser scanner and a bracket

4 × T30 mounting screws with pre-applied LOCKTITE

## Disconnect the battery

1.  Press the two buttons on the side hatch, and pull open the hatch.
    
    <image: "press_hatch_buttons.png"> <image: "open_hatch.png">
    
2.  Turn off the robot, and disconnect the battery in the left side compartment. To disconnect the battery, pull out the Battery lock pin, and pull the Battery lever downwards until the Battery lock pin is in the middle position.
    
    <image: "Disconnect_v2.png">

## Before replacing the safety laser scanner bracket

Remove the corner cover:

1.  Remove the top plate. Unscrew the six M8 screws and four M10 screws in the top plate. Use a T45 bit for the M8 and a T50 bit for the M10 screws. Tighten all 10 screws to 11.6 Nm when reassembling the robot.  
    
    <image: "top_cover_all_screws.png">
    
2.  Remove the top plate from the robot. We recommend two persons lift the top plate.  
    
    <image: "top_cover_remove.png">
    
3.  Press the Emergency stop button on the corner cover you are going to remove. After reassembling, remember to release the button again.
    
4.  Remove the four screws from the corner cover. Use a T30 bit. When reattaching the corner covers, tighten the screws to 11.6 Nm.
    
    <image: "corn_rear_left_rem_screws_no_top.png">
    
5.  Disconnect the main proximity board cable harness connector within the side compartment end that is closest to the corner cover you are removing.
    
    <image: "disconnect_main_prox_harn_conn_no_top.png">
    
6.  Remove the corner cover. It may require some force to disconnect the cover from the corner bumper.
    
    <image: "corner_shield_remove_no_top.png">

## Replacing the safety laser scanner bracket

1.  Unplug the three cables from the safety laser scanner.
    
    <image: "600_1350_hw_2.2_dc_scanner.png">
    
2.  Unscrew the two top mounting screws from the safety laser scanner bracket. Use a T30 bit. Note that both the two top and two bottom screws have been secured with LOCKTITE from production, and may require extra torque to loosen.
    
    <image: "600_1350_hw_2.2_remove_b_screws_top.png">
    
3.  Unscrew the two bottom mounting screws from the safety laser scanner bracket. Use a T30 bit.
    
    <image: "600_1350_hw_2.2_remove_b_screws_bot.png">
    
4.  Remove the entire safety laser scanner assembly from the robot, and replace it with the new safety laser scanner assembly.  

    Use the four supplied T30 screws with pre-applied LOCKTITE when mounting the new safety laser scanner assembly. Tighten the screws to 11.6 Nm.
    
    <image: "600_1350_hw_2.2_remove_scanner.png">
    
5.  Reconnect the cables to the new safety laser scanner, and reassemble the robot by following the steps in [Before replacing the safety laser scanner bracket](#Before) in reverse.

## Testing

Test the new safety laser scanner by completing the following steps:

1.  Clean the safety laser scanner optics using a clean microfiber cloth to remove any potential smudges from the replacement procedure.
    
2.  Turn on the robot and sign in to the robot interface.
    
3.  Check if the robot reports any errors regarding the safety laser scanners. If it does, the scanner cables may have been connected incorrectly.
    
4.  Go to Monitoring > Safety system and check that the robot is accurately displaying the obstacles around it in the laser scanner data visualization. If it does not, inspect the safety laser scanner optics for contamination or damages.

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the safety laser scanner on MiR600 and MiR1350 1.0\_en.pdf