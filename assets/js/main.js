const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');
let currentSlide = 0;

// Fungsi untuk berpindah slide dengan efek fade
const goToSlide = (slideNumber) => {
    slide.forEach((s, index) => {
        if (index === slideNumber) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });
    currentSlide = slideNumber;
    updatePagination();
};

// Fungsi untuk update pagination
const updatePagination = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
};

// Membuat pagination
for (let i = 0; i < slide.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    pagination.appendChild(dot);
    dot.addEventListener('click', () => {
        goToSlide(i);
    });
}

// Otomatis berpindah slide setiap beberapa detik
setInterval(() => {
    currentSlide = (currentSlide + 1) % slide.length;
    goToSlide(currentSlide);
}, 5000); // Ganti angka ini (ms) untuk mengatur durasi tiap slide

// Inisialisasi
goToSlide(0);
