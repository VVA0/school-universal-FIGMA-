gsap.registerPlugin(ScrollTrigger); //! Подключаем плагин (который скачала на сайте)

gsap.from(".header__top", {
  duration: 1,
  ease: "bounce",
  y: "-100%",
});

gsap.from(".body__text", {
  duration: 1,
  ease: "sine.out",
  y: "100%",
  opacity: 0,
});

gsap.from(".body__title", {
  duration: 1,
  ease: "sine.out",
  y: "100%",
  opacity: 0,
  delay: 1,
});

gsap.from(".body__subtitle", {
  duration: 1,
  ease: "sine.out",
  y: "100%",
  opacity: 0,
  delay: 2,
});

gsap.from(".header__body .header__btn", {
  duration: 1,
  ease: "sine.out",
  y: "100%",
  opacity: 0,
  delay: 3,
});

gsap.from(".pack__item", {
  duration: 1,
  ease: "sine.out",
  x: "-100%",
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: ".pack__body",
});

gsap.from(".student__image", {
  duration: 1,
  ease: "sine.out",
  x: "-100%",
  opacity: 0,
  scrollTrigger: ".student__row",
});

gsap.from(".video__item", {
  duration: 1,
  ease: "sine.out",
  x: "100%",
  opacity: 0,
  scrollTrigger: ".video__body",
  stagger: 0.5,
});

gsap.from(".teachers__card", {
  duration: 1,
  ease: "sine.out",
  opacity: 0,
  scrollTrigger: ".teachers__cards",
  stagger: 0.5,
  scale: 0,
});

gsap.from(".courses__card-up", {
  duration: 1,
  ease: "sine.out",
  scrollTrigger: ".courses__cards",
  stagger: 1.5,
  y: "-100%",
  opacity: 0,
});

gsap.from(".courses__card-down", {
  duration: 1,
  ease: "sine.out",
  scrollTrigger: ".courses__cards",
  stagger: 1,
  delay: 1,
  y: "100%",
  opacity: 0,
});

gsap.from(".client__search", {
  duration: 1,
  ease: "bounce.out",
  scrollTrigger: ".client__search",
  y: "100%",
  opacity: 0,
  scale: 0,
});

gsap.from(".info", {
  duration: 1,
  ease: "ease",
  scrollTrigger: ".links__container",
  opacity: 0,
  scale: 0,
  stagger: 0.5,
});

gsap.from(".footer", {
  duration: 1,
  ease: "bounce.out",
  scrollTrigger: ".links__container",
  opacity: 0,
  y: "100%",
});
