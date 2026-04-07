// Your projects array (unchanged)
import { projects } from './project-data.js';

// =======================
// DOM References
// =======================
const gallery = document.querySelector(".gallery-container");
const tagList = document.querySelector(".tag-list");
const selectedTagsBar = document.querySelector(".selected-tags");

let selectedTags = [];


// =======================
// Initial render
// =======================
renderSelectedTags();  // ensures "Displaying all projects" is visible at page load
renderGallery();

// =======================
// Render sidebar tags
// =======================
const allTags = [...new Set(projects.flatMap(p => p.tags))];

allTags.forEach(tag => {
  const btn = document.createElement("button");
  btn.className = "tag-btn";
  btn.type = "button";          // important: prevents default submit behavior
  btn.textContent = tag;

  btn.addEventListener("click", (event) => {
    event.preventDefault();     // stop default jump/submit
    toggleTag(tag, btn);
  });

  tagList.appendChild(btn);
});


// =======================
// Tag selection handler
// =======================
function toggleTag(tag, btn) {
  if (selectedTags.includes(tag)) {
    selectedTags = selectedTags.filter(t => t !== tag);
    btn.classList.remove("selected");
  } else {
    selectedTags.push(tag);
    btn.classList.add("selected");
  }
  renderSelectedTags();
  renderGallery();
}

// =======================
// Render selected tags at top
// =======================
function renderSelectedTags() {
  // Clear only the pills, keep status text
  selectedTagsBar.innerHTML = "";

  // Status text container (fixed at start)
  const statusText = document.createElement("span");
  statusText.className = "selected-tags-status";

  if (selectedTags.length === 0) {
    statusText.textContent = "Tags Selected: ALL";
  } else {
    statusText.textContent = "Tags Selected: ";
  }
  selectedTagsBar.appendChild(statusText);

  // Pills container to keep pills inline and not disturb layout
  const pillsContainer = document.createElement("span");
  pillsContainer.className = "selected-tags-pills";

  // Selected tags pills
  selectedTags.forEach(tag => {
    const tagEl = document.createElement("button"); 
    tagEl.className = "selected-tag-pill";  
    tagEl.type = "button";        // prevents default
    tagEl.textContent = tag;

    tagEl.addEventListener("click", (event) => {
      event.preventDefault();     // stop jump
      selectedTags = selectedTags.filter(t => t !== tag);

      // Remove highlight from sidebar button
      document.querySelectorAll(".tag-btn").forEach(b => {
        if (b.textContent === tag) b.classList.remove("selected");
      });

      renderSelectedTags();
      renderGallery();
    });

    pillsContainer.appendChild(tagEl);
  });

  selectedTagsBar.appendChild(pillsContainer);
}


// =======================
// Render gallery filtered by tags
// =======================
function renderGallery() {
  gallery.innerHTML = "";
  const filteredProjects = selectedTags.length === 0 
    ? projects 
    : projects.filter(p => p.tags.some(t => selectedTags.includes(t)));

  filteredProjects.forEach(project => {
    const cardLink = document.createElement("a");
    cardLink.href = `project.html?id=${encodeURIComponent(project.title)}`;
    cardLink.className = "project-card-link";

    const card = document.createElement("div");
    card.className = "project-card";

    // ✅ NEW: image wrapper
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "card-image-wrapper";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    imgWrapper.appendChild(img);   // wrap image

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    // ✅ order matters
    card.appendChild(imgWrapper);
    card.appendChild(title);
    card.appendChild(desc);

    cardLink.appendChild(card);
    gallery.appendChild(cardLink);
  });
}

// =======================
// Initial gallery render
// =======================
renderGallery();
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".page-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const page = btn.dataset.page;

      if (page === "PORTFOLIO") {
        window.location.href = "index.html";
      }

      if (page === "RESUME") {
        window.location.href = "resume.html";
      }
    });
  });
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
  