const menuAsideMobile = document.querySelector('.navigation');
const btnMobile = document.querySelectorAll('.btnMobile');

btnMobile.forEach((btnMobile) => {
    btnMobile.addEventListener('click', () => {
        const close = btnMobile.classList.contains('btnClose')

        if (close){
            menuAsideMobile.classList.remove('ativo');
        } else {
            menuAsideMobile.classList.add('ativo');
        }
    });
});

