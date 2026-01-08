document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const menuLinks = document.querySelectorAll('.nav-item');

  menuBtn.addEventListener('change', function() {
    if (this.checked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.checked = false;
      document.body.style.overflow = '';
    });
  });
});