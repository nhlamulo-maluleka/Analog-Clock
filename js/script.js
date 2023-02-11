const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

window.addEventListener("load", () => {
    const revolution = 360;
    const hourDegree = 30;

    setInterval(() => {
        const date = new Date();
        const h = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();

        const hoursDeg = (h / 12) * revolution;
        const minuteDeg = (m / 60) * revolution;
        const secondDeg = (s / 60) * revolution;
        const hourOffset = (minuteDeg / revolution) * hourDegree;

        hour.style.transform = `rotate(${hoursDeg + hourOffset}deg)`;
        minute.style.transform = `rotate(${minuteDeg}deg)`;
        second.style.transform = `rotate(${secondDeg}deg)`;
    }, 1000);
});
