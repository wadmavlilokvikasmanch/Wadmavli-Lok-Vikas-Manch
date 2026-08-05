// =========================================
// SCRIPT.JS - Common JavaScript for All Pages
// =========================================

// =========================
// 1. WHATSAPP FLOATING BUTTON
// =========================
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if WhatsApp button already exists (prevent duplicates)
    if (document.querySelector('.whatsapp-float')) {
        return;
    }
    
    // Create WhatsApp button container
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/919011352549';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.setAttribute('aria-label', 'Chat on WhatsApp');
    whatsappBtn.innerHTML = `
        <i class="fab fa-whatsapp"></i>
        <span class="whatsapp-tooltip">Chat with us</span>
    `;
    
    // Add to page
    document.body.appendChild(whatsappBtn);
});

// =========================
// 2. SCROLL TO TOP BUTTON (if needed)
// =========================
document.addEventListener('DOMContentLoaded', function() {
    // Check if scroll button already exists
    if (document.querySelector('.scroll-top')) {
        return;
    }
    
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-top';
    scrollBtn.id = 'scrollTopBtn';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    document.body.appendChild(scrollBtn);
    
    // Show/hide on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
});

// =========================
// 3. MOBILE MENU TOGGLE (if not already in page)
// =========================
function toggleMobileMenu() {
    const navbar = document.querySelector(".navbar");
    const button = document.querySelector(".mobile-menu-btn");
    if (!navbar || !button) return;
    navbar.classList.toggle("mobile-open");
    const isOpen = navbar.classList.contains("mobile-open");
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
}
// Make it globally available
window.toggleMobileMenu = toggleMobileMenu;

// =========================
// 4. COPY TO CLIPBOARD (for donate page)
// =========================
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const btn = event.target.closest('.copy-btn');
        if (btn) {
            const original = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check" style="color:#28a745;"></i> Copied!';
            setTimeout(() => { btn.innerHTML = original; }, 2000);
        }
    }).catch(() => {
        alert('Copy: ' + text);
    });
}
window.copyText = copyText;

// =========================
// 5. QR LIGHTBOX (for donate page)
// =========================
function openQRLightbox() {
    const lightbox = document.getElementById('qrLightbox');
    if (lightbox) {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
window.openQRLightbox = openQRLightbox;

function closeQRLightbox(e) {
    const lightbox = document.getElementById('qrLightbox');
    if (!lightbox) return;
    if (e.target === lightbox || e.target.closest('.close-lightbox')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
window.closeQRLightbox = closeQRLightbox;

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const lightbox = document.getElementById('qrLightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});
