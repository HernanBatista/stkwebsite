if (screen.width >= 699) {

    function reveal(){
        var reveals = document.querySelectorAll(".reveal")
        for(var i=0; i<reveals.length; i++){
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
        
            if(elementTop < windowHeight - elementVisible){
                reveals[i].classList.add("active");
            }else{
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);


    //scroll nav fixed
    let nav = document.querySelector("nav");
    window.onscroll = function (e) {  
        if(window.scrollY > 100){
            nav.classList.add("navscroll");
        }else{
            nav.classList.remove("navscroll")
        }
    } 

}