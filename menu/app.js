class Nav {
    constructor(target, menu) {
        if (target instanceof Element && menu instanceof Element) {
            this.btn = target;
            this.menu = menu;

            const self = this;
            this.btn.addEventListener('click', function () {
                console.log("clicked");
                self.open();
            });
        } else {
            throw "The target and Menu must be a DOM element."
        }
        this.isopen = false;
    }

    open() {
        if (this.isopen) {
            this.menu.classList.add('nav-hidden');
        } else {
            this.menu.classList.remove('nav-hidden');
        }

        this.isopen = !this.isopen;
    }
}

const navBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-list');
const mainNav = new Nav(navBtn, menu);
// mainNav.init();