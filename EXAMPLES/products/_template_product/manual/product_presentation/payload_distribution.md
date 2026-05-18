# Payload distribution{% tag="payload_distribution" %}

{% partial file="products/_manual_partials/safety/warning_load_falling_if_incorrectly_fastened.md" /%}

The specifications apply to total payloads of up to 250 kg.

## 1.2 m/s no incline

{% imagegrid count="2" %}
{% gridimage image="/images/mir250/payload/1.2_ms_front.webp" alt="Front view of the allowed CoM for the payload at 1.2 m/s" headline="Front" bodytext="" /%}
{% gridimage image="/images/mir250/payload/1.2_ms_side.webp" alt="Side view of the allowed CoM for the payload at 1.2 m/s" headline="Side" bodytext="" /%}
{% /imagegrid %}
{% imagegrid count="1" %}
{% gridimage image="/images/mir250/payload/1.2_ms_top.webp" alt="Top view of the allowed CoM for the payload at 1.2 m/s" headline="Top" bodytext="" /%}
{% /imagegrid %}

## 2.0 m/s no incline

{% imagegrid count="2" %}
{% gridimage image="/images/mir250/payload/2.0_ms_front.webp" alt="Front view of the allowed CoM for the payload at 2.0 m/s" headline="Front" bodytext="" /%}
{% gridimage image="/images/mir250/payload/2.0_ms_side.webp" alt="Side view of the allowed CoM for the payload at 2.0 m/s" headline="Side" bodytext="" /%}
{% /imagegrid %}
{% imagegrid count="1" %}
{% gridimage image="/images/mir250/payload/2.0_ms_top.webp" alt="Top view of the allowed CoM for the payload at 2.0 m/s" headline="Top" bodytext="" /%}
{% /imagegrid %}

# Pallet and payload specifications {% tag="payload_distribution" %}

The robot is only intended to transport pallets within the supported dimensions and overhang. You must ensure that the correct SICK configuration is applied for the pallet type your robot transports.

{% $model %} robots are shipped to handle EPAL1 pallets by default with a 50 mm overhang to all sides. {% $model %} can only be configured to support one load type.

The robot's safety system, docking procedure, and intended use are designed and tested using pallets that meet the design requirements. Using pallets that do not meet requirements introduces additional residual risks and is unintended behavior.

MiR does not provide pallets.

The robot uses the top boards on the pallet as markers to dock to the pallet correctly—see {% tagref tag="pallet_specifications" /%}. Top boards must be within the requirements. The robot can dock to either side of the pallet. The robot can only pick up or place pallets from the side without pallet openings if the pallet or rack is raised from the ground.

If the robot has issues docking to a pallet, coat the end of the pallet with a non-reflective material that has a light, neutral color and maximum 10 GU (gloss). We recommend using a matte light gray.

## Pallet specifications {% tag="pallet_specifications" %}

{% $model %} is designed for pallets and payloads with the dimensions described in this section.

If the robot transports a pallet outside of the dimensions supported by the applied SICK configuration file, the Protective fields are inadequate. The robot or its load may collide with personnel or obstacles.

* Apply the SICK configuration file that matches with the pallets used on your site.

* If your site uses several pallet types, ensure that the robot is only used with pallets it supports.

* Inform relevant personnel that the robot can only be used with certain pallet types.

{% image src="/images/mir1200_pallet_jack/payload_specifications/pallet_dimensions.webp" alt=""  /%}

{% table %}

* Pallet type
* Minimum SW version
* Dimensions

---

* EPAL 1 - wood
* MFE 1.1.0
*   {% table %}
    ---

    * A: 800 (+8/-5)
    * B: 1200
    * C: 144 (+10 / -0)
    * D: 100 (+5 /-0)

    ---

    * E: 100
    * F: 145
    * G: 228

    *

    {% /table %}

---

