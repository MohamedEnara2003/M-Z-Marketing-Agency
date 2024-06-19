"use strict";

//intro page

const Intro1 = document.querySelector(".intro1");
const Intro2 = document.querySelector(".intro2");
const IntroImage1 = document.querySelector(".image__intro--1");
const IntroImage2 = document.querySelector(".image__intro--2");

const loadingImage = setTimeout(function () {
  IntroImage1.style.opacity = 1;
  IntroImage2.style.opacity = 1;
}, 1500);

const loading = setTimeout(function () {
  Intro1.style.width = 0;
  Intro2.style.width = 0;
}, 3000);

/////////////////////////////////////////////////////////////////////////
const taps = document.querySelectorAll(".btn__tab");
const tabsContainers = document.querySelector(".button-container");
const tabsContent = document.querySelectorAll(".all__slide");
const btnsSliderArrows = document.querySelectorAll(".slider__btn");
const titlesCategories = document.querySelectorAll(".titles__sliders");
const dotsContainer = document.querySelectorAll(".all__dots");

tabsContainers.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".btn__tab");

  if (!clicked) return;

  tabsContent.forEach((c) => c.classList.remove("video-active"));
  taps.forEach((t) => t.classList.remove("btn__tab--active"));
  btnsSliderArrows.forEach((t) => t.classList.remove("btn__active"));
  titlesCategories.forEach((t) => (t.style.opacity = 0));
  dotsContainer.forEach((d) => d.classList.add("hidden"));
  clicked.classList.add("btn__tab--active");

  document
    .querySelector(`.slide--${clicked.dataset.tab}`)
    .classList.add("video-active");

  document
    .querySelector(`.video__two--${clicked.dataset.tab}`)
    .classList.add("video-active");
  document
    .querySelector(`.video__three--${clicked.dataset.tab}`)
    .classList.add("video-active");
  document
    .querySelector(`.video__four--${clicked.dataset.tab}`)
    .classList.add("video-active");
    document
      .querySelector(`.video__five--${clicked.dataset.tab}`)
      .classList.add("video-active");
    document
      .querySelector(`.video__sex--${clicked.dataset.tab}`)
      .classList.add("video-active");
      

    
      document
    .querySelector(`.slider__btn--left--${clicked.dataset.tab}`)
    .classList.add("btn__active");

  document
    .querySelector(`.slider__btn--right--${clicked.dataset.tab}`)
    .classList.add("btn__active");

  document.querySelector(
    `.title__slider--${clicked.dataset.tab}`
  ).style.opacity = 1;

  document
    .querySelector(`.dots--${clicked.dataset.tab}`)
    .classList.remove("hidden");

  if ((Videos.style.transform = "translateX(0)")) {
    pausedReel1.muted = true;
    pausedReel2.muted = true;
    pausedReel3.muted = true;
    pausedReel4.muted = true;
    pausedReel5.muted = true;
    pausedReel6.muted = true
    pausedMotion1.muted = true;
    pausedMotion2.muted = true;
    pausedMotion3.muted = true;
    pausedMotion4.muted = true;
    pausedMotion5.muted = true;
    pausedMotion6.muted = true;
  } else {
    pausedReel1.muted = false;
    pausedReel2.muted = false;
    pausedReel3.muted = false;
    pausedReel4.muted = false;
    pausedReel5.muted = false;
    pausedReel6.muted = false
    pausedMotion1.muted = false;
    pausedMotion2.muted = false;
    pausedMotion3.muted = false;
    pausedMotion4.muted = false;
    pausedMotion5.muted = false;
    pausedMotion6.muted = false;
  }
});

////////////////////////////////////////////////////////////////////
// slider videos
//
const slider = document.querySelector(".slider");
const Videos = document.querySelector(".videos");
const dotsReel = document.querySelector(".dots--1");
const dotsMotion = document.querySelector(".dots--2");
const dotsDesiagn = document.querySelector(".dots--3");

