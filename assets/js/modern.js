(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.innerHTML = open ? '&times;' : '&#9776;';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '&#9776;';
    }));
  }
  const backTop = document.querySelector('.back-top');
  const updateScroll = () => { if (backTop) backTop.classList.toggle('visible', window.scrollY > 450); };
  window.addEventListener('scroll', updateScroll, { passive: true }); updateScroll();
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && !card.dataset.category.split(' ').includes(filter));
    });
  }));
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(data.get('subject') || 'Website enquiry');
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    window.location.href = `mailto:miraclenwokeocha4534@gmail.com?subject=${subject}&body=${body}`;
  });
  document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());
})();
