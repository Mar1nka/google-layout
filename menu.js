(function () {
    let buttonMenu = document.querySelector('.menu__button-menu');
    buttonMenu.addEventListener('click', clickButtonMenuHandler);

    function clickButtonMenuHandler () {
        let openMenu = document.querySelector('.side-menu');
        let openMenuContent = document.querySelector('.side-menu__content');

        openMenu.classList.toggle('side-menu--visible');
        openMenu.classList.remove('side-menu--transparence');
        openMenu.addEventListener('click', clickOpenMenuHandler);

        openMenuContent.classList.remove('side-menu__content--closed');

        setTimeout(() => {
            openMenuContent.classList.toggle('side-menu__content--opened');
        }, 0);
    }


    function clickOpenMenuHandler () {

        if (!event.target.closest('.side-menu__content')) {
            let openMenu = document.querySelector('.side-menu');
            let openMenuContent = document.querySelector('.side-menu__content');

            openMenuContent.classList.toggle('side-menu__content--opened');
            openMenuContent.addEventListener('transitionend', transitionEndHandler);

            openMenu.classList.toggle('side-menu--transparence');
            openMenu.removeEventListener('click', clickOpenMenuHandler);

            setTimeout(() => {
                openMenuContent.classList.toggle('side-menu__content--closed');
            }, 0);
        }
    }


    function transitionEndHandler() {
        let openMenuContent = document.querySelector('.side-menu__content');
        openMenuContent.removeEventListener('transitionend', transitionEndHandler);

        let openMenu = document.querySelector('.side-menu');
        openMenu.classList.toggle('side-menu--visible');
    }

}());