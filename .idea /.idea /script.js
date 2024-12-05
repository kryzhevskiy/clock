function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Оновлюємо годинник щосекунди
setInterval(updateClock, 1000);

// Викликаємо функцію для оновлення часу під час завантаження сторінки
updateClock();
