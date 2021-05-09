const nav = document.querySelector('nav');

let timer;
window.addEventListener('scroll', function () {

  clearTimeout(timer);
  timer = setTimeout(scrollToSection, 500);
});
const scrollToSection = function () {
  link = nav.querySelector('.link-active').firstChild;
  if (location.href !== link.href) {
    location.href = link.href
  }
};