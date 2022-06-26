// Importing font awesome
import ("https://kit.fontawesome.com/c0a26484b7.js"); import ("https://kit.fontawesome.com/39c1af56c6.js"); import ("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.js");


// indenting for many element
let indenting_1 = document.querySelectorAll('.indent-1'); let indenting_2 = document.querySelectorAll('.indent-2');
let indenting_3 = document.querySelectorAll('.indent-3'); let indenting_4 = document.querySelectorAll('.indent-4');
let indenting_5 = document.querySelectorAll('.indent-5'); let indenting_6 = document.querySelectorAll('.indent-6');


indenting_1.forEach(function (element){element.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;`});
indenting_2.forEach(function (element){element.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`});
indenting_3.forEach(function (element){element.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`});
indenting_4.forEach(function (element){element.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`});
indenting_5.forEach(function (element){element.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`});
indenting_6.forEach(function (element){element.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`});


// Adding line number
code_text = document.querySelectorAll('.code-text-wrapper > .code-text');
code_line_wrapper = document.querySelector('.code-line-no-wrapper')

code_text_no_ini = 1;

while (code_text_no_ini <= code_text.length){
    code_num_ele = document.createElement('div'); // created a Element for line
    code_num_ele_text = document.createTextNode(`${code_text_no_ini}`); // creat text to created element
    code_num_ele.classList.add('code-line-no')
    code_num_ele.appendChild(code_num_ele_text); // adding text to newly created element
    code_line_wrapper.appendChild(code_num_ele); // adding newly created element to body
    code_text_no_ini += 1;
}

// DARK AND LIGHT MODE
const span_dark = document.querySelector('.code-theme-icon-dark');
const span_light = document.querySelector('.code-theme-icon-light');
const theme_btn = document.querySelector('.code-theme');
let main_code_cont = document.querySelector('.main-code-container');

const theme_link = document.getElementById('theme-link');

theme_btn.addEventListener('click', function(){

    if (span_dark.classList.contains('visible')) {
        span_dark.classList.remove('visible');
        span_light.classList.add('visible');
        theme_link.href = 'https://sushantsejwal.github.io/Code-template/css/code-dark/code-dark.css';
    }
    else {
        span_dark.classList.add('visible');
        span_light.classList.remove('visible')
        theme_link.href = 'https://sushantsejwal.github.io/Code-template/css/code-light/code-light.css';
    };

});