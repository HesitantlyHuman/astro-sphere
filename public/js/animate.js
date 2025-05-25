function animate() {
  const animateElements = document.querySelectorAll('.animate')


  if (prefersReduced.matches) {
    animateElements.forEach((element, index) => {
      element.classList.remove('animate')
    });
  } else {
    animateElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('show')
      }, index * 100)
    });
  }
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')

document.addEventListener("DOMContentLoaded", animate)
document.addEventListener("astro:after-swap", animate)