const slides = document.querySelectorAll(".slide--1");
const btnLeftMotion1 = document.querySelector(".slider__btn--left--1");
const btnRightMotion1 = document.querySelector(".slider__btn--right--1");
const pausedReel1 = document.querySelector(".paused__reel--1");
const pausedReel2 = document.querySelector(".paused__reel--2");
const pausedReel3 = document.querySelector(".paused__reel--3");
const pausedReel4 = document.querySelector(".paused__reel--4");
const pausedReel5 = document.querySelector(".paused__reel--5");
const pausedReel6 = document.querySelector(".paused__reel--6");


const sliderReels = function () {
  let curslide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsReel.insertAdjacentHTML(
        "beforeend",
        `<button type="button" class="dots__tap"
    data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__tap")
      .forEach((dot) => dot.classList.remove("dots__active--reel"));

    document
      .querySelector(`.dots__tap[data-slide="${slide}"]`)
      .classList.add("dots__active--reel");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}% )`)
    );

    if ((Videos.style.transform = "translateX(0)")) {
      pausedReel1.muted = true;
      pausedReel2.muted = true;
      pausedReel3.muted = true;
      pausedReel4.muted = true;
      pausedReel5.muted = true;
      pausedReel6.muted = true;
      // pausedReel6.muted = true
      // pausedReel7.muted = true
    } else {
      pausedReel1.muted = false;
      pausedReel2.muted = false;
      pausedReel3.muted = false;
      pausedReel4.muted = false;
      pausedReel5.muted = false;
      pausedReel6.muted = false;
      // pausedReel6.muted = false
      // pausedReel7.muted = false
    }
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();

  const nextSlide = function () {
    if (curslide === maxSlide - 1) {
      curslide = 0;
    } else {
      curslide++;
    }
    goToSlide(curslide);
    activateDot(curslide);
  };

  const prevSlide = function () {
    if (curslide === 0) {
      curslide = maxSlide - 1;
    } else {
      curslide--;
    }
    goToSlide(curslide);
    activateDot(curslide);
  };

  btnRightMotion1.addEventListener("click", nextSlide);
  btnLeftMotion1.addEventListener("click", prevSlide);

  dotsReel.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__tap")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });
};
sliderReels();
////////////////////////////////////////////////////////////////////
const slides2 = document.querySelectorAll(".slide--2");
const btnLeftMotion2 = document.querySelector(".slider__btn--left--2");
const btnRightMotion2 = document.querySelector(".slider__btn--right--2");
const pausedMotion1 = document.querySelector(".paused__motion--1");
const pausedMotion2 = document.querySelector(".paused__motion--2");
const pausedMotion3 = document.querySelector(".paused__motion--3");
const pausedMotion4 = document.querySelector(".paused__motion--4");
const pausedMotion5 = document.querySelector(".paused__motion--5");
const pausedMotion6 = document.querySelector(".paused__motion--6");

