# Charging pads {% tag "replace_charging_pads_mir600_1350" /%}

<image: "charging_pad.png">

Date: 2025-07-28

Document version: 1.0

Document number: 300099

Order number: 450561

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

MiR600 and MiR1350 have four charging pads that are located underneath the robot. They are used to connect the robot to MiR Charge 48V for automatic charging. The four charging pads are collected into a single charging module that can be replaced as a whole.

This guide describes how to replace the charging module. You should only replace the charging module if the charging pads are damaged and cannot enable a connection to the charging station.

## Things you will need

*   Torque wrenches for the following: 
    
*   2.6 Nm with a T25 and a T30 bit
        
*   5 Nm with a T30 bit
        
*   11.6 Nm with a T45 bit
        
*   A ratchet with a T30 bit
    
*   A screwdriver with the following bits:
    
*   T25
        
*   T30
        
*   T45
        
*   A large flat-head screwdriver
    
*   A lifting device
    
*   4 M12 eyebolts with counternuts and washers
    
*   A secure structure for the robot where it is elevated from the ground
    
*   A wedge

## Before replacing the charging pads

1.  Turn off the robot, and disconnect the battery in the left side compartment. To disconnect the battery, pull out the Battery lock pin, and pull the Battery lever downwards until the Battery lock pin is in the middle position.
    
    <image: "Disconnect.png">
    
2.  Lift the robot onto a secure structure where you can safely access the area under the front compartment. To ensure the robot is not damaged during the lifting, see the manual for your robot application for lifting specifications.

    If you are under the robot while it is lifted, you risk serious injury if the robot falls or slips.
    
*   Stand clear of the robot while it is raised in the air.
        
*   Only approach the robot when it is stationed on a secure structure.
        
*   See the section about lifting the robot in the manual for your robot application. You can find this document on [MiR Support Portal](https://supportportal.mobile-industrial-robots.com).

    <image: "mir600_cooling_element0004.png">
    
3.  Remove the top cover of the robot by unscrewing the six M8×25 screws. Use a screwdriver with a T45 bit. When reassembling, tighten these screws to 11.6 Nm.
    
    <image: "raised_robot_remove_top_screws.png"> <image: "raised_robot_remove_top.png">
    
4.  Remove the front compartment cover by unscrewing the six M6×10 screws. Use a screwdriver with a T30 bit. When reassembling, tighten these screws to 5 Nm.
    
    <image: "front_compartment_top_screws.png"> <image: "front_copmartment_top_remove.png">
    
5.  Turn the two screws on the front compartment hatch 90˚. Use a flat-head screwdriver.
    
    <image: "raised_robot0033.png">
    
6.  Pull out the electronics drawer.
    
    <image: "raised_robot0034.png">
    
7.  Verify that the electronics drawer is pulled out enough to access the charging pad module, and keep the electronics drawer open by wedging in a wooden block or similar.
    
    <image: "charging_pads0035.png">

## Replacing the charging pads

1.  Under the front compartment, check if the charging module is mounted to the black panel. If it is, remove the two front screws. If not, leave the screws in the charging module.
    
*   If the charging module is mounted to the black panel in front, remove the two front screws.
        
        <image: "extra_step.png">
        
*   If the black panel does not cover the front of the charging module, leave the screws in.
        
        <image: "extra_step_2.png">
        
2.  Remove the caps from the charging pad connectors.
    
    <image: "charging_pads0037.png">
    
3.  Disconnect the charging cables by unscrewing the four screws. Use a screwdriver with a T25 bit.
    
    <image: "charging_pads0038.png">
    
4.  Remove the two rear screws. Use a ratchet with a T30 bit.
    
    <image: "charging_pads0039.png">
    
5.  Loosen the front two screws to slowly lower the charging pads from the robot. Use a ratchet with a T30 bit.
    
    <image: "charging_pads0039_2.png">
    
6.  Hold onto the charging pads beneath the robot, and remove the last two screws completely. 
    
    <image: "charging_pads0040.png">
    
7.  Replace the charging pad module with the new module, and mount it to the robot using the same four M6×25 screws. Tighten the screws to 2.6 Nm. Use a torque wrench with a T30 bit.
    
8.  Connect the charging cables to the new pads and fix the connector covers over them. Tighten the screws to 2.6 Nm, and connect them as follows from the left side of the robot to the right: 
    
1.  The red cable labeled +. Position the connector so the cable is directly facing toward the front of the robot.
        
2.  The yellow wire labeled CAN High. Position the connector so it is facing toward the cable tie keeping the cable together.
        
3.  The yellow wire labeled CAN Low. Position the connector so it is facing toward the cable tie keeping the cable together.
        
4.  The black cable labeled -. Position the connector so it is facing toward the cable tie keeping the cable together.
        
        <image: "charging_pads0036_letters.png">
        
9.  Reassemble the robot by following the steps in [Before replacing the charging pads](#Before) in reverse. Make sure to tighten the screws to the appropriate tightening torque.

## Testing

Send the robot to dock to a charging station and verify that it begins charging correctly. If the robot does not charge, verify that you have connected the charging cables correctly to the charging pads as described in [Step 8](#Connect).

If the charging module seems to be correctly installed but the robot still does not charge when docked to the charger, use the guide _Troubleshoot docking issues_ to ensure that the robot is docking to the charging station correctly. You can find this document on [MiR Support Portal](https://supportportal.mobile-industrial-robots.com).

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the charging pads on MiR600 and MiR1350 1.0\_en.pdf