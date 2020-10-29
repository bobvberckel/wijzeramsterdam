function changeImageOnLoad() {
    $(".image").fadeOut(200, () => {
        let number = Math.floor(Math.random() * 3) + 1;

        $(".image").attr('src', `./assets/images/number${number}.svg`);
    }).fadeIn(200);
}

window.onload = () => {
    setTimeout(() => {
        changeImageOnLoad();
    }, 10000);
}

document.getElementById(`reload-button`).addEventListener(`click`, () => {
    location.reload();
});

document.getElementById(`button-1`).addEventListener(`mouseover`, () => {
    $(".image").fadeOut(200, () => {
        $(".image").attr('src', `./assets/images/number1.svg`);
    }).fadeIn(200);
});

document.getElementById(`button-2`).addEventListener(`mouseover`, () => {
    $(".image").fadeOut(200, () => {
        $(".image").attr('src', `./assets/images/number2.svg`);
    }).fadeIn(200);
});

document.getElementById(`button-3`).addEventListener(`mouseover`, () => {
    $(".image").fadeOut(200, () => {
        $(".image").attr('src', `./assets/images/number3.svg`);
    }).fadeIn(200);
});

document.getElementById(`reset-button`).addEventListener(`click`, () => {
    $(".image").fadeOut(200, () => {
        $(".image").attr('src', `./assets/images/number0.png`);
    }).fadeIn(200);
});