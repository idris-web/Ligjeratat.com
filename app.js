// Complete list of all 76 Imams in Kosovo
const imamsData = [
    { id: 1, name: "Ekrem Avdiu", city: "Prishtinë", location: "Xhamia e Madhe", image: "🕌" },
    { id: 2, name: "Enis Rama", city: "Prizren", location: "Xhamia Sinan Pasha", image: "📖" },
    { id: 3, name: "Blerim Musliu", city: "Prishtinë", location: "Xhamia Dardania", image: "🕌" },
    { id: 4, name: "Ismail Bardhoshi", city: "Mitrovicë", location: "Xhamia Qendrore", image: "📚" },
    { id: 5, name: "Rasim Haxha", city: "Ferizaj", location: "Xhamia Qendrore", image: "🤲" },
    { id: 6, name: "Fadil Musliu", city: "Pejë", location: "Xhamia Bajrakli", image: "🕌" },
    { id: 7, name: "Zeki Qerkezi", city: "Gjakovë", location: "Xhamia Hadum", image: "📖" },
    { id: 8, name: "Llokman Hoxha", city: "Gjilan", location: "Xhamia e Madhe", image: "🕌" },
    { id: 9, name: "Sulltan Pajaziti", city: "Vushtrri", location: "Xhamia Gazi Ali Beu", image: "🤲" },
    { id: 10, name: "Alaudin Abazi", city: "Prishtinë", location: "Xhamia Arbëria", image: "📚" },
    { id: 11, name: "Bajram Karabegu", city: "Prizren", location: "Xhamia e Re", image: "🕌" },
    { id: 12, name: "Sadat Rrustemi", city: "Mitrovicë", location: "Xhamia e Vjetër", image: "📖" },
    { id: 13, name: "Mustafa Terniqi", city: "Pejë", location: "Xhamia Qendrore", image: "🕌" },
    { id: 14, name: "Sedat Islami", city: "Ferizaj", location: "Xhamia Sulltan Murat", image: "🤲" },
    { id: 15, name: "Adnan Pallqa", city: "Gjakovë", location: "Xhamia e Re", image: "📚" },
    { id: 16, name: "Jusuf Kastrati", city: "Prishtinë", location: "Xhamia Çarshia", image: "🕌" },
    { id: 17, name: "Arsim Morina", city: "Gjilan", location: "Xhamia Fatih", image: "📖" },
    { id: 18, name: "Abdurrahman Bejtullahu", city: "Vushtrri", location: "Xhamia e Madhe", image: "🕌" },
    { id: 19, name: "Sami Fetahu", city: "Prizren", location: "Xhamia Gazi Mehmet Pasha", image: "🤲" },
    { id: 20, name: "Agim Bekiri", city: "Mitrovicë", location: "Xhamia e Re", image: "📚" },
    { id: 21, name: "Bekir Halimi", city: "Pejë", location: "Xhamia Bajrakli", image: "🕌" },
    { id: 22, name: "Ahmed Kalaja", city: "Ferizaj", location: "Xhamia Arbëria", image: "📖" },
    { id: 23, name: "Ferid Selimi", city: "Prishtinë", location: "Xhamia Lakriste", image: "🕌" },
    { id: 24, name: "Besnik Llumnica", city: "Gjakovë", location: "Xhamia Çarshia", image: "🤲" },
    { id: 25, name: "Ahmed Numanaj", city: "Gjilan", location: "Xhamia Qendrore", image: "📚" },
    { id: 26, name: "Bilal Teqja", city: "Vushtrri", location: "Xhamia e Re", image: "🕌" },
    { id: 27, name: "Uthman Agolli", city: "Prizren", location: "Xhamia Arasta", image: "📖" },
    { id: 28, name: "Bledar Haxhiu", city: "Mitrovicë", location: "Xhamia Fatih", image: "🕌" },
    { id: 29, name: "Justinian Topulli", city: "Pejë", location: "Xhamia e Madhe", image: "🤲" },
    { id: 30, name: "Enes Goga", city: "Ferizaj", location: "Xhamia e Re", image: "📚" },
    { id: 31, name: "Ernest Goga", city: "Prishtinë", location: "Xhamia Kalabria", image: "🕌" },
    { id: 32, name: "Muhamed Broja", city: "Gjakovë", location: "Xhamia Qendrore", image: "📖" },
    { id: 33, name: "Fidan Musliu", city: "Gjilan", location: "Xhamia e Re", image: "🕌" },
    { id: 34, name: "Fitim Gerguri", city: "Vushtrri", location: "Xhamia Çarshia", image: "🤲" },
    { id: 35, name: "Gazmir Sahara", city: "Prizren", location: "Xhamia e Vjetër", image: "📚" },
    { id: 36, name: "Driton Xhezairi", city: "Mitrovicë", location: "Xhamia Sulltan Mehmet", image: "🕌" },
    { id: 37, name: "Hadith Miftari", city: "Pejë", location: "Xhamia e Re", image: "📖" },
    { id: 38, name: "Bashkim Bajrami", city: "Ferizaj", location: "Xhamia Fatih", image: "🕌" },
    { id: 39, name: "Ulvi Fejzullahu", city: "Prishtinë", location: "Xhamia Mati", image: "🤲" },
    { id: 40, name: "Muhamed Dermaku", city: "Gjakovë", location: "Xhamia e Madhe", image: "📚" },
    { id: 41, name: "Hekuran Elshani", city: "Gjilan", location: "Xhamia Arbëria", image: "🕌" },
    { id: 42, name: "Kujtim Ameti", city: "Vushtrri", location: "Xhamia Fatih", image: "📖" },
    { id: 43, name: "Amel Kurteshi", city: "Prizren", location: "Xhamia Kalabria", image: "🕌" },
    { id: 44, name: "Ali Ashani", city: "Mitrovicë", location: "Xhamia e Madhe", image: "🤲" },
    { id: 45, name: "Bledar Mulla", city: "Pejë", location: "Xhamia Qendrore", image: "📚" },
    { id: 46, name: "Valdet Gashi", city: "Ferizaj", location: "Xhamia e Madhe", image: "🕌" },
    { id: 47, name: "Osman Bekteshi", city: "Prishtinë", location: "Xhamia e Re", image: "📖" },
    { id: 48, name: "Irfan Salihu", city: "Gjakovë", location: "Xhamia Arbëria", image: "🕌" },
    { id: 49, name: "Remzi Isaku", city: "Gjilan", location: "Xhamia Çarshia", image: "🤲" },
    { id: 50, name: "Faruk Lohaj", city: "Vushtrri", location: "Xhamia Qendrore", image: "📚" },
    { id: 51, name: "Mirsim Maliqi", city: "Prizren", location: "Xhamia Fatih", image: "🕌" },
    { id: 52, name: "Shefqet Krasniqi", city: "Prishtinë", location: "Xhamia e Madhe", image: "📖" },
    { id: 53, name: "Eroll Rexhepi", city: "Mitrovicë", location: "Xhamia Arbëria", image: "🕌" },
    { id: 54, name: "Ruzhdi Buzuku", city: "Pejë", location: "Xhamia e Vjetër", image: "🤲" },
    { id: 55, name: "Bali Sadiku", city: "Ferizaj", location: "Xhamia Çarshia", image: "📚" },
    { id: 56, name: "Xheladin Leka", city: "Gjakovë", location: "Xhamia Fatih", image: "🕌" },
    { id: 57, name: "Rafet Zaimi", city: "Gjilan", location: "Xhamia e Madhe", image: "📖" },
    { id: 58, name: "Harith Selimi", city: "Vushtrri", location: "Xhamia e Re", image: "🕌" },
    { id: 59, name: "Uvejs Ramadani", city: "Prizren", location: "Xhamia Qendrore", image: "🤲" },
    { id: 60, name: "Blerim Murati", city: "Prishtinë", location: "Xhamia Ulpiana", image: "📚" },
    { id: 61, name: "Usame Morina", city: "Mitrovicë", location: "Xhamia Çarshia", image: "🕌" },
    { id: 62, name: "Irfan Jahiu", city: "Pejë", location: "Xhamia Fatih", image: "📖" },
    { id: 63, name: "Ismail Asllani", city: "Ferizaj", location: "Xhamia e Re", image: "🕌" },
    { id: 64, name: "Muharrem Ismaili", city: "Gjakovë", location: "Xhamia e Vjetër", image: "🤲" },
    { id: 65, name: "Fatmir Latifi", city: "Gjilan", location: "Xhamia Sulltan Murat", image: "📚" },
    { id: 66, name: "Amir Isaku", city: "Vushtrri", location: "Xhamia e Madhe", image: "🕌" },
    { id: 67, name: "Sinan Rushiti", city: "Prizren", location: "Xhamia e Re", image: "📖" },
    { id: 68, name: "Gazmend Mehmeti", city: "Prishtinë", location: "Xhamia Dardania", image: "🕌" },
    { id: 69, name: "Gilman Kazazi", city: "Mitrovicë", location: "Xhamia e Re", image: "🤲" },
    { id: 70, name: "Gentjan Mara", city: "Pejë", location: "Xhamia Arbëria", image: "📚" },
    { id: 71, name: "Lulzim Susuri", city: "Ferizaj", location: "Xhamia Qendrore", image: "🕌" },
    { id: 72, name: "Musli Zymberi", city: "Gjakovë", location: "Xhamia Çarshia", image: "📖" },
    { id: 73, name: "Fidan Xhelili", city: "Gjilan", location: "Xhamia Fatih", image: "🕌" },
    { id: 74, name: "Vesim Avdiu", city: "Vushtrri", location: "Xhamia Arbëria", image: "🤲" },
    { id: 75, name: "Blerim Rexha", city: "Prizren", location: "Xhamia e Madhe", image: "📚" },
    { id: 76, name: "Metush Mehmedi", city: "Prishtinë", location: "Xhamia Çarshia", image: "🕌" }
];

