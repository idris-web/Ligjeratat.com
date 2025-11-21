// Lista e plotë e të gjithë 76 Imamëve në Kosovë
const imamsData = [
    { id: 1, name: "Ekrem Avdiu", city: "Prishtinë", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Ekrem+Avdiu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 2, name: "Enis Rama", city: "Prizren", location: "Xhamia Sinan Pasha", image: "https://ui-avatars.com/api/?name=Enis+Rama&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 3, name: "Blerim Musliu", city: "Prishtinë", location: "Xhamia Dardania", image: "https://ui-avatars.com/api/?name=Blerim+Musliu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 4, name: "Ismail Bardhoshi", city: "Mitrovicë", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Ismail+Bardhoshi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 5, name: "Rasim Haxha", city: "Ferizaj", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Rasim+Haxha&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 6, name: "Fadil Musliu", city: "Pejë", location: "Xhamia Bajrakli", image: "https://ui-avatars.com/api/?name=Fadil+Musliu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 7, name: "Zeki Qerkezi", city: "Gjakovë", location: "Xhamia Hadum", image: "https://ui-avatars.com/api/?name=Zeki+Qerkezi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 8, name: "Llokman Hoxha", city: "Gjilan", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Llokman+Hoxha&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 9, name: "Sulltan Pajaziti", city: "Vushtrri", location: "Xhamia Gazi Ali Beu", image: "https://ui-avatars.com/api/?name=Sulltan+Pajaziti&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 10, name: "Alaudin Abazi", city: "Prishtinë", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Alaudin+Abazi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 11, name: "Bajram Karabegu", city: "Prizren", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Bajram+Karabegu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 12, name: "Sadat Rrustemi", city: "Mitrovicë", location: "Xhamia e Vjetër", image: "https://ui-avatars.com/api/?name=Sadat+Rrustemi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 13, name: "Mustafa Terniqi", city: "Pejë", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Mustafa+Terniqi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 14, name: "Sedat Islami", city: "Ferizaj", location: "Xhamia Sulltan Murat", image: "https://ui-avatars.com/api/?name=Sedat+Islami&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 15, name: "Adnan Pallqa", city: "Gjakovë", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Adnan+Pallqa&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 16, name: "Jusuf Kastrati", city: "Prishtinë", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Jusuf+Kastrati&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 17, name: "Arsim Morina", city: "Gjilan", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Arsim+Morina&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 18, name: "Abdurrahman Bejtullahu", city: "Vushtrri", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Abdurrahman+Bejtullahu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 19, name: "Sami Fetahu", city: "Prizren", location: "Xhamia Gazi Mehmet Pasha", image: "https://ui-avatars.com/api/?name=Sami+Fetahu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 20, name: "Agim Bekiri", city: "Mitrovicë", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Agim+Bekiri&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 21, name: "Bekir Halimi", city: "Pejë", location: "Xhamia Bajrakli", image: "https://ui-avatars.com/api/?name=Bekir+Halimi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 22, name: "Ahmed Kalaja", city: "Ferizaj", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Ahmed+Kalaja&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 23, name: "Ferid Selimi", city: "Prishtinë", location: "Xhamia Lakriste", image: "https://ui-avatars.com/api/?name=Ferid+Selimi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 24, name: "Besnik Llumnica", city: "Gjakovë", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Besnik+Llumnica&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 25, name: "Ahmed Numanaj", city: "Gjilan", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Ahmed+Numanaj&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 26, name: "Bilal Teqja", city: "Vushtrri", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Bilal+Teqja&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 27, name: "Uthman Agolli", city: "Prizren", location: "Xhamia Arasta", image: "https://ui-avatars.com/api/?name=Uthman+Agolli&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 28, name: "Bledar Haxhiu", city: "Mitrovicë", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Bledar+Haxhiu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 29, name: "Justinian Topulli", city: "Pejë", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Justinian+Topulli&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 30, name: "Enes Goga", city: "Ferizaj", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Enes+Goga&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 31, name: "Ernest Goga", city: "Prishtinë", location: "Xhamia Kalabria", image: "https://ui-avatars.com/api/?name=Ernest+Goga&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 32, name: "Muhamed Broja", city: "Gjakovë", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Muhamed+Broja&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 33, name: "Fidan Musliu", city: "Gjilan", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Fidan+Musliu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 34, name: "Fitim Gerguri", city: "Vushtrri", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Fitim+Gerguri&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 35, name: "Gazmir Sahara", city: "Prizren", location: "Xhamia e Vjetër", image: "https://ui-avatars.com/api/?name=Gazmir+Sahara&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 36, name: "Driton Xhezairi", city: "Mitrovicë", location: "Xhamia Sulltan Mehmet", image: "https://ui-avatars.com/api/?name=Driton+Xhezairi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 37, name: "Hadith Miftari", city: "Pejë", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Hadith+Miftari&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 38, name: "Bashkim Bajrami", city: "Ferizaj", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Bashkim+Bajrami&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 39, name: "Ulvi Fejzullahu", city: "Prishtinë", location: "Xhamia Mati", image: "https://ui-avatars.com/api/?name=Ulvi+Fejzullahu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 40, name: "Muhamed Dermaku", city: "Gjakovë", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Muhamed+Dermaku&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 41, name: "Hekuran Elshani", city: "Gjilan", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Hekuran+Elshani&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 42, name: "Kujtim Ameti", city: "Vushtrri", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Kujtim+Ameti&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 43, name: "Amel Kurteshi", city: "Prizren", location: "Xhamia Kalabria", image: "https://ui-avatars.com/api/?name=Amel+Kurteshi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 44, name: "Ali Ashani", city: "Mitrovicë", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Ali+Ashani&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 45, name: "Bledar Mulla", city: "Pejë", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Bledar+Mulla&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 46, name: "Valdet Gashi", city: "Ferizaj", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Valdet+Gashi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 47, name: "Osman Bekteshi", city: "Prishtinë", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Osman+Bekteshi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 48, name: "Irfan Salihu", city: "Gjakovë", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Irfan+Salihu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 49, name: "Remzi Isaku", city: "Gjilan", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Remzi+Isaku&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 50, name: "Faruk Lohaj", city: "Vushtrri", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Faruk+Lohaj&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 51, name: "Mirsim Maliqi", city: "Prizren", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Mirsim+Maliqi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 52, name: "Shefqet Krasniqi", city: "Prishtinë", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Shefqet+Krasniqi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 53, name: "Eroll Rexhepi", city: "Mitrovicë", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Eroll+Rexhepi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 54, name: "Ruzhdi Buzuku", city: "Pejë", location: "Xhamia e Vjetër", image: "https://ui-avatars.com/api/?name=Ruzhdi+Buzuku&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 55, name: "Bali Sadiku", city: "Ferizaj", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Bali+Sadiku&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 56, name: "Xheladin Leka", city: "Gjakovë", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Xheladin+Leka&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 57, name: "Rafet Zaimi", city: "Gjilan", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Rafet+Zaimi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 58, name: "Harith Selimi", city: "Vushtrri", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Harith+Selimi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 59, name: "Uvejs Ramadani", city: "Prizren", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Uvejs+Ramadani&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 60, name: "Blerim Murati", city: "Prishtinë", location: "Xhamia Ulpiana", image: "https://ui-avatars.com/api/?name=Blerim+Murati&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 61, name: "Usame Morina", city: "Mitrovicë", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Usame+Morina&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 62, name: "Irfan Jahiu", city: "Pejë", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Irfan+Jahiu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 63, name: "Ismail Asllani", city: "Ferizaj", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Ismail+Asllani&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 64, name: "Muharrem Ismaili", city: "Gjakovë", location: "Xhamia e Vjetër", image: "https://ui-avatars.com/api/?name=Muharrem+Ismaili&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 65, name: "Fatmir Latifi", city: "Gjilan", location: "Xhamia Sulltan Murat", image: "https://ui-avatars.com/api/?name=Fatmir+Latifi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 66, name: "Amir Isaku", city: "Vushtrri", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Amir+Isaku&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 67, name: "Sinan Rushiti", city: "Prizren", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Sinan+Rushiti&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 68, name: "Gazmend Mehmeti", city: "Prishtinë", location: "Xhamia Dardania", image: "https://ui-avatars.com/api/?name=Gazmend+Mehmeti&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 69, name: "Gilman Kazazi", city: "Mitrovicë", location: "Xhamia e Re", image: "https://ui-avatars.com/api/?name=Gilman+Kazazi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 70, name: "Gentjan Mara", city: "Pejë", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Gentjan+Mara&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 71, name: "Lulzim Susuri", city: "Ferizaj", location: "Xhamia Qendrore", image: "https://ui-avatars.com/api/?name=Lulzim+Susuri&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 72, name: "Musli Zymberi", city: "Gjakovë", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Musli+Zymberi&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 73, name: "Fidan Xhelili", city: "Gjilan", location: "Xhamia Fatih", image: "https://ui-avatars.com/api/?name=Fidan+Xhelili&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 74, name: "Vesim Avdiu", city: "Vushtrri", location: "Xhamia Arbëria", image: "https://ui-avatars.com/api/?name=Vesim+Avdiu&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 75, name: "Blerim Rexha", city: "Prizren", location: "Xhamia e Madhe", image: "https://ui-avatars.com/api/?name=Blerim+Rexha&size=400&background=2c5f2d&color=fff&bold=true" },
    { id: 76, name: "Metush Mehmedi", city: "Prishtinë", location: "Xhamia Çarshia", image: "https://ui-avatars.com/api/?name=Metush+Mehmedi&size=400&background=2c5f2d&color=fff&bold=true" }
];

// Të dhënat e orarit për çdo Imam (në prodhim do të vijnë nga API)
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
    // Më shumë orarë mund të shtohen për imamë të tjerë
};

