# Check tiller Safety stop position {% tag="check_tiller_safety_stop_position" %}

<image: "emergency_stop_position.png">

## Purpose

To verify that the tiller Safety stop function works as intended.

{% partial file="products/_maintenance_partials/frequency/text_weekly.md" /%}

To complete this task, the battery must be connected, and the robot must be turned on.

When performing maintenance, you risk crushing, collision, or pinching from unexpected movement.

*   Be careful of exposed electrical wires.
    
*   Avoid inserting your hands between actuators or other moving parts of the robot.

## Procedure

1.  Make sure the robot is powered on and is in an operational state.
    
2.  Move the tiller downwards until the Safety stop position is reached, and a Protective stop is achieved. See MiR1200 Pallet Jack _Manual_ for more information about the Safety stop position.  
    
3.  Visually inspect the inductive sensors in the tiller base. Verify that they are not visibly damaged or loose. Also, verify if any of the wires for the sensors are damaged.
    
    <image: "inductive_sensors_1200_tiller.png">

## Pass criteria <image: "mmg_pass.svg">

*   The robot enters Protective stop once the tiller is moved to the Safety stop position.

## Remediation