// Sample schedule data for each Imam (this would come from API in production)
const schedulesByImam = {
    1: [ // Ekrem Avdiu
        { date: "2025-11-24", time: "19:00", topic: "Akide - Besimi në Ditën e Fundit", description: "Një mësim rreth besimit në Ditën e Fundit dhe pasojat e saj në sjelljen e përditshme." }
    ],
    2: [ // Enis Rama
        { date: "2025-11-23", time: "17:30", topic: "Fikhul Ibadet - Namazi dhe Rëndësia e Tij", description: "Diskutim rreth rregullave të namazit dhe rëndësisë së tij në jetën e një muslimani." }
    ],
    52: [ // Shefqet Krasniqi
        { date: "2025-11-22", time: "18:00", topic: "Tefsiri i Kur'anit - Surja El-Bekare", description: "Një shpjegim i detajuar i Surës El-Bekare, duke u fokusuar në mësimet dhe udhëzimet e saj për jetën e përditshme." },
        { date: "2025-11-28", time: "13:00", topic: "Hytbeja e së Xhumasë - Falënderimi ndaj Allahut", description: "Hytbe e veçantë e së Xhumasë që fokusohet në rëndësinë e falënderimit ndaj Allahut." }
    ]
    // More schedules can be added for other imams
};

// State management
let filteredData = [...imamsData];
let reminders = JSON.parse(localStorage.getItem('reminders')) || [];

