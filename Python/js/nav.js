let local_side_nav = document.querySelector('.local-side-nav');
function local_nav(){

    let global_nav_logo_wrapper = document.querySelector('.global-nav-logo-wrapper');
    let global_nav = document.querySelector('.global-nav');
    let local_nav = document.querySelector('.local-nav');

    let global_nav_height;
    let local_nav_height = local_nav.offsetHeight;
    let media_768 = window.matchMedia('(max-width : 768px)');

    function local_nav_marginTop(){
        if (media_768.matches){ global_nav_height = global_nav_logo_wrapper.offsetHeight; }
        else{ global_nav_height = global_nav.offsetHeight; }
        local_nav.style.marginTop = `${global_nav_height}px`;
        local_side_nav.style.marginTop = `${local_nav_height + global_nav_height}px`;
        local_side_nav.style.height = `calc(100vh - ${local_nav_height + global_nav_height}px)`;
        window.addEventListener('scroll', () => {
            let scroll_y = window.scrollY;            
            if (scroll_y <= global_nav_height){
                local_side_nav.style.marginTop = `${(local_nav_height + global_nav_height) - scroll_y}px`;
                local_side_nav.style.height = `calc(100vh - ${(local_nav_height + global_nav_height) - scroll_y}px)`;
            } else if (scroll_y > global_nav_height){
                local_side_nav.style.marginTop = `${local_nav_height}px`;
                local_side_nav.style.height = `calc(100vh - ${local_nav_height}px)`;
            }
        });
    };


    local_nav_marginTop()
    window.addEventListener('resize', local_nav_marginTop);

};
local_nav();

const local_nav_topic_anchor = document.querySelector('.local-nav-topic-anchor');
local_nav_topic_anchor.setAttribute('href',(window.location.origin + window.location.pathname));
const topic_subtopic_link_text = document.querySelector('.topic-subtopic-link-text');
topic_subtopic_link_text.textContent = `subtopic related to ${local_nav_topic_anchor.textContent}`;

function local_sublink_btn_loop() {
    
    // let local_nav_link_wrapper = document.querySelector('.local-side-nav-link-wrapper');
    let local_side_nav_link_btns = [
        document.querySelector(`[data-local-nav='btn-1']`),
        document.querySelector(`[data-local-nav='btn-2']`),
        document.querySelector(`[data-local-nav='btn-3']`),
        document.querySelector(`[data-local-nav='btn-4']`),
        document.querySelector(`[data-local-nav='btn-5']`),
        document.querySelector(`[data-local-nav='btn-6']`),
        document.querySelector(`[data-local-nav='btn-7']`),
        document.querySelector(`[data-local-nav='btn-8']`),
        document.querySelector(`[data-local-nav='btn-9']`),
        document.querySelector(`[data-local-nav='btn-10']`),
        document.querySelector(`[data-local-nav='btn-11']`)
    ]

    function on_click_sublink_btn(att_value){
        let local_side_nav_link_btn_lines = document.querySelectorAll(`[data-local-nav='${att_value}']`);
        let local_side_nav_link_sublink = document.querySelector(`[data-local-nav_link_wrapper='${att_value}']`);
        local_side_nav_link_btn_lines.forEach((lines) => { lines.classList.toggle('side-nav-sublink-active'); });
        local_side_nav_link_sublink.classList.toggle('side-nav-sublink-active');

        let local_nav_sublink_height = document.querySelectorAll(`[data-local-nav_link_wrapper='${att_value}'] .local-side-nav-link-sublinks-anchor-wrapper`);
        let local_nav_sublink_total_height = 0;
            local_nav_sublink_height.forEach((ele) => { 
                local_nav_sublink_total_height = local_nav_sublink_total_height + ele.clientHeight;
            });
            if (local_side_nav_link_sublink.classList.contains('side-nav-sublink-active')){
                local_side_nav_link_sublink.style.height = `${local_nav_sublink_total_height + 30}px`
            }
            else{
                local_side_nav_link_sublink.style.height = `0px`
            }
    }
    local_side_nav_link_btns[0].addEventListener('click', () => {let btn_attribute_value = local_side_nav_link_btns[0].getAttribute('data-local-nav');on_click_sublink_btn(btn_attribute_value);});
    local_side_nav_link_btns[1].addEventListener('click', () => {let btn_attribute_value = local_side_nav_link_btns[1].getAttribute('data-local-nav');on_click_sublink_btn(btn_attribute_value);});
    local_side_nav_link_btns[2].addEventListener('click', () => {let btn_attribute_value = local_side_nav_link_btns[2].getAttribute('data-local-nav');on_click_sublink_btn(btn_attribute_value);});
    local_side_nav_link_btns[3].addEventListener('click', () => {let btn_attribute_value = local_side_nav_link_btns[3].getAttribute('data-local-nav');on_click_sublink_btn(btn_attribute_value);});
    local_side_nav_link_btns[4].addEventListener('click', () => {let btn_attribute_value = local_side_nav_link_btns[4].getAttribute('data-local-nav');on_click_sublink_btn(btn_attribute_value);});
    local_side_nav_link_btns[5].addEventListener('click', () => {let btn_attribute_value = local_side_nav_link_btns[5].getAttribute('data-local-nav');on_click_sublink_btn(btn_attribute_value);});
    local_side_nav_link_btns[6].addEventListener('click', () => {let btn_attribute_value = local_side_nav_link_btns[6].getAttribute('data-local-nav');on_click_sublink_btn(btn_attribute_value);});
    // local_side_nav_link_btns[7].addEventListener('click', () => {let btn_attribute_value = local_side_nav_link_btns[7].getAttribute('data-local-nav');on_click_sublink_btn(btn_attribute_value);});
    // local_side_nav_link_btns[8].addEventListener('click', () => {let btn_attribute_value = local_side_nav_link_btns[8].getAttribute('data-local-nav');on_click_sublink_btn(btn_attribute_value);});
    // local_side_nav_link_btns[9].addEventListener('click', () => {let btn_attribute_value = local_side_nav_link_btns[9].getAttribute('data-local-nav');on_click_sublink_btn(btn_attribute_value);});
    // local_side_nav_link_btns[10].addEventListener('click', () => {let btn_attribute_value = local_side_nav_link_btns[10].getAttribute('data-local-nav');on_click_sublink_btn(btn_attribute_value);});
}
local_sublink_btn_loop()


