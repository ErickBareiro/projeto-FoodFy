
const modalOverlay = document.querySelector('.modal-overlay');
const revenues = document.querySelectorAll('.revenue')

for (let revenue of revenues) {
    revenue.addEventListener("click", function () {
        const imageId = revenue.getAttribute("id");
        const title = revenue.querySelector("h3.titulo").textContent;
        const autor = revenue.querySelector("p.autor").textContent;


        modalOverlay.querySelector("img").src = `assets/${imageId}`;
        modalOverlay.querySelector("h3.titulo").innerHTML = title;
        modalOverlay.querySelector("p.autor").innerHTML = autor;

        modalOverlay.classList.add('active')
    })
}

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
})