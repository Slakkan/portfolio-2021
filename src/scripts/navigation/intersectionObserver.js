
const sections = Array.from(document.querySelectorAll('section'));
const links = Array.from(document.querySelectorAll('nav > ul > li'));

const mobileOptions = {
  rootMargin: "0px 0px -1px 0px",
  threshold: 0.5
};

const desktopOptions = {
  rootMargin: "-100px 0px 0px 0px",
  threshold: 0.5
};

const desktopObserver = new IntersectionObserver((entries) => {
  if (window.innerWidth >= 768) {
    observeFunction(entries);
  }
}, desktopOptions);

const mobileObserver = new IntersectionObserver((entries) => {
  if (window.innerWidth < 768) {
    observeFunction(entries);
  }
}, mobileOptions);

const observeFunction = (entries) => {
  entries.forEach(entry => {
    const index = sections.findIndex(section => section === entry.target);
    if (entry.isIntersecting) {
      links[index].classList.add('link-active');
    } else {
      links[index].classList.remove('link-active');
    }
  });
};

sections.forEach(section => mobileObserver.observe(section));
sections.forEach(section => desktopObserver.observe(section));
