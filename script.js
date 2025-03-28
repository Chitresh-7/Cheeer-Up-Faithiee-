// Smooth Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
   // Function to play audio
function playAudio(id) {
    var audio = document.getElementById(id);
    audio.play();
}

// Function to pause audio
function pauseAudio(id) {
    var audio = document.getElementById(id);
    audio.pause(); // This stops the audio
    audio.currentTime = 0; // This resets the audio to the beginning
}

    // Play Audio Function
function playAudio(audioId) {
    let allAudio = document.querySelectorAll("audio");  
    allAudio.forEach(audio => {
        if (audio.id !== audioId) {
            audio.pause(); // Stop other songs
            audio.currentTime = 0; // Reset the song
        }
    });

    let audioElement = document.getElementById(audioId);
    if (audioElement) {
        audioElement.play();
    }


// Pause Audio Function
function pauseAudio(audioId) {
    let audioElement = document.getElementById(audioId);
    if (audioElement) {
        audioElement.pause();
    }
}
}

// Power Boost - Random Message & GIF
function showPowerBoost() {
    const messages = [
        "You got this! 💪", "You're stronger than you think! 🌟",
        "You don’t need to have everything figured out. Just take the next step, and the path will reveal itself.", "Everything will be okay 💖",
        "You carry a light inside you, one that even the darkest days can’t dim. Keep shining, Faithie.", "Even the stars take millions of years to shine at their brightest. Give yourself time",
        "You shine brighter than the stars ✨", "One step at a time, you got this! 💕","You are the most beautiful chapter in my life, and I’m still writing it with love.😊",
        "Distance means so little when someone means so much💕. I’d rather be apart with you than close with anyone else.😊","Loving you is like breathing—effortless, natural, and something I never want to stop.😌",
        "Your future self is already proud of you, Faithiee🌸","Mistakes don’t mean failure; they mean learning. And learning means progress💕","Difficulties in life are intended to make us better, not bitter. – Dan Reeves",
        "I’d rather fight every storm with you than have an easy life without you. You make everything worth it.","Keep your face always toward the sunshine, and shadows will fall behind you. – Walt Whitman",
        "I love you not only for what you are but for what I am when I am with you. – Roy Croft","journey of a thousand miles begins with a single step.",
        "You are my greatest inspiration, my Faithiee🌸.","Doubt kills more dreams than failure ever will.– Suzy Kassem","Faithie, no matter what happens, you’re never alone. I’ll ALWAYS be here for you faithiee, cheering you on!💕",
        "You are my heart, my life, my one and only thought.","If I know what love is, it is because of you faithiee","Hardships often prepare ordinary people for an extraordinary destiny.",
        "It is hard to fail, but it is worse never to have tried to succeed.","Don’t watch the clock; do what it does. Keep going.","You turn my worries into smiles faithieee",
        "You make everything better, just by being yourself Faithiee❤️"
        
    ];

    const gifs = [
        "https://media.tenor.com/WC0mv2OuqrAAAAAi/milk-and-mocha.gif", "https://media.tenor.com/1dgu7F5zsFMAAAAi/milk-and-mocha.gif", "https://media.tenor.com/g0Ikld3g1TwAAAAi/z.gif", "https://media.tenor.com/ZhNxfL0GmoMAAAAi/mocha-bear-hearts.gif",
        "https://media.tenor.com/TyrY0krJG3kAAAAi/milk-and-mocha.gif", "https://media.tenor.com/-Oes-vO2J-sAAAAi/milk-and-mocha.gif", "https://media.tenor.com/-Oes-vO2J-sAAAAi/milk-and-mocha.gif", "https://media.tenor.com/gnT8hrjgqlsAAAAi/milk-and-mocha.gif",
        "https://media1.tenor.com/m/tS3q3kS-nJsAAAAC/milk-and.gif","https://media.tenor.com/j1Bw_U6722UAAAAi/milk-and-mocha.gif","https://media.tenor.com/ZJ0t7DP3FjMAAAAi/milk-and-mocha-gif-mocha-makeing-love.gif",
        "https://media.tenor.com/GVHDioQhu-wAAAAi/milk-and-mocha.gif","https://media1.tenor.com/m/dYRhizRa0nUAAAAC/hug-hugs-and-love.gif",
        "https://media.tenor.com/Ddw70xVXPPcAAAAi/milk-and-mocha.gif"
    ];

    let randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("boost-result").innerHTML = `
        <img src="${gifs[randomIndex]}" width="200">
        <p>${messages[randomIndex]}</p>
    `;
}

// Virtual Hug - Shows GIF
function showHug() {
    document.getElementById("hug-result").innerHTML = `
        <img src="https://media.tenor.com/pw2d28SllJ0AAAAi/bear-hug.gif" width="200">
        <p>Here's a warm hug for you, My Faithiee! 🤗</p>
    `;
}

// Breathing Exercise
function startBreathing() {
    var breathingText = document.getElementById("breathing-result");
    var countdown = document.createElement("span"); 
    breathingText.innerHTML = "Inhale... ";
    breathingText.appendChild(countdown);
    
    var timeLeft = 2;
    countdown.innerHTML = timeLeft + "s";
    var timer = setInterval(function () {
        timeLeft--;
        countdown.innerHTML = timeLeft + "s";
        if (timeLeft <= 0) {
            clearInterval(timer);
            breathingText.innerHTML = "Hold... ";
            timeLeft = 3;
            countdown.innerHTML = timeLeft + "s";
            breathingText.appendChild(countdown);

            var holdTimer = setInterval(function () {
                timeLeft--;
                countdown.innerHTML = timeLeft + "s";
                if (timeLeft <= 0) {
                    clearInterval(holdTimer);
                    breathingText.innerHTML = "Exhale... ";
                    timeLeft = 2;
                    countdown.innerHTML = timeLeft + "s";
                    breathingText.appendChild(countdown);

                    var exhaleTimer = setInterval(function () {
                        timeLeft--;
                        countdown.innerHTML = timeLeft + "s";
                        if (timeLeft <= 0) {
                            clearInterval(exhaleTimer);
                            breathingText.innerHTML = "Relax 😌";
                        }
                    }, 1000);
                }
            }, 1000);
        }
    }, 1000);
}



// Open Letter with Animation
function openLetter() {
    document.getElementById("letter-content").classList.toggle("hidden");
}
// Countdown Timer for Letter Section
function startCountdown() {
    let targetDate = new Date("April 2, 2025 00:00:00").getTime();

    let countdownInterval = setInterval(function () {
        let now = new Date().getTime();
        let timeLeft = targetDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById("letter-message").innerHTML = "Your Special Letter is Here! 💌";
            document.getElementById("countdown").style.display = "none";
            
            // Show letter with animation
            let letterContainer = document.getElementById("letter-container");
            letterContainer.classList.remove("hidden");
            setTimeout(() => {
                letterContainer.classList.add("show-letter");
            }, 100); 
            
        } else {
            document.getElementById("countdown").innerHTML = 
    days + "d " + hours + "h " + minutes + "m " + seconds + "s left";
        }
    }, 1000);
}

// Start countdown on page load
window.onload = function() {
    startCountdown();
};