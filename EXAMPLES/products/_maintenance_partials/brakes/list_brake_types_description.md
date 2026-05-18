The robot has two brakes on each drive wheel:

* **Mechanical brake (power-off)**
    Controlled by the safety PLC via mechanical brake relays. The relays are monitored through a feedback signal to the PLC.
    
    These brakes are always applied during Protective and Emergency stops.

* **Dynamic brake (power-on)**
    Controlled by the safety PLC via contactors. It works by short-circuiting the motor windings (permanent magnet motor) to stop the wheel.

    A feedback signal monitors the brake function. If it fails, a Dynamic brake error is reported.

    These brakes are only used during a Protective stop triggered by personnel detection, and they are applied together with the mechanical brakes.