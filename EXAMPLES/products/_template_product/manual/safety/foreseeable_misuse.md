# Foreseeable misuse {% tag="forseeable_miuse" %}

{% partial file="products/_manual_partials/safety/list_forseeable_miuse.md" /%}

{% partial file="products/_manual_partials/references/info_environmental_factors_evaluate_environment_commissioning.md" /%}

## Unsupported top modules

{% partial file="products/_manual_partials/safety/list_foreseeable_misuse_of_topmodules.md" /%}

{% if $is_forklift %}

## Unsupported payloads and handling

It is also foreseeable misuse to make the robot transporting unsupported loads or handling loads in unsupported ways. This includes, but is not limited to:

* Making the robot tow loads
* Using the robot to stack pallets or to pick up pallets from stacks
* Transporting pallets not fulfilling the technical specifications—see {% tagref tag="payload_distribution" /%}

{% /if %}
