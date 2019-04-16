window.addEventListener('load', function() {
  
  if (window.matchMedia('(min-width: 640px)').matches) {
    if(document.querySelector('body').classList.contains("hp")){
      window.onscroll = function() {
        if (document.documentElement.scrollTop > window.innerHeight*0.01 ) {
          console.log("test");
          introFadeOut();
          document.querySelector('.intro__tablau').classList.add('toWhite');
        }
        else{
          document.querySelector('.intro__rang--left').classList.remove('fadeOut');
          document.querySelector('.intro__rang--right').classList.remove('fadeOut');
          document.querySelector('.intro__teacher').classList.remove('fadeOut');
          document.querySelector('.intro__tablau').classList.remove('toWhite');
          document.querySelector('.tableau__text--1').classList.remove('fadeOut');
          document.querySelector('.arrow').classList.remove('fadeOut');
        }
      }
    }
  }
  document.querySelector('.intro__button').addEventListener("click", function(){
    document.querySelector('.intro__tablau').classList.add('commande');
    document.querySelector('body').classList.remove('hp');
    document.querySelector('body').classList.add('statusCommande');
    document.querySelector('body').classList.add('step1');
    introFadeOut();
  });

  document.querySelector(".button__commande--1").addEventListener("click",function(){
    console.log("click2")
    document.querySelector(".tableau__commande--1").style.opacity = "0";
    document.querySelector(".tableau__commande--2").style.zIndex = "5";
    document.querySelector(".tableau__commande--2").style.opacity = "1";
  });

  document.querySelector(".button__commande--2").addEventListener("click",function(){
    console.log("click3")
    document.querySelector(".tableau__commande--2").style.opacity = "0";
    document.querySelector(".tableau__commande--3").style.zIndex = "5";
    document.querySelector(".tableau__commande--3").style.opacity = "1";
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

    //tableau
    document.querySelector(".intro__tablau").style.top = "15vh";
    document.querySelector(".intro__tablau").style.left = "15vw";
    document.querySelector(".intro__tablau").style.height = "80vh";
    document.querySelector(".intro__tablau").style.width = "70vw";

    //children
    document.querySelector(".intro__rang--left").style.right = "-23vw";
    document.querySelector(".intro__rang--right").style.left = "-23vw";

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
    console.log("click7 good")
    document.querySelector(".tableau__commande--5-2").style.opacity = "0";
    document.querySelector(".tableau__commande--6").style.zIndex = "5";
    document.querySelector(".tableau__commande--6").style.opacity = "1";
  });

});

function introFadeOut(){
  document.querySelector('.intro__rang--left').classList.add('fadeOut');
  document.querySelector('.intro__rang--right').classList.add('fadeOut');
  document.querySelector('.intro__teacher').classList.add('fadeOut');
  document.querySelector('.tableau__text--1').classList.add('fadeOut');
  document.querySelector('.arrow').classList.add('fadeOut');
}


