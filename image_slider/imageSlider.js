const main = document.querySelector('.main');
const buttons = document.querySelectorAll('.btn');
const imglist = ["1", "2", "3", "4","5","6","7","8","9","10"];
let index = 0;

function updateBackground() {
    main.style.background = `url("img/img${imglist[index]}.jpg") center/cover fixed no-repeat`;
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('right')) {
            index = (index - 1 + imglist.length) % imglist.length;
        } else if (btn.classList.contains('left')) {
            index = (index + 1) % imglist.length;
        }
        updateBackground();
    });
});
