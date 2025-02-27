// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize workout schedule
    generateWorkoutGrid();
    
    // Load user progress
    loadUserData();
    
    // Setup event listeners
    setupQuestSystem();
});

function generateWorkoutGrid() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const grid = document.querySelector('.schedule-grid');
    
    days.forEach(day => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        dayCard.innerHTML = `
            <h3>${day}</h3>
            <div class="exercises"></div>
            <button class="edit-btn"><i class="fas fa-edit"></i></button>
            <div class="workout-timer hidden">
                <span>00:00:00</span>
                <button class="cancel-btn"><i class="fas fa-times"></i></button>
            </div>
        `;
        grid.appendChild(dayCard);
    });
}

function loadUserData() {
    // Load from localStorage or initialize
    const userData = localStorage.getItem('hunterData') || {
        level: 1,
        exp: 0,
        streak: 0,
        workoutsCompleted: 0
    };
    
    updateUI(userData);
}

function setupQuestSystem() {
    const quests = [
        { desc: "Complete 5km run", exp: 200, reward: '🏃 Speed Rune' },
        { desc: "3x10 Pull-ups", exp: 150, reward: '💪 Strength Gem' },
        { desc: "1 Hour Yoga Session", exp: 180, reward: '🧘 Focus Crystal' }
    ];
    
    const currentQuest = quests[Math.floor(Math.random() * quests.length)];
    document.querySelector('.quest-description').textContent = currentQuest.desc;
    document.querySelector('.quest-rewards').innerHTML = `
        <span class="reward-chip">+${currentQuest.exp} EXP</span>
        <span class="reward-chip">${currentQuest.reward}</span>
    `;
}

// Add more functionality for workout tracking, EXP calculation, etc.