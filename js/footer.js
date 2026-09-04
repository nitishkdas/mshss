// Shared footer markup, injected into <footer id="site-footer-include"> on every page.
document.addEventListener('DOMContentLoaded', function () {
  var mount = document.getElementById('site-footer-include');
  if (!mount) return;

  mount.innerHTML = [
    '<div class="container">',
    '  <div class="footer-grid">',
    '    <div>',
    '      <div class="footer-brand">',
    '        <div class="brand-mark">MS</div>',
    '        <div><div class="name">Morning Star</div><div class="tagline" style="color:rgba(255,255,255,0.55)">Higher Secondary School</div></div>',
    '      </div>',
    '      <p style="font-size:0.9rem;max-width:320px;">Morning Star Higher Secondary School is an English-medium, SEBA-affiliated higher secondary school committed to academic excellence and holistic growth. <em>(Concept site — placeholder content.)</em></p>',
    '      <div class="footer-social">',
    '        <a href="#" aria-label="Facebook">f</a>',
    '        <a href="#" aria-label="Instagram">ig</a>',
    '        <a href="#" aria-label="YouTube">yt</a>',
    '      </div>',
    '    </div>',
    '    <div class="footer-col">',
    '      <h4>Quick Links</h4>',
    '      <ul>',
    '        <li><a href="about.html">About Us</a></li>',
    '        <li><a href="academics.html">Academics</a></li>',
    '        <li><a href="facilities.html">Facilities</a></li>',
    '        <li><a href="gallery.html">Gallery</a></li>',
    '        <li><a href="mandatory-disclosure.html">Mandatory Disclosure</a></li>',
    '      </ul>',
    '    </div>',
    '    <div class="footer-col">',
    '      <h4>For Parents</h4>',
    '      <ul>',
    '        <li><a href="admission.html">Admission</a></li>',
    '        <li><a href="notices.html">Notice Board</a></li>',
    '        <li><a href="#">Careers</a></li>',
    '        <li><a href="#">Downloads &amp; Syllabus</a></li>',
    '        <li><a href="contact.html">Contact Us</a></li>',
    '      </ul>',
    '    </div>',
    '    <div class="footer-col">',
    '      <h4>SEBA Education Links</h4>',
    '      <ul>',
    '        <li><a href="https://site.sebaonline.org/" target="_blank" rel="noopener">SEBA Official Website</a></li>',
    '        <li><a href="https://site.sebaonline.org/results/" target="_blank" rel="noopener">HSLC Results</a></li>',
    '        <li><a href="https://site.sebaonline.org/downloads" target="_blank" rel="noopener">Syllabus &amp; Question Papers</a></li>',
    '        <li><a href="https://sebaservices.in/" target="_blank" rel="noopener">SEBA e-Services Portal</a></li>',
    '        <li><a href="https://site.sebaonline.org/about-us" target="_blank" rel="noopener">About SEBA</a></li>',
    '      </ul>',
    '    </div>',
    '    <div class="footer-col">',
    '      <h4>Get in Touch</h4>',
    '      <ul class="footer-contact">',
    '        <li>📍 School Road, Your City, Assam, India</li>',
    '        <li>✉️ info@mshss.edu.in</li>',
    '        <li>📞 +91 00000 00000</li>',
    '      </ul>',
    '    </div>',
    '  </div>',
    '  <div class="footer-bottom">',
    '    <span>© <span id="footer-year"></span> Morning Star Higher Secondary School. All rights reserved.</span>',
    '    <span>Concept design, inspired in structure by peer SEBA school websites.</span>',
    '  </div>',
    '</div>'
  ].join('');

  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Highlight active nav link based on current page
  var current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });
});
