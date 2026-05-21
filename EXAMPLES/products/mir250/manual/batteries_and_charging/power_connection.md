# Power connection {% tag "power_connection" /%}

{% partial file="products/_manual_partials/power/text_power_main_connection_lever.md" /%}

{% if equals({% $hwVersionRobot %}, "1.0") %}
{% image src=/images/mir250/battery_charging/connect_battery_hw1.0.webp  alt="Battery connection" /%}

{% else /%}

{% image src=/images/mir250/battery_charging/connect_battery.webp  alt="Battery connection" /%}

{% /if %}

The Battery lever is in the rear compartment—see {% tagref "access_internal_parts" /%}.

## When to connect power

{% partial file="products/_manual_partials/power/list_connect_to_power.md" /%}

## When to disconnect power

{% partial file="products/_manual_partials/power/list_disconnect_from_power.md" /%}