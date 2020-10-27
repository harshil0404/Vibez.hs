let $ = (ele) => document.querySelector(ele);

function signin_display(){
    let sup = $('.signup-form');
    let sin = $('.signin-form');
    if(sup.classList.contains('open')){
        sup.classList.remove('open');
        sup.style.display = 'none';
    }
    sin.classList.add('open');
    sin.style.display = 'flex';
    // console.log(sin.classList);
}
function signup_display(){
    let sup = $('.signup-form');
    let sin = $('.signin-form');
    if(sin.classList.contains('open')){
        sin.classList.remove('open');
        sin.style.display = 'none';
    }
    sup.style.display = 'flex';
    sup.classList.add('open');
}


let media = window.matchMedia("(max-width:770px)");
function media_mob_desk(e){
 
}
media.addListener(media_mob_desk);
media_mob_desk(media);