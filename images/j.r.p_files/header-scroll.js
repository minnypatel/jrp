function resizeHeaderOnScroll() {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.getElementById("header-nav-wrapper");

        if (distanceY > shrinkOn) {
            header.classList.add("smaller");
        } else {
            header.classList.remove("smaller");
        }
    }

window.addEventListener('scroll', resizeHeaderOnScroll);
