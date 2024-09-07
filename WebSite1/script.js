function changeImage(src, element) {

    document.querySelector('#main-image').src = src;

    const thumbnails = document.querySelectorAll('.thumbnails img');
    thumbnails.forEach(thumb => thumb.classList.remove('selected'));

    element.classList.add('selected');
}

function toggleMenu() {
    const navList = document.querySelector('#nav-list');
    if (navList.style.display === "flex" || navList.style.display === "") {
        navList.style.display = "none";
    } else {
        navList.style.display = "flex";
    }
}
