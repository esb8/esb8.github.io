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

