## Engine Control Module (ECM)

### Overview  
Designed a custom Engine Control Module (ECM) PCB for a liquid rocket engine, integrating precision data acquisition, ignition systems, and high-power actuation. The board manages real-time sensor monitoring alongside control of valves, servos, and dual firing circuits in a mixed-signal, high-noise environment.


### Key Contributions  
- Designed mixed-signal PCB integrating **16-bit 500 kHz SAR ADC** for high-speed data acquisition  
- Developed **dual firing circuits** for reliable ignition control  
- Implemented **servo and solenoid/valve drivers** (~36W power handling)  
- Designed analog front-end for **low-noise sensor instrumentation**  
- Managed grounding, layout, and isolation for **sensitive analog + high-power coexistence**  

### System Design  

**Data Acquisition & Instrumentation**  
High-speed 16-bit SAR ADC front-end for capturing engine sensor data. Designed signal conditioning and layout to maintain accuracy under electrical noise from switching loads.

**Actuation & Control**  
Power stage supporting servos and solenoid valves (~36W), including driver circuitry and protection considerations for inductive loads.

**Ignition System**  
Integrated **dual firing circuits** at a specific amperage to ensure reliability and safety during engine ignition sequences.

**Mixed-Signal Integration**  
Careful PCB layout, grounding strategy, and routing to isolate analog signals from high-current switching noise.


### Results  
- Achieved reliable simultaneous **data acquisition and actuator control**  
- Maintained signal integrity in a **high-noise mixed-signal environment**  
- Consistently supported igniton requirements with firing circuitry.