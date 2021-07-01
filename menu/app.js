class Navbar {
    constructor(target, menu) {
        // 1. Check parameters type and throw error if not an HTML element
        if (target instanceof HTMLElement && menu instanceof HTMLElement) {
            // 2. If parameters are HTML elements set the attributes
            this.btn = target;
            this.menu = menu;
            
            target.addEventListener('click', () => {
                this.open();
            });
        } else {
            throw new TypeError("The Target and Menu arguments must be a DOM element."); 
        }
        this.isOpen = false;
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

const navbar = new Navbar(navBtn, menu);
const navDropdown = new Dropdown(dropdown);
