let s = 0;
let m = 0;
let h = 0;
let clock = document.querySelector('.clock')

setInterval(() => {
    s++;
    if (s == 60) {
        s = 0
        m++
        if (m == 60) {
            m = 0
            h++
        }
    }
        clock.innerHTML = `${(h < 10 ? '0' : '') + h} : ${(m < 10 ? '0' : '') + m} : ${(s < 10 ? '0' : '') + s}`;
}, 1000);
function refreshBtn() {
    s = 0;
    m = 0;
    h = 0;
    clock.innerHTML = '00 : 00 : 00';

}