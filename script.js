// Your projects array (unchanged)
const projects = [
  {
    title: "Drone Flight Computer PCB",
    description: "Avionics for a First-Person View (FPV) racing drone.",
    image: "projects/images/DroneFC3D.png"
  },
  {
    title: "Liquid Rocket Engine Control PCB",
    description: "ECM designed for high-powered liquid rocket engines.",
    image: "projects/images/DroneFC3D.png"
  },
  {
    title: "Soft Robotics Controller PCB",
    description: "An R&D PCB for controlling untethered soft robots",
    image: "projects/images/DroneFC3D.png"
  },
  {
    title: "Voltage Controlled Oscillator",
    description: "A multi-stage op-amp based voltage controlled oscillator",
    image: "projects/images/DroneFC3D.png"
  },
  {
    title: "Sine-Wave Shaping Circuit",
    description: "A Differential amplifier based sine-wave shaping circuit",
    image: "projects/images/DroneFC3D.png"
  },
  {
    title: "Electrical Ground Support Equipment",
    description: "EGSE designed for testing and controlling liquid rocket engines",
    image: "projects/images/DroneFC3D.png"
  },
  {
    title: "MARS Model Rocket and Avionics",
    description: "End-to-end design and construction of a model rocket and its avionics system",
    image: "projects/images/DroneFC3D.png"
  },
];

// Get the gallery container
const gallery = document.querySelector(".gallery-container");

// Loop through each project and create a card
projects.forEach(project => {
  // Create container for each project
  const card = document.createElement("div");
  card.className = "project-card";
  
  // Create image
  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.title;
  
  // Create title
  const title = document.createElement("h3");
  title.textContent = project.title;
  
  // Optional: create description
  const desc = document.createElement("p");
  desc.textContent = project.description;
  
  // Append image, title, description to card
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(desc);
  
  // Append card to gallery container
  gallery.appendChild(card);
});




// Featured images folder
const featuredImages = [
  "projects/images/DroneFC3D.png",
  "projects/images/DroneFC3D.png",
  "projects/images/DroneFC3D.png",
  "projects/images/DroneFC3D.png",
  "projects/images/DroneFC3D.png"
];

const featuredGallery = document.querySelector(".featured-gallery");

// Populate gallery
featuredImages.forEach((src, index) => {
  const card = document.createElement("div");
  card.className = "project-card";
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Featured ${index + 1}`;
  card.appendChild(img);
  featuredGallery.appendChild(card);
});

// Duplicate the gallery items to create infinite scroll illusion
featuredImages.forEach((src, index) => {
  const clone = document.createElement("div");
  clone.className = "project-card";
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Featured clone ${index + 1}`;
  clone.appendChild(img);
  featuredGallery.appendChild(clone);
});

// Auto-scroll variables
let scrollX = 0;
const scrollSpeed = 0.1; // pixels per frame
const totalWidth = featuredGallery.scrollWidth / 2; // width of original set

function autoScroll() {
  scrollX += scrollSpeed;
  if (scrollX >= totalWidth) scrollX = 0; // loop back
  featuredGallery.style.transform = `translateX(-${scrollX}px)`;
  requestAnimationFrame(autoScroll);
}

// Start auto-scroll
requestAnimationFrame(autoScroll);


