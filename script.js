const projects = [
  {
    title: "Drone Flight Computer PCB",
    description: "Avionics for a First-Person View (FPV) racing drone.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Highlight 1", "Highlight 2"],
    links: { live: "https://example.com/project1", repo: "https://github.com/user/project1" },
    md: "projects/DroneFC.md", 
    image: "projects/images/DroneFC3D.png"
  },
   {
    title: "Liquid Rocket Engine Control PCB",
    description: "ECM designed for high-powered liquid rocket engines.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Highlight 1", "Highlight 2"],
    links: { live: "https://example.com/project1", repo: "https://github.com/user/project1" },
    md: "projects/4in-ECM.md",
    image: "projects/images/DroneFC3D.jpg" 
  },
  {
    title: "Soft Robotics Controller PCB",
    description: "An R&D PCB for controlling untethered soft robots",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Highlight 1", "Highlight 2"],
    links: { live: "https://example.com/project1", repo: "https://github.com/user/project1" },
    md: "projects/SoftRoboticsController.md",
    image: "projects/images/DroneFC3D.jpg" 
  },
  {
    title: "Voltage Controlled Oscillator",
    description: "A multi-stage op-amp based voltage controlled oscillator",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Highlight 1", "Highlight 2"],
    links: { live: "https://example.com/project1", repo: "https://github.com/user/project1" },
    md: "projects/VCO.md",
    image: "projects/images/DroneFC3D.jpg" 
  },
   {
    title: "Sine-Wave Shaping Circuit",
    description: "A Differential amplifier based sine-wave shaping circuit",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Highlight 1", "Highlight 2"],
    links: { live: "https://example.com/project1", repo: "https://github.com/user/project1" },
    md: "projects/SineWaveShaping.md",
    image: "projects/images/DroneFC3D.jpg" 
  },
  {
    title: "Electrical Ground Support Equipment for Liquid Rocket Engines",
    description: "EGSE designed for testing and controlling liquid rocket engines",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Highlight 1", "Highlight 2"],
    links: { live: "https://example.com/project1", repo: "https://github.com/user/project1" },
    md: "projects/EGSE.md",
    image: "projects/images/DroneFC3D.jpg" 
  },
  {
    title: "MARS Model Rocket and Avionics",
    description: "End-to-end design and construction of a model rocket and its avionics system",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Highlight 1", "Highlight 2"],
    links: { live: "https://example.com/project1", repo: "https://github.com/user/project1" },
    md: "projects/MARS.md",
    image: "projects/images/DroneFC3D.jpg" 
  },
];

//define the list container 
const list = document.getElementById("projectList")

//right side
const detail = document.getElementById("detail");

function escapeHtml(s=""){
  return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

function renderProject(project){
  const text = project.details || project.description || "";
  const paragraphs = escapeHtml(text).split(/\n\s*\n/).map(p => `<p>${p.replaceAll("\n","<br>")}</p>`).join("");

  detail.innerHTML = `
    <h2>${escapeHtml(project.title)}</h2>
    ${paragraphs}

    ${project.links?.repo ? `<p><a href="${project.links.repo}" target="_blank" rel="noopener">Repo</a></p>` : ""}
    ${project.links?.live ? `<p><a href="${project.links.live}" target="_blank" rel="noopener">Live</a></p>` : ""}
  `;
}

function loadMarkdown(path) {
  fetch(path)
    .then(r => r.text())
    .then(md => {
      detail.innerHTML = marked.parse(md);
    });
}



// Iterate through projects and create elements for each project
projects.forEach(project => {
  const media = document.createElement("img");
  const button = document.createElement("button");
  const title = document.createElement("h3");
  const subtitle = document.createElement("p");
  

  button.className = "project-button";
  media.src = project.image; // Placeholder image
  title.textContent = project.title;
  subtitle.textContent = project.description;
  
  button.appendChild(media);
  button.appendChild(title);
  button.appendChild(subtitle);

  list.appendChild(button);
  button.addEventListener("click", () => {
  loadMarkdown(project.md);  
});

})






  




/*
document.getElementById()
document.querySelector()
document.createElement()
element.textContent
element.className
element.appendChild()
*/