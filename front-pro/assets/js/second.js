

let pattern=/(.*)\/(.*)/g;
$(document).ready(function () {
    $.ajax({
        async:false,
        type: "GET",
        url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors",
        beforeSend: function() {
            
            $('.loader').addClass('show');
        },
        success: function (response) {
            $.each(response, function (indexInArray, item) { 
               
                    
     let allCards=$(`<div class="card item" ><div class="image1">
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
        $('.loader').fadeOut(1000,function(){
        
         $('.loader').removeClass('show');
    });  
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
                    margin:10,
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                   
                }
            }
        })
 
     })
   
    $(function () {
      
        // $('.header2').load("_header.html",function(){
let pathName=window.location.pathname;
console.log(pathName)

let result=pattern.exec(pathName)
$('.nav-item').removeClass('active')
if(result!=null){
    let page=result[2];
   $(`a[href='${page}']`).parent('.nav-item').addClass('active');
if($(`a[href='${page}']`).parent('.nav-link li')){
    $(`a[href='${page}']`).closest('.nav-item').addClass('active')

}

}
        

        
       


// });

        // $('.footer').load('_footer.html');
    // })
   

$('.rightDoub').click(function (e) { 
    let activeEl=$('.slider li.active')
    let nextEl=activeEl.next('li');
    
    if(nextEl.length==0){
        nextEl=$('.slider li:first-of-type')
    }
    console.log(nextEl)
    $(activeEl).removeClass('active')
    $(nextEl).addClass('active');  
    });
    $('.leftDoub').click(function (e) { 
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
            
        
      
            $(activeEl).removeClass('active')
            $(nextEl).addClass('active');    
    
            
    
    
    }, 5000);
    
//     $('.nav-link').click(function (e) { 
//       // e.preventDefault();
// $(this).find('.elave').css("display","block")

        
    // });
   
    $('.formAppoint').validate({
        errorPlacement: function(error, element) {
            $(error).addClass('invalid-feedback text-white');
            error.insertAfter(element)
        },

        hightlight:function(element,errorClass){
            $(element).addClass('is-invalid text-white')
            
        },


        unhightlight:function(element,errorClass){
            $(element).removeClass('is-invalid')
            .closest('form')
          addClass('was-validated')
        }

    })

    $('.formAppoint').submit(function (e) { 
        e.preventDefault();
        console.log('e.currentTarget.value')
    });






    window.addEventListener('scroll', function () {
        let scroll = document.querySelector('.scroll')
        let ust = document.querySelector('.navbar')
        let a = window.scrollY;

        if (a > 50) {
            scroll.classList.add('show', 'text-white')
           ust.classList.add('pos')
        }
        else {
            scroll.classList.remove('show')
            ust.classList.remove('pos')

        }
    })

   
      let pattern2=/(.*)\/(.*)/g;

    let pathName2=window.location.pathname;
    let result2=pattern2.exec(pathName2)
    let page2=result2[2];
    console.log(`page:${page2}`)
    if(page2=='index.html' ||page2=='second.html'){
        new Glide('.glide', {
            type: 'carousel',
    
            startAt: 1,
            perView: 3,
            focusAt: 'center',
            autoplay: 5000,
            breakpoints: {
                
                1000: { perView: 2 },
               600: { perView: 1 },
      300:{perView:1},
            },
    
    
            gap: 50,
    
    
        }).mount()
      
      
    }
    else{
        return;
    }

     if(page2=='index.html'){
        new Glide('.glide2', {
            type: 'carousel',
          gap:30,
            startAt: 1,
            perView: 3,
            focusAt: 'center',
          autoplay: 5000,
            breakpoints: {
                1000: { perView: 2 },
                800: { perView: 1 },
                  300:{perView:1},
            },
          
    
    
            gap: 50,
    
    
        }).mount()  
    }
    else{
        return;
    }
    


    
  
    const counters=document.querySelectorAll('.counter')

const speed=200;
counters.forEach(counter=>{
    const updateCount=()=>{
        const target=+counter.getAttribute('data-target');
        const count=+counter.innerText;
const inc=target/speed;
if(count<target){
    counter.innerText=Math.ceil(count+inc);
    setTimeout(updateCount,1);
}
else{
    count.innerText=target;
}
}


updateCount();
   }
)
    

        
        



}     
)})