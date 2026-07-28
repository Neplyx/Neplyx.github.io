const translations = {
  en: {
    navAbout: 'About', navProjects: 'Projects', navJourney: 'Journey', navContact: 'Contact',
    heroEyebrow: 'Available for meaningful work', heroRole: 'Python Backend & AI Engineer',
    heroBio: 'I enjoy turning messy ideas into backend products that are clear, reliable, and easy to run.',
    viewProjects: 'View Projects', contactMe: 'Contact Me', downloadCv: 'Download CV', photoLabel: 'Building with intent', scrollPrompt: 'Scroll to explore ↓',
    aboutLabel: 'About', aboutTitle: 'Engineering perspective. Product mindset.',
    aboutText: 'Computer Engineering taught me to look below the surface: how data moves, where systems fail, and what makes them dependable. Today I use that mindset to build Python backends and useful AI integrations.',
    expertiseLabel: 'Core expertise', expertiseTitle: 'A full-spectrum engineering foundation.',
    backendTitle: 'Backend & APIs', backendText: 'Designing dependable server architecture, building RESTful services, and working with relational databases.',
    systemsTitle: 'Systems & Performance', systemsText: 'Understanding low-level processes, optimizing performance, and working with system APIs through C++ experience.',
    automationTitle: 'Data & Automation', automationText: 'Building dependable data pipelines, automating workflows, and integrating AI solutions with LLMs.',
    philosophyLabel: 'Tech philosophy', philosophyTitle: 'Tools follow the problem, not the trend.',
    postgresQuestion: 'Why PostgreSQL?', postgresAnswer: 'Financial data needs strong consistency, clear relationships, and dependable queries.',
    asyncQuestion: 'Why Asyncio?', asyncAnswer: 'Bots spend most of their time waiting on networks and APIs, so non-blocking I/O keeps them responsive.',
    dockerQuestion: 'Why Docker?', dockerAnswer: 'A repeatable environment makes deployments less surprising and handovers much easier.',
    projectsLabel: 'Selected work', projectsTitle: 'Products built to solve real problems.',
    expenseDescription: 'A Telegram finance assistant that keeps everyday spending, subscriptions, goals, and monthly insights in one place — with AI helping where it is actually useful.',
    score: 'Coursework: 100/100',
    monitorDescription: 'A university coursework project that earned the top grade for its architecture: a portable Windows utility for inspecting devices, drivers, and live system telemetry without freezing the interface.',
    architectureLabel: 'SYSTEM ARCHITECTURE', architectureTitle: 'Expense Calculator Bot data flow.', architectureText: 'A small, focused system where the bot coordinates user input, persistent financial data, and AI-assisted categorization.',
    architectureTelegram: 'User messages', architectureService: 'Async service layer', architectureDatabase: 'Transactions & goals', architectureAi: 'Insights & categories',
    showcaseLabel: 'Code showcase', showcaseTitle: 'Async by design.',
    apiLabel: 'Mock API endpoint', apiTitle: 'Ask the portfolio directly.', apiRequest: 'Send request', apiRequesting: 'Request in progress…', apiResponseLabel: 'Response', apiPlaceholder: 'Click “Send request” to query the endpoint.', apiStatusReady: '200 OK',
    apiJsonStatus: 'available', apiJsonAvailability: 'Open to freelance and full-time roles', apiJsonSkills: 'Python, FastAPI, PostgreSQL, Docker, AI integrations',
    approachLabel: 'My approach', approachTitle: 'From first question to reliable delivery.',
    analyzeTitle: 'Analyze & Architect', analyzeText: 'Build a deep understanding of the business challenge before writing code.',
    buildTitle: 'Build & Optimize', buildText: 'Write clean, testable, and performant code with maintainability in mind.',
    deployTitle: 'Deploy & Scale', deployText: 'Set up containerization and stable cloud deployment for sustainable growth.',
    journeyLabel: 'Journey', journeyTitle: 'Learning fast. Shipping thoughtfully.', experienceHeading: 'Experience',
    scrapingPeriod: '2026 - Present', scrapingTitle: 'Python Web Scraping & Data Automation', scrapingText: 'Building scripts for routine automation and targeted data extraction.',
    botPeriod: '2025 - 2026', botTitle: 'Telegram Bot Developer', botText: 'Developing asynchronous Python/aiogram bots with database and API integrations.',
    educationHeading: 'Education', educationTitle: 'Computer Engineering', educationText: 'Lviv Polytechnic National University · Department of Computer Engineering.',
    certificationsHeading: 'SoftServe Academy certifications',
    faqTitle: 'A few useful answers.',
    faqQuestionOne: 'What kind of projects do you usually work on?', faqAnswerOne: 'Backend systems, APIs, automation tools, and systems utilities.',
    faqQuestionTwo: 'Do you work independently or within a team?', faqAnswerTwo: 'I am comfortable working autonomously and integrate well into a collaborative team.',
    faqQuestionThree: 'Are you open to full-time opportunities?', faqAnswerThree: 'Yes. I consider both freelance and full-time roles with engaging engineering challenges.',
    contactLabel: '10 / Contact', contactTitle: 'Let’s build something useful.', contactText: "I'm currently open for new opportunities, freelance projects, or just a tech chat. Feel free to drop a message.",
    availabilityLabel: 'Availability & Location', locationText: 'Location: Remote / Ukraine · Timezone: EET (GMT+2)',
    terminalInit: 'init --connect', terminalDependencies: '[OK] Dependencies loaded.', terminalSecure: '[OK] Secure channel established.', terminalCommand: 'check_status', terminalResponse: 'Status: available for collaboration.',
    copied: 'Email copied to clipboard.', copyFailed: 'Copy failed — email address selected.',
    easterEggMessage: "You found the backdoor. Let's talk business: kydukm1@gmail.com",
    portfolioProjectTitle: 'Developer Portfolio',
    portfolioProjectDesc: 'A production-ready, framework-free personal portfolio featuring a bilingual EN/UA switcher, canvas 3D perspective grid, mock API playground, and terminal simulation.'
  },
  uk: {
    navAbout: 'Про мене', navProjects: 'Проєкти', navJourney: 'Шлях', navContact: 'Контакти',
    heroEyebrow: 'Відкритий до цікавих проєктів', heroRole: 'Python Backend & AI Engineer',
    heroBio: 'Люблю перетворювати неструктуровані ідеї на зрозумілі, надійні й зручні в підтримці бекенд-продукти.',
    viewProjects: 'Переглянути проєкти', contactMe: 'Зв’язатися', downloadCv: 'Завантажити CV', photoLabel: 'Створюю продумані рішення', scrollPrompt: 'Гортайте, щоб дізнатися більше ↓',
    aboutLabel: 'Про мене', aboutTitle: 'Інженерне бачення. Продуктове мислення.',
    aboutText: 'Computer Engineering навчило мене дивитися глибше: як рухаються дані, де системи ламаються і що робить їх надійними. Зараз цей підхід використовую в Python-бекендах і практичних AI-інтеграціях.',
    expertiseLabel: 'Ключова експертиза', expertiseTitle: 'Цілісний інженерний фундамент.',
    backendTitle: 'Backend і API', backendText: 'Проєктування надійної серверної архітектури, створення RESTful-сервісів і робота з реляційними базами даних.',
    systemsTitle: 'Системи та продуктивність', systemsText: 'Розуміння низькорівневих процесів, оптимізація продуктивності та робота з системними API на базі досвіду з C++.',
    automationTitle: 'Дані та автоматизація', automationText: 'Створення надійних пайплайнів обробки даних, автоматизація процесів та інтеграція AI-рішень з LLM.',
    philosophyLabel: 'Технічна філософія', philosophyTitle: 'Інструмент має відповідати задачі, а не тренду.',
    postgresQuestion: 'Чому PostgreSQL?', postgresAnswer: 'Фінансовим даним потрібні консистентність, зрозумілі зв’язки та надійні запити.',
    asyncQuestion: 'Чому Asyncio?', asyncAnswer: 'Боти багато часу чекають на мережу й API, тому неблокуючий I/O допомагає їм залишатися швидкими.',
    dockerQuestion: 'Чому Docker?', dockerAnswer: 'Відтворюване середовище робить деплої передбачуваними, а передачу проєкту — простішою.',
    projectsLabel: 'Вибрані роботи', projectsTitle: 'Продукти, створені для реальних задач.',
    expenseDescription: 'Telegram-помічник для фінансів, який тримає витрати, підписки, цілі та місячні інсайти в одному місці — а AI використовується там, де він справді корисний.',
    score: 'Курсова: 100/100',
    monitorDescription: 'Університетська курсова робота з найвищою оцінкою за архітектуру: портативна Windows-утиліта для перевірки пристроїв, драйверів і телеметрії без зависання інтерфейсу.',
    architectureLabel: 'АРХІТЕКТУРА СИСТЕМИ', architectureTitle: 'Потік даних Expense Calculator Bot.', architectureText: 'Невелика, сфокусована система: бот поєднує користувацькі повідомлення, фінансові дані та AI-категоризацію.',
    architectureTelegram: 'Повідомлення користувача', architectureService: 'Асинхронний сервісний шар', architectureDatabase: 'Транзакції та цілі', architectureAi: 'Інсайти й категорії',
    showcaseLabel: 'Приклад коду', showcaseTitle: 'Асинхронність за задумом.',
    apiLabel: 'Mock API endpoint', apiTitle: 'Запитайте портфоліо напряму.', apiRequest: 'Надіслати запит', apiRequesting: 'Запит виконується…', apiResponseLabel: 'Відповідь', apiPlaceholder: 'Натисніть «Надіслати запит», щоб звернутися до endpoint.', apiStatusReady: '200 OK',
    apiJsonStatus: 'доступний', apiJsonAvailability: 'Відкритий до фрілансу та full-time ролей', apiJsonSkills: 'Python, FastAPI, PostgreSQL, Docker, AI-інтеграції',
    approachLabel: 'Мій підхід', approachTitle: 'Від першого питання до надійного результату.',
    analyzeTitle: 'Аналіз і архітектура', analyzeText: 'Глибоко зрозуміти бізнес-задачу до написання коду.',
    buildTitle: 'Розробка й оптимізація', buildText: 'Писати чистий, тестований і продуктивний код з думкою про підтримку.',
    deployTitle: 'Розгортання й масштабування', deployText: 'Налаштовувати контейнеризацію та стабільне хмарне розгортання для сталого зростання.',
    journeyLabel: 'Шлях', journeyTitle: 'Швидко навчаюся. Вдумливо створюю.', experienceHeading: 'Досвід',
    scrapingPeriod: '2026 - Зараз', scrapingTitle: 'Python Web Scraping і автоматизація даних', scrapingText: 'Створення скриптів для автоматизації рутини та цільового парсингу даних.',
    botPeriod: '2025 - 2026', botTitle: 'Розробник Telegram-ботів', botText: 'Розробка асинхронних ботів на Python/aiogram з інтеграцією баз даних та API.',
    educationHeading: 'Освіта', educationTitle: 'Computer Engineering', educationText: 'Національний університет «Львівська політехніка» · Кафедра ЕОМ.',
    certificationsHeading: 'Сертифікації SoftServe Academy',
    faqTitle: 'Кілька корисних відповідей.',
    faqQuestionOne: 'Над якими проєктами ви зазвичай працюєте?', faqAnswerOne: 'Бекенд-системи, API, інструменти автоматизації та системні утиліти.',
    faqQuestionTwo: 'Ви працюєте самостійно чи в команді?', faqAnswerTwo: 'Комфортно працюю автономно та легко інтегруюся у спільну роботу команди.',
    faqQuestionThree: 'Ви відкриті до full-time можливостей?', faqAnswerThree: 'Так. Розглядаю і фріланс, і full-time позиції з цікавими інженерними викликами.',
    contactLabel: '10 / Контакти', contactTitle: 'Створімо щось корисне.', contactText: 'Зараз я відкритий до нових пропозицій, фріланс-проєктів або просто цікавих технічних розмов. Буду радий вашому повідомленню.',
    availabilityLabel: 'Доступність і локація', locationText: 'Локація: Remote / Україна · Часовий пояс: EET (GMT+2)',
    terminalInit: 'init --connect', terminalDependencies: '[OK] Залежності завантажено.', terminalSecure: '[OK] Захищений канал встановлено.', terminalCommand: 'check_status', terminalResponse: 'Статус: відкритий до співпраці.',
    copied: 'Email скопійовано в буфер обміну.', copyFailed: 'Не вдалося скопіювати — email виділено.',
    easterEggMessage: 'Ви знайшли бекдор. Поговорімо про співпрацю: kydukm1@gmail.com',
    portfolioProjectTitle: 'Портфоліо розробника',
    portfolioProjectDesc: 'Продуктове безфреймворкове особисте портфоліо з двомовним перемикачем EN/UA, 3D-сіткою на Canvas, інтерактивним Mock API та імітацією термінала.'
  }
};

