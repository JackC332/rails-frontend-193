import 'bootstrap';
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { loadDynamicBannerText } from '../components/banner';
import { bindSweetAlertButtonDemo, toggleBreedSelect } from '../components/home';

const homePage = document.querySelector('.pages.home');
if (homePage) {
  initUpdateNavbarOnScroll();
  loadDynamicBannerText();
  bindSweetAlertButtonDemo();
  toggleBreedSelect();
}
