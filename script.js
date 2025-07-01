let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Student of Information Technology'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 120,
    loop: true,
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    // Ambil target tujuan link
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault(); // cegah scroll default

      // Scroll ke target manual
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Trigger AOS dengan scroll kecil setelah delay
      setTimeout(() => {
        window.scrollBy(0, -1);
      }, 600);
    }
  });
});