document.addEventListener("DOMContentLoaded", () => {
    let exp = 0;
    let level = 1;
    let workouts = {};
    const expBar = document.getElementById("expBar");
    const expDisplay = document.getElementById("exp");
    const levelDisplay = document.getElementById("level");
    const questButton = document.getElementById("complete-quest");
    const expGain = 20;
    const expThreshold = 100;
    const workoutList = document.getElementById("workout-list");
    
    function updateStats() {
        expDisplay.textContent = `${exp}`;
        levelDisplay.textContent = `${level}`;
        expBar.value = exp;
    }

    function gainExp(amount) {
        exp += amount;
        if (exp >= expThreshold) {
            levelUp();
        }
        updateStats();
    }

    function levelUp() {
        exp -= expThreshold;
        level++;
        alert(`Congratulations! You've reached Level ${level}`);
    }

    questButton.addEventListener("click", () => {
        gainExp(expGain);
    });
    
    function addWorkout(day, routine) {
        workouts[day] = routine;
        displayWorkouts();
    }
    
    function displayWorkouts() {
        workoutList.innerHTML = "";
        for (const day in workouts) {
            let li = document.createElement("li");
            li.textContent = `${day}: ${workouts[day]}`;
            workoutList.appendChild(li);
        }
    }
    
    document.getElementById("add-workout").addEventListener("click", () => {
        const day = document.getElementById("workout-day").value;
        const routine = document.getElementById("workout-routine").value;
        if (day && routine) {
            addWorkout(day, routine);
        }
    });
    
    updateStats();
});
