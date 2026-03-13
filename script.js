const translations = {
  en: {
    home: "Home", adopt: "Adopt", volunteer: "Volunteer", contact: "Contact",
    heroTitle: "Find your best friend", heroDesc: "We find homes for animals in need.",
    btnAdopt: "Adopt now", adoptTitle: "Available Pets", volunteerTitle: "Volunteer",
    contactTitle: "Contact Us", btnSend: "Send Message", success: "Message sent!"
  },
  ca: {
    home: "Inici", adopt: "Adopta", volunteer: "Voluntariat", contact: "Contacte",
    heroTitle: "Benvinguts a Paws & Care", heroDesc: "Cuidem i trobem llar per animals en necessitat.",
    btnAdopt: "Adopta ara", adoptTitle: "Adopta", volunteerTitle: "Voluntariat",
    contactTitle: "Contacte", btnSend: "Enviar missatge", success: "Missatge enviat!"
  }
};

let currentLang = 'ca';
const langBtn = document.getElementById('langBtn');

function updateLanguage(lang) {
  document.querySelectorAll('[data-i18n], [data-i18n-nav]').forEach(el => {
    const key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-nav');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  
  document.getElementById('petsFrame').src = lang === 'ca' ? 'mascotes.xml' : 'mascotes-en.xml';
  
  // Lógica inversa: si estoy en catalán, el botón dice "EN"
  langBtn.textContent = lang === 'ca' ? 'EN' : 'CA';
}

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ca' ? 'en' : 'ca';
  updateLanguage(currentLang);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert(translations[currentLang].success);
  this.reset();
});