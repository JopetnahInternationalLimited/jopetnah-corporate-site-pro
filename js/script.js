// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Accordion (Services page)
  document.querySelectorAll('.accordion-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.accordion-item');
      var panel = item.querySelector('.accordion-panel');
      var isOpen = item.classList.contains('open');

      // close all others
      document.querySelectorAll('.accordion-item.open').forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.accordion-panel').style.maxHeight = null;
          other.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        panel.style.maxHeight = null;
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Open division via URL hash (e.g. services.html#division-3)
  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target && target.classList.contains('accordion-item')) {
      target.querySelector('.accordion-trigger').click();
      setTimeout(function () { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 120);
    }
  }
});
