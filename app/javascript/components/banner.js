import Typed from 'typed.js';

const loadDynamicBannerText = function() {
  new Typed('#js-typed-text', {
    strings: ["GSP", "Rotweiller", "Golden Retriever"],
    typeSpeed: 40,
    loop: true
  });
}

export { loadDynamicBannerText };
