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
      // ✅ Project Link Button (GitHub)
      // =======================
      const linksDiv = document.getElementById("project-links");
      linksDiv.innerHTML = "";

      if (project.link) {
        const a = document.createElement("a");
        a.href = project.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.classList.add("project-link-btn");

        // GitHub icon (SVG)
        a.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
            -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
            2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
            0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21
            2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27
            1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
            .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95
            .29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2
            0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span>GitHub Repository</span>
        `;

        linksDiv.appendChild(a);
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