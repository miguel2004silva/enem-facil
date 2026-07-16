/**
 * script.js - Interactive functions for ENEM Sales Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
    initCountdownTimer();
    initToastNotifications();
});

/* ==========================================================================
   1. Tab Selector (Free Sample Section)
   ========================================================================== */
window.openSampleTab = function(tabIndex) {
    // Select all tab buttons and tab contents
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.sample-tab-content');
    
    // Deactivate all buttons and hide all contents
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    // Activate target button and show target content
    const targetButton = document.getElementById(`btn-tab${tabIndex}`);
    const targetContent = document.getElementById(`tab-content-${tabIndex}`);
    
    if (targetButton && targetContent) {
        targetButton.classList.add('active');
        targetContent.classList.add('active');
    }
};

/* ==========================================================================
   2. FAQ Accordion Toggle
   ========================================================================== */
window.toggleFaq = function(buttonElement) {
    const faqItem = buttonElement.parentElement;
    const isAlreadyActive = faqItem.classList.contains('active');
    
    // Close all other open FAQ items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    
    // If it wasn't active, open it
    if (!isAlreadyActive) {
        faqItem.classList.add('active');
        buttonElement.setAttribute('aria-expanded', 'true');
    }
};

/* ==========================================================================
   3. Evergreen Countdown Timer
   ========================================================================== */
function initCountdownTimer() {
    const timerDisplay = document.getElementById('countdown-timer');
    if (!timerDisplay) return;
    
    const COUNTDOWN_KEY = 'enem_landing_page_timer_end';
    const durationInMs = 15 * 60 * 1000; // 15 minutes
    
    let endTime = localStorage.getItem(COUNTDOWN_KEY);
    const now = Date.now();
    
    // If no end time stored, or the stored time has already passed, set a new end time
    if (!endTime || parseInt(endTime, 10) < now) {
        endTime = now + durationInMs;
        localStorage.setItem(COUNTDOWN_KEY, endTime.toString());
    } else {
        endTime = parseInt(endTime, 10);
    }
    
    function updateTimer() {
        const currentTime = Date.now();
        const remainingTime = endTime - currentTime;
        
        if (remainingTime <= 0) {
            // Timer expired: reset to a new 15 minutes to keep it evergreen
            const newEndTime = Date.now() + durationInMs;
            localStorage.setItem(COUNTDOWN_KEY, newEndTime.toString());
            endTime = newEndTime;
            timerDisplay.textContent = "15:00";
            return;
        }
        
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        
        // Format with leading zeros
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        const secondsStr = seconds < 10 ? '0' + seconds : seconds;
        
        timerDisplay.textContent = `${minutesStr}:${secondsStr}`;
    }
    
    // Run immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
}

/* ==========================================================================
   4. Dynamic Toast Notifications (Social Proof Simulation)
   ========================================================================== */
function initToastNotifications() {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;
    
    const names = [
        'Matheus S.', 'Ana Clara G.', 'Pedro H.', 'Mariana L.', 'Lucas F.', 
        'Beatriz M.', 'Gustavo D.', 'Sofia C.', 'Felipe R.', 'Julia P.',
        'Thiago V.', 'Lívia B.', 'Bruno S.', 'Camila O.', 'Enzo A.'
    ];
    
    const states = [
        'São Paulo/SP', 'Rio de Janeiro/RJ', 'Belo Horizonte/MG', 'Salvador/BA', 
        'Porto Alegre/RS', 'Curitiba/PR', 'Recife/PE', 'Fortaleza/CE', 
        'Brasília/DF', 'Goiânia/GO', 'Manaus/AM', 'Belém/PA', 'Florianópolis/SC'
    ];
    
    const messages = [
        'acabou de garantir o Kit Aprovação ENEM!',
        'acabou de baixar o E-book de Redação Nota 1000.',
        'garantiu o Kit Completo por R$ 5,99 via PIX.',
        'iniciou o plano de treino de redação em 8 semanas.',
        'acabou de baixar o Guia das 4 Áreas!',
        'adquiriu o combo de e-books preparatórios.',
        'começou o ciclo de estudos Feynman hoje.'
    ];
    
    // Create and show a toast
    function showToast() {
        // Randomize elements
        const name = names[Math.floor(Math.random() * names.length)];
        const state = states[Math.floor(Math.random() * states.length)];
        const msg = messages[Math.floor(Math.random() * messages.length)];
        
        const toast = document.createElement('div');
        toast.className = 'custom-toast';
        
        toast.innerHTML = `
            <div class="toast-icon">🎓</div>
            <div class="toast-content">
                <span class="toast-title">${name} (${state})</span>
                <span class="toast-desc">${msg}</span>
            </div>
        `;
        
        toastContainer.appendChild(toast);
        
        // Remove toast from DOM after it fades out (5 seconds total: 4.5s visible + 0.5s fadeOut transition)
        setTimeout(() => {
            toast.remove();
        }, 5000);
    }
    
    // Show first toast after 8 seconds, then repeat every 25-35 seconds
    setTimeout(() => {
        showToast();
        
        const triggerNextToast = () => {
            const randomDelay = (Math.random() * 10 + 25) * 1000; // 25 to 35 seconds
            setTimeout(() => {
                showToast();
                triggerNextToast();
            }, randomDelay);
        };
        
        triggerNextToast();
    }, 8000);
}
