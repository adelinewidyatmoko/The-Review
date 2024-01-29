
var splash = document.querySelector(".splash");
if(splash){
    document.addEventListener('DOMContentLoaded',function(event){
        setTimeout(function(){
            splash.style.display = 'none'
        },5000);
    });
}
var animate = document.querySelector('.astronaut-takeoff');
if(animate){
    document.addEventListener(
        'DOMContentLoaded',function(event){
            setTimeout(function(){
                animate.classList.add('animation')
            },400);
        });
    }

    

var slides=document.querySelectorAll(".slide");
var buttons=document.querySelectorAll(".slider-btn");
    
let currentSlide=1;
    
    //manual images slider
    var manualNav=function(manual){
        slides.forEach(function(slide){
            slide.classList.remove("active");
    
            buttons.forEach((btn) => {
                btn.classList.remove("active");
            });
        });
    
        slides[manual].classList.add("active");
        buttons[manual].classList.add("active");
    }
    
    buttons.forEach(function(btn,i){
        btn.addEventListener("click",function() {
            manualNav(i);
            currentSlide=i;
        })
    })
    
    var repeat = function (activeClass) {
    let active =document.getElementsByClassName('active');
    
        let i=1;
        var repeater = function(){
            setTimeout(function(){
                [...active].forEach(function(activeSlide){
                    activeSlide.classList.remove('active');
                });
                slides[i].classList.add('active');
                buttons[i].classList.add('active');
                i++
    
                if(slides.length==i){
                    i=0;
                }
                if(i>=slides.length){
                    return;
                }
                repeater();
             } , 5000);
            
        }
        repeater();
    }
    repeat();
    AOS.init();
    $(document).ready(function(){ 
 
        $(".primaryContained").on('click', function(){
        $(".comment").addClass("commentClicked");
      });//end click
      $("textarea").on('keyup.enter', function(){
        $(".comment").addClass("commentClicked");
      });//end keyup
      });//End Function
     
    new Vue({
        el: "#app",
        data:{
           title: 'Add a comment',
          newItem: '',
          item: [],
        },
        methods:{
          addItem  (){
          this.item.push(this.newItem);
            this.newItem = "";
          }
      }
     
      });
      // Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
