## Soft Robotics Control PCB

### Overview  
Designed a custom soft-robotics control PCB for bio-inspired systems, integrating sensing, actuation, and onboard vision. The platform combines mixed-signal data acquisition with high-current driver stages and embedded firmware to enable real-time control, perception, and wireless communication.



### Key Contributions  
- Designed ESP32-based PCB with **camera, sensors, and multi-channel actuator control**  
- Implemented **4–8 electromagnet driver channels** with protected low-side MOSFET stages (PWM capable)  
- Developed firmware in **C++** for SPI, I²C, ADC, PWM, and real-time control  
- Integrated **onboard vision (OV2640)** for object detection and depth tracking  
- Designed power system with **buck regulation for 2S LiPo** and protection (flyback, reverse polarity)  
- Applied **IPC-2152 standards** to support **5A+ current handling**  
- Improved manufacturability by resolving **460+ DRC issues**, reducing lead time from 2 months to <2 weeks  


### System Design  

**Embedded & Vision System**  
ESP32 (WROOM/WROVER) with onboard camera enabling wireless control and AI-based perception tasks, including object detection and tracking.

**Actuation & Power**  
Multi-channel electromagnet drivers with low-side MOSFET topology, designed for inductive loads with flyback protection. Power delivery optimized for high-current operation using IPC-2152-guided copper sizing.

**Sensing & Instrumentation**  
Photoresistor-based sensing (LDR + ADC) with analog conditioning, along with SPI expansion for additional sensors and peripherals.

**Connectivity & Debugging**  
Integrated UART header for flashing/debugging, SPI breakout for expansion, and Wi-Fi/Bluetooth for wireless control.


### Results  
- Enabled **real-time sensing, actuation, and vision processing** on a single highly compact platform  
- Achieved consistent operation under **mixed-signal and inductive load conditions**.
- Reduced PCB turnaround time by **>4× through DFM optimization**  