// Mock distributor data
const distributors = [
    {
        name: "Distributor Alpha",
        shippedLastMonth: 1200,
        forecastThisMonth: 1300,
        ytdAverage: 1150,
        shipmentAccuracy: "94%",
        issuesReported: 2
    },
    {
        name: "Distributor Beta",
        shippedLastMonth: 800,
        forecastThisMonth: 850,
        ytdAverage: 810,
        shipmentAccuracy: "90%",
        issuesReported: 4
    },
    {
        name: "Distributor Gamma",
        shippedLastMonth: 1000,
        forecastThisMonth: 1100,
        ytdAverage: 980,
        shipmentAccuracy: "93%",
        issuesReported: 1
    }
];

// Function to display distributor cards
function loadDashboard() {
    const dashboard = document.getElementById('dashboard');

    distributors.forEach(distributor => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <h3>${distributor.name}</h3>
            <ul>
                <li><strong>Shipped Last Month:</strong> ${distributor.shippedLastMonth}</li>
                <li><strong>Forecast This Month:</strong> ${distributor.forecastThisMonth}</li>
                <li><strong>Year-to-date Average:</strong> ${distributor.ytdAverage}</li>
                <li><strong>Shipment Accuracy:</strong> ${distributor.shipmentAccuracy}</li>
                <li><strong>Issues Reported:</strong> ${distributor.issuesReported}</li>
            </ul>
        `;

        dashboard.appendChild(card);
    });
}

// Load dashboard when the page loads
window.onload = loadDashboard;
