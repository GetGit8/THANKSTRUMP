document.addEventListener('DOMContentLoaded', () => {
    // Matrix background effect
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    const s = window.screen;
    canvas.width = s.width;
    canvas.height = s.height;

    const cols = Array(Math.floor(canvas.width / 10)).fill(0);

    function matrixEffect() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        cols.forEach((y, i) => {
            const text = String.fromCharCode(33 + Math.random() * 94);
            ctx.fillText(text, i * 10, y);
            cols[i] = y > canvas.height || Math.random() > 0.95 ? 0 : y + 10;
        });
    }

    setInterval(matrixEffect, 50);

    // Typing effect
    function typeWriter(element, speed = 50) {
        const text = element.textContent.trim();
        element.textContent = '';
        let i = 0;

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Start typing effect
    const typeTextElements = document.querySelectorAll('.type-text');
    typeTextElements.forEach((el) => typeWriter(el));

    // Show page after loading
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});