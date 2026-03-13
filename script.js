const translations = {
  en: {
    heroTitle: "Welcome to Paws & Care",
    heroDesc: "We are an animal shelter dedicated to caring for and finding homes for animals in need. Our mission is to promote responsible adoptions and animal welfare.",
    eventsTitle: "Upcoming Events",
    event1: "Adoption Fair — June 12, 2025",
    event2: "Free Vaccination Campaign — July 20, 2025",
    adoptTitle: "Adopt",
    adoptDesc: "Animals available for adoption (data via XSLT).",
    storiesTitle: "Success Stories",
    home: "Home",
    adopt: "Adopt",
    stories: "Stories"
  },
  ca: {
    heroTitle: "Benvinguts a Paws & Care",
    heroDesc: "Som una protectora dedicada a cuidar i trobar famílies per animals en necessitat. La nostra missió és promoure adopcions responsables i el benestar animal.",
    eventsTitle: "Propers esdeveniments",
    event1: "Fira d'adopcions — 12 juny 2025",
    event2: "Campanya de vacunació gratuïta — 20 juliol 2025",
    adoptTitle: "Adopta",
    adoptDesc: "Animals disponibles per a adopció (dades extretes via XSLT).",
    storiesTitle: "Històries d'èxit",
    home: "Inici",
    adopt: "Adopta",
    stories: "Històries d'èxit"
  }
};

const langBtn = document.getElementById('langBtn');
let currentLang = 'ca';
const petsFrame = document.getElementById('petsFrame');

function updateLanguage(lang) {
  // Actualizar textos de la página
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-nav]').forEach(el => {
    const key = el.getAttribute('data-i18n-nav');
    if(translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Cambiar iframe
  petsFrame.src = lang === 'ca' ? 'mascotes.xml' : 'mascotes-en.xml';
}

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ca' ? 'en' : 'ca';
  langBtn.textContent = currentLang.toUpperCase();
  updateLanguage(currentLang);
});

// Inicializar idioma
updateLanguage(currentLang);
petsFrame.src = lang === 'ca' ? 'mascotes.xml' : 'mascotes-en.xml';