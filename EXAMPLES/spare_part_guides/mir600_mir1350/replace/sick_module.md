# SICK module {% tag "replace_sick_module_mir600_1350" /%}

<image: "SICK_stack_clean.png">

Date: 2025-07-28

Document version: 1.0

Document number: 300119

Order number: 450141, 450162, 450165, 450372

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

This guide describes how to replace a SICK module on MiR600 and MiR1350. The guide is not made for a specific module, but the removal procedure will be the same, regardless of what module is going to be replaced.

<image: "SICK_PLC_model.png">

## Things you will need

*   A 10 mm wrench
    
*   A screwdriver or wrench with the following exchangeable bits:
    
*   A T25 bit
        
*   A flat-head bit

## Before replacing a SICK module

1.  Turn off the robot, and disconnect the battery in the left side compartment. To disconnect the battery, pull out the Battery lock pin, and pull the Battery lever downwards until the Battery lock pin is in the middle position.
    
    <image: "Disconnect.png">
    
2.  Turn the two screws on the front compartment hatch 90˚. Use a flat-head bit.
    
    <image: "access_front_compartment_1.png">
    
3.  Pull out the electronics drawer.
    
    <image: "access_front_compartment_2.png">
    
4.  Remove the three screws holding the front of the drawer. Use a 10 mm wrench.
    
    <image: "1_remove_screws_front_plate_MiR600_MiR1350.png">
    
5.  Unplug the front LED strip connector.
    
    <image: "2_remove_front_LED_cable_MiR600_MiR1350.png">
    
6.  Unplug the two USB cables for the cameras.
    
    <image: "3_remove_the_USB-cable_for_cameras.png">
    
7.  Remove the electronics drawer front for better access.
    
    <image: "4_remove_electronics_drawer_front.png">

## Removing the STO contactors

In order to access the SICK modules and replace them, the two STO contactors must first be disconnected and removed.

1.  Disconnect all the wires going into the two STO contactors. Both STO contactors have three rows of inputs–top, middle and bottom. All of the terminals can be loosened on the front of the STO contactors. Use a T25 bit.
    
    <image: "5_unscrew_terminals.png">
    
2.  Remove the end clip on the DIN rail to the left of the STO contactors. Use a small flat-head bit if necessary.
    
    <image: "6_remove_end_clip.png">
    
3.  Push downwards on the release mechanism below the STO contactors with a screwdriver. This enables you to remove it from the DIN rail.
    
    <image: "7_pull_down_release_clip.png">
    
4.  While pushing the release mechanism downwards, push the STO contactor toward the front of the drawer and up to detach it from the DIN rail.
    
    <image: "8_remove_safety_contactor.png">
    
5.  Repeat steps 3 and 4 with the second STO contactor.

## Replacing the SICK modules

The SICK modules are stacked together on a DIN rail, connected by pins between them. It is important that a module is disconnected from its neighboring module before removing it from the DIN rail. The modules can be slid along the DIN rail to the left until there is room to remove it.

1.  Unplug any cables in the module that you want to remove. The SICK modules can have cables connected on the underside too.
    
    <image: "9_remove_cable_from_SICK_module.png">
    
2.  Slide all modules in front of the module you want to replace to the left along the DIN rail, and isolate the module you are replacing. Make sure it is not connected to any neighboring modules.
    
    <image: "10_slide_SICK_module.png">
    
3.  Remove the SICK module from the DIN rail by pulling it up, toward the front of the drawer, and down. The clip on the back of the SICK module releases when you pull the module up, enabling the module to be removed. Discard the removed module.
    
    <image: "11_remove_SICK_module.png">
    
4.  Place the bottom part of the new SICK module on the DIN rail, and then push the top part of the module backwards until it clips in place.
    
    <image: "14_remount_SICK_module.png">
    
5.  Slide the module into place along with any other modules that was slid out. Make sure all the modules are firmly pushed together and connected.

## Reassembly

Remount all components by following the instructions in reverse.

All cables are clearly marked with labels to indicate where they should be connected. Observe the numbers printed on the STO contactors and SICK modules, and make sure that they correspond to the number on the wires.

Some wires are loose jumper wires, which will be marked in both ends.

Before remounting the K2 STO contactor, remember to route the following jumper cables through the channel on the right:

*   The cable for connecting K1\_21 to K2\_22
    
*   The cable for connecting K2\_21 to XTIO1\_I4

The two jumper cables are marked at the ends with the above connection points.

<image: "13_tuck_wires_in_before_remounting.png">

## Testing

After reassembling, reconnect the battery, and power up the robot. Go to hardware health in the robot interface and check that there are no error messages.

## Troubleshooting

If the robot does not power up, or if it reports an error in the hardware health section within the interface, it can be due to:

*   Loose connections
    
*   Wrong wiring reassembly

## Document history

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace a SICK module on MiR600 and MiR1350 1.0\_en.pdf