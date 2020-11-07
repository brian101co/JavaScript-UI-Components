class Nav {
    constructor(target, menu) {
        this.isopen = false;
        this.btn = target;
        this.menu = menu;
    }

    init() {
        if (this.btn instanceof Element && this.menu instanceof Element) {
            const self = this;
            this.btn.addEventListener('click', function () {
                console.log("clicked");
                self.open();
            });
        } else {
            throw "The target and Menu must be a DOM element."
        }
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
mainNav.init();