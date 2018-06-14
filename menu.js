(function () {
    let buttonMenu = document.querySelector('.menu__button-menu');
    buttonMenu.addEventListener('click', clickButtonMenuHandler);

    function clickButtonMenuHandler() {
        let openMenu = document.querySelector('.side-menu');
        openMenu.classList.toggle('side-menu--visible');
        openMenu.addEventListener('click', clickOpenMenuHandler);

        // let openMenuContent = document.querySelector('.side-menu__content');
        // openMenuContent.classList.remove('side-menu__content--closed');
        // openMenuContent.classList.toggle('side-menu__content--opened');
    }

    function clickOpenMenuHandler() {

        if(!event.target.closest('.side-menu__content')) {
            let openMenu = document.querySelector('.side-menu');
            openMenu.classList.toggle('side-menu--visible');

            openMenu.removeEventListener('click', clickOpenMenuHandler);

            // let openMenuContent = document.querySelector('.open-menu__content');
            // openMenuContent.classList.remove('side-menu__content--opened');
            // openMenuContent.classList.toggle('side-menu__content--closed ');
        }
    }

}());