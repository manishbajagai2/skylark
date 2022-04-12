const scrolltotop2 = document.getElementById('scroll-to-top2');
let datashow2 = false;

window.addEventListener('scroll',()=>{
    if(window.scrollY > 50 && !datashow2){
        scrolltotop2.setAttribute('data-show', 'true');
        datashow2 = true;
    }

    if(window.scrollY <= 50 && datashow2){
        scrolltotop2.setAttribute('data-show', 'false');
        datashow2 = false;
    }

    scrolltotop2.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