// max width 1100px
// hamburger and nav links
let local_ham_btn = document.querySelector('.local-nav-hamburger-wrapper');
let local_ham_btn_bread = document.getElementsByClassName('local-nav-hamburger-bread-crust');
let local_ham_text_topic = document.querySelector('.local-nav-hamburger-text-span-topic');
let local_ham_text_hide = document.querySelector('.local-nav-hamburger-text-span-hide');
// let local_side_nav_g = document.querySelector('.local_side-nav');

let local_nav_logo_anchor = document.querySelector('.local-nav-topic-anchor');
let local_nav_link_link_anchors = document.getElementsByClassName('local-side-nav-link-anchor');
let local_nav_link_sublink_anchors = document.getElementsByClassName('local-side-nav-link-sublinks-anchor');

local_ham_btn.addEventListener('click', () => {
    for (let i = 0; i < local_ham_btn_bread.length; i++){
        local_ham_btn_bread[i].classList.toggle('awesome-sushant');
        if (local_ham_btn_bread[i].classList.contains('awesome-sushant')){
            local_ham_text_topic.classList.remove('awesome-sushant');
            local_ham_text_hide.classList.add('awesome-sushant');
        }
        else{
            local_ham_text_topic.classList.add('awesome-sushant');
            local_ham_text_hide.classList.remove('awesome-sushant');
        }
    }
    local_side_nav.classList.toggle('awesome-sushant');
});

function rem_loc_class(){
    for (let i = 0; i < local_ham_btn_bread.length; i++){ local_ham_btn_bread[i].classList.remove('awesome-sushant'); }
    local_ham_text_topic.classList.add('awesome-sushant');
    local_ham_text_hide.classList.remove('awesome-sushant');
    local_side_nav.classList.remove('awesome-sushant');
}
local_nav_logo_anchor.addEventListener('click', rem_loc_class);
for (let i = 0; i < local_nav_link_link_anchors.length; i++) { local_nav_link_link_anchors[i].addEventListener('click', rem_loc_class);}
for (let i = 0; i < local_nav_link_sublink_anchors.length; i++) { local_nav_link_sublink_anchors[i].addEventListener('click', rem_loc_class);}


function topic_search(){

}
topic_search()