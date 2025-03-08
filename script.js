let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');

function openModal(index) {
    currentIndex = index;
    document.getElementById("modal").style.display = "flex";
    updateModal();
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateModal();
}

function updateModal() {
    document.getElementById("modalImg").src = images[currentIndex].src;
    document.getElementById("caption").textContent = images[currentIndex].alt;
}

/* Функция создания лепестков */
function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${5 + Math.random() * 5}s`;
    petal.style.position = "fixed";
    petal.style.width = "15px";
    petal.style.height = "15px";
    petal.style.background = "pink";
    petal.style.borderRadius = "50%";
    petal.style.opacity = "0.7";
    petal.style.pointerEvents = "none";

    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
}

/* Запускаем анимацию лепестков */
setInterval(createPetal, 200);
