---
id: "item-2025-11-04-002"
doc_type: "notice"
title: "User-applied SICK nanoScan3 firmware upgrade"
status: "published"
version: "2"
language: "en"
firstReleaseDate: "2025-06-03"
updateDate: "2025-07-10"
tags:
- "nanoScan3"
- "safety laser scanner"
accessLevel:
- "partner"
category: "product"
products:
- "MiR250"
hwVersionRobot: "All"
expiryDate: null
effectiveDate: "2025-06-03"
---

SICK recently released firmware version 1.94 for the nanoScan3 safety laser scanners. These scanners are used in all MiR250 and MiR1200 Pallet Jack robots.

We have validated that this firmware upgrade improves performance of the scanner's detection ability when used with the latest SICK configuration files. We highly recommend upgrading the firmware on robots running configurations that have been validated with this firmware—see [MiR250 SICK configuration files and compatibility](https://supportportal.mobile-industrial-robots.com/software/mir250-sick-configuration-files-and-compatibility) or [MiR1200 Pallet Jack SICK configuration files and supported pallets](https://supportportal.mobile-industrial-robots.com/software/mir1200-pallet-jack-sick-configuration-files-and-supported-pallets).

SICK has described the firmware upgrade process in the latest version of the [nanoScan3 operating instructions (2025-03-18)](https://www.sick.com/media/docs/7/37/137/operating_instructions_nanoscan3_i_o_en_im0087137.pdf) under section _10.7 Updating firmware_. You can find this document on SICK's website.

You must apply the firmware upgrade yourself by following SICK's guide. MiR has verified that the instructions apply to scanners used in MiR250 and MiR1200 Pallet Jack robots.

When upgrading, keep the following points in mind: 

*   If the robot runs out of power, the battery is disconnected, or the power cable to the scanner is unplugged during the upgrade, this may render the scanner unusable.
    
*   If you lose connection to a scanner during the firmware upgrade, restart the upgrade to continue the process.
    
*   Connect to the robot with an Ethernet cable or connect to the scanner directly with a USB micro-B. If you connect to the robot, you can upgrade both scanners at the same time.
    
*   You will be prompted to sign in to the SICK system. To use SICK AppSpace Suite, create a free SICK account on the SICK website. To access the SICK safety system on the robot, use the username **Administrator** and the SICK safety password for your robot. If you do not have the SICK safety password for your robot, contact MiR Technical Support or try the default **SICKSAFE**.
    
*   It can take a few minutes to upload the device driver and for the installation to start. If SICK AppSpace Suite is unresponsive at any time, wait a few minutes for it to finish the process.
    
*   Once the upgrade is complete, restart the robot to refresh the connection to the scanners. The interface for SICK AppSpace Suite will indicate when the firmware upgrade is complete.
    
    <image: "firmware_update_complete.png">

Please share this information with any relevant customers.

**Helpful links**

*   Link to this product notice on MiR Support Portal: [https://supportportal.mobile-industrial-robots.com/documentation/product-notices/product-notice-user-applied-sick-nanoscan3-firmware-upgrade/](https://supportportal.mobile-industrial-robots.com/documentation/product-notices/product-notice-user-applied-sick-nanoscan3-firmware-upgrade)
    
*   Overview of MiR250 SICK configuration files and compatibility: [https://supportportal.mobile-industrial-robots.com/software/mir250-sick-configuration-files-and-compatibility/](https://supportportal.mobile-industrial-robots.com/software/mir250-sick-configuration-files-and-compatibility)
    
*   Overview of MiR1200 Pallet Jack SICK configuration files and compatibility: [https://supportportal.mobile-industrial-robots.com/software/mir1200-pallet-jack-sick-configuration-files-and-supported-pallets/](https://supportportal.mobile-industrial-robots.com/software/mir1200-pallet-jack-sick-configuration-files-and-supported-pallets)