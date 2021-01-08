function changeImageOnLoad() {
    $(".karin").fadeOut(200, () => {
        $(".karin").attr('src', `./images/wijzer1.png`);
    }).fadeIn(200);
}

function pasTekstaan(categorie) {
    $(".karin").fadeOut(200, () => {
        $(".karin").attr('src', `./images/${categorie}.png`);
    }).fadeIn(200);
}

window.onload = () => {
    setTimeout(() => {
        changeImageOnLoad();
    }, 2000);
}

document.getElementById(`gezondheidButton`).addEventListener(`mouseover`, () => {
    pasTekstaan(`gezondheid`);
});

document.getElementById(`gezondheidButton`).addEventListener(`mouseout`, () => {
    changeImageOnLoad();
});