const sliderMotion = function () {
  
  let curslide2 = 0;
  const maxSlide2 = slides2.length;

  const createDots2 = function () {
    slides2.forEach(function (_, i) {
      dotsMotion.insertAdjacentHTML(
        "beforeend",
        `<button type="button" class="dots__tap2"
        data-slide="${i}"></button>`
      );
    });
  };

  const activateDot2 = function (slide) {
    document
      .querySelectorAll(".dots__tap2")
      .forEach((dot) => dot.classList.remove("dots__active--motion"));

    document
      .querySelector(`.dots__tap2[data-slide="${slide}"]`)
      .classList.add("dots__active--motion");
  };

  const goToSlide2 = function (slide2) {
    slides2.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide2)}% )`)
    );

    if ((Videos.style.transform = "translateX(0)")) {
      pausedMotion1.muted = true;
      pausedMotion2.muted = true;
      pausedMotion3.muted = true;
      pausedMotion4.muted = true;
      pausedMotion5.muted = true;
      pausedMotion6.muted = true;
    } else {
      pausedMotion1.muted = false;
      pausedMotion2.muted = false;
      pausedMotion3.muted = false;
      pausedMotion4.muted = false;
      pausedMotion5.muted = false;
      pausedMotion6.muted = false;
    }
  };

  const init2 = function () {
    createDots2();
    activateDot2(0);
    goToSlide2(0);
  };
  init2();

  const nextSlide2 = function () {
    if (curslide2 === maxSlide2 - 1) {
      curslide2 = 0;
    } else {
      curslide2++;
    }
    goToSlide2(curslide2);
    activateDot2(curslide2);
  };

  const prevSlide2 = function () {
    if (curslide2 === 0) {
      curslide2 = maxSlide2 - 1;
    } else {
      curslide2--;
    }
    goToSlide2(curslide2);
    activateDot2(curslide2);
  };

  btnRightMotion2.addEventListener("click", nextSlide2);
  btnLeftMotion2.addEventListener("click", prevSlide2);



  dotsMotion.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__tap2")) {
      const { slide } = e.target.dataset;
      goToSlide2(slide);
      activateDot2(slide);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide2();
    if (e.key === "ArrowRight") nextSlide2();
  });
}
sliderMotion();
///////////////////////////////////////////////////////////////////////////

const slides3 = document.querySelectorAll(".slide--3");
const btnLeftMotion3 = document.querySelector(".slider__btn--left--3");
const btnRightMotion3 = document.querySelector(".slider__btn--right--3");

const sliderDesigns = function () {
  let curslide3 = 0;
  const maxSlide3 = slides3.length;

  const createDots3 = function () {
    slides3.forEach(function (_, i) {
      dotsDesiagn.insertAdjacentHTML(
        "beforeend",
        `<button type="button" class="dots__tap3"
    data-slide="${i}"></button>`
      );
    });
  };

  const activateDot3 = function (slide3) {
    document
      .querySelectorAll(".dots__tap3")
      .forEach((dot) => dot.classList.remove("dots__active--design"));

    document
      .querySelector(`.dots__tap3[data-slide="${slide3}"]`)
      .classList.add("dots__active--design");
  };

  const goToSlide3 = function (slide3) {
    slides3.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide3)}% )`)
    );
  };

  const init3 = function () {
    createDots3();
    activateDot3(0);
    goToSlide3(0);
  };
  init3();

  const nextSlide3 = function () {
    if (curslide3 === maxSlide3 - 1) {
      curslide3 = 0;
    } else {
      curslide3++;
    }
    goToSlide3(curslide3);
    activateDot3(curslide3);
  };

  const prevSlide3 = function () {
    if (curslide3 === 0) {
      curslide3 = maxSlide3 - 1;
    } else {
      curslide3--;
    }
    goToSlide3(curslide3);
    activateDot3(curslide3);
  };
  btnRightMotion3.addEventListener("click", nextSlide3);
  btnLeftMotion3.addEventListener("click", prevSlide3);

  dotsDesiagn.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__tap3")) {
      const { slide } = e.target.dataset;
      goToSlide3(slide);
      activateDot3(slide);
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide3();
    if (e.key === "ArrowRight") nextSlide3();
  });
};
sliderDesigns();
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
const btnPrice1 = document.querySelector(".btn--price--1");
const Price1 = document.querySelector(".price--1");

const btnPrice2 = document.querySelector(".btn--price--2");
const Price2 = document.querySelector(".price--2");

const btnPrice3 = document.querySelector(".btn--price--3");
const Price3 = document.querySelector(".price--3");

btnPrice1.addEventListener("click", function () {
  Price1.style.display = "grid";
  btnPrice1.style.display = "none";
});

btnPrice2.addEventListener("click", function () {
  Price2.style.display = "grid";
  btnPrice2.style.display = "none";
});

btnPrice3.addEventListener("click", function (e) {
  Price3.style.display = "grid";
  btnPrice3.style.display = "none";
});
////////////////////////////////////////////////////////////////
const timerPackagenum = document.querySelector(".timer__packages");
const spaceShip = document.querySelector(".space__ship");
const btnTimer = document.querySelector(".btn__timer");

const service1 = document.querySelector(".service--1");
const service2 = document.querySelector(".service--2");
const service3 = document.querySelector(".service--3");

const timerPackages = function () {
  let timer = 3;
  spaceShip.classList.add("hidden__animation");
  service1.classList.add("hidden__animation");
  service2.classList.add("hidden__animation");
  service3.classList.add("hidden__animation");
  const time = setInterval(function () {
    const sec = String(timer % 60).padStart(2, 0);

    timerPackagenum.textContent = `${sec}`;

    timer--;

    if (timer === -2) {
      clearInterval(time);
      timerPackagenum.style.display = "none";
      spaceShip.classList.remove("hidden__animation");
      service1.classList.remove("hidden__animation");
      service2.classList.remove("hidden__animation");
      service3.classList.remove("hidden__animation");
    }
  }, 500);
};

