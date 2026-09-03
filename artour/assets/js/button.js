// Minimal JavaScript to add a subtle "tilt" effect for extra premium feel
// This is strictly optional but enhances the "liquid" feel by reacting to mouse movement.

const btn = document.querySelector('.liquid-glass-btn');

btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate percentage from center
    const xPercent = (x / rect.width - 0.5) * 2; // -1 to 1
    const yPercent = (y / rect.height - 0.5) * 2; // -1 to 1
    
    const tiltForce = 10; // degrees
    
    // Apply subtle 3D tilt
    // We update CSS vars or direct transform, distinct from the hover scale
    // We combine with the existing scale(1.1) from hover css, so we need to manage transform carefully.
    // Actually, allowing CSS to handle scale and JS to handle tilt/perspective is cleaner if we use CSS variables.
    
    btn.style.transform = `perspective(800px) rotateX(${yPercent * -tiltForce}deg) rotateY(${xPercent * tiltForce}deg) scale(1.1)`;
});

btn.addEventListener('mouseleave', () => {
    // Reset transform (the CSS hover rule will take over for scale, but we need to clear inline styles to let CSS win back or set to scale 1)
    // Actually, setting inline transform overrides CSS hover.
    // So on mouseleave, we should clear the inline transform.
    btn.style.transform = '';
});

// Click ripple effect could be added here, but CSS active state is often smoother/sufficient for this style.
