The Field switching and Personnel detection safety functions ensure the robot stops before colliding with personnel or moving obstacles that get in the way of the robot's driving direction.

The functions make the robot enter Protective stop when the safety laser scanners detect a person within a predefined area around the robot. This area is called a Protective field. There are several predefined Protective fields that increase in size as the robot drives faster. The robot stays in Protective stop until the active Protective field has been cleared of obstacles for at least two seconds.

The Personnel detection function makes the robot stop when the safety laser scanners detect obstacles wider than approximately 70 mm within the active Protective field.

The Field switching function makes the robot switch between predefined Protective fields according to the speed and direction of the robot. The speed is determined from the robot’s motor encoders.

{% if $is_deckload %}

{% imagegrid %}

{% gridimage image="/images/graphical/safety_system/Personnel_detection_clear.webp" alt="Robot driving freely" headline="Clear ahead" bodytext="The robot drives when the area is clear." /%}

{% gridimage image="/images/graphical/safety_system/Personnel_detection_blocked.webp" alt="Robot stopping for obstacle" headline="Obstacle detected" bodytext="The robot stops when it detects an obstacle." /%}

{% /imagegrid %}

{% else $is_forklift / %}

{% imagegrid %}

{% gridimage image="/images/graphical/safety_system/Personnel_detection_clear_1200.webp" alt="Robot driving freely" headline="Clear ahead" bodytext="The robot drives when the area is clear." /%}

{% gridimage image="/images/graphical/safety_system/Personnel_detection_blocked_1200.webp" alt="Robot stopping for obstacle" headline="Obstacle detected" bodytext="The robot stops when it detects an obstacle." /%}

{% /imagegrid %}

{% /if %}

