(function () {
    let buttonMenu = document.querySelector(".menu__button-menu");
    buttonMenu.addEventListener('click', clickButtonMenuHandler);

    function clickButtonMenuHandler() {
        let openMenu = document.querySelector('.open-menu');
        openMenu.classList.toggle('open-menu--show');
        openMenu.addEventListener('click', clickOpenMenuHandler);
    }

    function clickOpenMenuHandler() {

        if(event.target.closest('.open-menu__content')) {
            let openMenu = document.querySelector('.open-menu');
            openMenu.classList.toggle('open-menu--show');

            openMenu.removeEventListener('click', clickOpenMenuHandler);
        }
    }

}());