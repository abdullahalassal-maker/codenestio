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
// ======== TRANSLATION ========
const translations = {
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        services: "الخدمات",
        portfolio: "البورتفوليو",
        pricing: "الأسعار",
        contact: "تواصل معنا",
        hero1_title: "ابدأ رحلتك نحو النجاح",
        hero1_subtitle: "خطط ميسرة لإطلاق موقعك الاحترافي",
        see_plans: "شاهد الخطط",
        hero2_title: "اختبر التميز",
        hero2_subtitle: "أفضل تطوير فرونت اند مع تأثيرات تفاعلية وتجربة مستخدم سلسة",
        our_services: "خدماتنا",
        hero3_title: "استكشف مشاريعنا",
        hero3_subtitle: "استكشف المشاريع الأخيرة واستلهم أفكار لموقعك",
        view_portfolio: "عرض البورتفوليو",
        about_title: "من أنا",
        about_text: "أنا عبد الله العسال، مطور فرونت اند. أحول أفكارك الإبداعية إلى مواقع تفاعلية وسهلة الاستخدام باستخدام HTML و CSS و JavaScript و React. أركز على تقديم تجربة سريعة وحديثة وسهلة الوصول.",
        services_title: "خدماتنا",
        service1_title: "تطوير مواقع فرونت اند",
        service1_text: "إنشاء صفحات متجاوبة بالكامل باستخدام HTML و CSS و JavaScript مع بنية نظيفة ومحسّنة.",
        service2_title: "تأثيرات ورسوم متحركة احترافية",
        service2_text: "تنفيذ سلايدر، تأثيرات بارالاكس، تحريك عند التمرير، انتقالات، وتفاعلات ثلاثية الأبعاد بسيطة لتجربة ديناميكية.",
        service3_title: "إنشاء صفحة اعمال وصفحات هبوط",
        service3_text: "تصميم صفحات هبوط ومواقع بورتفوليو عالية الجودة للأفراد والشركات.",
        service4_title: "دعم اللغة العربية وتكامل الوضع الليلي",
        service4_text: "دعم كامل للغة العربية من اليمين لليسار وميزة الوضع الليلي/الفاتح مع حفظ اختيار المستخدم.",
        portfolio_title:"البورتفوليو",
        portfolio_subtitle:"بعض مشاريع الواجهة الأمامية الأخيرة الخاصة بي",
        projict_subtitle:"🚀 تعرّف على موقع Code-Nestio-Demo للتجارة الإلكترونية، المُصمّم كمتجر إلكتروني تجريبي، ويتميز بـ:\n" +
            "تصميم أنيق وعصري، ودعم للغتين العربية والإنجليزية، وتأثيرات تفاعلية ثلاثية الأبعاد، ورسوم متحركة سلسة.\n" +
            "استكشف التصميم والوظائف!",
        projict2_subtitle:"تم بناء الموقع باستخدام 💻 HTML + CSS + JavaScript\n" +
            "🎞️ تأثيرات رسومية جذابة\n" +
            "🌐 تبديل اللغة (عربي/إنجليزي)\n" +
            "🚀 تحسين محركات البحث (SEO) ممتاز لتحسين ترتيب موقعك في محركات البحث\n" +
            "🧠 تصميم تفاعلي ثلاثي الأبعاد\n" +
            "🎨 واجهة جذابة ومتجاوبة للهواتف الذكية وأجهزة الكمبيوتر",
        projict3_subtitle:"موقع ويب متعدد اللغات، متجاوب بالكامل، لثورة تطوير الويب لعام ٢٠٢٥، يتميز بخلفيات متحركة ثلاثية الأبعاد (Three.js)، ومؤقت عد تنازلي ديناميكي، ومعاينات للمتحدثين، ومكونات تفاعلية.\n" +
            "مُحسّن للأجهزة المحمولة.",
        projict4_subtitle:"تصميم متجاوب بالكامل على جميع الأجهزة 📱💻\n" +
            "تمرير سلس وتأثيرات حركة دقيقة، واجهة مستخدم أنيقة تُبرز إبداعك\n" +
            "قابلة للتخصيص بسهولة لأي مصمم أو فنان\n" +
            "💼 المهارات المستخدمة: HTML5، CSS3 (Flexbox وGrid)، JavaScript (ScrollReveal وTyped.js)، تصميم ويب متجاوب",
        projict5_subtitle:"نسخة أساسية من موقع محفظة تفاعلي بتصميم عصري وسريع الاستجابة، مبني باستخدام HTML وCSS وJavaScript. يركز التصميم على البساطة وتجربة مستخدم سلسة.",
        projict6_subtitle:"المشروع: موقع إلكتروني لعرض أعمالي ومهاراتي.\n" +
            "\n" +
            "التقنيات: HTML، CSS، JavaScript، تصميم متجاوب، الوضع الداكن، واجهة مستخدم تفاعلية.",
        projict7_subtitle:"صُمم باستخدام HTML وCSS وJavaScript، ويتميز بـ:\n" +
            "تصميم متجاوب 🖥️📱\n" +
            "رأس ثابت وقائمة متحركة",
        pricing_title: "اختر خطتك",
        pricing_subtitle:"اختر الحزمة المثالية لاحتياجات مشروعك",
        basic_plan: "بيزك ",
        basic1:"تصميم متجاوب", basic2:"حتى 4 صفحات",basic3:"الرفع على Vercel",basic4:"مُحسّن للأجهزة المحمولة",basic5:"دعم لمدة أسبوع",basic6:"نماذج الاتصال",
        choose:"اختر خطة",
        professional_plan: "بروفيشنال",professional1:"تصميم متجاوب",professional2:"حتى 10 صفحات",professional3:"الرفع على Vercel",professional4:"علامات تحسين محركات البحث المتقدمة",
        professional5:"مُحسّن للأجهزة المحمولة",professional6:"دعم لمدة أسبوعين",professional7:"الرسوم المتحركة المخصصةو3D",professional8:"نماذج الاتصال",professional9:"روابط وسائل التواصل الاجتماعي",
        premium_plan: "بريميوم ",premium1:"تصميم متجاوب",premium2:"عدد صفحات غير محدود",premium3:"الرفع على Vercel-او على دومين فى حالة توفره",premium4:"تحسين محركات البحث المتميز",
        premium5:"مُحسّن للأجهزة المحمولة",premium6:"دعم لمدة شهر",premium7:"الرسوم المتحركة المخصصةو3D",premium8:"نماذج الاتصال",premium9:"روابط وسائل التواصل الاجتماعي",
        note1:"جميع الأسعار قابلة للتفاوض بناءً على تعقيد المشروع ومتطلباته",note2:"تعديلات إضافية مدفوعة الأجر بعد فترة الدعم",
        contact_title: "تواصل معنا",
        contact_subtitle: "إرسال رسالة",
    },
    en: {} // الإنجليزية تبقى فارغة أو ممكن تحط النصوص الأصلية هنا
};