// Menaxhimi i gjendjes
let filteredData = [...imamsData];
let currentSort = 'name';
let onlyWithSchedules = false;

// Elementet e DOM
const scheduleList = document.getElementById('schedule-list');
const noResults = document.getElementById('no-results');
const filterImam = document.getElementById('filter-imam');
const filterCity = document.getElementById('filter-city');
const sortBy = document.getElementById('sort-by');
const onlyWithSchedulesToggle = document.getElementById('only-with-schedules');
const detailModal = document.getElementById('detail-modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// Inicializimi i Aplikacionit
function init() {
    // Rendit imamët alfabetikisht
    imamsData.sort((a, b) => a.name.localeCompare(b.name));

    // Populloj filtrat
    populateFilters();

    // Shfaq listën e imamëve
    renderSchedule();

    // Vendos dëgjuesit e ngjarjeve
    setupEventListeners();
}

// Populloj filtrat dropdown
function populateFilters() {
    const cities = [...new Set(imamsData.map(item => item.city))].sort();

    filterCity.innerHTML = '<option value="">Të gjitha Qytetet</option>';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        filterCity.appendChild(option);
    });

    // Ndryshoj filtrin e imamit në fushë kërkimi
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

// Shfaq listën e imamëve
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

// Krijon kartelën e imamit
function createImamCard(imam) {
    const card = document.createElement('div');
    card.className = 'schedule-card';

    const schedules = schedulesByImam[imam.id] || [];
    const scheduleCount = schedules.length;
    const nextSchedule = schedules.length > 0 ? schedules[0] : null;

    const mapLink = `https://maps.google.com/?q=${encodeURIComponent(imam.location + ' ' + imam.city)}`;

    card.innerHTML = `
        <div class="card-image">
            <img src="${imam.image}" alt="${imam.name}" loading="lazy">
        </div>
        <div class="card-content">
            <h3 class="card-imam">Hoxhë ${imam.name}</h3>
            <p class="card-topic">${imam.location}</p>
            <div class="card-meta">
                <div class="card-meta-item">
                    <i class="fas fa-map-marker-alt card-meta-icon"></i>
                    <span>${imam.city}</span>
                </div>
                <div class="card-meta-item">
                    <i class="fas fa-book card-meta-icon"></i>
                    <span>${scheduleCount} ${scheduleCount === 1 ? 'Mësim' : 'Mësime'}</span>
                </div>
                ${nextSchedule ? `
                <div class="card-meta-item">
                    <i class="fas fa-calendar-alt card-meta-icon"></i>
                    <span>Tjetri: ${formatDate(nextSchedule.date)}</span>
                </div>
                ` : ''}
            </div>
            <div class="card-actions">
                <button class="btn btn-primary view-schedule-btn">
                    <i class="fas fa-eye"></i> Shiko Orarin
                </button>
            </div>
        </div>
    `;

    // Kliko për të hapur modalin me orarin e imamit
    card.addEventListener('click', () => {
        openModal(imam);
    });

    return card;
}

