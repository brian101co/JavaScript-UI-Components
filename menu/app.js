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

class Dropdown {
    constructor(elem) {
        this.isOpen = false;
        this.elem = elem;

        if (elem instanceof Element) {
            const self = this;
            this.elem.addEventListener('click', function (event) {
                event.preventDefault();
                self.open();
            });
        } else {
            throw "The element must be an HTML element."
        }
    }

    open() {
        if (!this.isOpen) {
            this.elem.querySelector(".dropdown-list").classList.add("show-dropdown");
        } else {
            this.elem.querySelector(".dropdown-list").classList.remove("show-dropdown");
        }

        this.isOpen = !this.isOpen;
    }
}

const navBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-list');
const dropdown = document.querySelector('.dropdown');

const mainNav = new Nav(navBtn, menu);
const navDropdown = new Dropdown(dropdown);
