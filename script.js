const wac = document.getElementById("asi");
const wac2 = document.getElementById("asi_2");
function typeWriter(element, text, index, speed) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(element, text, index, speed), speed);
    }
}

setTimeout(function () {
    typeWriter(wac, "Asitara Phumdokmai", 0, 100);
}, 500);

setTimeout(function () {
    typeWriter(wac2, "Asitara Phumdokmai", 0, 100);
}, 500);

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Add the 'animate' class to trigger the animation
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  };

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(handleIntersection, options);

  // Target element to be observed
  const targetElement = document.querySelector('.animated-element');

  // Start observing the target element
  observer.observe(targetElement);