// Formaton datën në shqip
function formatDate(dateString) {
    const date = new Date(dateString);
    const days = ['E Diel', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë'];
    const months = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];

    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
}

// Filtron dhe rendit të dhënat
function filterData() {
    const imamValue = filterImam.value.toLowerCase();
    const cityValue = filterCity.value;

    // Filtron të dhënat
    filteredData = imamsData.filter(item => {
        const matchImam = !imamValue || item.name.toLowerCase().includes(imamValue);
        const matchCity = !cityValue || item.city === cityValue;
        const matchSchedules = !onlyWithSchedules || (schedulesByImam[item.id] && schedulesByImam[item.id].length > 0);

        return matchImam && matchCity && matchSchedules;
    });

    // Rendit të dhënat
    sortData();

    renderSchedule();
}

// Rendit të dhënat sipas kritereve të zgjedhura
function sortData() {
    switch(currentSort) {
        case 'name':
            filteredData.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'city':
            filteredData.sort((a, b) => a.city.localeCompare(b.city));
            break;
        case 'schedules':
            filteredData.sort((a, b) => {
                const aCount = schedulesByImam[a.id]?.length || 0;
                const bCount = schedulesByImam[b.id]?.length || 0;
                return bCount - aCount; // Zbritës
            });
            break;
    }
}

