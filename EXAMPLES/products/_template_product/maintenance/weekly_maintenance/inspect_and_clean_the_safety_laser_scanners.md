# Inspect and clean the safety laser scanners {% tag="inspect_and_clean_the_safety_laser_scanners" %}

<image: "mir250\_maintenance\_safety\_laser\_scanner.png">

## Purpose

{% partial file="products/_maintenance_partials/sensors/text_clean_scanners_purpose.md" /%}


{% partial file="products/_maintenance_partials/frequency/text_weekly.md" /%}

{% partial file="products/_maintenance_partials/safety/warning_turn_on_robot.md" /%}

## Procedure

{% partial file="products/_maintenance_partials/sensors/notice_no_clean_scanner_paper_or_tissue.md" /%}

{% partial file="products/_maintenance_partials/sensors/instructions_clean_scanners.md" /%}

<image: "safety\_laser\_scanner\_contamination\_interface.png">

See a [video](https://vimeo.com/896457318) of the process on the Mobile Industrial Robots profile on vimeo.com.

## Pass criteria <image: "mmg\_pass.svg">

{% partial file="products/_maintenance_partials/sensors/list_clean_scanners_pass_criteria.md" /%}


## Remediation

{% table %}

 * Issue
 * Remedial action
 ---
 * The safety laser scanner optics is scratched or damaged.
 * Replace the optics cover. See SICK's documentation for the replacement procedure. Alternatively, replace the entire safety laser scanner—see How to replace the safety laser scanners on MiR250. You can find this guide on [MiR Support Portal](https://supportportal.mobile-industrial-robots.com/).

---

 * The safety laser scanner is defective.
 * Replace the safety laser scanner. See How to replace the safety laser scanners on MiR250. You can find this guide on [MiR Support Portal](https://supportportal.mobile-industrial-robots.com/).

---

 * The robot keeps reporting contamination errors.
 * See {% tagref tag="check_safety_laser_scanner_contamination" /%}.

{% /table %}