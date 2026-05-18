# Drive wheels {% tag="replace_drive_wheels_mir250" %}

<image: "kit\_contents.png">

Date: 2025-07-21

Document version: 1.0

Document number: 300082

Order number: 450310

Valid for: MiR250

Valid for software version: N/A

Valid for hardware version: All

Failure to use appropriate personal protective equipment (PPE) can result in serious injury.

Determine relevant and necessary PPE based on the task, environment, and experience of personnel. The following is a list of common PPE you must consider:

  * Safety shoes to protect from impact or puncture hazards.

  * Safety glasses and face shield to protect from flying debris or chemical agents.

  * Hard hat to protect from falling or flying objects.

  * Gloves to protect against sharp objects, electrical hazards, chemical agents, and extreme temperatures.

  * Ear plugs or earmuffs to protect from high noise hazards.

  * Dust mask or respirator to protect from inhaling chemical agents or other harmful airborne hazards.

Electrical components can be damaged by electrostatic discharge. Consider moving the robot to an ESD protected area and using ESD protected clothing and tools.

This guide describes how you replace the drive wheels on MiR250. You may need to replace the drive wheels if they have become frayed, or if they are worn down unevenly. You must always replace both drive wheels at the same time to make sure there is not a worn out wheel that is slightly smaller than the other.

After you replace the drive wheels, you must calibrate the IMU—see the guide _How to calibrate the IMU_.

## Things you will need

  * The drive wheel kit from MiR

  * A piece of cloth

  * A support block

  * A lever or lifting device to raise the robot's bogies

  * A torque wrench ranging from 20–50 Nm with the following sockets:

    * 13 mm socket

    * KM7 lock nut socket

  * A pair of flat-nose pliers

  * A screwdriver with a T30 bit

  * A small hammer and a punch

  * An EMC ohmmeter

## Kit contents

  * 2 × MiR250 drive wheel

  * 2 × MB7 lock washer

## Before replacing the drive wheel

  1. Push the two white buttons on the rear cover at the same time.

<image: "rear\_press\_buttons.png">

  2. Loosen the bottom corners one at the time by pulling out each corner.

<image: "rear\_bottom\_corners.png">

  3. Loosen the top corners one at the time by pulling each corner down, and then out.

<image: "rear\_top\_corners.png">

  4. Pull off the cover.

<image: "rear\_remove.png">

  5. Disconnect the battery by pulling out the Battery lock pin while pushing the Battery lever downwards.

<image: "250\_mkII\_disconnect\_battery.png">

  6. The Battery lock pin will click into place and lock the battery connector once the Battery lever has been pushed all the way down.

<image: "250\_mkII\_battery\_disconnected\_lock\_battery\_pin.png">

  7. Unscrew the two screws holding the front cover. Use a T30 screwdriver.

<image: "front\_unscrew.png">

  8. Loosen the bottom corners one at the time by pulling out each corner.

<image: "front\_bottom\_corners.png">

  9. Pull off the cover.

<image: "front\_remove.png">

  10. Turn the two screws counterclockwise. Use a T30 screwdriver.

<image: "side\_unscrew.png">

  11. Loosen the bottom corners one at the time by pulling out each corner.

<image: "side\_bottom\_corners.png">

  12. Pull off the cover.

<image: "side\_remove.png">

  13. If your robot is installed with a traction kit, unscrew the three screws mounting the front weight to the robot and remove the weight. Use a 13 mm socket. When remounting the weight, tighten these screws to 20 Nm.

<image: "remove\_traction\_kit.png.jpg">

  14. Apply the lever or lifting device on the rear edge of the bogie to raise the bogie. Make sure to place a piece of cloth between the lever and the bogie to avoid damaging it.

<image: "lift\_bogie\_top.png">

  15. Wedge a support block beneath the bogie where you lifted it. Make sure that the block keeps the drive wheel in a position where it is not in contact with the ground or the chassis of the robot. Place a piece of cloth between the bogie and support block to avoid damaging the bogie.

<image: "wedge\_bogie\_w\_top.png">

  16. Repeat from Step 14 in Before replacing the drive wheel with the bogie on the other side of the robot.

## Replacing the drive wheel

  1. Unlock the lock washer from the KM7 lock nut in front of the drive wheel. One of the ears from the lock washer is bent into the nut to lock it in place. Use a pair of flat-nose pliers to straighten it out, enabling you to turn the nut.

<image: "Unlock\_washer.png">

  2. Demount the old drive wheel. Use a KM7 socket to unscrew the lock nut. Do not unscrew the main bolt in the center of the wheel, only the nut around it that you unlocked in the previous step.

<image: "remove\_nut.png">

Do not unscrew the main bolt in the center of the wheel. If you do, you must also remove and replace the wheel hub.

<image: "do\_not\_remove\_bolt.png">

  3. Replace the drive wheel and lock washer on the bolt. Place the new drive wheel on first followed by the old pressure plate, the new lock washer, and the old lock nut.

<image: "replace\_wheel.png">

  4. Tighten the lock nut to 50 Nm, and position it so you can lock it in place with four of the ears on the lock washer. Use the pliers to bend the lock washer ears into the lock nut and then a small hammer and a punch to secure the ears into place. Mark the assembly with a paint marker.

<image: "Tighten\_lock\_nut.png">

  5. Repeat from Step 1 in Replacing the drive wheel with the drive wheel on the other side of the robot.

  6. Reassemble the robot by following the steps in Before replacing the drive wheel in reverse order.

  7. Calibrate the IMU—see the guide _**How to calibrate the IMU.** _

## Testing

Run an encoder test from the robot interface under System > Robot setup. Follow the instruction in the interface to verify that the robot drives straight.

## Testing the ESD compliance of MiR250

In production, MiR250 robots are examined for electrical resistance at representative points according to DIN EN 61340-5-1 (DIN EN 61340-2-3). After you replace the drive wheels, you have to test the robot yourself to verify that it is still in compliance.

To be in compliance, you have to make two measurements: the Resistance to groundable point (Rgp) and the Point-to-Point resistance (Rp-p).

  1. Set the operating voltage of the ohmmeter to 100 V. The maximum resistance to be in compliance is 1 × 109Ω.

  2. Measure the Rgp of the robot. To do this, place the robot on a metal plate, and place one probe from the EMC ohmmeter in the middle of the top cover, and place the other probe on the corner of the metal plate 150 mm away from each side of the plate.

<image: "250probe1.png">

  3. Measure the Rp-p by placing the probes on both ends of the top cover.

<image: "250probe2.png">

## Document history

{% table %}

 * Version
 * Date
 * Description
 ---
 * 1.3
 * 2023-09-07
 * Updated with information to use a small hammer and a punch to secure the lock washer ears into place.  Updated styling of the guide. General improvements throughout the document.

---

 * 1.2
 * 2022-07-14
 * General improvements throughout the document.

---

 * 1.1
 * 2022-06-28
 * Updated with testing for ESD compliance.

---

 * 1.0
 * 2021-11-22
 * First edition.

{% /table %}

how-to\_troubleshooting/PDF/how\_to/replace/\_How to replace the drive wheels on MiR250 1.0\_en.pdf