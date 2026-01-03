
# FPV Drone PCB Full PCB + Code + Assembly

**A comprehensive, fully open-source FPV drone platform**: a two-board avionics stack (flight computer + power/ESC) complete with their codebase *and* a lightweight, robust airframe. All KiCad 9.0 design files, firmware, and CAD are included. Media of all PCBs, schematics and airframe are attached within this repository. 

## Overview

This project develops an FPV drone around two custom 5×5 PCBs: a **STM32F411 flight computer** and a **STM32F405 power distribution + ESC board**. esigned for compatibility with **Betaflight** (FC) and **AM32** (ESC). Both are built around the STM32 chipset and designed to be compatible with BetaFlight and AM32 requirements.

**Manufacturing Sponsor:** Huge thanks to **[PCBWay](https://www.pcbway.com/)** for sponsoring fabrication and assembly of the MKII flight computer. Their high-quality manufacturing, quick turnaround, significantly accelerated the build process. Moreover, their service was excellent and addressed questions promptly and clearly. As a bonus, PCBWay offers affordable, unique **silkscreen colours**. PCBWay is highly recommended and proved to be a great fit for the FPV-Drone-STM32F411 project.


**What’s new (MKII & Airframe)**
- **MKII Flight Computer:** UART and SWD flash options, cost-efficient and compact IMU (ICM-42605), oscilloscope-friendly SPI test pads, expanded test points, JST connectors, improved routing for debugability.
- **Open-Source Airframe:** integrated landing legs, structural reinforcements, and geometry to accommodate **~935 KV BLDC motors**; CAD provided for easy printing/mods.

## Airframe

The airframe is designed to be **robust and lightweight** with:
- **Integrated landing legs** and **structural reinforcements** for durability  
- Geometry to suit **~935 KV** brushless motors (modeled in CAD)  
- CAD provided for printing and customization