btnTimer.addEventListener("click", function (e) {
  e.preventDefault();

  btnTimer.style.display = "none";
  timerPackagenum.style.display = "grid";
  timerPackages();
});
/////////////////////////////////////////////////////////
const buyPrice1 = document.querySelectorAll(".price--1");
const buyPrice2 = document.querySelectorAll(".price--2");
const buyPrice3 = document.querySelectorAll(".price--3");
const Modal1 = document.querySelector(".form--1");
const Modal2 = document.querySelector(".form--2");
const Modal3 = document.querySelector(".form--3");
const Modals = document.querySelector(".form__informations ");

const overlay = document.querySelector(".overlay");
const btnCloseModal_1 = document.querySelector(".btn--close-modal-1");
const btnCloseModal_2 = document.querySelector(".btn--close-modal-2");
const btnCloseModal_3 = document.querySelector(".btn--close-modal-3");

const opacityForm = document.querySelector(".form__model-packages");

const openModal1 = function (e) {
  e.preventDefault();
  opacityForm.style.opacity = 1;
  Modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openModal2 = function (e) {
  e.preventDefault();
  opacityForm.style.opacity = 1;
  Modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openModal3 = function (e) {
  e.preventDefault();
  opacityForm.style.opacity = 1;
  Modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  Modal1.classList.add("hidden");
  Modal2.classList.add("hidden");
  Modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};
const closeModal1 = function () {
  Modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};
const closeModal2 = function () {
  Modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};
const closeModal3 = function () {
  Modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};

buyPrice1.forEach((btn) => btn.addEventListener("click", openModal1));
buyPrice2.forEach((btn) => btn.addEventListener("click", openModal2));
buyPrice3.forEach((btn) => btn.addEventListener("click", openModal3));

btnCloseModal_1.addEventListener("click", closeModal);
btnCloseModal_2.addEventListener("click", closeModal2);
btnCloseModal_3.addEventListener("click", closeModal3);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !Modals.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////
//model booking
const btnBookingHome = document.querySelector(".contact--us");
const ModelBooking = document.querySelector(".model--booking ");
const btnCloseBooking = document.querySelector(".close--booking ");
const openModelBooking = function (e) {
  e.preventDefault();
  overlay.classList.remove("hidden");
  ModelBooking.classList.remove("hidden");
};

const closeModelBooking = function () {
  ModelBooking.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnBookingHome.addEventListener("click", openModelBooking);
btnCloseBooking.addEventListener("click", closeModelBooking);
overlay.addEventListener("click", closeModelBooking);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !ModelBooking.classList.contains("hidden")) {
    closeModelBooking();
  }
});

//////////////////////////////////////////////////////////////////////
// scroll

const section = document.querySelector("section");
const navHeader = document.querySelector(".navigation-home");
const titleHome = document.querySelector(".title__right--home");
const contactBooking = document.querySelector(".contact--us");
const iCons = document.querySelectorAll(".icons__nav");
const logoHome = document.querySelector(".logo__home");

const query2 = window.matchMedia("(min-width: 1024px)");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    navHeader.classList.add("fixed");
    navHeader.style.backgroundColor = "#434F62";
    navHeader.style.zIndex = 100000000;
    navHeader.style.padding = '30px';
    if(query2.matches){
      navHeader.style.padding = '15px';
    }
    titleHome.classList.remove("hidden");
    iCons.forEach((c) => (c.style.color = "black"));
    logoHome.classList.add('hidden')
  } else {
    navHeader.classList.remove("fixed");
    navHeader.style.backgroundColor = "transparent";
    titleHome.classList.add("hidden");
    iCons.forEach((c) => (c.style.color = "#517da3"));
    logoHome.classList.remove('hidden')
    navHeader.style.padding = '15px';
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.70,
});

headerObserver.observe(section);

//////////////////////////////////////////////////////////////////
//send whatSapp booking

