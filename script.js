// small interactive scripts: nav toggle, project modal, simple contact form feedback
document.addEventListener('DOMContentLoaded', () => {
  // set footer year
  document.getElementById('year').textContent = new Date().getFullYear();
  const y2 = document.getElementById('year2');
  if (y2) y2.textContent = new Date().getFullYear();

  // nav toggle for small screens
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});

// Project modal content
function openProjectModal(id){
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('projectModalBody');
  let html = '';
  if (id === 1){
    html = `
      <h2>To-Do List Web App</h2>
      <p>Full-stack To-Do application built with HTML/CSS/JS and Spring Boot (H2 DB). Features: add/edit/delete tasks, responsive layout, and persistent backend.</p>
      <p><strong>What I contributed:</strong> Frontend UI, task interactions, and connecting to API endpoints.</p>
      <img src="/Screenshot 2025-10-24 163618.png" alt="project1" style="width:50%;border-radius:8px;margin-top:12px" />
    `;
  } else if (id === 2){
    html = `
      <h2>Tool Rental App (Frontend)</h2>
      <p>Frontend for a tool rental mobile app built using Flutter & Dart. Built responsive screens for browsing tools, rentals and user flow improvements.</p>
      <img src="/pro2.jpg" alt="project2" style="width:30%;border-radius:8px;margin-top:12px" />
    `;
  } else {
    html = `<p>Project details will go here.</p>`;
  }
  body.innerHTML = html;
  modal.setAttribute('aria-hidden', 'false');
}

function closeProjectModal(){
  const modal = document.getElementById('projectModal');
  modal.setAttribute('aria-hidden', 'true');
}

// fake submit handler (client-side only)
function submitForm(e){
  e.preventDefault();
  alert('Thanks! Your message was sent (demo). Replace with your backend or email service.');
  e.target.reset();
}
