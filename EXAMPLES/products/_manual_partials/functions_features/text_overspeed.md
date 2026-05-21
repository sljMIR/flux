The Overspeed function makes the robot enter Protective stop and report an error if it drives or turns faster than pre-defined safety limits. This ensures the robot stops and enters a safe state before it becomes unstable or loses control while driving. Cases that can trigger this safety function are:

* Steep slopes
* Low-friction, wet, or dirty floors
* Hardware errors
* Unstable loads
* Loads that are not distributed as defined in {% tagref "payload_distribution" /%}.

If any speed limit is exceeded, the robot reports an error. You must clear the error and press the Restart button before the robot can continue operating.