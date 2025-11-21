// ==================== MODERN 2025 FILTER SYSTEM ====================

// Global variable for selected city
let selectedCity = '';
let searchDebounceTimer = null;

// Debounce helper function für Performance
function debounce(func, delay) {
    return function(...args) {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Input Sanitization für XSS Prevention
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Populate City Pills (replaces old dropdown)
function populateCityPills() {
    const cityPillsContainer = document.getElementById('city-pills');
    if (!cityPillsContainer) return;

    const cities = [...new Set(imamsData.map(item => item.city))].sort();

    cityPillsContainer.innerHTML = `
        <button class="city-pill active" data-city="">
            <i class="fas fa-location-dot"></i>
            Të gjitha
        </button>
    `;

    cities.forEach(city => {
        const pill = document.createElement('button');
        pill.className = 'city-pill';
        pill.setAttribute('data-city', city);
        pill.innerHTML = `
            <i class="fas fa-map-pin"></i>
            ${city}
        `;
        cityPillsContainer.appendChild(pill);
    });

    // Add event listeners to city pills
    document.querySelectorAll('.city-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            selectedCity = pill.getAttribute('data-city');

            // Update active state
            document.querySelectorAll('.city-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Trigger filter
            filterData();
        });
    });
}

// Update populateFilters to use new system
function populateFilters() {
    populateCityPills();
}

// Setup Modern Filter Event Listeners
function setupModernFilters() {
    // Clear Search Button
    const clearSearchBtn = document.getElementById('clear-search');
    const searchInput = document.getElementById('filter-imam');

    if (searchInput && clearSearchBtn) {
        // Debounced filter für Performance (300ms delay)
        const debouncedFilter = debounce(() => {
            filterData();
        }, 300);

        searchInput.addEventListener('input', (e) => {
            if (e.target.value.length > 0) {
                clearSearchBtn.style.display = 'flex';
            } else {
                clearSearchBtn.style.display = 'none';
            }
            debouncedFilter();
        });

        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearSearchBtn.style.display = 'none';
            filterData();
        });
    }

    // Filter Chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const filter = chip.getAttribute('data-filter');

            // Update active state
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            // Update global state
            onlyWithSchedules = filter === 'schedules';
            onlyFavorites = filter === 'favorites';

            // Trigger filter
            filterData();
        });
    });

    // Sort Buttons
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const sort = btn.getAttribute('data-sort');

            // Update active state
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update global state
            currentSort = sort;

            // Trigger filter
            filterData();
        });
    });

    // "Alle Imamë" Button
    const allImamsBtn = document.getElementById('all-imams-btn');
    if (allImamsBtn) {
        allImamsBtn.addEventListener('click', () => {
            // Reset all filters
            selectedCity = '';
            onlyWithSchedules = false;
            onlyFavorites = false;
            currentSort = 'name';

            // Reset search
            if (searchInput) {
                searchInput.value = '';
                clearSearchBtn.style.display = 'none';
            }

            // Reset UI
            document.querySelectorAll('.city-pill').forEach(p => p.classList.remove('active'));
            document.querySelector('.city-pill[data-city=""]')?.classList.add('active');

            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            document.querySelector('.filter-chip[data-filter="all"]')?.classList.add('active');

            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.sort-btn[data-sort="name"]')?.classList.add('active');

            // Show all imams
            filteredData = [...imamsData];
            sortData();
            renderSchedule();

            // Scroll to list
            document.getElementById('imams-view').scrollIntoView({ behavior: 'smooth' });
            showToast('Shfaqen të gjithë 76 imamët!', 'success');
        });
    }
}

// Override filterData to use selectedCity instead of filterCity dropdown
const originalFilterData = filterData;
function filterData() {
    const imamInput = document.getElementById('filter-imam')?.value || '';
    const imamValue = sanitizeInput(imamInput).toLowerCase(); // XSS Prevention

    // Filtron të dhënat
    filteredData = imamsData.filter(item => {
        const matchImam = !imamValue || item.name.toLowerCase().includes(imamValue);
        const matchCity = !selectedCity || item.city === selectedCity;
        const matchSchedules = !onlyWithSchedules || (schedulesByImam[item.id] && schedulesByImam[item.id].length > 0);
        const matchFavorites = !onlyFavorites || isFavorite(item.id);

        return matchImam && matchCity && matchSchedules && matchFavorites;
    });

    // Rendit të dhënat
    sortData();
    renderSchedule();
}

// Call this after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupModernFilters();
});
