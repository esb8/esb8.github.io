## VCO - Triangle, Square, and Sine Wave Generator

### Overview
Designed a **high-speed signal generator** capable of producing **triangle, square, and sine waveforms** using **LM318 op-amps**. The project implements a **voltage-controlled oscillator (VCO)** with an adjustable DC input, coupled with a **sine-shaping stage**, achieving precise waveform control and low distortion at high frequencies.



### Key Contributions
- Migrated VCO from **LM324N to LM318** for faster switching, cleaner edges, and improved high-frequency performance.  
- Developed **adjustable DC control input** for frequency tuning.  
- Implemented **sine wave shaping** from triangle output, maintaining amplitude fidelity.  
- Designed PCB roadmap with **USB-C power**, decoupling, and layout optimized for LM318 stability.  
- Verified designs using **LTspice simulations** and historical **Multisim prototypes**, ensuring reliable startup and waveform accuracy.



### System Design

**Voltage-Controlled Oscillator (VCO)**  
- Generates triangle and square waveforms with precise frequency control.  
- LM318-based design improves reliability across a wide frequency range.

**Sine Shaper**  
- Converts triangle wave output into a sine-like waveform.  
- Integrated biasing and signal conditioning for clean amplitude and phase performance.

**Simulation & Validation**  
- **LTspice** primary verification with transient analysis, DC control sweep, and startup conditions.  
- Preserved **LM324N prototypes** for historical reference and early waveform verification.



### Results & Achievements
- Demonstrated **clean triangle, square, and sine waveforms** across the target frequency range.  
- Achieved **improved waveform fidelity** compared to legacy LM324N design.  
- PCB design in progress for an **all-in-one USB-C powered signal generator**.



### Skills & Technologies
**Analog Design:** LM318, LM324N, VCO, sine shaping  
**Simulation:** LTspice, Multisim  
**PCB Design:** USB-C power integration, high-speed op-amp layout  
**Controls & Signal Processing:** DC frequency control, waveform shaping, bias optimization  