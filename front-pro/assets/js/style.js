$(document).ready(function () {
$.ajax({
    async:false,
    type: "GET",
    url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors",
    beforeSend: function() {
        // setting a timeout
        $('.loader').addClass('show');
    },
    success: function (response) {
        $.each(response, function (indexInArray, item) { 
           
                
 let allCards=$(`<div class="card item" style="width: 20rem;"><div class="image1">
                    <div class="overlay">
                    <ul class="list d-flex flex-row">
                   
                    <li>
                    <a href="#"><i class="fab mr-3 fa-instagram mr-3"></i></a></li>
                   <li><a href="#"><i class="fab fa-facebook mr-3"></i></a></li>
                   <li><a href="#"><i class="fab fa-twitter mr-3"></i></a></li>
                   
                   </ul>
                   </div>
                    <img class="card-img-top" src="http://kamranaeff1994-002-site3.ctempurl.com/images/${item.image}" alt="Card image cap">   
                    </div>
                    <div class="card-body">
                      <h5 class="card-title text-center">${item.name}</h5>
                      <h6 class="doc-title text-center">
                       ${item.profession}
                      </h6>
                      <p class="card-text text-center pb-3">${item.description}</p>
                    
                    </div>
                  </div>`);
                
                // $(col).html(allCards)
                $('.products').append(allCards);    
        });
     

}  
}).done(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

        autoplayTimeout:4000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
               
            }
        }
    })
    $('.loader').removeClass('show');
})

 
 
new Glide('.glide',{
    type:'carousel',
    startAt:0,
    perView:3,

    autoplay:5000,
breakpoints:{
    900:{perView:3},
    600:{perView:2},
 //   300:{perView:1},
},

  
    gap:50,

   
}).mount()


 
    new Glide('.glide2',{
      type:'carousel',
      startAt:0,
      autoplay:5000,
      perView:3,
  breakpoints:{
      900:{perView:3},
      600:{perView:2},
   //   300:{perView:1},
  },

    
      gap:30,

     
  }).mount()
   
    window.addEventListener('scroll',function(){
let scroll=document.querySelector('.scroll')
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

   let title=$('.slider h1');

setInterval(() => { 
  
     

        let activeEl=$('.slider li.active')
        let nextEl=activeEl.next('li');
        
       
       
        if(nextEl.length==0){
            nextEl=$('.slider li:first-of-type')
        }
        
    
  
        $(activeEl).removeClass('active')
        $(nextEl).addClass('active');    

        


}, 5000);




});
