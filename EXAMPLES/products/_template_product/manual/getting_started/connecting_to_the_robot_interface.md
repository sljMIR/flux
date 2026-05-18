# Connect to the web-interface{% tag="connect_to_interface" %}

{% partial file="products/_manual_partials/web_interface/text_connect_interface_to_configure.md" /%}

{% if $has_inbuilt_display %}You can also control and configure the robot directly using the display—see {% tagref tag="control_panel" /%}. {% /if %}


## Connect to network

{% partial file="products/_manual_partials/wi-fi/text_access_point_regulations.md" /%}

{% if not($has_power_over_ethernet_service_port) %}The RJ45 Ethernet port does not support Power over Ethernet. If you connect an access point to the robot, you must connect another cable to power the access point.
{% / if %}


{% partial file="products/_manual_partials/wi-fi/text_dhcp_recommendation.md" /%}

{% partial file="products/_manual_partials/wi-fi/warning_multiple_radio_modules.md" /%}

## Access web-interface

{% if equals($location_ethernet_service_port, "left rear compartment") %}
The Ethernet port is in the left rear compartment.
{% else equals($location_ethernet_service_port, "front right corner")/ %}
The Ethernet port is in the front right corner.
{% else equals($location_ethernet_service_port, "rear compartment")/ %}
The Ethernet port is in the rear compartment.
{% /if %}

{% image src=/images/.. alt="Ethernet port location" /%}

{% partial file="products/_manual_partials/web_interface/instructions_connect_to_robot_web_interface.md" /%}