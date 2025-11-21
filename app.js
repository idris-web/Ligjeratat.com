// Sample data - In production, this would come from an API
const scheduleData = [
    {
        id: 1,
        imam: "Hoxhë Shefqet Krasniqi",
        topic: "Tefsiri i Kur'anit - Surja El-Bekare",
        date: "2025-11-22",
        time: "18:00",
        city: "Prishtinë",
        location: "Xhamia e Madhe",
        description: "Një shpjegim i detajuar i Surës El-Bekare, duke u fokusuar në mësimet dhe udhëzimet e saj për jetën e përditshme.",
        image: "📖",
        mapLink: "https://maps.google.com/?q=Xhamia+e+Madhe+Prishtinë"
    },
    {
        id: 2,
        imam: "Hoxhë Rexhep Memishi",
        topic: "Fikhul Ibadet - Namazi dhe Rëndësia e Tij",
        date: "2025-11-23",
        time: "17:30",
        city: "Prizren",
        location: "Xhamia Sinan Pasha",
        description: "Diskutim rreth rregullave të namazit dhe rëndësisë së tij në jetën e një muslimani.",
        image: "🕌",
        mapLink: "https://maps.google.com/?q=Xhamia+Sinan+Pasha+Prizren"
    },
    {
        id: 3,
        imam: "Hoxhë Shefqet Krasniqi",
        topic: "Akide - Besimi në Ditën e Fundit",
        date: "2025-11-24",
        time: "19:00",
        city: "Prishtinë",
        location: "Xhamia e Madhe",
        description: "Një mësim rreth besimit në Ditën e Fundit dhe pasojat e saj në sjelljen e përditshme.",
        image: "🌙",
        mapLink: "https://maps.google.com/?q=Xhamia+e+Madhe+Prishtinë"
    },
    {
        id: 4,
        imam: "Hoxhë Bekir Halimi",
        topic: "Sira e Pejgamberit (a.s.) - Faza e Mekas",
        date: "2025-11-25",
        time: "18:30",
        city: "Pejë",
        location: "Xhamia Bajrakli",
        description: "Studim i jetës së Pejgamberit Muhamed (a.s.) gjatë periudhës së Mekas dhe mësimet që mund të nxjerrim.",
        image: "☪️",
        mapLink: "https://maps.google.com/?q=Xhamia+Bajrakli+Pejë"
    },
    {
        id: 5,
        imam: "Hoxhë Rexhep Memishi",
        topic: "Etika Islame - Sjellja me Prindërit",
        date: "2025-11-26",
        time: "17:00",
        city: "Prizren",
        location: "Xhamia Sinan Pasha",
        description: "Mësim rreth rëndësisë së respektimit dhe kujdesit ndaj prindërve sipas mësimeve islame.",
        image: "💚",
        mapLink: "https://maps.google.com/?q=Xhamia+Sinan+Pasha+Prizren"
    },
    {
        id: 6,
        imam: "Hoxhë Bekim Jashari",
        topic: "Tefsiri i Kur'anit - Surja El-Kehf",
        date: "2025-11-27",
        time: "18:00",
        city: "Mitrovicë",
        location: "Xhamia Qendrore",
        description: "Interpretim i Surës El-Kehf dhe historive të saj të përshkruara në Kur'an.",
        image: "📚",
        mapLink: "https://maps.google.com/?q=Xhamia+Qendrore+Mitrovicë"
    },
    {
        id: 7,
        imam: "Hoxhë Shefqet Krasniqi",
        topic: "Hytbeja e së Xhumasë - Falënderimi ndaj Allahut",
        date: "2025-11-28",
        time: "13:00",
        city: "Prishtinë",
        location: "Xhamia e Madhe",
        description: "Hytbe e veçantë e së Xhumasë që fokusohet në rëndësinë e falënderimit ndaj Allahut.",
        image: "🤲",
        mapLink: "https://maps.google.com/?q=Xhamia+e+Madhe+Prishtinë"
    },
    {
        id: 8,
        imam: "Hoxhë Bekir Halimi",
        topic: "Fikhul Muamelat - Tregtia në Islam",
        date: "2025-11-29",
        time: "19:00",
        city: "Pejë",
        location: "Xhamia Bajrakli",
        description: "Diskutim rreth parimeve të tregtisë së ndershme dhe halal sipas Islamit.",
        image: "💼",
        mapLink: "https://maps.google.com/?q=Xhamia+Bajrakli+Pejë"
    },
    {
        id: 9,
        imam: "Hoxhë Arben Vokshi",
        topic: "Akhlak - Durimi dhe Sabri",
        date: "2025-11-30",
        time: "18:00",
        city: "Gjakovë",
        location: "Xhamia Hadum",
        description: "Mësim rreth rëndësisë së durimit dhe sabrës në situata të vështira të jetës.",
        image: "🌟",
        mapLink: "https://maps.google.com/?q=Xhamia+Hadum+Gjakovë"
    },
    {
        id: 10,
        imam: "Hoxhë Bekim Jashari",
        topic: "Tefsiri i Kur'anit - Surja En-Nur",
        date: "2025-12-01",
        time: "17:30",
        city: "Mitrovicë",
        location: "Xhamia Qendrore",
        description: "Shpjegim i Surës En-Nur dhe mësimeve të saj rreth moralit dhe sjelljes së pastër.",
        image: "✨",
        mapLink: "https://maps.google.com/?q=Xhamia+Qendrore+Mitrovicë"
    }
];