function sendWhatsapp() {
  const phonenumer = "+201006484324";
  let firstName = document.querySelector(".frist__name").value;
  let lastName = document.querySelector(".last__name").value;
  let emailBooking = document.querySelector(".email__booking").value;
  let telBooking = document.querySelector(".tel__booking").value;
  let dateBooking = document.querySelector(".date__booking").value;
  let reelBooking = document.querySelector(".reels__booking").value;
  let motionBooking = document.querySelector(".motion__booking").value;
  let designBooking = document.querySelector(".design__booking").value;
  let websiteBooking = document.querySelector(".website__booking").value;

  const url =
    "https://wa.me/" +
    phonenumer +
    "?text=" +
    "*FirstName :*" +
    firstName +
    "%0a" +
    "*LastName  :*" +
    lastName +
    "%0a" +
    "*Email:*" +
    emailBooking +
    "%0a" +
    "*Phone :*" +
    telBooking +
    "%0a" +
    "*Date Of Birth:*" +
    dateBooking +
    "%0a" +
    "*Reels :*" +
    reelBooking +
    "%0a" +
    "*Motion:*" +
    motionBooking +
    "%0a" +
    "*Design:*" +
    designBooking +
    "%0a" +
    "*Website:*" +
    websiteBooking +
    "%0a" +
    `Customer data ${firstName} ${lastName}`;
  window.open(url, "_blank").focus();
}
///////////////////////////////////////////////////////
// send whatsapp reels packages
function sendWhatsappPackage1() {
  const phonenumer = "+201017699281";
  const UserName = document.querySelector(".user__name").value;
  const Email = document.querySelector(".email").value;
  const Phon = document.querySelector(".phon").value;
  const checkboxPackage = document.querySelector(".checkbox__package").value;

  const url =
    "https://wa.me/" +
    phonenumer +
    "?text=" +
    "*UserName:*" +
    UserName +
    "%0a" +
    "*Email:*" +
    Email +
    "%0a" +
    "*Phon:*" +
    Phon +
    "%0a" +
    "*Basic:*" +
    checkboxPackage +
    "%0a" +
    `Customer data ${UserName} `;
  window.open(url, "_blank").focus();
}
function sendWhatsappPackage2() {
  const phonenumer = "+201017699281";

  const UserName = document.querySelector(".user__name").value;
  const Email = document.querySelector(".email").value;
  const Phon = document.querySelector(".phon").value;
  const checkboxPackage = document.querySelector(".checkbox__package").value;

  const url =
    "https://wa.me/" +
    phonenumer +
    "?text=" +
    "*UserName:*" +
    UserName +
    "%0a" +
    "*Email:*" +
    Email +
    "%0a" +
    "*Phon:*" +
    Phon +
    "%0a" +
    "*Standard:*" +
    checkboxPackage +
    "%0a" +
    `Customer data ${UserName} `;
  window.open(url, "_blank").focus();
}
function sendWhatsappPackage3() {
  const phonenumer = "+201017699281";

  const UserName = document.querySelector(".user__name").value;
  const Email = document.querySelector(".email").value;
  const Phon = document.querySelector(".phon").value;
  const checkboxPackage = document.querySelector(".checkbox__package").value;

  const url =
    "https://wa.me/" +
    phonenumer +
    "?text=" +
    "*UserName:*" +
    UserName +
    "%0a" +
    "*Email:*" +
    Email +
    "%0a" +
    "*Phon:*" +
    Phon +
    "%0a" +
    "*Premuim:*" +
    checkboxPackage +
    "%0a" +
    `Customer data ${UserName} `;
  window.open(url, "_blank").focus();
}
////////////////////////////////////////////////////////////////////////
// model Privacy--Policy//

const modelPrivacyPolicy = document.querySelector(".model__Privacy__Policy");
const btnModelPrivacyPolicy = document.querySelector(".Privacy_policy");
const btncloseModelPrivacyPolicy = document.querySelector(
  ".btn--close-modal__Privacy--Policy"
);

