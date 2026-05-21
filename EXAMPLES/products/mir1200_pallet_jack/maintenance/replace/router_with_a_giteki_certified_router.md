# Router with a Giteki certified router {% tag "replace_router_with_a_giteki_certified_router_mir250" /%}

<image: "MicrosoftTeams-image (9).png">

Date: 2025-07-21

Document version: 1.0

Document number: 300067

Order number: 450505

Valid for: MiR250 robots in Japan

Valid for software version: N/A

Valid for hardware version: N/A

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

This guide describes how to replace the router with a Giteki certified router in MiR250 robots.

This is only applicable for robots that are running in Japan as the Giteki certification is not required anywhere else.

## Things you will need

  * The Giteki certified router kit for MiR250 from MiR

  * Torque wrenches for the following:

    * 2.5 Nm with a T30 Torx head

    * 1.7 Nm with a T30 Torx head

## Kit contents

  * 1 × pre-configured Giteki certified Mikrotik router

  * 1 × aluminum Bracket

<image: "router\_bracket\_giteki.png">

## Before replacing the router

**Verify that the Giteki sticker is on the back of the new router.** It should have the following numbers:

R: 007-AF0057

T: D170028007

  1. Push the two white buttons on the rear cover at the same time.

  2. Loosen the bottom corners one at the time by pulling out each corner.

<image: "front\_bottom\_corners.png">

  3. Loosen the top corners one at the time by pulling each corner down, and then out.

<image: "rear\_top\_corners.png">

  4. Pull off the cover.

<image: "front\_remove.png">

  5. Turn the Battery lever lock clockwise to unlock the battery connector.

<image: "unlock\_battery\_connected.png">

  6. Pull the Battery lever down to disconnect the battery.

<image: "disconnect\_battery.png">

  7. Turn the Battery lock switch counterclockwise to lock the battery connector again.

<image: "lock\_battery\_disconnected.png">

**Remove the right side cover by unscrewing the two screws with a T30****screwdriver and pulling off the covers.** When removing the cover, un-click the bottom of the cover, and then pull the cover down and out to pull it off.

<image: "remove\_side\_screws.jpg"> <image: "remove\_side.jpg">

## Replacing the router

**Locate the router on the right side of the robot.**

<image: "MicrosoftTeams-image (1).png">

**Remove the four screws that are holding the router bracket.** Use a T30 screwdriver

<image: "MicrosoftTeams-image (3).png">

**Label the Ethernet cables connected to the router.** You will need to reconnect the Ethernet cables in the same order on the new router.

**Disconnect the five Ethernet cables and the power supply cable, and carefully pull out the router.**

<image: "MicrosoftTeams-image (4).png">
<image: "MicrosoftTeams-image (7).png">

**Add the new router in place of the old one, with the cables going to the same ports as on the old router.**

<image: "MicrosoftTeams-image (9).png">

**Mount the new bracket with the new router.**

**Screw the four screws back in, and reassemble the robot.** The two screws further inside the robot must be tightened to 2.5 Nm and the two outer screws to 1.7 Nm.

<image: "MicrosoftTeams-image (10).png">

## Testing

  1. Turn on the robot.

  2. Confirm that you can access the robots Wi-Fi network:

     * The network should be called **MiR\_robot\_change\_SSID** if the router is a new sparepart

     * The password should be **mirex4you**

  3. Ensure the robot can drive and operate as normal.

  4. Change the SSID and password as described in the guide _How to change the Wi-Fi name and password on MiR robots_.

## Related material

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.3
 * 2022-05-20
 * Corrected image of bracket under kit contents.

---

 * 1.2
 * 2021-07-28
 * Updated with correct order number.

---

 * 1.1
 * 2021-06-01
 * Updated for the new Support site.

---

 * 1.0
 * 2021-05-02
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the router with a Giteki certified router on MiR250 1.0\_en.pdf