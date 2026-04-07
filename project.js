import { projects } from "./project-data.js";

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

console.log("Project ID:", projectId);

// ✅ Find project by title
const project = projects.find(p => p.title === projectId);

if (project && project.projectContent) {
  fetch(project.projectContent)
    .then(res => {
      if (!res.ok) throw new Error("Failed to load markdown file");
      return res.text();
    })
    .then(md => {
      document.getElementById("project-content").innerHTML = marked.parse(md);

      // =======================
      // Main Image
      // =======================
      const mediaDiv = document.getElementById("project-media");
      mediaDiv.innerHTML = "";

      if (project.image) {
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title;
        img.classList.add("project-img");
        mediaDiv.appendChild(img);
      }

      // =======================
      // ✅ TAGS (NEW)
      // =======================
      const tagsDiv = document.getElementById("project-tags");
      tagsDiv.innerHTML = "";

      if (project.tags && project.tags.length > 0) {
        project.tags.forEach(tag => {
          const btn = document.createElement("button");
          btn.className = "tag-btn";   // reuse your existing styling
          btn.type = "button";
          btn.textContent = tag;

          // OPTIONAL: make clickable later if you want filtering navigation
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = `index.html?tag=${encodeURIComponent(tag)}`;
          });

          tagsDiv.appendChild(btn);
        });
      }

      // =======================
      // Gallery
      // =======================
      const galleryDiv = document.querySelector(".gallery-projects");
      galleryDiv.innerHTML = "";

      if (project.projectGallery) {
        project.projectGallery.forEach(src => {
          const a = document.createElement("a");
          a.href = src;
          a.target = "_blank";
          a.classList.add("gallery-link");

          const img = document.createElement("img");
          img.src = src;
          img.alt = project.title + " gallery";
          img.classList.add("gallery-img");

          a.appendChild(img);
          galleryDiv.appendChild(a);
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


// =======================
// Page navigation
// =======================
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