// State management
let filteredData = [...scheduleData];
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
    // Sort by date
    scheduleData.sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));

    // Populate filters
    populateFilters();

    // Render schedule
    renderSchedule();

    // Setup event listeners
    setupEventListeners();

    // Request notification permission
    requestNotificationPermission();
}

// Populate filter dropdowns
function populateFilters() {
    const imams = [...new Set(scheduleData.map(item => item.imam))].sort();
    const topics = [...new Set(scheduleData.map(item => item.topic.split(' - ')[0]))].sort();
    const cities = [...new Set(scheduleData.map(item => item.city))].sort();

    imams.forEach(imam => {
        const option = document.createElement('option');
        option.value = imam;
        option.textContent = imam;
        filterImam.appendChild(option);
    });

    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        filterTopic.appendChild(option);
    });

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        filterCity.appendChild(option);
    });
}

// Render schedule cards
function renderSchedule() {
    scheduleList.innerHTML = '';

    if (filteredData.length === 0) {
        scheduleList.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    scheduleList.style.display = 'grid';
    noResults.style.display = 'none';

    filteredData.forEach(item => {
        const card = createScheduleCard(item);
        scheduleList.appendChild(card);
    });
}

// Create schedule card element
function createScheduleCard(item) {
    const card = document.createElement('div');
    card.className = 'schedule-card';

    const formattedDate = formatDate(item.date);
    const isReminderSet = reminders.includes(item.id);

    card.innerHTML = `
        <div class="card-image">${item.image}</div>
        <div class="card-content">
            <h3 class="card-imam">${item.imam}</h3>
            <p class="card-topic">${item.topic}</p>
            <div class="card-meta">
                <div class="card-meta-item">
                    <span class="card-meta-icon">📅</span>
                    <span>${formattedDate}, ${item.time}</span>
                </div>
                <div class="card-meta-item">
                    <span class="card-meta-icon">📍</span>
                    <a href="${item.mapLink}" target="_blank" class="card-location" onclick="event.stopPropagation()">
                        ${item.location}, ${item.city}
                    </a>
                </div>
            </div>
            <div class="card-actions">
                <button class="btn btn-secondary reminder-btn ${isReminderSet ? 'active' : ''}" data-id="${item.id}">
                    ${isReminderSet ? '🔔 Aktive' : '🔕 Përkujtues'}
                </button>
            </div>
        </div>
    `;

    // Click to open modal
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.reminder-btn') && !e.target.closest('.card-location')) {
            openModal(item);
        }
    });

    // Reminder button
    const reminderBtn = card.querySelector('.reminder-btn');
    reminderBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleReminder(item.id);
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
    const imamValue = filterImam.value;
    const topicValue = filterTopic.value;
    const cityValue = filterCity.value;

    filteredData = scheduleData.filter(item => {
        const matchImam = !imamValue || item.imam === imamValue;
        const matchTopic = !topicValue || item.topic.includes(topicValue);
        const matchCity = !cityValue || item.city === cityValue;

        return matchImam && matchTopic && matchCity;
    });

    renderSchedule();
}