const btnArapic = document.querySelector(".btn__arabic");
const btnEnglish = document.querySelector(".btn__english ");
const titleContentEnglish = document.querySelector(".title__Privacy--Policy");
const titleContentArapic = document.querySelector(
  ".title__Privacy--Policy--ar "
);
const contentEnglish = document.querySelector(".text__Privacy--Policy ");
const contentArapic = document.querySelector(".text__Privacy--Policy--ar ");

const openModelPrivacyPolicy = function (e) {
  e.preventDefault();
  modelPrivacyPolicy.classList.remove("hidden");
};
const closeModelPrivacyPolicy = function () {
  modelPrivacyPolicy.classList.add("hidden");
};

btnModelPrivacyPolicy.addEventListener("click", openModelPrivacyPolicy);
btncloseModelPrivacyPolicy.addEventListener("click", closeModelPrivacyPolicy);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modelPrivacyPolicy.classList.contains("hidden")) {
    closeModelPrivacyPolicy();
  }
});

const btnArapicAction = function (e) {
  e.preventDefault();
  titleContentArapic.classList.remove("hidden");
  contentArapic.classList.remove("hidden");
  btnEnglish.classList.remove("hidden");
  titleContentEnglish.classList.add("hidden");
  contentEnglish.classList.add("hidden");
  btnArapic.classList.add("hidden");
};
const btnEnglishAction = function (e) {
  e.preventDefault();
  titleContentEnglish.classList.remove("hidden");
  contentEnglish.classList.remove("hidden");
  btnArapic.classList.remove("hidden");
  titleContentArapic.classList.add("hidden");
  contentArapic.classList.add("hidden");
  btnEnglish.classList.add("hidden");
};
btnArapic.addEventListener("click", btnArapicAction);
btnEnglish.addEventListener("click", btnEnglishAction);

///////////////////////////////////////////////////////////////////////////////

const allSections = document.querySelectorAll("section");
const revealSection = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
};

const sectionObsever = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
allSections.forEach(function (section) {
  sectionObsever.observe(section);
  section.classList.add("section--hidden");
});
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const header = document.querySelector(".header");
const paragraphHeader = document.querySelector(".paragraph-home");
const revealHeader = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    paragraphHeader.style.transform = "translateX(0%)";
  }
};
const HeaderObsever = new IntersectionObserver(revealHeader, {
  root: null,
  threshold: 0,
});
HeaderObsever.observe(header);
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
const About = document.querySelector(".about");
const paragraphAbout = document.querySelector(".h1-about");
const paragraphAbout2 = document.querySelector(".p-about");
const paragraphAbout3 = document.querySelector(".h3-about");

const revealAbout = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    paragraphAbout.style.transform = " translateX(0%)";
    paragraphAbout2.style.transform = " translateX(0%)";
    paragraphAbout3.style.transform = " translateX(0%)";
  }
};
const AboutObsever = new IntersectionObserver(revealAbout, {
  root: null,
  threshold: 0.15,
});
AboutObsever.observe(About);
///////////////////////////////////////////////////////////////
const categories = document.getElementById("categories");
const btnReels = document.querySelector(".btn__tab--1");
const btnMotion = document.querySelector(".btn__tab--2");
const btndesign = document.querySelector(".btn__tab--3");

const revealBtnsSliders = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    btnReels.style.transform = "translateX(0%)";
    btnMotion.style.transform = "translateX(0%)";
    btndesign.style.transform = "translateX(0%)";
  }
};
const BtnsSlidersObsever = new IntersectionObserver(revealBtnsSliders, {
  root: null,
  threshold: 0,
});
BtnsSlidersObsever.observe(categories);
/////////////////////////////////////////////////////////
//customers items media query
const listHeader = document.querySelector(".fa-list-ul");
const navListHeader = document.querySelector(".navigation--list");
const  body = document.querySelector("body");

listHeader.addEventListener("click", function (e) {
  e.preventDefault();
  const query = window.matchMedia("(min-width: 768px)");
  if (listHeader.className == "fa fa-list-ul listbtn") {
    navListHeader.style.width = "250px";
    if(query.matches){
    navListHeader.style.width = "350px";
    }
    listHeader.classList.remove("listbtn");
  } else {
    navListHeader.style.width = "0px";
    if(query.matches){
      navListHeader.style.width = "0px";
      }
    listHeader.classList.add("listbtn");
  }
});




