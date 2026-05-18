# Electrical interfaces{% tag="electrical_interfaces" %}

The robot has three electrical interfaces:

* GPIO
* Ethernet
* USB

{% partial file="products/_manual_partials/references/text_electrical_interfaces_location.md" /%}

## General purpose interfaces

{% image src="/images/mir1200_pallet_jack/interfaces/gpio_labeled.webp" alt="Pin diagram of the GPIO connector,"  /%}

| Pin | Name | Limits | Function |
|-|-|-|-|
| 1 | I1 | 24 V ±2.4 V | PNP input 1 |
| 2 | I2 | 24 V ±2.4 V | PNP input 2 |
| 3 | RTN |-| Protected return |
| 4 | 24V | 2 A at 24 V | Protected output |
| 5 | I3 | 24 V ±2.4 V | PNP input 3 |
| 6 | I4 | 24 V ±2.4 V | PNP input 4 |
| 7 | RTN |-| Protected return |
| 8 | 24V | 2 A at 24 V | Protected output |
| 9 | O1 | 2 A at 24 V | Output 1 |
| 10 | O2 | 2 A at 24 V | Output 2 |
| 11 | RTN |-| Protected return |
| 12 | 24V | 2 A at 24 V | Protected output |
| 13 | O3 | 2 A at 24 V | Output 3 |
| 14 | O4 | 2 A at 24 V | Output 4 |

{% partial file="products/_manual_partials/interfaces//list_gpio_pin_usage.md" /%}

## Ethernet

Standard RJ45 Ethernet port. Does not support Power over Ethernet.

Use to connect to the robot' network—see {% tagref tag="connect_to_interface" /%}

## USB

Standard USB type-A connector.