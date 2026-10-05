(function () {
  'use strict';

  var POPUP_ID = 'schmersal-promo-q4-2026';
  var SESSION_KEY = 'schmersal_promo_q4_2026_shown';
  var END_AT = Date.parse('2026-12-31T16:59:59Z');
  var LINE_URL = 'https://lin.ee/jsRmrXQ';
  var IMAGE_URL = 'https://cdn.jsdelivr.net/gh/MKTSCHMSTH/schmersal-promotions@main/q4-2026/promo-q4-2026.jpg?v=20261002';
  var PROMOTION_NAME = 'Q4 2026 Machine Safety Promotion';

  if (Date.now() > END_AT || document.getElementById(POPUP_ID)) return;

  try {
    if (sessionStorage.getItem(SESSION_KEY)) return;
  } catch (error) {}

  window.setTimeout(function () {
    if (Date.now() > END_AT || document.getElementById(POPUP_ID)) return;

    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch (error) {}

    var overlay = document.createElement('div');
    overlay.id = POPUP_ID;
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'โปรโมชัน Schmersal Thailand ไตรมาส 4 ปี 2026');
    overlay.innerHTML =
      '<style>' +
        '#' + POPUP_ID + '{position:fixed;inset:0;z-index:2147483640;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,.72);opacity:0;transition:opacity .22s ease;box-sizing:border-box}' +
        '#' + POPUP_ID + '.is-visible{opacity:1}' +
        '#' + POPUP_ID + ' *{box-sizing:border-box}' +
        '#' + POPUP_ID + ' .schmersal-promo-card{position:relative;width:min(520px,90vw);max-height:calc(100vh - 32px);filter:drop-shadow(0 18px 45px rgba(0,0,0,.38))}' +
        '#' + POPUP_ID + ' .schmersal-promo-link{display:block;border-radius:10px;overflow:hidden;outline-offset:4px;background:#003575}' +
        '#' + POPUP_ID + ' .schmersal-promo-image{display:block;width:100%;height:auto;max-height:calc(100vh - 32px);object-fit:contain}' +
        '#' + POPUP_ID + ' .schmersal-promo-close{position:absolute;top:-13px;right:-13px;z-index:2;width:42px;height:42px;border:2px solid #fff;border-radius:50%;background:#003575;color:#fff;font:700 27px/36px Arial,sans-serif;text-align:center;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,.35)}' +
        '#' + POPUP_ID + ' .schmersal-promo-close:hover,#' + POPUP_ID + ' .schmersal-promo-close:focus{background:#0759b7;outline:3px solid rgba(255,255,255,.75)}' +
        '@media (max-width:480px){#' + POPUP_ID + '{padding:12px}#' + POPUP_ID + ' .schmersal-promo-card{width:min(390px,92vw)}#' + POPUP_ID + ' .schmersal-promo-close{top:-10px;right:-8px;width:40px;height:40px}}' +
        '@media (prefers-reduced-motion:reduce){#' + POPUP_ID + '{transition:none}}' +
      '</style>' +
      '<div class="schmersal-promo-card">' +
        '<button type="button" class="schmersal-promo-close" aria-label="ปิดหน้าต่างโปรโมชัน">&times;</button>' +
        '<a class="schmersal-promo-link" href="' + LINE_URL + '" target="_blank" rel="noopener noreferrer" aria-label="เพิ่ม LINE Schmersal Thailand เพื่อสอบถามโปรโมชัน">' +
          '<img class="schmersal-promo-image" src="' + IMAGE_URL + '" alt="โปรโมชัน Schmersal Thailand ลดสูงสุด 60 เปอร์เซ็นต์ ถึง 31 ธันวาคม 2026">' +
        '</a>' +
      '</div>';

    document.body.appendChild(overlay);
    window.requestAnimationFrame(function () {
      overlay.classList.add('is-visible');
      var closeButton = overlay.querySelector('.schmersal-promo-close');
      if (closeButton) closeButton.focus({ preventScroll: true });
    });

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'promo_popup_view', promotion_name: PROMOTION_NAME });

    function closePopup(method) {
      window.dataLayer.push({
        event: 'promo_popup_close',
        promotion_name: PROMOTION_NAME,
        close_method: method
      });
      overlay.classList.remove('is-visible');
      window.setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 220);
      document.removeEventListener('keydown', onKeydown);
    }

    function onKeydown(event) {
      if (event.key === 'Escape') closePopup('escape');
    }

    overlay.querySelector('.schmersal-promo-close').addEventListener('click', function () {
      closePopup('button');
    });

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) closePopup('backdrop');
    });

    overlay.querySelector('.schmersal-promo-link').addEventListener('click', function () {
      window.dataLayer.push({
        event: 'promo_popup_click',
        promotion_name: PROMOTION_NAME,
        destination: 'line'
      });

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Contact', {
          contact_method: 'line',
          source: 'promo_popup'
        });
      }
    });

    document.addEventListener('keydown', onKeydown);
  }, 3000);
})();
