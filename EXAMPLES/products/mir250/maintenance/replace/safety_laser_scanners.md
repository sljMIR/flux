# Safety laser scanners {% tag="replace_safety_laser_scanners_mir250" %}

<image: "MiR250.png">

Date: 2025-07-21

Document version: 1.0

Document number: 300050

Order number: 450324 for nanoScan front and rear

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: All

This guide describes how to replace the rear and front safety laser scanners on a MiR250.

## Things you will need

  * A SICK nanoScan3 I/O Pro safety laser scanner from MiR

  * A clean anti-static lens cloth, such as SICK optics cleaning cloth part no. 4003353 (see SICK's product list)

  * An anti-static plastic cleaner, such as SICK Plastic cleaner and care product part no. 5600006 (see SICK's product list)

  * A T30 screwdriver

  * Torque wrenches for the following:

    * 5 Nm with a T25 bit

    * 1.3 Nm with a T10 bit

## Before replacing the safety laser scanner

While handling the safety laser scanner, avoid contaminating the optics cover.

  1. Remove the rear cover by pressing the two white buttons and pulling off the cover. When removing the cover, un-click the two bottom corners first and then the two top corners.

<image: "rear\_cover\_buttons\_2.png"> <image: "rear\_cover\_remove\_2.png">

  2. Turn the Battery lever lock clockwise to unlock the battery connector.

<image: "unlock\_battery\_connected.png">

  3. Pull the Battery lever down to disconnect the battery.

<image: "disconnect\_battery.png">

  4. Turn the Battery lock switch counterclockwise to lock the battery connector again.

<image: "lock\_battery\_disconnected.png">

  5. Remove the front cover by unscrewing the two screws with a T30 screwdriver and pulling off the cover.

<image: "front\_cover\_screws.jpg"> <image: "front\_cover\_remove.jpg">

  6. Remove the side covers by unscrewing the two screws on each cover with a T30 screwdriver and pulling off the covers.

<image: "remove\_side\_screws.jpg"> <image: "remove\_side.jpg">

## Replacing the front or rear safety laser scanner

While handling the safety laser scanner, avoid contaminating the optics cover.

  1. Unscrew the two screws holding the plate on top of the laser scanner. Use a T20 bit.

<image: "screw3.JPG">

  2. (Optional) To make room, you can remove the LED signal light with a T10 bit. The LED is connected to the metal plate with a small plastic lever that you need to pull gently when disconnecting the LED.

<image: "LED-3.JPG"> <image: "LED-2.JPG">

  3. Remove the plate on top of the scanner, and with the T25 bit, unscrew the four screws on both sides of the laser scanner to dismount it from the robot. When mounting the new laser scanner into the robot, tighten these screws to 5 Nm.

<image: "remove.jpg"> <image: "remove2.jpg">

  4. Gently pull out the laser scanner.

<image: "pull.JPG">

  5. With the T10 bit, unscrew the two screws holding the scanner to the system plug, and remove the scanner from the robot. When mounting the plug to the new laser scanner, tighten the screws to 1.3 Nm.

<image: "unscrew.JPG"> <image: "detach.JPG">

  6. Carefully, connect the system plug to the new scanner. It is very important to keep the plug even and press on both sides of the plug at the same time when connecting, so as to not damage the connection—see a video depiction of the process on [MiR Support Portal](https://supportportal.mobile-industrial-robots.com/).

<image: "plug.png">

  7. Carefully, replace the old scanner with the new scanner. It can be a bit tricky putting the scanner back in place with the system plug and cables attached, so trying first using the old scanner without attachments to see how the scanner fits can be helpful.

<image: "try\_on2.JPG">

  8. Make sure the platform the laser scanner is placed on is clean and that no cables are pinched beneath the scanner.

  9. Repeat steps 1 to 4 in reverse to fasten the scanner to the robot.

  10. Check that the scanner does not have any scratches or other contamination before continuing.

  11. Connect the battery, reassemble the robot, and turn the robot on.

  12. Clean the optics cover with the anti-static cloth and plastic cleaner.

## Testing the scanner(s)

  1. In the robot interface, go to Monitoring > Safety system.

  2. Put an obstacle in front of the scanner you are testing, and see if the obstacle appears as blue dots in the interface.

<image: "mir250\_safety\_system.png">

If you encounter any issues with the scanner(s), for example, the robot doesn't detect obstacles and stop in time, try to apply the standard SICK configuration—see _How to apply the default SICK configuration using SICK Safety Designer_. You can find this document on [MiR Support Portal](https://supportportal.mobile-industrial-robots.com).

If this does not resolve the issue, you need to generate a SICK report—see the guide _How to generate a SICK report_ —and send it to Technical Support. You can find this document on [MiR Support Portal](https://supportportal.mobile-industrial-robots.com).

## Related material

How to apply the default SICK configuration using SICK Safety Designer

How to generate a SICK report

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.6
 * 2024-08-09
 * Removed spare part number 450325 as this is no longer in use. Updated styling.

---

 * 1.5
 * 2022-12-13
 * Updated references to related material.

---

 * 1.4
 * 2021-06-01
 * Updated for the new Support Portal.

---

 * 1.3
 * 2021-06-02
 * Added step that users should keep the plug even and press on both sides of the plug at the same time when connecting to the safety scanner, so as to not damage the connection.

---

 * 1.2
 * 2020-11-27
 * Moved applying the default SICK configuration to Troubleshooting.

---

 * 1.1
 * 2020-11-06
 * Small corrections throughout manual.

{% /table %}

Added step that users should apply the default configuration of the SICK safety system after replacing a safety laser scanner.
1.0 | 2020-10-15 | First edition.

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the safety laser scanners on MiR250 1.0\_en.pdf