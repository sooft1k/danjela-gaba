// ─── MODALS öffnen/schließen ──────────────────────────
function openModal(id) {
  const tryOpen = (attempts) => {
    const el = document.getElementById(id);
    if (el) {
      document.documentElement.style.scrollBehavior = 'auto';
      el.classList.add('open');
    } else if (attempts > 0) {
      setTimeout(() => tryOpen(attempts - 1), 100);
    }
  };
  tryOpen(20);
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
  document.documentElement.style.scrollBehavior = 'smooth';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
  }
});

// ─── NAVIGATION SCROLL ────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── MOBILE NAV ───────────────────────────────────────
function toggleNav() {
  const btn = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  btn.classList.toggle('open');
  if (mobileNav) mobileNav.classList.toggle('open');
  document.body.style.overflow = btn.classList.contains('open') ? 'hidden' : '';
}

// ─── FAQ ACCORDION ────────────────────────────────────
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-answer').style.maxHeight = '0';
  });
  if (!isOpen) {
    item.classList.add('open');
    const answer = item.querySelector('.faq-answer');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// ─── SCROLL REVEAL ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// ─── LIGHTBOX ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="lightbox-overlay" id="lightbox">
      <button class="lightbox-close" onclick="closeLightbox()">×</button>
      <button class="lightbox-prev" onclick="lightboxNav(-1)">‹</button>
      <img id="lightbox-img" src="" alt="">
      <button class="lightbox-next" onclick="lightboxNav(1)">›</button>
      <div class="lightbox-counter" id="lightbox-counter"></div>
    </div>
  `);
  initLightbox();
});

let lightboxImages = [];
let lightboxIndex = 0;

function initLightbox() {
  const imgs = document.querySelectorAll('.proj-gallery img, .proj-detail-hero img');
  imgs.forEach((img, i) => {
    img.addEventListener('click', () => openLightbox(imgs, i));
  });
}

function openLightbox(imgs, index) {
  lightboxImages = Array.from(imgs);
  lightboxIndex = index;
  showLightboxImage();
  document.getElementById('lightbox').classList.add('open');
}

function showLightboxImage() {
  const img = lightboxImages[lightboxIndex];
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-img').alt = img.alt;
  if (lightboxImages.length > 1) {
    document.getElementById('lightbox-counter').textContent =
      (lightboxIndex + 1) + ' / ' + lightboxImages.length;
  }
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  showLightboxImage();
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

document.addEventListener('click', e => {
  if (e.target.id === 'lightbox') closeLightbox();
});

document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('open')) return;
  if (e.key === 'ArrowRight') lightboxNav(1);
  if (e.key === 'ArrowLeft') lightboxNav(-1);
  if (e.key === 'Escape') closeLightbox();
});

// ─── SMOOTH PAGE TRANSITIONS ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href &&
      href.endsWith('.html') &&
      !href.startsWith('http') &&
      !link.getAttribute('onclick') &&
      href !== '#'
    ) {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.add('page-out');
        setTimeout(() => { window.location.href = href; }, 280);
      });
    }
  });
});

// ─── SMOOTH SCROLL ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});




// ─── MODALS direkt eingebettet ────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('beforeend', `
    <div id="impressum" class="modal" onclick="if(event.target===this)closeModal('impressum')">
      <div class="modal-content">
        <button class="modal-close" onclick="closeModal('impressum')">&times;</button>
        <h2>Impressum</h2>
        <h3>Angaben gemäß § 5 ECG und § 25 MedienG</h3>
        <p><strong>Danjela Gaba</strong><br>Reisenbauer-Ring 7/1/6<br>2351 Wiener Neudorf<br>Österreich</p>
        <h3>Kontakt</h3>
        <p>Telefon: +43 676 693 1597<br>E-Mail: danjela.gaba@hotmail.com</p>
        <h3>Berufsbezeichnung</h3>
        <p>Diplom-Ingenieurin für Architektur · Verliehen in: Österreich</p>
        <h3>Umsatzsteuer-ID</h3>
        <p>ATU57864038</p>
        <h3>Haftungsausschluss</h3>
        <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität kann keine Gewähr übernommen werden. Für Inhalte externer Links sind ausschließlich die jeweiligen Anbieter verantwortlich.</p>
        <h3>Urheberrecht</h3>
        <p>Die durch die Seitenbetreiberin erstellten Inhalte unterliegen dem österreichischen Urheberrecht. Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung.</p>
        <h3>Stand</h3>
        <p>März 2026</p>
      </div>
    </div>
    <div id="datenschutz" class="modal" onclick="if(event.target===this)closeModal('datenschutz')">
      <div class="modal-content">
        <button class="modal-close" onclick="closeModal('datenschutz')">&times;</button>
        <h2>Datenschutzerklärung</h2>
        <h3>1. Verantwortliche Stelle</h3>
        <p><strong>Danjela Gaba</strong><br>Reisenbauer-Ring 7/1/6<br>2351 Wiener Neudorf<br>Österreich<br>Telefon: +43 676 693 1597 · E-Mail: danjela.gaba@hotmail.com</p>
        <h3>2. Datenerfassung</h3>
        <p>Ihre personenbezogenen Daten werden nur erhoben, wenn Sie uns diese aktiv mitteilen, z. B. über das Kontaktformular.</p>
        <h3>3. Hosting</h3>
        <p>Diese Website wird gehostet bei: [Hier Hostinganbieter eintragen].</p>
        <h3>4. Kontaktformular</h3>
        <p>Die übermittelten Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht.</p>
        <h3>5. Rechtsgrundlage</h3>
        <p>Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b und lit. f DSGVO.</p>
        <h3>6. Ihre Rechte (DSGVO)</h3>
        <ul>
          <li>Auskunft über Ihre personenbezogenen Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung personenbezogener Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          <li>Beschwerderecht bei der Datenschutzbehörde: www.dsb.gv.at</li>
        </ul>
        <h3>7. Cookies &amp; Analyse</h3>
        <p>Diese Website verwendet derzeit keine Cookies oder Tracking-Tools.</p>
        <h3>8. SSL/TLS-Verschlüsselung</h3>
        <p>Die Website nutzt SSL/TLS-Verschlüsselung.</p>
        <h3>9. Speicherdauer</h3>
        <p>Daten werden nur solange gespeichert, wie der Zweck der Verarbeitung besteht.</p>
        <h3>Stand</h3>
        <p>März 2026</p>
      </div>
    </div>
  `);
});
