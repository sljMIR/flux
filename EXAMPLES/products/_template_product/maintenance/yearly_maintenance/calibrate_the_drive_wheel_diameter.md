# Calibrate the drive wheel diameter {% tag "calibrate_the_drive_wheel_diameter" /%}

<image: "drive_wheel_diameter_setting.png">

## Purpose

To ensure that the robot stays accurate in its movements, and is not affected by any wear on the drive wheel. Excessive wear on the drive wheel can affect the odometry of the robot and introduce frequent errors and degraded performance.

{% partial file="products/_maintenance_partials/frequency/text_yearly.md" /%}

To complete this task, the battery must be connected, and the robot must be turned on.

When performing maintenance, you risk electrical shock from exposed electrical wires, and crushing, collision, or pinching from unexpected movement.

*   Be careful of exposed electrical wires.
    
*   Avoid inserting your hands between actuators or other moving parts of the robot.

Before you perform a calibration of the drive wheel diameter:

*   Ensure that the calibration is performed on a flat, consistent surface to avoid inaccuracies caused by uneven terrain.
    
*   Ensure that the robot's drive wheel does not slip during the procedure, as this will introduce errors in the measurement.
    
*   Use a precise measuring tool—ideally a laser distance meter—for the distance traveled to minimize errors.

To calibrate the drive wheel diameter, follow these steps:

1.  Create a mission with a Relative move of 5 meters.
    
2.  Ensure that the robot can move the desired distance in a straight line without slipping or external interference.
    
3.  Record the precise starting location of the robot from any relative point on the robot itself.
    
4.  Execute the Relative move.
    
5.  Measure the actual distance traveled using a precise measuring tool, and record this distance.
    
6.  Calculate the percentage difference between the expected and measure distance.  

    "Actual distance" / "expected distance". For example: 4.90/ 5 = 0.98
    
7.  Open the robot interface and navigate to **System > Settings > Advanced > Diameter of the drive wheel**.
    
8.  Multiply the existing drive wheel diameter value by the percentage difference recorded. For example 235 x 0.98 = 230.3.
    
9.  Enter the new value and restart the robot to apply the changes.

Verify the calibration:

1.  Execute the same Relative move as before, from the same position.
    
2.  Measure the actual distance traveled using a precise measuring tool, and record this distance.
    
3.  If the measured distance matches the expected distance, the calibration is completed.
    
4.  If there is still a discrepancy, repeat the calibration procedure again from step 4, until the offset in actual distance and expected distance is 1 % or less.