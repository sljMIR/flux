# Emergency stop button {% tag "replace_emergency_stop_button_mir600_1350" /%}

Date: 2025-07-28

Document version: 1.0

Document number:

Order number: 450665, 450667, 450668, and 450669

Valid for: MiR600 and MiR1350

Valid for software version: N/A

Valid for hardware version: All

<image: "e-stop_button_w_bracket.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

*   Safety shoes to protect from impact or puncture hazards.
    
*   Safety glasses and face shield to protect from flying debris or chemical agents.
    
*   Hard hat to protect from falling or flying objects.
    
*   Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.
    
*   Ear plugs or earmuffs to protect from high noise hazards.
    
*   Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

This guide describes how to replace an Emergency stop button on MiR600 and MiR1350.

If you ordered kit 450669, the kit includes all four Emergency stop buttons. Often, the buttons wear out around the same time. Choose to replace either the single malfunctioning button, or all four buttons to avoid disassembling the robot again later.

Kits 450665, 450667, and 450668 only include a single Emergency stop button that fits in a specific corner of the robot—see [Kit contents](#Kit).

## Things you will need

*   A lifting device
    
*   An 11.6 Nm torque wrench with the following exchangeable bits
    
*   T30
        
*   T45
        
*   T50

## Kit contents

**450669**:

*   2 × Emergency stop button (501053) with bracket (600867) for the front-left and rear-right corners
    
*   1 × Emergency stop button (501053) with bracket (600866) for the rear-left corner
    
*   1 × Emergency stop button (501054) with bracket (600866) for the front-right corner

**450665**:

*   1 × Emergency stop button (501053) with bracket (600867) for the front-left or rear-right corner

**450667**:

*   1 × Emergency stop button (501053) with bracket (600866) for the rear-left corner

**450668**:

*   1 × Emergency stop button (501054) with bracket (600866) for the front-right corner

<image: "e-stop_overview.png">

## Before replacing an Emergency stop button

1.  Turn off the robot, and disconnect the battery in the left side compartment. To disconnect the battery, pull out the Battery lock pin, and pull the Battery lever downwards until the Battery lock pin is in the middle position.
    
    <image: "Disconnect_v2.png">
    
2.  Unscrew the six M8 screws and four M10 screws in the top plate. Use a T45 bit for the M8 and a T50 bit for the M10 screws. Tighten all 10 screws to 11.6 Nm when reassembling the robot.
    
    <image: "top_cover_all_screws.png"> <image: "top_cover_remove_screws_no_covers.png">
    
3.  Remove the top plate from the robot. Use a crane or be at least two people to lift it.
    
    <image: "top_cover_remove.png"> <image: "top_cover_remove_cover_no_covers.png">
    
4.  Remove the two hatches next to the corner with the Emergency stop button you want to replace.
    
    **For the side hatch:**
    
1.  Press the two buttons on the side hatch, and pull open the hatch.
        
        <image: "press_hatch_buttons.png"> <image: "open_hatch.png">
        
2.  Turn the two hinges in the bottom corners to release the hatch, and remove the hatch from the robot.
        
        <image: "turn_hatch_hinges.png">

    **For the front hatch:**
    
    Turn the two screws on the front compartment hatch 90˚, and pull out the electronics drawer.
    
    <image: "access_front_compartment_1.png"> <image: "access_front_compartment_2.png">
    
    **For the rear hatch:**
    
1.  Press the two buttons on the rear hatch, and pull open the hatch.
        
        <image: "access_rear_compartment_1.png"> <image: "access_rear_compartment_2.png">
        
2.  Turn the two hinges in the bottom corners to release the hatch, and remove the hatch from the robot.
        
        <image: "access_rear_compartment_4.png">
        
5.  Remove the corner cover:
    
1.  Press the Emergency stop button on the corner cover you are going to remove. After reassembling, remember to release the button again.
        
2.  Remove the four screws from the corner cover. Use a T30 bit. When reattaching the corner covers, tighten the screws to 11.6 Nm.
        
        <image: "access_corner_shield_1.png">
        
3.  Disconnect the main proximity board cable harness connector within the side compartment end that is closet to the corner cover you are removing.
        
        <image: "disconnect_main_prox_harn_conn_no_top.png">
        
4.  Remove the corner cover. It may require some force to disconnect the shield from the corner bumper. Pull it downward firmly to remove it from the bumper.
        
        <image: "corner_shield_remove_no_top.png">

## Replacing the Emergency stop button

1.  Disconnect the cable for the Emergency stop button. Note that only the front-right corner Emergency stop button has two connectors. The remaining Emergency stop buttons have only a single connector.
    
    <image: "disconnect_connectors.png">
    
2.  Remove the three screws from the Emergency stop button. Use a T30 bit.
    
    <image: "remove_screws.png">
    
3.  Remove the Emergency stop button and replace it with a new one.
    
    <image: "replace_button_swap.png">
    
4.  Use the same three screws to mount the new button to the robot. Use the panhead screw on the bottom and the two countersunk screws at the top. Tighten all screws to 11.6 Nm.
    
    <image: "mount screws.png">
    
5.  Connect the Emergency stop cables to the harness connectors as labeled.
    
    For the buttons in the front-left and rear-right corner, position the connectors for Harn-001 on the inner side.
    
    For the buttons in the rear-left and front-right corner, position the connectors for Harn-003 on the inner side.
    
    <image: "connect_connectors.png">
    
6.  Reassemble the robot by following the steps in [Before replacing an Emergency stop button](#Before) in reverse.

## Testing

Turn on the robot and check that all Emergency stop buttons trigger an Emergency stop and can be released afterward.

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace an Emergency stop button on MiR600 and MiR1350 1.0\_en.pdf