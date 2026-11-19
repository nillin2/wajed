/* ============================================================
   منطقة التطبيق المشتركة — Shared App Logic
   صفحات الموقع: الرئيسية · المنيو · القصة · المعرض · التواصل
   ============================================================ */
function getCurrentPage() {
  const p = window.location.pathname.toLowerCase().split('?')[0];
  const pages = ['index.html', 'menu.html', 'story.html', 'gallery.html', 'contact.html'];
  const found = pages.find((pg) => p === '/' + pg || p === '/'.concat(pg, '/') || p === pg);
  return found || 'index.html';
}

function getWhatsAppNumber() {
  return RESTAURANT.whatsapp.number;
}

function buildWhatsAppLink(dish) {
  let msg;
  if (dish) {
    const name = currentLang === 'ar' ? dish.nameAr : dish.nameEn;
    msg = currentLang === 'ar'
      ? `مرحبًا، أرغب في طلب ${name}.`
      : `Hello! I would like to order ${name}.`;
  } else {
    const name = currentLang === 'ar' ? RESTAURANT.name : RESTAURANT.nameEn;
    msg = currentLang === 'ar'
      ? `مرحبًا، أرغب في طلب من مطبق ${RESTAURANT.name}.`
      : `Hello! I would like to order from ${RESTAURANT.name}.`;
  }
  const url = `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(msg)}`;
  return url;
}

const WAPP_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M21 2H3a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-8 12.2c-.4 0-.63-.36-.63-.8s.24-.8.63-.8.63.36.63.8-.24.8-.63.8zm4.2 0c-.4 0-.63-.36-.63-.8s.24-.8.63-.8.63.36.63.8-.24.8-.63.8zM12 2C6.5 2 2 6.5 2 12c0 2 .5 3.9 1.4 5.6L2 22l4.7-1.3A10 10 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>';

