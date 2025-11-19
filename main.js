const slides = document.querySelectorAll('.hero-slide');
const prevBtn = document.querySelector('.hero-prev');
const nextBtn = document.querySelector('.hero-next');
const indicators = document.querySelectorAll('.hero-indicators span');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        indicators[i].classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

showSlide(currentSlide);

const darkModeBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeBtn.textContent = '☀️';
}

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = '☀️';
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        darkModeBtn.textContent = '🌙';
        localStorage.setItem('dark-mode', 'disabled');
    }
});

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

const contactForm = document.querySelector('.contact-form');

// إنشاء عنصر لعرض الرسالة أسفل الفورم
const formMessage = document.createElement('p');
formMessage.style.marginTop = '15px';
formMessage.style.fontWeight = 'bold';
formMessage.style.color = '#00ff00'; // لون الرسالة الناجحة
contactForm.appendChild(formMessage);

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const formData = new FormData(contactForm);

    fetch('https://formspree.io/f/mzzyzzay', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.ok || data.success) {
                formMessage.textContent = 'تم الإرسال بنجاح!';
                formMessage.style.color = '#00ff00';
                contactForm.reset(); // إعادة ضبط الفورم
            } else {
                formMessage.textContent = 'حدث خطأ أثناء الإرسال. حاول مرة أخرى.';
                formMessage.style.color = '#ff4d4d';
            }
        })
        .catch(error => {
            formMessage.textContent = 'حدث خطأ أثناء الإرسال. حاول مرة أخرى.';
            formMessage.style.color = '#ff4d4d';
        });
});