// Setup event listeners
function setupEventListeners() {
    filterImam.addEventListener('change', filterData);
    filterTopic.addEventListener('change', filterData);
    filterCity.addEventListener('change', filterData);

    modalClose.addEventListener('click', closeModal);
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            closeModal();
        }
    });
}

// Open modal with details
function openModal(item) {
    const formattedDate = formatDate(item.date);
    const isReminderSet = reminders.includes(item.id);

    modalBody.innerHTML = `
        <div class="modal-image">${item.image}</div>
        <div class="modal-body">
            <h2 class="modal-imam">${item.imam}</h2>
            <p class="modal-topic">${item.topic}</p>

            <div class="modal-meta">
                <div class="modal-meta-item">
                    <span class="modal-meta-icon">📅</span>
                    <span>${formattedDate}, ${item.time}</span>
                </div>
                <div class="modal-meta-item">
                    <span class="modal-meta-icon">📍</span>
                    <a href="${item.mapLink}" target="_blank" class="card-location">
                        ${item.location}, ${item.city}
                    </a>
                </div>
            </div>

            <p class="modal-description">${item.description}</p>

            <div class="modal-actions">
                <button class="btn btn-secondary reminder-btn-modal ${isReminderSet ? 'active' : ''}" data-id="${item.id}">
                    ${isReminderSet ? '🔔 Përkujtues Aktiv' : '🔕 Aktivizo Përkujtues'}
                </button>
                <a href="${item.mapLink}" target="_blank" class="btn btn-primary">
                    📍 Shiko në Hartë
                </a>
            </div>
        </div>
    `;

    const reminderBtn = modalBody.querySelector('.reminder-btn-modal');
    reminderBtn.addEventListener('click', () => toggleReminder(item.id));

    detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    detailModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Toggle reminder
function toggleReminder(id) {
    const index = reminders.indexOf(id);

    if (index > -1) {
        reminders.splice(index, 1);
    } else {
        reminders.push(id);
        scheduleNotification(id);
    }

    localStorage.setItem('reminders', JSON.stringify(reminders));
    renderSchedule();

    // Update modal if open
    if (detailModal.classList.contains('active')) {
        const item = scheduleData.find(item => item.id === id);
        if (item) {
            openModal(item);
        }
    }
}

// Request notification permission
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// Schedule notification
function scheduleNotification(id) {
    if ('Notification' in window && Notification.permission === 'granted') {
        const item = scheduleData.find(item => item.id === id);
        if (!item) return;

        const eventTime = new Date(item.date + ' ' + item.time);
        const reminderTime = new Date(eventTime.getTime() - 60 * 60 * 1000); // 1 hour before
        const now = new Date();

        if (reminderTime > now) {
            const timeUntilReminder = reminderTime - now;

            setTimeout(() => {
                new Notification('Përkujtues për Mësim', {
                    body: `${item.topic}\n${item.imam}\n${item.time} - ${item.location}, ${item.city}`,
                    icon: '🕌',
                    tag: `reminder-${id}`
                });
            }, timeUntilReminder);
        }
    }
}

// Check and show notifications for existing reminders
function checkExistingReminders() {
    reminders.forEach(id => {
        scheduleNotification(id);
    });
}

// Initialize app on load
document.addEventListener('DOMContentLoaded', () => {
    init();
    checkExistingReminders();
});
