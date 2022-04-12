const scrolltotop1 = document.getElementById('scroll-to-top1');
let datashow1 = false;

window.addEventListener('scroll',()=>{
    if(window.scrollY > 50 && !datashow1){
        scrolltotop1.setAttribute('data-show', 'true');
        datashow1 = true;
    }

    if(window.scrollY <= 50 && datashow1){
        scrolltotop1.setAttribute('data-show', 'false');
        datashow1 = false;
    }

    scrolltotop1.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