// DOM Elements
const scheduleList = document.getElementById('schedule-list');
const noResults = document.getElementById('no-results');
const filterImam = document.getElementById('filter-imam');
const filterTopic = document.getElementById('filter-topic');
const filterCity = document.getElementById('filter-city');
const detailModal = document.getElementById('detail-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// Initialize App
function init() {
    // Sort imams alphabetically
    imamsData.sort((a, b) => a.name.localeCompare(b.name));

    // Populate filters
    populateFilters();

    // Render imams list
    renderSchedule();

    // Setup event listeners
    setupEventListeners();

    // Request notification permission
    requestNotificationPermission();
}

// Populate filter dropdowns
function populateFilters() {
    const cities = [...new Set(imamsData.map(item => item.city))].sort();

    // Clear existing options (keep first "all" option)
    filterImam.innerHTML = '<option value="">Kërko Hoxhën...</option>';
    filterCity.innerHTML = '<option value="">Të gjitha Qytetet</option>';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        filterCity.appendChild(option);
    });

    // Change filter imam to a search field
    filterImam.setAttribute('list', 'imams-list');
    const datalist = document.createElement('datalist');
    datalist.id = 'imams-list';
    imamsData.forEach(imam => {
        const option = document.createElement('option');
        option.value = imam.name;
        datalist.appendChild(option);
    });
    filterImam.parentNode.appendChild(datalist);
}

