const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30); //her 30ms'de bir blurring fonksiyonunu çalıştırır.
//setInterval fonksiyonu belirli bir zaman aralığında bir fonksiyonu çalıştırmak için kullanılır.

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int); //işlemi durdur anlamına gelir.
    }

    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}