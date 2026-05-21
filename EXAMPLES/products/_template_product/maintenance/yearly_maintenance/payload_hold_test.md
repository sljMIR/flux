# Payload hold test {% tag "payload_hold_test" /%}

<image: "general_overview.png">

## Purpose

To ensure that the hydraulics system performs optimally. A payload hold test stress tests the system by having maximum pressure on the hydraulics system for 30 minutes. The system must be able to sustain pressure for this period of time.

Frequency: **yearly**

To complete this task, the battery must be connected, and the robot must be turned on.

When performing maintenance, you risk electrical shock from exposed electrical wires, and crushing, collision, or pinching from unexpected movement.

*   Be careful of exposed electrical wires.
    
*   Avoid inserting your hands between actuators or other moving parts of the robot.

## Procedure

1.  Place a 1200 kg payload on the forks.
    
2.  Lift the forks to drive height and note the fork height via the robot interface (Monitoring > Hardware health > Power board > Diagnostics forklift > Actual height).
    
3.  Switch the robot to Locked mode and remove the Operating mode key.
    
4.  Leave the robot sitting like this for 30 minutes.
    
5.  Observe that the forks have not moved more than 2 mm downwards during the 30 minutes.

## Pass criteria <image: "mmg_pass.svg">

The hydraulics system is able to sustain pressure while lifting a maximum payload for 30 minutes.

## Remediation