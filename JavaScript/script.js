// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Get the theme button element
    const themeButton = document.getElementById("theme");

    // Define an array of colors for the background theme
    const colors = ["#DECBBD", "#7C715B", "#D43535", "#FFE403", "#181024", "#861CE8"];

    // Initialize a color index to track the current theme color
    let colorIndex = 0;

    // Add a click event listener to the theme button
    themeButton.addEventListener("click", function () {
        // Change the background color of the body to the next color in the array
        document.body.style.backgroundColor = colors[colorIndex];

        // Update the color index to cycle through the colors
        colorIndex = (colorIndex + 1) % colors.length;
    });
});

// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const today = new Date();

    // Define options for formatting the weekday
    const options = { weekday: "short" };
    // Format the day name (e.g., "Mon")
    const dayName = today.toLocaleDateString("en-US", options);
    // Format the month name (e.g., "Jan")
    const month = today.toLocaleString("en-US", { month: "short" });
    // Get the day of the month (e.g., 21)
    const date = today.getDate();
    // Get the full year (e.g., 2025)
    const year = today.getFullYear();

    // Update the current date element with the formatted date
    document.getElementById("current-date").innerHTML =
        `${dayName}, <br> <span class="font-bold">${month} ${date} ${year}</span>`;
});

// Get all buttons with the class "btn-primary"
const buttons = document.querySelectorAll(".btn-primary");

// Initialize task counters
let taskplusValue = 23; // Total tasks
let taskMinusValue = 6; // Remaining tasks

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if there are remaining tasks
        if (taskMinusValue > 0) {
            // Increment the total tasks and decrement the remaining tasks
            taskplusValue++;
            taskMinusValue--;

            // Update the task counters in the DOM
            document.getElementById('task-plas').textContent = taskplusValue;
            document.getElementById('task-minus').textContent = `0${taskMinusValue}`;

            // Disable the button and change its background color to gray
            button.disabled = true;
            button.style.background = 'gray';

            // Show alerts based on the task status
            if (taskMinusValue > 0) {
                alert('Board updated successfully');
            } else {
                alert('Board updated successfully');
                alert('Congratulations! You have completed the current task');
            }

            // Get the current time and format it (e.g., "12:30PM")
            const time = new Date();
            const nowTime = `${time.getHours() % 12 || 12}:${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}${time.getHours() >= 12 ? 'PM' : 'AM'}`;

            // Get the task card and its title
            const taskCard = button.closest('.task');
            const title = taskCard.querySelector('.card-title').textContent;

            // Create a new paragraph element to log the task completion
            const p = document.createElement('p');
            p.classList.add('py-5');
            p.innerText = `You have completed the task "${title}" at ${nowTime}`;

            // Append the log to the task history section
            document.getElementById('task-history').appendChild(p);
        }
    });
});

// Add a click event listener to the "Discover" section
document.getElementById('Discover').addEventListener('click', function () {
    // Redirect to the "question.html" page
    window.location.href = "question.html";
});

// Add a click event listener to the "Clear History" button
document.getElementById('clear-btn').addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Clear the task history section
    const taskHistory = document.getElementById('task-history');
    taskHistory.innerHTML = "";
});