const stack = ['Python', 'FastAPI', 'Django', 'Flask', 'Asyncio', 'aiogram', 'C++20', 'PostgreSQL', 'Docker', 'GCP', 'Linux CLI', 'Gemini API', 'OpenAI API', 'Qt 6', 'Selenium Grid'];
const certifications = [
  ['Advanced Python with Django Framework', '26 Jun 2026'],
  ['Modern Frontend Fundamentals with AI', '30 Mar 2026'],
  ['Database Fundamentals', '06 Feb 2026'],
  ['DevOps for Developers', '28 Nov 2025'],
  ['Python Fundamentals', '19 Sep 2025']
];

function renderStaticLists() {
  const certificateIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3 4.5 6v5c0 4.7 3.1 8.4 7.5 10 4.4-1.6 7.5-5.3 7.5-10V6L12 3Z"/><path d="m8.8 12 2.1 2.1 4.4-4.5"/></svg>';
  const techStackEl = document.getElementById('tech-stack');
  if (techStackEl) {
    techStackEl.innerHTML = stack.map((item) => `<span class="tech-tag">${item}</span>`).join('');
  }
  const certsEl = document.getElementById('certifications');
  if (certsEl) {
    certsEl.innerHTML = certifications.map(([name, date]) => `<article class="certification"><span class="certificate-icon">${certificateIcon}</span><h4>${name}</h4><time datetime="${new Date(date).toISOString().slice(0, 10)}">${date}</time></article>`).join('');
  }
}

function setLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => { 
    const key = element.dataset.i18n; 
    if (copy[key]) element.textContent = copy[key]; 
  });
  
  const toggle = document.getElementById('language-toggle');
  if (toggle) {
    toggle.textContent = language === 'en' ? 'UA' : 'EN';
    toggle.setAttribute('aria-label', language === 'en' ? 'Switch to Ukrainian' : 'Перемкнути на англійську');
    toggle.setAttribute('aria-pressed', String(language === 'uk'));
  }
  
  localStorage.setItem('portfolio-language', language);
  
  const terminalOutput = document.getElementById('terminal-output');
  if (terminalOutput?.dataset.started === 'true') {
    terminalOutput.textContent = '';
    terminalOutput.dataset.started = 'false';
    startTerminal();
  }
}

async function copyEmail() {
  const button = document.getElementById('email-copy'); 
  const status = document.getElementById('copy-status'); 
  if (!button || !status) return;
  
  const language = document.documentElement.lang;
  try { 
    await navigator.clipboard.writeText(button.dataset.email); 
    status.textContent = translations[language].copied; 
  } catch { 
    const selection = window.getSelection(); 
    const range = document.createRange(); 
    range.selectNodeContents(button); 
    selection.removeAllRanges(); 
    selection.addRange(range); 
    status.textContent = translations[language].copyFailed; 
  }
  window.setTimeout(() => { status.textContent = ''; }, 2600);
}

