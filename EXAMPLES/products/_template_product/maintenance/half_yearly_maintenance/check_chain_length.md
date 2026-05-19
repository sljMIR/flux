# Check chain length {% tag "check_chain_length" /%}

<image: "measure_chain.png">

## Purpose

To monitor and detect chain wear by measuring the chain elongation (pitch growth) before it causes poor engagement and accelerated wear.

The nominal size of one joint is 19.05 mm, which equals a nominal length of 15 joints to be 285.75 mm. On top of this should be added the diameter of one chain pin (5.7 mm) when measuring from outside to outside.

Total nominal chain length for 15 joints measured from outside to outside is (19.05 x 15) + 5.7 = 291.45 mm.

The design allows for up to 2 % elongation of the chain (285.75 x 0.02 = 5.71 mm).

It is recommended to track the length recorded from year to year for comparison.

{% partial file="products/_maintenance_partials/frequency/text_half-yearly.md" /%}

To complete this task, the robot does not need to be powered.

Turn off the robot, and disconnect the battery.

*   When performing maintenance on robots, you risk electrical shock from electrical wires and connectors if internal components are exposed, crushing, collision, or pinching from unexpected movements.

## Procedure

1.  Place a minimum payload of 100 kg on the forks.
    
2.  Move the forks to a position slightly above the floor to ensure that the chain has tension. Turn off the robot with the forks in this position.
    
3.  Measure across 15 joints of the chain from outside of joint pin to outside of joint pin. Use a large caliper for most accurate measurements.
    
    <image: "measure_chain_length_maintenance.png">
    
4.  Observe the following thresholds compared to your actual measurement of 15 chain joints from outside to outside:
    
*   If 15 chain joints ≤ 294.7 mm, the chain is still within spec and does not need immediate replacement.
        
*   If 15 chain joints = 294.7–296.7 mm, a chain replacement should be conducted as soon as possible.
        
*   If 15 chain joints ≥ 296.7 mm, the chain must be replaced immediately.

## Pass criteria <image: "mmg_pass.svg">

*   The chain has been measured across 15 joints and is within the specified threshold for continuing operation.

## Remediation