# External parts {% tag "external_parts" /%}
{% if equals($model, "MiR250") %}
{% image id="04ce38ec-72c4-48af-9345-b1c3ed551083" alt="Identification of the robots external parts." /%}
{% else equals($model, "MiR250 Shelf Carrier") /%}
{% image id="6d179723-a849-4bb3-848b-80ef9f2380e7" alt="Identification of the robots external parts." /%}
{% /if %}


{% table %}

* Pos.
* Description
* Pos.
* Description

---

* 1
* Corner bumper: four pcs., one on each corner
* 2
* Signal light: eight pcs., two on each corner—see {% tagref "light_indicator_and_speaker" /%}

---

* 3
* 3D depth camera: two pcs., both in the front—see {% tagref "obstacle_detection" /%}
* 4
* Caster wheel with foot guard: four pcs., one in each corner

---

* 5
* nanoScan3 safety laser scanner: two pcs., in opposite corners—see {% tagref "obstacle_detection" /%}
* 6
* Drive wheel: two pcs., one on each side of the robot

---

* 7
* Status light: on all four sides of the robot—{% tagref "light_indicator_and_speaker" /%}
* 8
* Proximity sensor: eight pcs., two in each corner behind corner covers—see {% tagref "obstacle_detection" /%}

---

* 9
* Control panel—see {% tagref "control_panel" /%}
* 10
* Manual brake release switch—see {% tagref "control_panel" /%}

---

* 11
* Nameplate
* 12
* Top cover

---
{% if equals($model, "MiR250") %}
* 13
* Antenna: two pcs., one on each top compartment cover
* 14
* Left top compartment—see {% tagref "internal_electrical_interfaces" /%}

---

* 15
* Right top compartment—see {% tagref "internal_electrical_interfaces" /%}

*
*

{% else / %}
* 13
* Carrier pin: two pcs.
* 14
* Emergency stop button: two pcs.



{% /if %}



{% /table %}