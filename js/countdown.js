// Set the date you want to count down to
const countdownDate = new Date('August 24, 2023 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = now - countdownDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the countdown in the element with id "countdown"
    document.getElementById('countdown').innerHTML = 'It\'s been ' + days + 'd ' + hours + 'h ' + minutes + 'm' + ' since I started learning to code.';
}, 1000);