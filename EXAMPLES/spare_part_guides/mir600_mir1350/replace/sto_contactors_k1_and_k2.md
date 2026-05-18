# STO contactors (K1 and K2) {% tag="replace_sto_contactors_k1_and_k2_mir600_1350" %}

Date: 2025-07-28

Document version: 1.0

Document number:

Order number: 450727

Valid for: MiR250, MiR600, and MiR1350

Valid for software version: N/A

Valid for hardware version: All

<image: "contactors_transparent_isolated.png">

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

*   Safety shoes to protect from impact or puncture hazards.
    
*   Safety glasses and face shield to protect from flying debris or chemical agents.
    
*   Hard hat to protect from falling or flying objects.
    
*   Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.
    
*   Ear plugs or earmuffs to protect from high noise hazards.
    
*   Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

For instructions to replace the contactors on MiR250, see [MiR250](#_bm).

For instructions to replace the contactors on MiR600 and MiR1350, see [MiR600 and MiR1350](#and2).

## MiR250

### Things you will need

*   A screwdriver or wrench with the following exchangeable bits:
    
*   T45
        
*   T30
        
*   T10
        
*   A 1.7–5 Nm torque wrench with the following exchangeable bits:
    
*   4 mm hex
        
*   PH2 (hardware version 1.0 only)
        
*   PZ2 (hardware version 2.0 and higher only)
        
*   An 8 mm hex wrench

### Before replacing the contactors

1.  Push the two buttons on the rear cover, and remove the cover from the robot.
    
    <image: "rear_press_buttons.png"> <image: "rear_remove.png">
    
2.  Disconnect the battery.
    
*   Hardware 1.0 only
        
        Turn the Battery lock pin clockwise, and pull the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down. Turn the Battery lock pin counterclockwise to lock the Battery lever.
        
        <image: "unlock_battery_connected.png"> <image: "disconnect_battery.png">
        
*   Hardware 2.0 and higher only
        
        Pull the Battery lock pin out while pulling the Battery lever down. Confirm that a gap opens between the battery and the battery connector as the handle is pulled down.
        
        <image: "250_mkII_disconnect_battery.png">
        
3.  Remove the top plate: 
    
1.  Unscrew the antennas from the top compartment covers and remove them.
        
        <image: "antenna_unscrew.png">
        
2.  Unscrew the two nuts from the antenna connectors. Use an 8 mm wrench. Push the antenna connectors through the covers.
        
        <image: "antenna_bolt_unscrew.png">
        
3.  Remove the top compartment covers from the top plate by unscrewing the eight screws. Use a T10 bit. Make sure the antenna cables are not connected to the compartment covers.
        
        <image: "top_unscrew.png">
        
4.  Remove the top plate from the robot by unscrewing the four screws. Use a T45 bit. Make sure the antenna cables are not connected to the top plate.
        
        When reassembling, reuse the screws and washers, and tighten the screws to 7.5 Nm.
        
        <image: "remove_top_cover_all_covers.png"> <image: "remove_top_cover_no_ends.png">
        
4.  Remove the two screws in the front cover, and remove the cover from the robot. Use a T30 bit.
    
    <image: "front_unscrew.png"> <image: "front_remove.png">
    
5.  Turn the two screws counterclockwise on the side cover, and remove the cover from the robot. Use a T30 bit.
    
    <image: "side_unscrew.png">

### Replacing the contactors on MiR250 hardware version 1.0

1.  Disconnect the wires from the K1 and K2 STO contactors on the left side of the robot. Use a 4 mm hex bit for the outer terminals (1–6) and a PH2 bit for the center terminals(13,14, 21, 22, A1, and A2).
    
    Do not remove the wires between the two contactors.
    
    <image: "screw_terminal_drivers_hw1.png">
    
2.  Remove the STO contactors from the DIN rail by sliding them up and off.
    
    <image: "remove_from_din_rail_hw1.png">
    
3.  Remove the three short wires from between the two contactors.
    
    <image: "disconnect_cab_62_hw1.png">
    
4.  Mount the new K1 contactor furthest to the rear of the robot. Make sure terminals 1 and 2 face downwards.
    
    <image: "1_2_down_slide_rail.png">
    
5.  Connect the two short wires to terminals 1, 3, and 5. Tighten the screw terminals to 5 Nm. Use a 4 mm hex bit.
    
    <image: "connect_cab_62_hw1.png">
    
6.  Connect the last short wire to terminals 2, 4 and, 6 on the K2 contactor.
    
7.  Mount the new K2 contactor on the next DIN rail and connect the short wire in terminal 1 on K1 to terminal 2 on K2. Make sure terminals 1 and 2 face downwards towards the robot.
    
8.  Reconnect the remaining wires. Tighten the outer hex screw terminals to 5 Nm and the inner Philips terminals to 1.7 Nm.
    
    Each wire is labeled according to the terminal it connects to. You can also use the following overview.
    
    <image: "cable_overview_hw1.png">

### Replacing the contactors on MiR250 hardware version 2.0 and higher

1.  Disconnect the wires in the K1 and K2 STO contactors on the left side of the robot. Use a 4 mm hex bit for the outer terminals (1-6) and a PZ2 bit for the center terminals (13, 14, 21, 22, A1, and A2).
    
    Do not remove the wires between the two contactors.
    
    <image: "screw_terminal_drivers_hw2.png">
    
2.  Remove the STO contactors from the DIN rail by sliding them up and off.
    
    <image: "remove_from_din_rail.png">
    
3.  Remove the three CAB-062 wires from between the two contactors.
    
    <image: "disconnect_cab_62.png">
    
4.  Mount the new K1 contactor furthest to the rear of the robot. Make sure terminals 1 and 2 face downwards.
    
    <image: "1_2_down_slide_rail.png">
    
5.  Connect the three CAB-062 wires to terminals 1, 3, and 5. Tighten the screw terminals to 5 Nm. Use a 4 mm hex bit.
    
    <image: "connect_cab_62.png">
    
6.  Mount the new K2 contactor on the next DIN rail and connect the three CAB-062 wires to terminals 2, 4, and 6. Make sure terminals 1 and 2 face downwards towards the robot.
    
7.  Reconnect the remaining wires. Tighten the outer hex screw terminals to 5 Nm and the inner Pozidriv terminals to 1.7 Nm.
    
    Each wire is labeled according to the terminal it connects to. You can also use the following overview.
    
    <image: "cable_overview.png">

## MiR600 and MiR1350

### Things you will need

*   A large flat-head screwdriver
    
*   A small flat-head screwdriver
    
*   10 mm hex wrench
    
*   A 5 Nm torque wrench with the following exchangeable bits:
    
*   4 mm hex
        
*   PH2

### Before replacing the contactors

1.  Turn off the robot, and disconnect the battery in the left side compartment. To disconnect the battery, pull out the Battery lock pin, and pull the Battery lever downwards until the Battery lock pin is in the middle position.
    
    <image: "Disconnect_v2.png">
    
2.  Turn the two screws on the front compartment hatch 90˚, and pull out the electronics drawer.
    
    <image: "access_front_compartment_1.png"> <image: "access_front_compartment_2.png">
    
3.  Remove the three screws holding the front of the drawer. Use a 10 mm hex wrench.
    
    <image: "1_remove_screws_front_plate_MiR600_MiR1350.png">
    
4.  Unplug the front LED strip connector.
    
    <image: "2_remove_front_LED_cable_MiR600_MiR1350.png">
    
5.  Unplug the two USB cables for the cameras.
    
    <image: "3_remove_the_USB-cable_for_cameras.png">
    
6.  Remove the electronics drawer front cover for better access.
    
    <image: "4_remove_electronics_drawer_front.png">

### Remove the STO contactors

1.  Disconnect the wires from the K1 and K2 STO contactors. Use a 4 mm hex bit for the outer terminals (1-6) and a PH2 bit for the center terminals (13,14, 21, 22, A1, and A2).
    
    <image: "screw_terminal_drivers.png">
    
2.  Remove the end stop on the DIN rail to the left of the STO contactors. Use a small flat-head screwdriver if necessary.
    
    <image: "6_remove_end_clip.png">
    
3.  Pull downwards on the release mechanism below the STO contactors with a screwdriver. This enables you to remove it from the DIN rail.
    
    <image: "7_pull_down_release_clip.png">
    
4.  While pulling the release mechanism downwards, push the STO contactor toward the front of the drawer and up to detach it from the DIN rail.
    
    <image: "8_remove_safety_contactor.png">
    
5.  Repeat steps 3 and 4 with the K2 STO contactor.

### Replace the STO contactors

1.  Mount the new K2 STO contactor to the DIN rail. Make sure to orient it so terminals 1, 3, and 5 are facing upward.
    
    <image: "mount_k2.png">
    
2.  Route the following wires through the channel on the right of the K2 contactor:
    
*   The wire for connecting K1\_21 to K2\_22
        
*   The wire for connecting K2\_21 to XTIO1\_I4

    The two wires are marked at the ends with the above connection points.
    
    <image: "13_tuck_wires_in_before_remounting.png">
    
3.  Mount the new K1 STO contactor to the DIN rail, and push the contactors up against the safety PLC.
    
4.  Mount the end stop to the end of the DIN rail.
    
5.  Reconnect the wires. Tighten the outer hex screw terminals to 5 Nm and the inner Philips terminals to 1.7 Nm.
    
    Each wire is labeled according to the terminal it connects to. You can also use the following overview.
    
    <image: "cable_overview_top.png">
    
    <image: "cable_overview_bottom.png">

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the STO contactors (K1 and K2) on MiR250, MiR600, and MiR1350 1.0\_en.pdf