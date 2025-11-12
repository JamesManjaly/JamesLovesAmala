document.addEventListener('DOMContentLoaded', () => {
    // Set the date we're counting down to
    // February 14, 2026 3:00 PM IST is equivalent to 09:30 AM UTC
    const countDownDate = new Date("2026-02-14T09:30:00Z").getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            daysEl.innerText = '0';
            hoursEl.innerText = '0';
            minutesEl.innerText = '0';
            secondsEl.innerText = '0';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = days;
        hoursEl.innerText = hours;
        minutesEl.innerText = minutes;
        secondsEl.innerText = seconds;
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
});
