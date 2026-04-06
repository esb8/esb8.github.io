const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

console.log("Project ID:", projectId);

// Map project titles → content files
const projectContent = {
  "Drone Flight Computer PCB": "projects/droneFC.md",
  "Soft Robotics Controller PCB": "projects/softrobotics.md",
  "Voltage Controlled Oscillator": "projects/vco.md"
};

// Map project titles → images
const projectImages = {
  "Drone Flight Computer PCB": [
    "projects/images/DroneFC3D.png",
  ],
  "Soft Robotics Controller PCB": [
    "projects/images/softrobotics_1.jpg"
  ],
  "Voltage Controlled Oscillator": [
    "projects/images/vco_1.jpg",
    "projects/images/vco_2.jpg",
    "projects/images/vco_3.jpg"
  ]
};

// Load markdown content
if (projectContent[projectId]) {
  fetch(projectContent[projectId])
    .then(res => {
      if (!res.ok) throw new Error("Failed to load markdown file");
      return res.text();
    })
    .then(md => {
      document.getElementById("project-content").innerHTML = marked.parse(md);

      // Load project images
      const mediaDiv = document.getElementById("project-media");
      mediaDiv.innerHTML = ""; // clear existing images
      if (projectImages[projectId]) {
        projectImages[projectId].forEach(src => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = projectId; // fallback alt
          img.classList.add("project-img"); // for styling
          mediaDiv.appendChild(img);
        });
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById("project-content").textContent = "Error loading project.";
    });
} else {
  document.getElementById("project-content").textContent = "Project not found.";
}

// Page button navigation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".page-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const page = btn.dataset.page;

      if (page === "PORTFOLIO") window.location.href = "index.html";
      if (page === "RESUME") window.location.href = "resume.html";
    });
  });
});