$(document).ready(function () {
    window.addEventListener('scroll',function(){
let scroll=document.querySelector('#scroll')
let ust=document.querySelector('.navbar')
let a=window.scrollY;

if(a>50){
    scroll.classList.add('show')
    ust.classList.add('pos')
}
else{
    scroll.classList.remove('show')
    ust.classList.remove('pos')

}
    })




$('#right').click(function (e) { 
let activeEl=$('.slider li.active')
let nextEl=activeEl.next('li');

if(nextEl.length==0){
    nextEl=$('.slider li:first-of-type')
}
console.log(nextEl)
$(activeEl).removeClass('active')
$(nextEl).addClass('active');  
});
$('#left').click(function (e) { 
    let activeEl=$('.slider li.active')
    let nextEl=activeEl.prev('li');
    
    if(nextEl.length==0){
        nextEl=$('.slider li:last-of-type')
    }
    console.log(nextEl)
    $(activeEl).removeClass('active')
    $(nextEl).addClass('active');
    
    ;
        
    });



setInterval(() => {
        let activeEl=$('.slider li.active')
        let nextEl=activeEl.next('li');
        
        if(nextEl.length==0){
            nextEl=$('.slider li:first-of-type')
        }
        console.log(nextEl)
        $(activeEl).removeClass('active')
        $(nextEl).addClass('active');       
}, 5000);




});
