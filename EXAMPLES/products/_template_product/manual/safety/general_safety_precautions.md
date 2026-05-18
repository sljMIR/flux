# General safety precautions {% tag="general_safety_precautions" %}

{% partial file="products/_manual_partials/safety/warning_drive_over_feet_wear_safety_shoes.md" /%}

{% partial file="products/_manual_partials/safety/warning_drive_into_ladder_scaffolding.md" /%}

{% partial file="products/_manual_partials/safety/warning_muted_protective_field_areas_must_be_marked_as_operating_hazard_zones.md" /%}

{% partial file="products/_manual_partials/sensors/warning_robot_detection_limitations_voids_overhangs_glass.md" /%}

{% partial file="products/_manual_partials/service_maintenance/caution_remove_covers_exposes_parts.md" /%}

{% partial file="products/_manual_partials/wi-fi/warning_multiple_radio_modules.md" /%}

{% partial file="products/_manual_partials/safety/warning_commissioned_positioned_unsecure_loads.md" /%}

{% partial file="products/_manual_partials/safety/caution_motion_warning.md" /%}

{% partial file="products/_manual_partials/safety/caution_residential_environment.md" /%}

{% partial file="products/_manual_partials/training/caution_risk_of_fire_abc_training.md" /%}

{% partial file="products/_manual_partials/safety/caution_operating_hazard_zone_engage_emergency_stop.md" /%}

{% partial file="products/_manual_partials/sensors/notice_cannot_detect_forklift_forks_reliably.md" /%}


{% if $is_shelf_lift %}

{% notice type="warning" %}
Personnel standing in the blind spot of the robot when it is pivoting with a shelf risk being struck and injured.

* Ensure that all nearby personnel are instructed not to stand close to the robot when it is pivoting. 
* Inform personnel that the signal lights indicate when the robot is intending to turn or pivot—see {% tagref tag="light_indicator_and_speaker" /%} 
{% /notice %}

{% /if %}

{% if $is_forklift %}

{% notice type="warning" %}

The hydraulic fluid used in the pistons is an Aspiration toxicant: Category 1, H304 and may be fatal if swallowed or enters airways.
Use extreme caution when handling hydraulic fluid.

* If accidentally swallowed: Immediately call a poison center or doctor. Do not induce vomiting.

{% /notice %}

{% notice type="warning" %}

If the robot transports a pallet or load that does not meet MiR specifications, the load may become unstable and collide with personnel or equipment causing injury or damage respectively.

* Ensure the robot only transports pallets that meet MiR specifications and match the currently applied SICK configuration file—see {% tagref tag="payload_distribution" /%}

{% /notice %}

{% notice type="warning" %}

If the robot operates in environments with fine dust particles, it can damage the seals of the hydraulic pistons, causing oil leaks. Oil leaks can create a slippery surface for the robot and damage safety-related components. This can cause the robot to collide with personnel or equipment causing injury or damage.

* Never operate the robot in environments with fine dust particles.

{% /notice %}

{% notice type="warning" %}

Personnel risk their feet or hands being crushed beneath a pallet if they are placed beneath the pallet when the robot lowers it.

* Ensure that docking positions are clearly marked as operating hazard zones with visible tape or similar marking and that all personnel are instructed not to stand close to the robot when it is placing a pallet.
* All personnel must be instructed to wear safety shoes near an operating robot.

{% /notice %}

{% notice type="warning" %}

Personnel risk serious hand injuries if they reach in between the robot and a pallet when the robot is picking up the pallet.

* Ensure that docking positions are clearly marked as operating hazard zones with visible tape or similar marking and that all personnel are instructed not to stand close to the robot when it is picking up a pallet.

{% /notice %}

{% notice type="warning" %}

Driving over sills, gaps, or holes in the floor causes the robot to become unstable, and any load may thereby fall off causing serious injury to personnel and damage to the robot and to equipment.

* Never drive over sills, gaps, or holes in the floor.

{% /notice %}

{% /if %}