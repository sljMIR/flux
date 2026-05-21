---
id: ""
doc_type: "article"
title: "MiR600 and MiR1350 SICK configuration files and compatibility"
status: "published"
version: "1"
language: "en"
releaseYear: "2001"
updateDate: "2025-07-21"
accessLevel: "public"
tags:
- "mir600"
- "mir1350"
- "sick"
- "protective"
- "fields"
- "safety"
files: []
products:
- "MiR600"
- "MiR600 EU Pallet Lift"
- "MiR600 Pallet Lift"
- "MiR600 Shelf Lift"
- "MiR1350"
- "MiR1350 EU Pallet Lift"
- "MiR1350 Pallet Lift"
- "MiR1350 Shelf Lift"
---
# MiR600/MiR1350 SICK Configuration {% tag "mir600_mir1350_sick_configuration" /%}

## Safety Configuration Overview

The MiR600 and MiR1350 use SICK safety laser scanners for collision avoidance and personnel detection. This document outlines the configuration settings and parameters for both models.

## Configuration File Details

| Parameter | MiR600 | MiR1350 |
|-----------|--------|---------|
| Configuration File Name | MiR600_SICK_V6.07.spd2 | MiR1350_SICK_V6.07.spd2 |
| Supported Software Version | 3.5.0 or higher | 3.5.0 or higher |
| Safety PLC Checksum | 0x525C8B6D | 0x06913DC7 |

## Scanner Configuration

### Front Scanner
| Setting | MiR600 | MiR1350 |
|---------|--------|---------|
| Function Checksum | 0xE0F4A187 | 0x215A2714 |
| Network Function Checksum | 0x82626DD5 | 0xA59134A7 |
| Detection Range | 270° | 270° |
| Range | 0.1m - 5.5m | 0.1m - 5.5m |

### Rear Scanner
| Setting | MiR600 | MiR1350 |
|---------|--------|---------|
| Function Checksum | 0x12B33254 | 0xCFF7ECCE |
| Network Function Checksum | 0x0B40FDCA | 0xD5D3523B |
| Detection Range | 270° | 270° |
| Range | 0.1m - 5.5m | 0.1m - 5.5m |

## Safety Functions

### Emergency Stop
- **Performance Level**: PL d
- **Category**: 3
- **PFHD**: 4.0 × 10^-8

### Field Switching and Personnel Detection
- **Performance Level**: PL d
- **Category**: 3
- **PFHD (MiR600)**: 1.9 × 10^-7
- **PFHD (MiR1350)**: 1.2 × 10^-7

### Overspeed Detection
- **Performance Level**: PL c
- **Category**: 3
- **PFHD**: 5.2 × 10^-8

### Safeguarded Stop
- **Performance Level**: PL d
- **Category**: 3
- **PFHD**: 3.6 × 10^-8

### Speed Monitor
- **Performance Level**: PL d
- **Category**: 3
- **PFHD**: 5.2 × 10^-8

### Locomotion
- **Performance Level**: PL d
- **Category**: 3
- **PFHD**: 4.4 × 10^-8

## Configuration Validation

To validate the SICK configuration:

1. **For MiR600**: Check that the configuration file matches `MiR600_SICK_V6.07.spd2`
2. **For MiR1350**: Check that the configuration file matches `MiR1350_SICK_V6.07.spd2`
3. Verify checksums match the values listed above for your specific model
4. Ensure software version is 3.5.0 or higher
5. Test all safety functions according to commissioning procedures

## Troubleshooting

If configuration issues occur:

- Verify proper cable connections to both front and rear scanners
- Check for contamination on scanner lenses
- Validate checksum values for your specific model (MiR600 vs MiR1350)
- Ensure correct configuration file is loaded
- Consult the safety function documentation for detailed procedures

## Model-Specific Notes

- **MiR600** and **MiR1350** have different checksums but use the same scanner hardware
- Configuration files are model-specific and should not be interchanged
- Both models support optional motion warning features
- Two-pin reduced speed function is **not supported** on these models

For additional support, contact MiR technical support with your specific model number, configuration file name, and checksum values. 