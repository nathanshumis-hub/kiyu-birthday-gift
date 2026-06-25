// Background Music Control
const backgroundMusic = document.getElementById('backgroundMusic');
const playMusicBtn = document.getElementById('playMusicBtn');

playMusicBtn.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playMusicBtn.textContent = '🔊 Music Playing';
        playMusicBtn.style.background = '#FFB6C1';
    } else {
        backgroundMusic.pause();
        playMusicBtn.textContent = '🎵 Play Music';
        playMusicBtn.style.background = '';
    }
});

// Auto-play music on page load (muted initially due to browser policies)
window.addEventListener('load', function() {
    backgroundMusic.muted = true;
    backgroundMusic.play().catch(function(error) {
        console.log('Autoplay prevented:', error);
    });
    
    // Unmute on first user interaction
    document.addEventListener('click', function() {
        backgroundMusic.muted = false;
    }, { once: true });
});

// Confetti Animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const confettiPiece = document.createElement('div');
    confettiPiece.className = 'confetti-piece';
    
    const colors = ['#FF1493', '#FFB6C1', '#FF69B4', '#FF00FF', '#FFC0CB'];
    confettiPiece.style.background = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.left = Math.random() * 100 + '%';
    confettiPiece.style.delay = Math.random() * 0.5 + 's';
    
    confettiContainer.appendChild(confettiPiece);
    
    setTimeout(() => confettiPiece.remove(), 3000);
}

// Create confetti on page load and on click
window.addEventListener('load', function() {
    for (let i = 0; i < 50; i++) {
        setTimeout(createConfetti, i * 30);
    }
});

document.addEventListener('click', function(e) {
    if (Math.random() > 0.7) {
        createConfetti();
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-item, .video-item, .music-player').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Active Navigation Link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.background = 'rgba(255, 255, 255, 0.2)';
        } else {
            link.style.background = 'none';
        }
    });
});

// Love Letter Animation
const letterContainer = document.querySelector('.letter-container');
if (letterContainer) {
    letterContainer.style.opacity = '0';
    letterContainer.style.transform = 'translateX(-50px)';
    
    const observer2 = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                letterContainer.style.animation = 'slideIn 0.8s ease forwards';
                observer2.unobserve(letterContainer);
            }
        });
    }, observerOptions);
    
    observer2.observe(letterContainer);
}

// Gallery Image Lazy Loading
const images = document.querySelectorAll('.gallery-item img');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });
}

// Responsive Navigation
const navContainer = document.querySelector('.nav-container');
if (window.innerWidth <= 768) {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.flexDirection = 'column';
}

// Add hover effects to buttons
const buttons = document.querySelectorAll('.play-btn, .scroll-btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Easter Egg - Hidden Message
let secretCode = '';
window.addEventListener('keydown', function(e) {
    secretCode += e.key.toLowerCase();
    if (secretCode.includes('birthday')) {
        alert('🎉 You found the secret! Kalkidan is amazing! 💖');
        secretCode = '';
    }
});

console.log('%c🎂 Happy Birthday Kalkidan! 🎂', 'color: #FF1493; font-size: 20px; font-weight: bold;');
console.log('%cThis website was created with love and care. Enjoy! 💖', 'color: #FF69B4; font-size: 14px;');