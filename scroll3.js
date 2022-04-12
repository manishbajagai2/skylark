
const scrolltotop3 = document.getElementById('scroll-to-top3');
let datashow3 = false;

window.addEventListener('scroll',()=>{
    if(window.scrollY > 50 && !datashow3){
        scrolltotop3.setAttribute('data-show', 'true');
        datashow3 = true;
    }

    if(window.scrollY <= 50 && datashow3){
        scrolltotop3.setAttribute('data-show', 'false');
        datashow3 = false;
    }

    scrolltotop3.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});