// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Gallery filter (gallery.html)
  var filterButtons = document.querySelectorAll('.gallery-filter button');
  var galleryItems = document.querySelectorAll('.gallery-grid .g-item');
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var category = btn.getAttribute('data-filter');
      galleryItems.forEach(function (item) {
        var show = category === 'all' || item.getAttribute('data-category') === category;
        item.style.display = show ? '' : 'none';
      });
    });
  });

  // Static forms: prevent submission, show a placeholder confirmation
  document.querySelectorAll('form[data-static-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-submit-note');
      if (note) {
        note.textContent = 'This is a concept site — form submission is not yet connected. Thank you, we will be in touch shortly!';
        note.style.color = '#0b3d66';
      }
    });
  });
});