function startTerminal() {
  const output = document.getElementById('terminal-output');
  if (!output || output.dataset.started === 'true') return;
  
  output.dataset.started = 'true';
  const copy = translations[document.documentElement.lang];
  const lines = [
    `<span class="terminal-prompt">maksym@portfolio</span><span class="terminal-subtle">:~$</span> ${copy.terminalInit}`,
    `<span class="terminal-ok">${copy.terminalDependencies}</span>`,
    `<span class="terminal-ok">${copy.terminalSecure}</span>`,
    `<span class="terminal-prompt">maksym@portfolio</span><span class="terminal-subtle">:~$</span> ${copy.terminalCommand}`,
    `<span class="terminal-cursor"></span><span data-i18n="terminalResponse">${copy.terminalResponse}</span>`
  ];
  
  lines.forEach((line, index) => window.setTimeout(() => {
    const element = document.createElement('p');
    element.className = 'terminal-line';
    element.innerHTML = line;
    output.appendChild(element);
  }, 220 + index * 460));
}

document.addEventListener('DOMContentLoaded', () => {

  renderStaticLists();
  
  const stored = localStorage.getItem('portfolio-language'); 
  setLanguage(stored === 'uk' ? 'uk' : 'en');
  
  const langToggle = document.getElementById('language-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(document.documentElement.lang === 'en' ? 'uk' : 'en');
    });
  }
  
  const emailBtn = document.getElementById('email-copy');
  if (emailBtn) emailBtn.addEventListener('click', copyEmail);
  
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  
  const menu = document.getElementById('mobile-menu'); 
  const menuToggle = document.getElementById('menu-toggle');
  
  if (menu && menuToggle) {
    menuToggle.addEventListener('click', () => { 
      const open = menu.classList.toggle('hidden') === false; 
      menuToggle.setAttribute('aria-expanded', String(open)); 
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); 
    });
    
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => { 
        menu.classList.add('hidden'); 
        menuToggle.setAttribute('aria-expanded', 'false'); 
      });
    });
  }
  
  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const answer = document.getElementById(button.getAttribute('aria-controls'));
      if (!answer) return;
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      answer.hidden = isOpen;
    });
  });
  
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 500);
    }, { passive: true });
    
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
  
  const contact = document.getElementById('contact');
  if (contact) {
    if ('IntersectionObserver' in window) {
      const terminalObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { 
            startTerminal(); 
            terminalObserver.unobserve(entry.target); 
          }
        });
      }, { threshold: .25 });
      terminalObserver.observe(contact);
    } else {
      startTerminal();
    }
  }

  const apiBtn = document.getElementById('api-request-button');
  const apiResponse = document.getElementById('api-response');
  const apiStatus = document.getElementById('api-status');

  if (apiBtn && apiResponse && apiStatus) {
    apiBtn.addEventListener('click', () => {
      const lang = document.documentElement.lang;
      const copy = translations[lang];

      apiBtn.disabled = true;
      apiBtn.textContent = copy.apiRequesting;
      apiStatus.textContent = '';
      apiResponse.innerHTML = '<span class="terminal-subtle">Connecting to server...</span>';

      setTimeout(() => {
        apiBtn.disabled = false;
        apiBtn.textContent = copy.apiRequest;
        apiStatus.textContent = copy.apiStatusReady;

        const jsonData = {
          developer: "Maksym Kudyk",
          role: "Python Backend & AI Engineer",
          status: copy.apiJsonStatus,
          availability: copy.apiJsonAvailability,
          skills: copy.apiJsonSkills.split(', ')
        };

        const formattedJson = JSON.stringify(jsonData, null, 2)
          .replace(/"(.*?)":/g, '<span class="py-keyword">"$1"</span>:') 
          .replace(/"(.*?)"(?=[,\n}])/g, '<span class="py-string">"$1"</span>'); 

        apiResponse.innerHTML = formattedJson;
      }, 1200);
    });
  }

  let keysPressed = '';
  window.addEventListener('keydown', (e) => {
    if (e.key.length === 1) {
      keysPressed += e.key.toLowerCase();
      if (keysPressed.length > 5) keysPressed = keysPressed.slice(-5);
      
      if (keysPressed.includes('sudo') || keysPressed.includes('hire')) {
        const easterEgg = document.getElementById('easter-egg');
        if (easterEgg) {
          easterEgg.classList.add('is-visible');
          setTimeout(() => easterEgg.classList.remove('is-visible'), 5000);
          keysPressed = '';
        }
      }
    }
  });
});