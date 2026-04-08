// projects-data.js
export const projects = [
  {
    title: "Open-Source FPV Drone Hardware",
      description: "Fully open-source drone featuring custom avionics, firmware, and airframe design.",
    link: "https://github.com/FPV-Drone-STM32F411/DroneController",
    image: "projects/images/DroneFC3D.png",
    tags: ["PCB", "RF", "Mechanical"],
    projectContent: "projects/droneFC.md",
    projectGallery: [
      "projects/images/DroneFC3D.png",
      "https://github.com/user-attachments/assets/0459f5f7-6173-4ced-ada2-ff094f02f9b5",
      "https://github.com/user-attachments/assets/19bf64d2-7da5-420a-b73a-6fbba0fd5355",
      "https://github.com/user-attachments/assets/8e14f005-45c7-44f8-8ec0-955a119deb0c"
    ]
  },
  
  {
    title: "Liquid Rocket Engine Control PCB",
    description: "Liquid rocket engine control & high-speed instrumentation PCB.",
    link: "https://github.com/machtmu/4in-recovery",
    image: "projects/images/board.front.png",
    tags: ["Rocketry", "PCB"],
    projectContent: "projects/ECM.md",
    projectGallery: [
      "projects/images/board.front.png",
      "projects/images/board.front.png",  
      'projects/images/pcbb.svg',
      'projects/images/pcbf.svg',  
    ]
  },
  {
    title: "Soft Robotics Controller PCB",
    description: "A ESP32-based compact controller for soft robotics R&D",
    link: "https://github.com/esb8/Soft-Robotics",
    image: "https://github.com/user-attachments/assets/745cd26e-8e00-4f58-bc77-62a3f7b1588d",
    tags: ["PCB", "Mechanical", "Research"],
    projectContent: "projects/SFTRBT.md",
    projectGallery: [
      "https://github.com/user-attachments/assets/745cd26e-8e00-4f58-bc77-62a3f7b1588d",
      "https://github.com/user-attachments/assets/a6f7de36-a9c3-403d-9135-eba6580efe70",
      "https://github.com/user-attachments/assets/069e9272-6496-45fa-8958-314af8e39d6f"
    ]
  },
  {
    title: "Signal Generator VCO",
    description: "A multi-stage op-amp based voltage controlled oscillator with a Sine-Wave Shaper Circuit",
    image: "https://media.licdn.com/dms/image/v2/D4E16AQGU6ajN5ubWGg/profile-displaybackgroundimage-shrink_200_800/B4EZyM_.9EIsAU-/0/1771892109669?e=2147483647&v=beta&t=Ud5Pr4clOQtfdF_ufgCDh9x5Zh0EgyOfCFzlNv-uOcI",
    tags: ["Analog"],
    link: "https://github.com/esb8/Signal-Generator",
    projectContent: "projects/signal-generator.md",
    projectGallery: [
      "https://media.licdn.com/dms/image/v2/D4E16AQGU6ajN5ubWGg/profile-displaybackgroundimage-shrink_200_800/B4EZyM_.9EIsAU-/0/1771892109669?e=2147483647&v=beta&t=Ud5Pr4clOQtfdF_ufgCDh9x5Zh0EgyOfCFzlNv-uOcI",
      "projects/images/vco_gallery2.jpg"
    ]
  },
  {
    title: "7MHz Discrete Direction Conversion Receiver",
    description: "a High Frequency (HF) discrete receiver built for HAM Radio applications",
    link: "https://github.com/esb8/Direct-Conversion-Reciever",
    projectContent: "projects/DCR.md",
    image: "projects/images/DroneFC3D.png",
    tags: ["Analog"]
  },
  {
    title: "Electrical Ground Support Equipment",
    description: "Electrical cabinet for real-time data acquisition and control over a rocket engine.",
    image: "projects/images/EGSE.jpg",
    link: "https://machtmu.com/electronics/",
    projectContent: "projects/EGSE.md",
    projectGallery: [
      "projects/images/EGSE.jpg",
      "projects/images/EGSE2.jpg",
      "projects/images/EGSE3.jpg"
    ],
    tags: ["Rocketry", "PCB", "PLC", "Mechanical"]
  },
  {
    title: "High Powered Model Rocket Avionics System",
    description: "End-to-end design and construction of a model rocket and its avionics system",
    image: "projects/images/MARS3.jpg",
    projectContent: "projects/droneFC.md",
    projectGallery: [
      "projects/images/MARS3.jpg",
      "projects/images/MARS1.jpg",
      "projects/images/MARS2.jpg"
    ],
    tags: ["Rocketry", "PCB", "Mechanical"]
  },
];