// ======== ELEMENTS ========
const langToggle = document.getElementById('langToggle');
const allTextElements = document.querySelectorAll('[data-key]');

// ======== SAVE DEFAULT TEXT ========
allTextElements.forEach(el => {
    el.dataset.default = el.textContent;
});

// ======== TRANSLATE FUNCTION ========
function translatePage(lang) {
    allTextElements.forEach(el => {
        const key = el.dataset.key;
        // fallback للنص الإنجليزي أو النص الأصلي لو مش موجود
        el.textContent = translations[lang][key] || translations['en'][key] || el.dataset.default || el.textContent;
    });

    // تغيير اتجاه الصفحة للغة العربية أو الإنجليزية
    if(lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.classList.add('arabic');
    } else {
        document.documentElement.dir = 'ltr';
        document.body.classList.remove('arabic');
    }
}

// ======== LOAD SAVED LANGUAGE ========
let currentLang = localStorage.getItem('lang') || 'en';
translatePage(currentLang);
if(currentLang === 'ar') langToggle.checked = true;

// ======== LANGUAGE TOGGLE EVENT ========
langToggle.addEventListener('change', () => {
    currentLang = langToggle.checked ? 'ar' : 'en';
    translatePage(currentLang);
    localStorage.setItem('lang', currentLang);
});

