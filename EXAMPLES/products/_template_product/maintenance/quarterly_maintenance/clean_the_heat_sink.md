# Clean the heat sink {% tag="clean_the_heat_sink" %}

<image: "mir600_1350_heatsink.png">

## Purpose

To ensure that the robot does not overheat. Dust will over time accumulate on the heat sink, which will reduce cooling performance. If the heat sink is not regularly cleaned, the thermal switch inside the robot may trigger because the operational temperature threshold is exceeded. The thermal switch will then cut the power to the safety PLC.

If this happens, the robot will report errors regarding a missing connection to the safety laser scanners and failed localization due to missing scanner data.

{% partial file="products/_maintenance_partials/frequency/text_quarterly.md" /%}

To complete this task, the robot does not need to be powered.

Turn off the robot, and disconnect the battery.

*   When performing maintenance on robots, you risk electrical shock from electrical wires and connectors if internal components are exposed, crushing, collision, or pinching from unexpected movements.

The actual operating environment greatly affects the cleaning interval for the heat sink. Very dusty operating environments may require the heat sink and fan to be cleaned more often.

## Procedure

Follow the procedure for cleaning out the heat sink as outlined in How to clean the heat sink on MiR600 and MiR1350. You can find this guide on [MiR Support Portal](https://supportportal.mobile-industrial-robots.com).

## Pass criteria <image: "mmg_pass.svg">

*   Dust is removed from the heat sink and fan.