// Vendos dëgjuesit e ngjarjeve
function setupEventListeners() {
    filterImam.addEventListener('input', filterData);
    filterImam.addEventListener('change', filterData);
    filterCity.addEventListener('change', filterData);

    sortBy.addEventListener('change', (e) => {
        currentSort = e.target.value;
        filterData();
    });

    onlyWithSchedulesToggle.addEventListener('change', (e) => {
        onlyWithSchedules = e.target.checked;
        filterData();
    });

    modalClose.addEventListener('click', closeModal);
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            closeModal();
        }
    });
}

// Hap modalin me orarin e imamit
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
                        <span class="schedule-badge"><i class="fas fa-clock"></i> ${schedule.time}</span>
                    </div>
                    <p class="schedule-date"><i class="fas fa-calendar-day"></i> ${formattedDate}</p>
                    <p class="schedule-description">${schedule.description}</p>
                </div>
            `;
        }).join('');
    } else {
        schedulesHTML = '<p class="no-schedule"><i class="fas fa-info-circle"></i> Aktualisht nuk ka mësime të planifikuara.</p>';
    }

    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${imam.image}" alt="${imam.name}" loading="lazy">
        </div>
        <div class="modal-body">
            <h2 class="modal-imam">Hoxhë ${imam.name}</h2>
            <p class="modal-topic"><i class="fas fa-mosque"></i> ${imam.location}</p>

            <div class="modal-meta">
                <div class="modal-meta-item">
                    <i class="fas fa-map-marker-alt modal-meta-icon"></i>
                    <span>${imam.city}</span>
                </div>
                <div class="modal-meta-item">
                    <i class="fas fa-book modal-meta-icon"></i>
                    <span>${schedules.length} ${schedules.length === 1 ? 'Mësim' : 'Mësime'}</span>
                </div>
            </div>

            <h3 class="schedules-title">Orari i Mësimeve</h3>
            <div class="schedules-list">
                ${schedulesHTML}
            </div>

            <div class="modal-actions">
                <a href="${mapLink}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-map-marked-alt"></i> Shiko në Hartë
                </a>
            </div>
        </div>
    `;

    detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Mbyll modalin
function closeModal() {
    detailModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Inicializo aplikacionin kur ngarkohet faqja
document.addEventListener('DOMContentLoaded', () => {
    init();
});
