const navbarLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');

function setActiveLink() {
  const currentScroll = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (currentScroll >= sectionTop - sectionHeight / 3) {
      const sectionId = section.getAttribute('id');
      navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === sectionId) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);