const projects = [
  {
    title: "Project 1",
    description: "Description for Project 1",
    details: `Write a long paragraph here.
Second paragraph here.

• You can use bullets too
• Like this`,
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Highlight 1", "Highlight 2"],
    links: { live: "https://example.com/project1", repo: "https://github.com/user/project1" },
    md: "projects/project1.md" 
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
  const button = document.createElement("button");
  const title = document.createElement("h3");
  const subtitle = document.createElement("p");
  button.className = "project-button";

  title.textContent = project.title;
  subtitle.textContent = project.description;
  
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