(function () {
    let buttonMenu = document.querySelector('.menu__button-menu');
    buttonMenu.addEventListener('click', menuButtonClickHandler);

    function menuButtonClickHandler () {
        let openMenu = document.querySelector('.side-menu');
        let openMenuContent = document.querySelector('.side-menu__content');

        openMenu.classList.toggle('side-menu--visible');
        openMenu.classList.remove('side-menu--transparent');
        openMenu.addEventListener('click', sideMenuClickHandler);

        openMenuContent.classList.remove('side-menu__content--closed');

        setTimeout(() => {
            openMenuContent.classList.toggle('side-menu__content--opened');
        }, 0);
    }


    function sideMenuClickHandler () {

        if (!event.target.closest('.side-menu__content')) {
            let openMenu = document.querySelector('.side-menu');
            let openMenuContent = document.querySelector('.side-menu__content');

            openMenuContent.classList.toggle('side-menu__content--opened');
            openMenuContent.addEventListener('transitionend', sideMenuTransitionEndHandler);
            openMenuContent.classList.toggle('side-menu__content--closed');

            openMenu.classList.toggle('side-menu--transparent');
            openMenu.removeEventListener('click', sideMenuClickHandler);
        }
    }


    function sideMenuTransitionEndHandler() {
        let openMenuContent = document.querySelector('.side-menu__content');
        openMenuContent.removeEventListener('transitionend', sideMenuTransitionEndHandler);

        let openMenu = document.querySelector('.side-menu');
        openMenu.classList.toggle('side-menu--visible');
    }

}());