* EPAL 1 - gray or black plastic
* MFE 1.2.0
*   {% table %}

    ---

    * A: 800 (±2)
    * B: 1200 (±2)
    * C: 152 (+6/-2)
    * D: 131 (±1)

    ---

    * E: 100 (±2)
    * F: 151 (±2)
    * G: 225 (±2)

    *

    {% /table %}

---

* EPAL 1 - blue plastic
* MFE 1.2.0
*   {% table %}

    ---

    * A: 800 (±5)
    * B: 1200 (±5)
    * C: 160 (±2)
    * D: 100 (±2)

    ---

    * E: 100 (±2)
    * F: 150 (±2)
    * G: 225 (±2)

    *

    {% /table %}

---

* EPAL 3 - wood
* MFE 1.2.0
*   {% table %}

    ---

    * A: 1000 (±3)
    * B: 1200 (±3)
    * C: 144 (+8/-2)
    * D: 100 (+3/-1)

    ---

    * E: 146 (±2)
    * F: 146 (±2)
    * G: 281 (±2)

    *

    {% /table %}

---

* EPAL 3 - gray or black plastic
* MFE 1.2.0
*   {% table %}

    ---

    * A: 1000 (±3)
    * B: 1200 (±3)
    * C: 152 (+6/-2)
    * D: 131 (±1)

    ---

    * E: 143 (±2)
    * F: 146 (±2)
    * G: 284 (±3)

    *

    {% /table %}

---

* Nestable pallet (1163 × 1240) - black plastic
* MFE 1.2.0
*   {% table %}

    ---

    * A: 1163 (±2)
    * B: 1240 (±2)
    * C: 147 (±1)
    * D: 100

    ---

    * E: 140
    * F: 140
    * G: 372

    *

    {% /table %}

---

* Cart (1240 × 1240) - blue metal
* MFE 1.2.0
*   {% table %}

    ---

    * A: 1240 (±5)
    * B: 1240 (±5)
    * C: 320 (±5)

    ---

    * D: 190 (±5)
    * E: 330 (±5)
    * F: 150 (±5)

    {% /table %}


{% /table %}

## Payload distribution

The following drawings illustrate where the center of mass (CoM) of payloads must be located for safe operation with different payloads.

{% notice type="warning" %}

Load falling or robot overturning if the load on the robot is not positioned or fastened correctly can cause damage to equipment and injury to personnel.

* Ensure that the load is positioned and fastened correctly.

* Do not fasten excessive or incorrectly distributed loads.

{% /notice %}

The robot is designed to carry a payload that:

* Weighs up to 1 200 kg, including the weight of the pallet.

* Is maximum 2 meters in height.

* Does not exceed the footprint of the pallet and payload more than the dimensions in Pallet specifications.

The exact payload limit depends on the pallet design, payload distribution, application, and driving surface. It is the responsibility of the commissioner to determine the safe payload limit each pallet can support.

Use shrink wrap to fasten all payloads that can come loose during operation. It is the responsibility of the operator to ensure a stable payload.

{% notice type="warning" %}

The robot can drive with the forks at any height. There is a risk of the payload colliding with low-hanging obstacles if the robot drives with a load while the forks are raised.

* Ensure all hanging obstacles are higher than the height of the tallest payload and the robot's maximum lift height.

* If there are obstacles that you cannot remove or raise, place a Forbidden zone over it in the robot's map. This will prevent all robots connected to MiR Fleet from driving below the obstacle.

{% /notice %}

{% image src="/images/mir1200_pallet_jack/payload_specifications/center_of_mass_3D_dimensions.webp" alt="The CoM with generic measuremetn corresponding to the table below"  /%}

{% table %}

 * Payload
 * 600 kg
 * 800 kg
 * 1 000 kg
 * 1 200 kg

 ---

 * A
 * 250 mm
 * 250 mm
 * 325 mm
 * 400 mm

---

 * B
 * 100 mm
 * 100 mm
 * 75 mm
 * 50 mm

---

 * C
 * 500 mm
 * 450 mm
 * 350 mm
 * 250 mm

---

 * D
 * 600 mm
 * 600 mm
 * 600 mm
 * 600 mm


{% /table %}