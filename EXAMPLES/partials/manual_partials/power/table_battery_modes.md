
{% table %}

* Battery percentage
* Mode
* Reactivation method

---

* Low or unused for extended period
* Power save mode
*   * Disconnect battery for 30 seconds, reconnect, wait 30 seconds, then turn on robot.
    * {% if $location_charging_port %}Connect MiR Cable Charger Lite 48V 3A to the robot's charging interface while the batteries are connected to the robot.{% else / %} Connect a 48V cable charger directly to the battery while the battery is disconnected from the robot, or connect MiR Cable Charger Lite 48V 3A to the robot's charging interface while the battery is connected to the robot.{% /if %}

---

* Critically low
* Deep sleep mode
* May be revivable using MiR Cable Charger Lite 48V 3A, depending on duration in Deep sleep.


{% /table %}