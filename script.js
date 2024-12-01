document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const userProfileToggle = document.getElementById('userProfileToggle');
    const userProfileModal = document.getElementById('userProfileModal');
    const notificationsToggle = document.getElementById('notificationsToggle');
    const notificationsModal = document.getElementById('notificationsModal');
    const settingsLink = document.getElementById('settingsLink');
    const settingsModal = document.getElementById('settingsModal');
    const settingsForm = document.getElementById('settingsForm');

    // Dark mode toggle
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // User profile modal
    userProfileToggle.addEventListener('click', function() {
        userProfileModal.style.display = 'block';
    });

    // Notifications modal
    notificationsToggle.addEventListener('click', function() {
        notificationsModal.style.display = 'block';
    });

    // Settings modal
    settingsLink.addEventListener('click', function(e) {
        e.preventDefault();
        settingsModal.style.display = 'block';
    });

    // Close modals
    const closeButtons = document.getElementsByClassName('close');
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Settings form submission
    settingsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert('Settings saved successfully!');
        settingsModal.style.display = 'none';
    });

    // Chart configurations
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Image Processing Chart (index.html)
    const imageProcessingCtx = document.getElementById('imageProcessingChart');
    if (imageProcessingCtx) {
        new Chart(imageProcessingCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Images Processed',
                    data: [12000, 19000, 15000, 17000, 22000, 18000, 20000],
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    tension: 0.1
                }]
            },
            options: chartOptions
        });
    }

    // Tag Distribution Chart (analytics.html)
    const tagDistributionCtx = document.getElementById('tagDistributionChart');
    if (tagDistributionCtx) {
        new Chart(tagDistributionCtx, {
            type: 'bar',
            data: {
                labels: ['Person', 'Nature', 'Building', 'Animal', 'Food', 'Vehicle', 'Technology', 'Other'],
                datasets: [{
                    label: 'Number of Tags',
                    data: [300000, 250000, 200000, 180000, 150000, 120000, 100000, 80000],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(199, 199, 199, 0.8)',
                        'rgba(83, 102, 255, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(199, 199, 199, 1)',
                        'rgba(83, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: chartOptions
        });
    }

    // Accuracy Chart (analytics.html)
    const accuracyCtx = document.getElementById('accuracyChart');
    if (accuracyCtx) {
        new Chart(accuracyCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Accuracy (%)',
                    data: [92, 93, 93.5, 94, 94.5, 95, 95.6],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    tension: 0.1
                }]
            },
            options: {
                ...chartOptions,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 90,
                        max: 100
                    }
                }
            }
        });
    }

    // Category Chart (analytics.html)
    const categoryCtx = document.getElementById('categoryChart');
    if (categoryCtx) {
        const categoryData = {
            labels: ['Landscape', 'Portrait', 'Still Life', 'Action', 'Abstract', 'Other'],
            datasets: [{
                label: 'Image Categories',
                data: [30, 25, 15, 10, 10, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };

        new Chart(categoryCtx, {
            type: 'doughnut',
            data: categoryData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                }
            }
        });

        // Generate custom legend
        const legendContainer = document.getElementById('categoryLegend');
        if (legendContainer) {
            legendContainer.innerHTML = ''; // Clear existing legend items
            categoryData.labels.forEach((label, index) => {
                const legendItem = document.createElement('div');
                legendItem.classList.add('legend-item');

                const colorBox = document.createElement('span');
                colorBox.classList.add('legend-color');
                colorBox.style.backgroundColor = categoryData.datasets[0].backgroundColor[index];

                const labelText = document.createElement('span');
                labelText.textContent = label;

                legendItem.appendChild(colorBox);
                legendItem.appendChild(labelText);
                legendContainer.appendChild(legendItem);
            });
        }
    }

    // Print functionality for analytics page


    document.addEventListener('DOMContentLoaded', function() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        const userProfileToggle = document.getElementById('userProfileToggle');
        const userProfileModal = document.getElementById('userProfileModal');
        const notificationsToggle = document.getElementById('notificationsToggle');
        const notificationsModal = document.getElementById('notificationsModal');
        const settingsLink = document.getElementById('settingsLink');
        const settingsModal = document.getElementById('settingsModal');
        const settingsForm = document.getElementById('settingsForm');

        // Dark mode toggle
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            const isDarkMode = body.classList.contains('dark-mode');
            darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', isDarkMode);
        });

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        // User profile modal
        userProfileToggle.addEventListener('click', function() {
            userProfileModal.style.display = 'block';
        });

        // Notifications modal
        notificationsToggle.addEventListener('click', function() {
            notificationsModal.style.display = 'block';
        });

        // Settings modal
        settingsLink.addEventListener('click', function(e) {
            e.preventDefault();
            settingsModal.style.display = 'block';
        });

        // Close modals
        const closeButtons = document.getElementsByClassName('close');
        for (let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', function() {
                this.closest('.modal').style.display = 'none';
            });
        }

        // Close modals when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        });

        // Settings form submission
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert('Settings saved successfully!');
            settingsModal.style.display = 'none';
        });
    });
});

