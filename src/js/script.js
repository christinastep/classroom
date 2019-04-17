window.addEventListener('load', function() {
  
  if (window.matchMedia('(min-width: 640px)').matches) {
    if(document.querySelector('body').classList.contains("hp")){
      window.onscroll = function() {
        if (document.documentElement.scrollTop > window.innerHeight*0.01 ) {
          console.log("test");
          introFadeOut();
          document.querySelector('.intro__tablau').classList.add('toWhite');
          document.querySelector('.teaser').classList.add('fadeIn');
          if (document.documentElement.scrollTop > window.innerHeight*0.6 ) {
            document.querySelector('.intro__rang--left').style.right = "-43vw";
            document.querySelector('.intro__rang--right').style.left = "-43vw";
            document.querySelector('.intro__tablau').classList.add("toTop");
            document.querySelector('.teaser').style.opacity = "0";
            document.querySelector('.avantages').style.top = "-20vw";
            if (document.documentElement.scrollTop > window.innerHeight*0.9 ) {
              document.querySelector('.bg').classList.add('moveUp');
              if (document.documentElement.scrollTop > window.innerHeight*2.2 ) {
                console.log("yes")
                document.querySelector('.moeble').classList.add('moveUp');
              }
              else{
                document.querySelector('.moeble').classList.remove('moveUp');
              }
            }
            else{
              document.querySelector('.bg').classList.remove('moveUp');
            }
          }
          else{
            document.querySelector('.intro__rang--left').style.right = "-20vw";
            document.querySelector('.intro__rang--right').style.left = "0.vw";
            document.querySelector('.intro__tablau').classList.remove("toTop");

            document.querySelector('.intro__rang--right').classList.remove('fadeOutOutOut');
            document.querySelector('.intro__rang--left').classList.remove('fadeOutOutOut');
            document.querySelector('.teaser').style.opacity = "1";
            document.querySelector('.intro__clock').style.opacity = "0";
            
          }
        }
        
        else{
          document.querySelector('.intro__rang--left').classList.remove('fadeOut');
          document.querySelector('.intro__rang--right').classList.remove('fadeOut');
          document.querySelector('.intro__teacher').classList.remove('fadeOut');
          document.querySelector('.intro__tablau').classList.remove('toWhite');
          document.querySelector('.tableau__text--1').classList.remove('fadeOut');
          document.querySelector('.arrow').classList.remove('fadeOut');
          document.querySelector('.teaser').classList.remove('fadeIn');
          document.querySelector('.intro__rang--left').style.right = "0vw";
          document.querySelector('.intro__rang--right').style.left = "0.vw";
          document.querySelector('.teaser').style.opacity = "0";
          document.querySelector('.intro__clock').style.opacity = "1";
        }
      }
    }
  }
  document.querySelector('.intro__button').addEventListener("click", function(){
    document.querySelector('.intro__tablau').classList.add('commande');
    document.querySelector('body').classList.remove('hp');
    document.querySelector('body').classList.add('statusCommande');
    document.querySelector('body').classList.add('step1');
    document.querySelector('.barProgression__point--1').style.backgroundColor = "#48437D";
    document.querySelector('.barProgression--active').style.width = "0%";
    introFadeOut();
  });

  document.querySelector(".button__commande--1").addEventListener("click",function(){
    console.log("click2")
    document.querySelector(".tableau__commande--1").style.opacity = "0";
    document.querySelector(".tableau__commande--2").style.zIndex = "5";
    document.querySelector(".tableau__commande--2").style.opacity = "1";
    document.querySelector('.barProgression__point--2').style.backgroundColor = "#48437D";
    document.querySelector('.barProgression--active').style.width = "20%";
  });

  document.querySelector(".button__commande--2").addEventListener("click",function(){
    console.log("click3")
    document.querySelector(".tableau__commande--2").style.opacity = "0";
    document.querySelector(".tableau__commande--3").style.zIndex = "5";
    document.querySelector(".tableau__commande--3").style.opacity = "1";
    document.querySelector('.barProgression__point--3').style.backgroundColor = "#48437D";
    document.querySelector('.barProgression--active').style.width = "40%";
  });

  document.querySelector(".button__commande--3").addEventListener("click",function(){
    console.log("click4")
    document.querySelector(".tableau__commande--3").style.opacity = "0";

    //tableau
    document.querySelector(".intro__tablau").style.top = "2vh";
    document.querySelector(".intro__tablau").style.left = "1vw";
    document.querySelector(".intro__tablau").style.height = "96vh";
    document.querySelector(".intro__tablau").style.width = "98vw";

    //header
    document.querySelector("header").style.top = "-6vw";
    document.querySelector('.barProgression').style.top = "-5vw";

    //children
    document.querySelector(".intro__rang--left").style.right = "-43vw";
    document.querySelector(".intro__rang--right").style.left = "-43vw";

    //elements
    document.querySelector(".tableau__commande--4").style.zIndex = "5";
    document.querySelector(".tableau__commande--4").style.opacity = "1";
  });

  document.querySelector(".button__commande--4").addEventListener("click",function(){
    console.log("click5")
    document.querySelector(".tableau__commande--4").style.opacity = "0";
    document.querySelector(".tableau__commande--5").style.zIndex = "5";
    document.querySelector(".tableau__commande--5").style.opacity = "1";

    //header
    document.querySelector("header").style.top = "0";
    document.querySelector('.barProgression').style.top = "2.2vw";

    //tableau
    document.querySelector(".intro__tablau").style.top = "15vh";
    document.querySelector(".intro__tablau").style.left = "15vw";
    document.querySelector(".intro__tablau").style.height = "80vh";
    document.querySelector(".intro__tablau").style.width = "70vw";

    //children
    document.querySelector(".intro__rang--left").style.right = "-23vw";
    document.querySelector(".intro__rang--right").style.left = "-23vw";

    document.querySelector('.barProgression__point--4').style.backgroundColor = "#48437D";
    document.querySelector('.barProgression--active').style.width = "60%";

  });

  document.querySelector(".button__commande--5").addEventListener("click",function(){
    console.log("click6")
    document.querySelector(".tableau__commande--5").style.opacity = "0";
    document.querySelector(".tableau__commande--5-1").style.zIndex = "5";
    document.querySelector(".tableau__commande--5-1").style.opacity = "1";
    
  });

  document.querySelector(".button__commande--5-1--back").addEventListener("click",function(){
    console.log("click7 good")
    document.querySelector(".tableau__commande--5-1").style.opacity = "0";
    document.querySelector(".tableau__commande--5-2").style.zIndex = "5";
    document.querySelector(".tableau__commande--5-2").style.opacity = "1";
  });

  document.querySelector(".button__commande--5-2--back").addEventListener("click",function(){
    console.log("click8 good")
    document.querySelector(".tableau__commande--5-2").style.opacity = "0";
    document.querySelector(".tableau__commande--6").style.zIndex = "5";
    document.querySelector(".tableau__commande--6").style.opacity = "1";
  });

  document.querySelector(".button__commande--6--back").addEventListener("click",function(){
    console.log("click9")
    document.querySelector(".tableau__commande--6").style.opacity = "0";
    document.querySelector(".tableau__commande--7").style.zIndex = "5";
    document.querySelector(".tableau__commande--7").style.opacity = "1";

    document.querySelector('.barProgression__point--5').style.backgroundColor = "#48437D";
    document.querySelector('.barProgression--active').style.width = "80%";
  });

  document.querySelector(".button__commande--7").addEventListener("click",function(){
    console.log("click10")
    document.querySelector(".tableau__commande--7").style.opacity = "0";
    document.querySelector(".tableau__commande--8").style.zIndex = "5";
    document.querySelector(".tableau__commande--8").style.opacity = "1";

    document.querySelector('.barProgression__point--6').style.backgroundColor = "#48437D";
    document.querySelector('.barProgression--active').style.width = "100%";
  });

  document.querySelector(".button__commande--8").addEventListener("click",function(){
    console.log("click10")
    document.querySelector(".tableau__commande--8").style.opacity = "0";
    document.querySelector(".tableau__commande--9").style.zIndex = "5";
    document.querySelector(".tableau__commande--9").style.opacity = "1";
  });

});

function introFadeOut(){
  document.querySelector('.intro__rang--left').classList.add('fadeOut');
  document.querySelector('.intro__rang--right').classList.add('fadeOut');
  document.querySelector('.intro__teacher').classList.add('fadeOut');
  document.querySelector('.tableau__text--1').classList.add('fadeOut');
  document.querySelector('.arrow').classList.add('fadeOut');
}


//slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}


