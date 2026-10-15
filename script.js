document.addEventListener('DOMContentLoaded', () => {
  // Navigation State & View Routing
  const views = {
    overview: document.getElementById('view-overview'),
    iku: document.getElementById('view-iku'),
    edupulse: document.getElementById('view-edupulse')
  };

  const mainNav = document.getElementById('main-nav');
  const caseStudyNav = document.getElementById('case-study-nav');

  function switchView(viewName) {
    Object.keys(views).forEach(key => {
      if (key === viewName) {
        views[key].classList.remove('hidden');
      } else {
        views[key].classList.add('hidden');
      }
    });

    if (viewName === 'overview') {
      mainNav.classList.remove('hidden');
      caseStudyNav.classList.add('hidden');
    } else {
      mainNav.classList.add('hidden');
      caseStudyNav.classList.remove('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Event Listeners for Views
  document.getElementById('brand-button').addEventListener('click', () => switchView('overview'));
  
  document.querySelectorAll('.open-iku-btn').forEach(btn => {
    btn.addEventListener('click', () => switchView('iku'));
  });

  document.querySelectorAll('.open-edupulse-btn').forEach(btn => {
    btn.addEventListener('click', () => switchView('edupulse'));
  });

  document.querySelectorAll('.back-to-overview').forEach(btn => {
    btn.addEventListener('click', () => switchView('overview'));
  });

  document.getElementById('nav-iku-btn').addEventListener('click', () => switchView('iku'));
  document.getElementById('nav-edupulse-btn').addEventListener('click', () => switchView('edupulse'));

  // Theme Toggle Mechanism
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    if (isLight) {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
  });

  // Copy Email Functionality
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyEmailText = document.getElementById('copy-email-text');
  const email = 'alexsparks007@gmail.com';

  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(email);
    copyEmailText.textContent = 'Copied to Clipboard!';
    setTimeout(() => {
      copyEmailText.textContent = email;
    }, 2000);
  });

  // Contact Modal Handler
  const contactModal = document.getElementById('contact-modal');
  const openModalBtn = document.getElementById('contact-modal-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');

  openModalBtn.addEventListener('click', () => contactModal.classList.remove('hidden'));
  closeModalBtn.addEventListener('click', () => contactModal.classList.add('hidden'));

  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      contactModal.classList.add('hidden');
    }
  });
});