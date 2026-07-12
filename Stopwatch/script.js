// Get HTML elements
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const lapList = document.getElementById("lapList");

// Variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;
let lapCount = 1;

// Function to update the display
function updateDisplay() {
    const time = Date.now() - startTime + elapsedTime;

    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    display.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") + ":" +
        String(milliseconds).padStart(3, "0");
}

// Start Stopwatch
startBtn.addEventListener("click", () => {
    if (!running) {
        startTime = Date.now();
        timerInterval = setInterval(updateDisplay, 10);
        running = true;
    }
});

// Pause Stopwatch
pauseBtn.addEventListener("click", () => {
    if (running) {
        clearInterval(timerInterval);
        elapsedTime += Date.now() - startTime;
        running = false;
    }
});

// Reset Stopwatch
resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    running = false;
    startTime = 0;
    elapsedTime = 0;
    lapCount = 1;

    display.textContent = "00:00:00:000";
    lapList.innerHTML = "";
});

// Record Lap
lapBtn.addEventListener("click", () => {
    if (running) {
        const lap = document.createElement("li");
        lap.textContent = `Lap ${lapCount}: ${display.textContent}`;
        lapList.appendChild(lap);
        lapCount++;
    }
});
function updateDate() {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    document.getElementById("currentDate").textContent =
        today.toLocaleDateString("en-US", options);
}

updateDate();