

let redirect_python_btn = document.querySelector('.img_1')
let redirect_JS_btn = document.querySelector('.img_2')
let redirect_C_btn = document.querySelector('.img_3')
let redirect_sign_up_btn = document.querySelector('.sign_up')
let redirect_home = document.querySelector('.GYM_Brain')
let redirect_about_us = document.querySelector('.about_us')
let redirect_contacts = document.querySelector('.contacts')


try {redirect_python_btn.addEventListener('click', function(){
    window.location.href = './python.html';
})} 
catch (error) {}

try{redirect_JS_btn.addEventListener('click', function(){
    window.location.href = './JS.html';
})}
catch (error) {}

try {redirect_C_btn.addEventListener('click', function(){
    window.location.href = './C.html';
})}
catch (error) {}

try{redirect_sign_up_btn.addEventListener('click', function(){
    window.location.href = './sign_up.html';
})}
catch (error) {}

try{redirect_home.addEventListener('click', function(){
    window.location.href = './index.html';
})}
catch (error) {}

try{redirect_about_us.addEventListener('click', function(){
    window.location.href = './about_us_contacts.html';
})}
catch (error) {}

try{redirect_contacts.addEventListener('click', function(){
    window.location.href = './about_us_contacts.html';
    console.log('go to contacts');
})}
catch (error) {}



document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 180 * dx / window.innerWidth / 2
    let angleY = 180 * dy / window.innerHeight / 2
    redirect_python_btn.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
    redirect_JS_btn.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
    redirect_C_btn.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})