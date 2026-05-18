# Check the hold-to-run switches {% tag="check_the_hold_to_run_switches" %}

<image: "hold-to-run_switches.png">

## Purpose

To ensure that the hold-to-run switch safety function works as intended.

{% partial file="products/_maintenance_partials/frequency/text_weekly.md" /%}

## Procedure

The enabling device (hold-to-run) has three discrete positions:

*   Position 1: Released
    
*   Position 2: Actuated (enabling position)
    
*   Position 3: Fully depressed

1.  Fully depress and hold the hold-to-run switches on both sides of the tiller handle. Ensure that the switches move freely and do not stick in any position when released.
    
2.  Attempt to move the robot by pressing the drive controllers while:
    
1.  Both hold-to-run switches are fully depressed (position 3). The robot should not be able to move in this scenario.
        
2.  One of the switches is fully depressed (position 3) while the other is fully released (position 1). The robot should not be able to move in this scenario.

## Pass criteria <image: "mmg_pass.svg">

*   The switches physically function, move freely, and do not stick in any position after being pressed and released.
    
*   The robot can be moved using the drive controllers when both, or just one hold-to-run switch is actuated (position 2).
    
*   The robot is unable to move if none hold-to-run switches are actuated (position 2), or if either is fully depressed (position 3).

## Remediation