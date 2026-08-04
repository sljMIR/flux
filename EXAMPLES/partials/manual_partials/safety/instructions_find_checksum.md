To find the current checksums, follow these steps:

1. Connect to your robot's network as described in {% tagref "connect_to_interface" /%}.
2. Open SICK Safety Designer.
3. Select **Search for devices**.

    {% image id="35d59ee5-cd7a-4f4c-a441-2bdeeacb1789" alt="Search for devices in the SICK Safety Designer tool." /%}

4. Drag all devices from the Device search window to the corresponding device in the Device overview window.

    When you are prompted to upload to the safety PLC, select No.

    {% image id="5381856d-a879-4b33-b096-e392cd349bc9" alt="Add devices to the active workspace." /%}

    You can now read the current checksum values for each device configuration. If the values differ from the ones in Table 7.1, the safety configuration file has been modified from the original.

    {% image id="8df8703a-7dc1-4fcb-8833-b1acf58ff86b" alt="The checksum values of the current configuration." /%}