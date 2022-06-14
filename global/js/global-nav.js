let global_nav_logo_wrapper = document.querySelector('.global-nav-logo-wrapper');
let global_hamburger = document.querySelector('.global-hamburger-wrapper');



// hamburger and nav links
let ham_btn = document.querySelector('.hamburger-anchor');
let ham_btn_bread = document.querySelectorAll('.global-hamburger-bread');
let ham_text_menu = document.querySelector('.global-hamburger-text-menu');
let ham_text_close = document.querySelector('.global-hamburger-text-close');

let global_nav_logo_anchor = document.querySelector('.global-nav-logo-anchor');
let global_nav_link_link_list_wrapper = document.querySelector('.global-nav-links-list-wrapper');
let global_nav_link_link_list = document.querySelector('.global-nav-links-list');
let global_nav_link_link_list_items = document.querySelectorAll('.global-nav-links-list-items');
let global_nav_link_link_anchors = document.querySelectorAll('.global-nav-links-list-item-anchors');

ham_btn.addEventListener('click', () => {
    ham_btn_bread.forEach((line) => {
        line.classList.toggle('ham-active');
        if (line.classList.contains('ham-active')){
            ham_text_menu.classList.remove('ham-active');
            ham_text_close.classList.add('ham-active');
        }
        else{
            ham_text_menu.classList.add('ham-active');
            ham_text_close.classList.remove('ham-active');
        }
    });

    global_nav_link_link_list_wrapper.classList.toggle('ham-active');
    global_nav_link_link_list.classList.toggle('ham-active');
    global_nav_logo_wrapper.classList.toggle('ham-active');


    global_nav_link_link_anchors.forEach((anchor) => {
        anchor.classList.toggle('ham-active');
    });
    global_nav_link_link_list_items.forEach((list_item) => {
        list_item.classList.toggle('ham-active');
    });


})

function removing_classes() {
    ham_btn_bread.forEach((line) => { line.classList.remove('ham-active'); });
    ham_text_menu.classList.add('ham-active');
    ham_text_close.classList.remove('ham-active');
    global_nav_link_link_anchors.forEach((anchor) => { anchor.classList.remove('ham-active'); });
    global_nav_link_link_list_items.forEach((list_item) => { list_item.classList.remove('ham-active'); });
    global_nav_link_link_list_wrapper.classList.remove('ham-active');
    global_nav_link_link_list.classList.remove('ham-active');
    global_nav_logo_wrapper.classList.remove('ham-active');
}

global_nav_logo_anchor.addEventListener('click', () => {
    removing_classes()
})

global_nav_link_link_anchors.forEach((anchor) => {
    anchor.addEventListener('click', () => { removing_classes() });
});