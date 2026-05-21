# Obstacle detection {% tag "obstacle_detection" /%}

{% partial file="products/_manual_partials/navigation/text_detects_obstacles_while_driving.md" /%}

The following sensors are responsible for detecting obstacles:

*   The safety laser scanners
*   The 3D cameras
*   The 3D LiDAR

## Safety laser scanners

The safety laser scanners provide a full 360° obstacle detection plane around the robot. The scanners are positioned at two different heights:

*   The rear scanner is 124 mm from the ground.
*   The front two scanners are 150 mm from the ground.

{% image src="/images/mir1200_pallet_jack/sensors/lasers.webp" alt="Field of view of the scanners."  /%}

{% partial file="products/_manual_partials/sensors/list_scanner_limitations.md" /%}

{% partial file="products/_manual_partials/sensors/text_scanners_used_in_safety_system.md" /%}

{% partial file="products/_manual_partials/sensors/warning_robot_detection_limitations_voids_overhangs_glass.md" /%}

## 3D cameras

There are five 3D cameras on the robot—see [External parts](../product_presentation/external_parts.htm). All cameras are used to detect obstacles close to the robot on the floor while it is driving. All cameras have a depth field of view of 87° × 58°. Specific cameras have additional purposes:

* **Fork, Left, and Right cameras**: The robot uses these three cameras to detect the current placement of the pallet it is picking up. It starts looking for the pallet from the Entry position.

    {% image src="/images/mir1200_pallet_jack/sensors/pallet_cameras.webp" alt="The field of view of teh pallet detectopm cameras"  /%}

* **Deep lane camera**: The robot uses the deep lane camera to search for obstacles before placing a pallet. If the camera detects an obstacle, it will stop the robot from placing the pallet and make the robot report an error.

    {% image src="/images/mir1200_pallet_jack/sensors/deep_lane_camera.webp" alt="The field of view of the deep lane camera"  /%}

* **Front camera**: The front camera is only used to detect and navigate around obstacles.

    {% image src="/images/mir1200_pallet_jack/sensors/obstacle_camera.webp" alt="The field of view of the front camera"  /%}

{% partial file="products/_manual_partials/sensors/caution_cameras_are_not_safety_rated.md" /%}

{% notice type="notice" %}
If the robot drives with the forks lifted, the deep lane camera and rear safety laser scanner are exposed. The sensor equipment may be damaged or misaligned if impacted.

* Test all docking stations where the pallet forks are raised, and ensure there are no obstacles that may collide with the sensors beneath the forks.
* Inform personnel that the sensors are fragile, and that the sensors are exposed while the robot is driving with a load.

{% /notice %}

{% partial file="products/_manual_partials/sensors/list_camera_limitations.md" /%}

## 3D LiDAR

The 3D LiDAR provides a full 360° visual protection around the robot from above. It is intended for detecting low hanging obstacles and far away obstacle while the robot is driving.

{% image src="/images/mir1200_pallet_jack/sensors/lidar.webp" alt="The 3D LiDAR field of view."  /%}

{% notice type="caution" %}

The robot may collide with and cause injury to personnel if you rely on the 3D LiDAR alone to detect personnel.

* Do not modify the safety laser scanner settings with the expectation that the 3D LiDAR will prevent collision with personnel.
* Do not include the 3D LiDAR as a safety-related risk reduction means in your risk assessment of the robot.

{% /notice %}

The 3D LiDAR has the following limitations:

* It does not detect transparent obstacles well.
* The scanner data can be inaccurate when detecting reflective obstacles.
* The scanner may detect phantom obstacles if it is exposed to strong direct light.
* It does not detect obstacle near the robot. Only the 3D cameras and safety laser scanners detect nearby obstacles.