## Open Source FPV Drone

### Overview  
This project develops a fully custom FPV drone platform built around two in-house PCBs: a flight computer and a power/ESC board. The system integrates embedded firmware, RF communication, and a lightweight airframe into a modular, open-source design focused on performance, efficiency, and debuggability.



### Key Contributions  
- Designed **two custom PCBs** (STM32F411 flight controller + STM32F405 ESC/power board) in KiCad  
- Developed bare-metal embedded firmware in **C**, compatible with Betaflight and AM32  
- Integrated **IMU, GPS, and 915 MHz LoRa**, achieving **5+ km RF range**  
- Designed **3-phase BLDC motor control** with **95%+ efficient DC/DC power conversion**  
- Validated hardware using **oscilloscope, logic analyzer, and multimeter** across multiple revisions  
    


### System Design  

**Avionics**  
Custom STM32-based flight computer with IMU integration and impedance-controlled layout. Designed with SWD access, SPI test points, and expanded debugging features to improve bring-up and validation.

**Power & ESC**  
Dedicated STM32F405 board handling power distribution and motor control. Includes high-efficiency DC/DC converters and a 3-phase ESC architecture optimized for reliability and thermal performance.

**RF & Communication**  
915 MHz LoRa link validated through real-world testing, achieving **stable communication beyond 5 km**.

**Airframe**  
Lightweight, reinforced frame with integrated landing legs and geometry tailored for ~935 KV brushless motors. Designed for durability and easy modification with fully available CAD.



### Results  
- PCBWay Manufacturing sponsorship providing fabrication and assembly support.
- Achieved **long-range RF communication (5+ km)**.  
- Verified signal integrity and bus reliability through test points with an oscilloscope.  
- Delivered stable power system with **>95% efficiency**.  
- Iterated across 2 PCB Flight Controller revisions to improve layout and debugging access.  



