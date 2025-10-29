// --- Client Data Array ---
const clientData = [

// INDIA
    { name: "Otlo Cafe", website: "https://otlocafe.com", country: "india", industry: "cafe" }, 
    { name: "Delhi Chai Cafe", website: "https://delhichaicafe.com/", country: "india", industry: "cafe" }, 
    { name: "Tamasha restro", website: "https://tamasha.ca/", country: "india", industry: "restaurant" }, // Assuming Tamasha is a restaurant/restro
    { name: "Fubs", website: "https://fubs.in/", country: "india", industry: "jewellery" },
    { name: "Amama", website: "https://www.amama.in/", country: "india", industry: "jewellery" },
    { name: "Orra", website: "https://www.orra.co.in/", country: "india", industry: "jewellery" },
    { name: "Voylla", website: "https://www.voylla.com/", country: "india", industry: "jewellery" },

    // AUSTRALIA
    { name: "QAG Cafe", website: "https://www.qagoma.qld.gov.au/", country: "australia", industry: "cafe" },
    { name: "Coffee Works", website: "https://coffeeworks.com.au/", country: "australia", industry: "cafe" },
    { name: "Little Black Pug", website: "https://www.littleblackpug.com.au/", country: "australia", industry: "cafe" },
    { name: "Cherrie Baby Boutique", website: "https://cherriebaby.com.au/", country: "australia", industry: "clothing" },
    { name: "Edge Clothing - Townsville", website: "https://www.edgeclothing.com.au/", country: "australia", industry: "clothing" },
    { name: "QTCo", website: "https://www.qtco.com.au/", country: "australia", industry: "clothing" },

    // CANADA
    { name: "Savor Thai Toronto", website: "https://www.savortoronto.ca", country: "canada", industry: "cafe" },
    { name: "Bao House", website: "https://www.bao-house.ca/", country: "canada", industry: "cafe" },
    { name: "Rustle & Still Café", website: "https://www.rustleandstill.com/", country: "canada", industry: "cafe" },
    { name: "Cafe Landwer", website: "http://www.landwer.ca/", country: "canada", industry: "cafe" },
    { name: "Neo Coffee bar", website: "https://www.neocoffeebar.com/", country: "canada", industry: "cafe" },
    { name: "Mallo Coffee & Bar", website: "http://www.mallo.ca/", country: "canada", industry: "cafe" },
    { name: "Versus Coffee", website: "https://versuscoffeebar.com/", country: "canada", industry: "cafe" },
    { name: "Pera Cafe", website: "https://www.peracafe.ca/", country: "canada", industry: "cafe" },
    { name: "Anne Sportun Jewellery", website: "https://www.annesportun.com/", country: "canada", industry: "jewellery" },
    { name: "Alex Armen", website: "https://solitairejewellery.com/", country: "canada", industry: "jewellery" },
    { name: "Strada Jewelry", website: "https://www.stradajewellery.com/", country: "canada", industry: "jewellery" },
    { name: "Anvil Jewellery Ltd.", website: "https://anviljewellery.ca/", country: "canada", industry: "jewellery" },
    { name: "bluboho", website: "https://www.bluboho.com/", country: "canada", industry: "jewellery" },
    { name: "Design By Sevan", website: "https://designbysevan.com/", country: "canada", industry: "jewellery" },
    { name: "Daniel Toma Chartered Accountant", website: "https://www.danieltoma.ca/", country: "canada", industry: "accounting" },
    { name: "Maroof HS CPA Professional Corporation", website: "http://www.maroofhs.com/", country: "canada", industry: "accounting" },
    { name: "Dean and associates", website: "https://www.deanandassociates.ca/", country: "canada", industry: "accounting" },
    { name: "Stern Cohen Accountants", website: "https://www.sterncohen.com/", country: "canada", industry: "accounting" },
    { name: "Vive Fitness", website: "https://vivefitness.com/", country: "canada", industry: "gyms" },
    { name: "Fortis Fitness", website: "http://www.fortisfitness.ca/", country: "canada", industry: "gyms" },
    { name: "Pure Fitness Canada", website: "http://www.purefitnesscanada.com/", country: "canada", industry: "gyms" },
    { name: "Astaneh Construction", website: "https://astanehconstruction.com/", country: "canada", industry: "construction" },
    { name: "Mr General Contractor", website: "https://www.mistercontractor.ca/", country: "canada", industry: "construction" },
    { name: "ALBO Renovations", website: "http://www.alboreno.com/", country: "canada", industry: "construction" },
    { name: "Ashton Renovations", website: "https://ashtonrenovations.com/", country: "canada", industry: "construction" },
    { name: "GoLaser", website: "https://www.golaser.ca/", country: "canada", industry: "skin-clinic" },
    { name: "Carlton Skin Clinic", website: "http://www.carltonskinclinic.ca/", country: "canada", industry: "skin-clinic" },
    { name: "Rose Lortie", website: "http://www.roseskincare.ca/", country: "canada", industry: "skin-clinic" },
    { name: "Le Reve Skin Clinic", website: "http://www.lereveskinclinic.com/", country: "canada", industry: "skin-clinic" },
    { name: "Lumiskins", website: "https://lumiskins.ca/", country: "canada", industry: "skin-clinic" },
    { name: "SkinVantage", website: "https://skinvantage.ca/", country: "canada", industry: "skin-clinic" },
    { name: "Dr. John J. Mantzoris", website: "http://www.dentistryatthemodern.ca/", country: "canada", industry: "dental-clinic" },
    { name: "Studio Dental", website: "https://www.studiodentalcentres.ca/", country: "canada", industry: "dental-clinic" },
    { name: "West Village Dental Clinic", website: "https://westvillagedental.ca/", country: "canada", industry: "dental-clinic" },
    { name: "Dr. Rashin Elahi", website: "https://smiledentaltoronto.com/", country: "canada", industry: "dental-clinic" },
    { name: "Canoe", website: "http://www.canoerestaurant.com/", country: "canada", industry: "restaurant" },
    { name: "PAI", website: "http://www.paitoronto.com/", country: "canada", industry: "restaurant" },
    { name: "RASA", website: "http://www.rasabar.ca/", country: "canada", industry: "restaurant" },
    { name: "Toscana Italian Grill", website: "https://toscanagrill.ca/", country: "canada", industry: "restaurant" },
    { name: "River Café", website: "http://www.river-cafe.com/", country: "canada", industry: "restaurant" },
    { name: "Saltlik", website: "https://saltlik.com/", country: "canada", industry: "restaurant" },
    { name: "Marko's Kitchen", website: "http://www.markoskitchen.ca/", country: "canada", industry: "restaurant" },
    { name: "Bow Valley Ranche Restaurant", website: "http://www.bvrrestaurant.com/", country: "canada", industry: "restaurant" },
    { name: "St. Lawrence Restaurant", website: "http://www.stlawrencerestaurant.com/", country: "canada", industry: "restaurant" },
    { name: "CinCin Ristorante", website: "https://cincin.net/", country: "canada", industry: "restaurant" },
    { name: "L'Abattoir", website: "https://www.labattoir.ca/", country: "canada", industry: "restaurant" },
    { name: "L'Atelier Patisserie", website: "https://www.latelierpatisserie.online/", country: "canada", industry: "bakery" },

    // BELGIUM
    { name: "LADRESSE LUXURY FASHION", website: "https://ladressefashion.com/en", country: "belgium", industry: "clothing" },
    { name: "Stijl", website: "https://www.stijl.be/", country: "belgium", industry: "clothing" },
    { name: "Docks Caviar!", website: "https://www.dockscaviar.com/", country: "belgium", industry: "clothing" },
    { name: "MR MARVIS Brussels", website: "https://www.mrmarvis.com/", country: "belgium", industry: "clothing" },
    { name: "ACF Europe", website: "https://www.acf-europe.eu/", country: "belgium", industry: "accounting" },
    { name: "Forvis Mazars", website: "https://www.forvismazars.com/", country: "belgium", industry: "accounting" },
    { name: "Avantage Reply", website: "https://www.reply.com/", country: "belgium", industry: "financial-consultancy" },
    { name: "Dynafin", website: "https://dynafin.eu/", country: "belgium", industry: "financial-consultancy" },
    { name: "Monnet Capital", website: "https://www.monnetcapital.com/", country: "belgium", industry: "financial-consultancy" },
    { name: "Lloyd Coffee", website: "https://lloydcoffee.com/", country: "belgium", industry: "cafe" }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get DOM Elements
    const clientGrid = document.getElementById('client-grid');
    const industryFilter = document.getElementById('industry-filter');
    const countryFilter = document.getElementById('country-filter');
    const resetFiltersButton = document.getElementById('reset-filters');

    // Helper to format industry/country names for display (e.g., 'skin-clinic' -> 'Skin Clinic')
    const formatLabel = (str) => {
        return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    // --- Dynamic Filter Population ---
    function populateFilters() {
        const uniqueIndustries = new Set();
        const uniqueCountries = new Set();

        clientData.forEach(client => {
            uniqueIndustries.add(client.industry);
            uniqueCountries.add(client.country);
        });

        // Add options to Industry Filter
        uniqueIndustries.forEach(industry => {
            const option = document.createElement('option');
            option.value = industry;
            option.textContent = formatLabel(industry);
            industryFilter.appendChild(option);
        });

        // Add options to Country Filter
        uniqueCountries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = formatLabel(country);
            countryFilter.appendChild(option);
        });
    }

    // --- Client Grid Rendering ---
    function renderClientGrid() {
        clientGrid.innerHTML = ''; // Clear existing content

        clientData.forEach(client => {
            const item = document.createElement('div');
            item.classList.add('client-item');
            item.setAttribute('data-industry', client.industry);
            item.setAttribute('data-country', client.country);

            // Creates a hyphenated, lowercase slug for the image filename (e.g., 'QAG Cafe' -> 'qag-cafe')
            const logoSlug = client.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            // Assumes your logos are in a folder named 'logos' next to this file.
            const logoPath = `logos/${logoSlug}.png`; 

            item.innerHTML = `
                <a href="${client.website}" target="_blank" rel="noopener noreferrer">
                    
                    <p class="client-name">${client.name}</p>
                </a>
            `;
            clientGrid.appendChild(item);
        });
    }


    // --- Filtering Logic ---
    function applyFilters() {
        const selectedIndustry = industryFilter.value;
        const selectedCountry = countryFilter.value;
        const items = document.querySelectorAll('.client-item');

        items.forEach(item => {
            const itemIndustry = item.getAttribute('data-industry');
            const itemCountry = item.getAttribute('data-country');

            // Check if the item matches BOTH the selected industry and the selected country
            const isIndustryMatch = selectedIndustry === 'all' || selectedIndustry === itemIndustry;
            const isCountryMatch = selectedCountry === 'all' || selectedCountry === itemCountry;

            if (isIndustryMatch && isCountryMatch) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // --- Initial Setup and Event Listeners ---
    renderClientGrid();   // 1. Create the client grid HTML
    populateFilters();    // 2. Fill the dropdown menus
    
    // 3. Attach filter change handlers
    industryFilter.addEventListener('change', applyFilters);
    countryFilter.addEventListener('change', applyFilters);

    // 4. Attach reset button handler
    resetFiltersButton.addEventListener('click', () => {
        industryFilter.value = 'all';
        countryFilter.value = 'all';
        applyFilters();
    });

    // 5. Apply filters once on load (to ensure initial display is correct)
    applyFilters();
});