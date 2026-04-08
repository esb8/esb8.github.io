## 7 MHz Direct Conversion Receiver

### Overview
Developed a **7 MHz Direct Conversion Receiver (DCR)** for learning and research in RF system design, focusing on hands-on simulation, PCB layout, and bench validation. The project demonstrates the end-to-end workflow from **circuit simulation** to PCB design and **hardware verification**.



### Key Contributions
- Simulated all stages in **LTspice/PySpice**:
  - Diode Ring Mixer  
  - Band-Pass Filter (BPF)  
  - Colpitts Oscillator  
  - 3-Stage Audio Amplifier  
- Designed **separate KiCad PCBs** for each stage to verify modular operation and integration.  
- Performed **bench testing and validation** against simulations and hand calculations:
  - Diode Ring Mixer performance  
  - Colpitts Oscillator frequency and stability  
  - BPF insertion loss and bandwidth  
  - Audio amplifier gain and linearity  
  - Full DCR system performance


### System Design

**RF Stages**  
- **Diode Ring Mixer:** Core frequency conversion with low distortion.  
- **Band-Pass Filter:** Selective filtering at 7 MHz to reduce unwanted signals.  
- **Colpitts Oscillator:** Provides stable LO signal with adjustable frequency.  

**Audio Stages**  
- 3-stage audio amplifier to recover and amplify demodulated signals.  

**PCB & Integration**  
- KiCad-based PCB design for each stage, verified individually and in combination.  
- Layout optimized for RF performance, grounding, and signal integrity.

**Validation & Testing**  
- Bench tests cross-referenced with LTspice simulations and theoretical calculations.  
- Ensured reliable operation of the complete receiver chain.



### Results & Achievements
- Successful full scale LTSPice simulation of DCR system.

### Skills & Technologies
**RF Design:** Diode ring mixer, Colpitts oscillator, band-pass filtering  
**Analog Electronics:** Multi-stage audio amplifier, PCB layout for RF  
**Simulation:** LTspice, PySpice, hand calculations  
**PCB Design:** KiCad, modular stage validation  
**Lab Testing:** Bench measurement, signal verification, integration
