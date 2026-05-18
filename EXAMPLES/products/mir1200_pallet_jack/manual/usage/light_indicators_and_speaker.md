# Light indicators and speaker{% tag="light_indicator_and_speaker" %}

{% partial file="products/_manual_partials/sounds_lights/text_sounds_and_light_adjusted_during_commissioing.md" /%}

The robot uses its speaker and light indicators to communicate its status and intentions:

* **Status lights** - The status light LED bands on the sides and front of the robot use colors and light motion patterns to signal the current status of the robot.
* **Signal lights** - The signal lights at the sides of the robot show if the robot is about to turn a corner or go backward. Right and left turns are indicated by blinking.
* **Blue light** - The blue light projects blue light 420 cm in front of the robot when it is driving forward in Automatic mode to alert personnel that the robot is approaching.
* **Safety buzzer** - The safety buzzer plays sounds to alert personnel whenever the Protective fields are muted and prior to the robot initiating movement after a standstill.
* **Speaker** - You can trigger sounds using zones and mission actions. When you press the horn on the tiller handle, the robot plays the sound you have set in the robot interface—see [Operating the tiller](operating_the_tiller.md).

{% image src="/images/mir1200_pallet_jack/lights/light_indicators_labeled.webp" alt="Identificatsion of the light types."  /%}

| Pos. | Description | Pos. | Description |
| --- | --- | --- | --- |
| 1 | Signal lights | 2 | Status lights |
| 3 | Blue light | | |

## Status lights

The LED light bands around the robot indicate its operational state:

{% lightindicators /%}

When the robot's battery percentage is critically low (0-1%), the ends of the status lights flash red.

## Signal lights

{% partial file="products/_manual_partials/sounds_lights/list_signal_light_behavior.md" /%}

{% notice type="warning" %}
If the robot starts up unexpectedly, there is a risk of injury to nearby personnel or damage to equipment.

* Train personnel in the meaning of the signal and status lights.

* Inform personnel that robot flashes its signal lights and emits warning sounds before is starts moving after being at standstill for longer than 10 seconds.

{% /notice %}

## Sounds

In **Setup > Sounds**, you can upload new sounds to the robot or edit the volume and length of the default sounds. Sounds can be used in missions and zones to alert or to attract people's attention. You can activate a sound manually using the horn—see [Operating the tiller](operating_the_tiller.md).

{% partial file="products/_manual_partials/sounds_lights/list_when_warning_sounds_play.md" /%}

{% partial file="products/_manual_partials/sounds_lights/warning_adjust_sound_volume.md" /%}