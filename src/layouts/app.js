// const container = document.getElementsByClassName('tilt-card')
// const tiltCard = document.querySelector('#tiltCard')

document.addEventListener('mousemove', (e) => {
  const container = e.target.closest('.tilt-card')
  
  const rect = container.getBoundingClientRect()

  const percentX = (e.clientX - rect.left) / rect.width;
  const percentY = (e.clientY - rect.top) / rect.height;

  const tiltX = (0.5 - percentY) * 20
  const moveY = (percentX - 0.5) * 30

  container.style.transform = `rotateX(${tiltX}deg) rotateY(${moveY}deg)`
})

document.addEventListener('mouseout', (e) => {
  const container = e.target.closest('.tilt-card')
  if (container && !container.contains(e.relatedTarget)) {
    container.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }
})

// Reveal-on-scroll for elements marked data-reveal
      document.addEventListener('DOMContentLoaded', () => {
        const items = document.querySelectorAll('[data-reveal]');
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15 }
        );
        items.forEach((el) => io.observe(el));
      });