// Render imams list
function renderSchedule() {
    scheduleList.innerHTML = '';

    if (filteredData.length === 0) {
        scheduleList.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    scheduleList.style.display = 'grid';
    noResults.style.display = 'none';

    filteredData.forEach(imam => {
        const card = createImamCard(imam);
        scheduleList.appendChild(card);
    });
}

// Create imam card element
function createImamCard(imam) {
    const card = document.createElement('div');
    card.className = 'schedule-card';

    const schedules = schedulesByImam[imam.id] || [];
    const scheduleCount = schedules.length;
    const nextSchedule = schedules.length > 0 ? schedules[0] : null;

    const mapLink = `https://maps.google.com/?q=${encodeURIComponent(imam.location + ' ' + imam.city)}`;

    card.innerHTML = `
        <div class="card-image">${imam.image}</div>
        <div class="card-content">
            <h3 class="card-imam">Hoxhë ${imam.name}</h3>
            <p class="card-topic">${imam.location}</p>
            <div class="card-meta">
                <div class="card-meta-item">
                    <span class="card-meta-icon">📍</span>
                    <span>${imam.city}</span>
                </div>
                <div class="card-meta-item">
                    <span class="card-meta-icon">📚</span>
                    <span>${scheduleCount} ${scheduleCount === 1 ? 'Mësim' : 'Mësime'}</span>
                </div>
                ${nextSchedule ? `
                <div class="card-meta-item">
                    <span class="card-meta-icon">📅</span>
                    <span>Tjetri: ${formatDate(nextSchedule.date)}</span>
                </div>
                ` : ''}
            </div>
            <div class="card-actions">
                <button class="btn btn-primary view-schedule-btn">
                    Shiko Orarin 👁️
                </button>
            </div>
        </div>
    `;

    // Click to open modal with imam's schedule
    card.addEventListener('click', () => {
        openModal(imam);
    });

    return card;
}

// Format date to Albanian
function formatDate(dateString) {
    const date = new Date(dateString);
    const days = ['E Diel', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë'];
    const months = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];

    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
}

// Filter data
function filterData() {
    const imamValue = filterImam.value.toLowerCase();
    const cityValue = filterCity.value;

    filteredData = imamsData.filter(item => {
        const matchImam = !imamValue || item.name.toLowerCase().includes(imamValue);
        const matchCity = !cityValue || item.city === cityValue;

        return matchImam && matchCity;
    });

    renderSchedule();
}

// Setup event listeners
function setupEventListeners() {
    filterImam.addEventListener('input', filterData);
    filterImam.addEventListener('change', filterData);
    filterCity.addEventListener('change', filterData);

    modalClose.addEventListener('click', closeModal);
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            closeModal();
        }
    });
}

// Open modal with imam's schedule
function openModal(imam) {
    const schedules = schedulesByImam[imam.id] || [];
    const mapLink = `https://maps.google.com/?q=${encodeURIComponent(imam.location + ' ' + imam.city)}`;

    let schedulesHTML = '';
    if (schedules.length > 0) {
        schedulesHTML = schedules.map(schedule => {
            const formattedDate = formatDate(schedule.date);
            return `
                <div class="schedule-item">
                    <div class="schedule-item-header">
                        <h4>${schedule.topic}</h4>
                        <span class="schedule-badge">${schedule.time}</span>
                    </div>
                    <p class="schedule-date">📅 ${formattedDate}</p>
                    <p class="schedule-description">${schedule.description}</p>
                </div>
            `;
        }).join('');
    } else {
        schedulesHTML = '<p class="no-schedule">Aktualisht nuk ka mësime të planifikuara.</p>';
    }

    modalBody.innerHTML = `
        <div class="modal-image">${imam.image}</div>
        <div class="modal-body">
            <h2 class="modal-imam">Hoxhë ${imam.name}</h2>
            <p class="modal-topic">${imam.location}</p>

            <div class="modal-meta">
                <div class="modal-meta-item">
                    <span class="modal-meta-icon">📍</span>
                    <span>${imam.city}</span>
                </div>
                <div class="modal-meta-item">
                    <span class="modal-meta-icon">📚</span>
                    <span>${schedules.length} ${schedules.length === 1 ? 'Mësim' : 'Mësime'}</span>
                </div>
            </div>

            <h3 class="schedules-title">Orari i Mësimeve</h3>
            <div class="schedules-list">
                ${schedulesHTML}
            </div>

            <div class="modal-actions">
                <a href="${mapLink}" target="_blank" class="btn btn-primary">
                    📍 Shiko në Hartë
                </a>
            </div>
        </div>
    `;

    detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    detailModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Request notification permission (for future use)
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// Initialize app on load
document.addEventListener('DOMContentLoaded', () => {
    init();
});
