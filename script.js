const card = document.getElementById('card');
const messages = [
    "Someone’s looking cute today. 😊🌟",
    "You have the cutest laugh. 🌹😄",
    "You have no clue how cute you sound. 💖🎶",
    "I feel like blushing every time you talk to me in that cute voice. ☺️💕",
    "If only you knew how your eyes make me fall in love. 😍💘",
    "Your skin is so soft. 🌸✨",
    "You smell so nice. 🌹🌼",
    "You are everything to me. 💘🌟",
    "Everything about you is worth knowing. 💞💑",
    "I can't take my eyes off of you! 👀😍",
    "You're beyond gorgeous. 😘💖",
    "You look beautiful even when you don’t try. 🌼💫",
    "Your lips are so mesmerizing because they outline such a beautiful smile. 💋😊",
    "You smell like a field of blooming flowers. 🌺🌷",
    "My heart melts when it sees your cute smile. Oh look, it started again. 💓😊",
    "My knees feel weak with a rose when I touch you. 🌹💖",
    "You're irreplaceable. You're my one and only sweetheart. 💑❤️",
    "Natural beauty with a golden heart. A rare combination, but here you are. 🌟💖",
    "Do you want to see a picture of a beautiful person? [hold up a mirror] 😊📸",
    "Take it from me when I say that you are the most beautiful woman on Earth. 🌍💖"
];

let currentMessageIndex = 0;

card.addEventListener('click', function () {
    card.classList.toggle('flipped');
    setTimeout(function () {
        card.querySelector('.card-number').textContent = (currentMessageIndex + 1).toString();
        card.querySelector('.card-message').textContent = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        card.classList.toggle('flipped');
    }, 250); // Wait for the flip animation to complete (0.5s / 2)
});
