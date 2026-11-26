async function loadProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  try {
    const response = await fetch("data/projects.json");
    if (!response.ok) {
      throw new Error("Failed to load projects.json");
    }

    const data = await response.json();
    const projects = Array.isArray(data.projects) ? data.projects : [];

    grid.innerHTML = projects
      .map((project) => {
        const techBadges = (project.technologies || [])
          .map((tech) => `<span class="andalusian-tech-tag">${tech}</span>`)
          .join("");

        const githubButton = project.github
          ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-andalusian-github w-100 mt-auto d-inline-flex align-items-center justify-content-center gap-2">
               <span>View on GitHub</span>
               <span aria-hidden="true">↗</span>
             </a>`
          : "";

        return `
          <div class="col-12 col-md-6 col-lg-6">
            <article class="card andalusian-card h-100 d-flex flex-column">
              <img
                src="${project.image}"
                alt="${project.title}"
                class="card-img-top andalusian-card-img"
                loading="lazy"
              />
              <div class="card-body d-flex flex-column p-4">
                <h3 class="h5 andalusian-card-title mb-2">${project.title}</h3>
                <p class="andalusian-card-desc mb-3">${project.description}</p>
                <div class="d-flex flex-wrap gap-2 mb-4">
                  ${techBadges}
                </div>
                ${githubButton}
              </div>
            </article>
          </div>
        `;
      })
      .join("");
  } catch (error) {
    grid.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning text-center mb-0" role="alert">
          Unable to load projects at the moment. Please run the page via a local server or check <code>projects.json</code>.
        </div>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", loadProjects);



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("contactFeedback");

  if (!form || !feedback) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      feedback.className = "alert alert-danger mt-3";
      feedback.textContent = "Please fill in all required fields with a valid email address.";
      return;
    }

    feedback.className = "alert alert-success mt-3";
    feedback.textContent = "Thank you! Your message has been prepared successfully.";
    form.reset();
    form.classList.remove("was-validated");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("contactFeedback");
  const submitBtn = document.getElementById("submitBtn");

  // ضع بريدك الإلكتروني الذي تريد استقبال الرسائل عليه هنا
  const DESTINATION_EMAIL = "your-email@example.com";

  if (!form || !feedback || !submitBtn) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      feedback.className = "alert alert-danger mt-3";
      feedback.textContent = "Please fill in all required fields with a valid email address.";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      _subject: formData.get("subject"),
      message: formData.get("message"),
      _captcha: "false"
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        feedback.className = "alert alert-success mt-3";
        feedback.textContent = "Thank you! Your message has been sent directly to my email.";
        form.reset();
        form.classList.remove("was-validated");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      feedback.className = "alert alert-danger mt-3";
      feedback.textContent = "Something went wrong while sending your message. Please try again later.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
});