function buildHeader() {
  const items = [
    { path: 'index.html', key: 'nav.home' },
    { path: 'menu.html', key: 'nav.menu' },
    { path: 'story.html', key: 'nav.story' },
    { path: 'gallery.html', key: 'nav.gallery' },
    { path: 'contact.html', key: 'nav.contact' },
  ];
  const current = getCurrentPage();
  const links = items
    .map((it) => {
      const active = current === it.path ? ' active' : '';
      return `      <a href="${it.path}" class="nav-link${active}" data-i18n="${it.key}">${t(it.key)}</a>`;
    })
    .join('\n');
  const isAr = currentLang === 'ar';
  return `
<header class="site-header" id="siteHeader">
  <div class="container header-inner">
    <a href="index.html" class="brand" aria-label="${t('site.name')}">
      <img class="brand-mark" src="images/logo-mark.svg" alt="" width="46" height="46">
      <span class="brand-text" data-i18n="site.name">وجد</span>
    </a>
    <nav class="main-nav" id="mainNav" aria-label="Main navigation">
${links}
    </nav>
    <div class="header-actions">
      <div class="lang-switch" role="group" aria-label="Language / اللغة">
        <button type="button" class="lang-btn${currentLang === 'ar' ? ' active' : ''}" data-lang="ar" data-i18n="lang.ar">العربية</button>
        <button type="button" class="lang-btn${currentLang === 'en' ? ' active' : ''}" data-lang="en" data-i18n="lang.en">English</button>
      </div>
      <a href="${buildWhatsAppLink(null)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm header-order" data-wa-generic>
        ${WAPP_ICON}
        <span class="btn-label" data-i18n="nav.order">اطلب عبر واتساب</span>
      </a>
      <button type="button" class="nav-toggle" id="navToggle" aria-label="${t('header.openMenu')}" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;
}

function buildFooter() {
  const year = new Date().getFullYear();
  const socials = `
      <div class="footer-social">
        <a href="https://instagram.com/" target="_blank" rel="noopener" data-social="instagram" aria-label="Instagram">IG</a>
        <a href="https://tiktok.com/" target="_blank" rel="noopener" data-social="tiktok" aria-label="TikTok">TT</a>
      </div>`;
  return `
<footer class="site-footer" id="siteFooter">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-brand">
          <img class="brand-mark" src="images/logo-mark.svg" alt="" width="46" height="46">
          <span class="brand-text" data-i18n="site.name">وجد</span>
        </div>
        <p data-i18n="footer.aboutText">نكهة إيطالية أمريكية من مختبر النكهات، حيث تلتقي أصالة إيطاليا العميقة بشغف أمريكا.</p>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.quickLinks">روابط سريعة</h4>
        <div class="footer-links">
          <a href="index.html" data-i18n="nav.home">الرئيسية</a>
          <a href="menu.html" data-i18n="nav.menu">المنيو</a>
          <a href="story.html" data-i18n="nav.story">قصتنا</a>
          <a href="gallery.html" data-i18n="nav.gallery">معرض الصور</a>
          <a href="contact.html" data-i18n="nav.contact">تواصل معنا</a>
        </div>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.contact">تواصل معنا</h4>
        <div class="footer-links">
          <a href="https://wa.me/${getWhatsAppNumber()}" target="_blank" rel="noopener" data-wa-generic>واتساب</a>
          <a href="tel:${RESTAURANT.contact.phone || '0000000000'}" data-i18n="contact.phoneLabel">الهاتف</a>
        </div>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.hours">ساعات العمل</h4>
        <div class="footer-links">
          <span data-i18n="contact.hoursLabel">ساعات العمل</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${year} ${t('site.name')} — <span data-i18n="footer.rights">جميع الحقوق محفوظة</span>.</p>
    </div>
  </div>
</footer>`;
}

function dishImageFor(dish) {
  const map = {
    burgers: 'burger.svg',
    pizza: 'pizza.svg',
    pasta: 'pasta.svg',
    appetizers: 'arancini.svg',
    signatures: 'meatball-sub.svg',
    desserts: 'tiramisu.svg',
    drinks: 'drink.svg',
  };
  if (dish.image) return 'images/dishes/' + dish.image;
  return 'images/dishes/' + (map[dish.category] || 'burger.svg');
}

function dishBadgeHTML(dish) {
  if (!dish.badge) return '';
  const label = dish.badge === 'signature' ? t('menu.signature') : t('menu.popular');
  const cls = dish.badge === 'signature' ? 'alt' : '';
  return `<span class="badge ${cls}">${label}</span>`;
}

function dishCardHTML(dish) {
  const price = `<div class="price">${dish.price}<small>${currentLang === 'ar' ? 'ريال سعودي' : 'SAR'}</small></div>`;
  const orderBtn = `<a class="btn btn-whatsapp btn-sm" href="${buildWhatsAppLink(dish)}" target="_blank" rel="noopener" data-wa-dish="${dish.id}">${WAPP_ICON}<span>${t('menu.orderThisDish')}</span></a>`;
  return `
<article class="dish-card">
  <div class="dish-card-media">
    <img src="${dishImageFor(dish)}" alt="${dish.nameAr}" loading="lazy">
    ${dishBadgeHTML(dish)}
  </div>
  <div class="dish-card-body">
    <h3 class="dish-card-title-ar">${dish.nameAr}</h3>
    <p class="dish-card-title-en">${dish.nameEn}</p>
    <p class="dish-card-desc">${dish.descAr}</p>
    <p class="dish-card-desc dish-card-desc-alt">${dish.descEn}</p>
    <div class="dish-card-meta">
      ${price}
      ${orderBtn}
    </div>
  </div>
</article>`;
}

function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = DISHES.filter((d) => d.featured).slice(0, 6);
  grid.innerHTML = featured.map(dishCardHTML).join('');
}

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  const filters = document.getElementById('menuFilters');
  if (!grid || !filters) return;

  let activeCat = 'all';

  function render() {
    const dishes = getDishesByCategory(activeCat);
    if (!dishes.length) {
      grid.innerHTML = `<div class="empty-note text-center muted" style="grid-column: 1/-1; padding: 2rem;">${t('menu.empty') || 'لا توجد أطباق في هذه الفئة'}</div>`;
      return;
    }
    grid.innerHTML = dishes.map(dishCardHTML).join('');
  }

  filters.innerHTML =
    `<button type="button" class="filter-btn${activeCat === 'all' ? ' active' : ''}" data-cat="all">${t('menu.all')}</button>` +
    MENU_CATEGORIES.map(
      (c) => `<button type="button" class="filter-btn${activeCat === c.id ? ' active' : ''}" data-cat="${c.id}">${currentLang === 'ar' ? c.name : c.nameEn}</button>`
    ).join('');

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    activeCat = btn.getAttribute('data-cat');
    document.querySelectorAll('#menuFilters .filter-btn').forEach((b) => b.classList.toggle('active', b.getAttribute('data-cat') === activeCat));
    render();
  });

  render();
}

function renderContact() {
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setText('contactPhone', RESTAURANT.contact.phone || t('contact.pending'));
  setText('contactAddress', RESTAURANT.contact.address || t('contact.pending'));
  setText('contactAddressEn', RESTAURANT.contact.addressEn || RESTAURANT.contact.address || t('contact.pending'));
  setText('contactMaps', RESTAURANT.contact.mapsUrl || '#');
  setText('contactInstagram', RESTAURANT.contact.socials.instagram ? `https://instagram.com/${RESTAURANT.contact.socials.instagram.replace(/^@/, '')}` : '#');
  setText('contactTiktok', RESTAURANT.contact.socials.tiktok ? `https://tiktok.com/@${RESTAURANT.contact.socials.tiktok.replace(/^@/, '')}` : '#');
  setText('contactHours', RESTAURANT.contact.hours.length ? RESTAURANT.contact.hours.join(' · ') : t('contact.pending'));
}

function init() {
  const headerEl = document.getElementById('siteHeader');
  const footerEl = document.getElementById('siteFooter');
  if (headerEl) headerEl.innerHTML = buildHeader();
  if (footerEl) footerEl.innerHTML = buildFooter();

  setLanguage(currentLang);
  document.title = t('site.title');

  // قائمة التنقل الجوال
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? t('header.closeMenu') : t('header.openMenu'));
    });
    mainNav.addEventListener('click', (e) => {
      const link = e.target.closest('.nav-link');
      if (link) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // تبديل اللغة
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      const toggle = document.getElementById('navToggle');
      const mainNav = document.getElementById('mainNav');
      if (mainNav && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        if (toggle) { toggle.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
      }
    });
  });

  // روابط الطلب عبر واتساب
  document.querySelectorAll('[data-wa-generic], [data-wa-dish]').forEach((el) => {
    const dish = el.getAttribute('data-wa-dish') ? getDishById(el.getAttribute('data-wa-dish')) : null;
    el.setAttribute('href', buildWhatsAppLink(dish));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  // العرض
  renderFeatured();
  renderMenu();
  renderContact();

  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);
