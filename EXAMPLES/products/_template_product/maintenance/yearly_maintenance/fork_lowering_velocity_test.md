# Fork lowering velocity test {% tag="fork_lowering_velocity_test" %}

<image: "hw_health.png">

## Purpose

To ensure that the hydraulics system is performing within specification. The lowering velocity with full payload should not exceed 100 mm per second.

{% partial file="products/_maintenance_partials/frequency/text_yearly.md" /%}

To complete this task, the battery must be connected, and the robot must be turned on.

When performing maintenance, you risk electrical shock from exposed electrical wires, and crushing, collision, or pinching from unexpected movement.

*   Be careful of exposed electrical wires.
    
*   Avoid inserting your hands between actuators or other moving parts of the robot.

## Procedure

1.  Prepare a 1200 kg payload on the forks.
    
2.  Lift the forks to maximum height.
    
3.  On the robot display, navigate to Hardware health > Power board > Diagnostics > Forklift and observe the Actual speed metric.
    
4.  Lower the forks at full speed while observing that the value stays below -100 mm per second.

## Remediation