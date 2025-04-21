// Navbar scroll
let header = document.querySelector(".header-main-block");
let headerBg = document.querySelector(".header-bg");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        header.classList.add("header-scrolled");
        headerBg.classList.add("remove-box-shadow");

    } else {
        header.classList.remove("header-scrolled");
        headerBg.classList.remove("remove-box-shadow");
    }
}

// navlink hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show");

        navbar.forEach(function (link) {
            link.classList.remove("active-nav");
        });
        e.classList.add("active-nav");

    });
});




// navlink active


// owl carousel marquee slider
function company_carouselInit() {
    $('.owl-carousel.slide-role').owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 5000,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });
}

company_carouselInit();


// CTA Counter
window.onload = () => {
    const counters = document.querySelectorAll("#count1, #count2, #count3");
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).countMe(20, entry.target.id === "count3" ? 600 : (entry.target.id === "count2" ? 10 : 5));
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    counters.forEach((counter) => observer.observe(counter));
}

// service active
let serviceActive = document.querySelectorAll(".service-card");
serviceActive.forEach((item) => {
    item.addEventListener("click", () => {
        serviceActive.forEach((e) => {
            e.classList.remove("active");
        });

        item.classList.toggle("active");
    })
});


// portfolio items filter
let filterItem = document.querySelector(".item-links");
let projectItem = document.querySelectorAll(".project-item");



window.addEventListener("load", () => {
    filterItem.addEventListener("click", (selectedItem) => {
        if (selectedItem.target.classList.contains('item-link')) {
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');

            let filterName = selectedItem.target.getAttribute('data-name');

            projectItem.forEach((project) => {
                let projects = project.getAttribute('data-name');

                if ((projects == filterName) || filterName == 'all') {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        }
    });
});



// Testimonial Slider
$('.owl-carousel.testimonial').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        991: {
            items: 1
        },
        1000: {
            items: 2
        },
        1140: {
            items: 3
        }
    }
});

// testimonial active
let reviewActive = document.querySelectorAll(".review-item");
reviewActive.forEach((item) => {
    item.addEventListener("click", () => {
        reviewActive.forEach((e) => {
            e.classList.remove("active");
        });

        item.classList.toggle("active");
    })
});






$('.client-logo-section .owl-carousel.client-logos').owlCarousel({
    stagePadding: 50,
    margin: 50,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1140: {
            items: 4
        }
    }
});

// let ClientLogoActive = document.querySelector(".owl-item.active");
// let ClntLogoDot = document.querySelector.(".owl-dot.active");



// scroll to top activation
$(function () {
    $.scrollUp();
});


// Dark Mode Switch
$(document).ready(function () {
    $(".radio-btn").on("click", function (e) {
        $(".radio-inner").toggleClass("active");
        $('html').attr('data-theme', $('html').attr('data-theme') == 'light' ? 'dark' : 'light');
        $(".service-card").toggleClass("svg-no-hover");
        // e.preventDefault();
    })
});



