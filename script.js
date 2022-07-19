
 function convertMainScreenTexttoChars(){
    document.querySelectorAll("#text h1")
.forEach(function(h1){
    var clutter= "";
    h1.textContent.split("")
    .forEach(function(charc){
        clutter+=`<span>${charc}</span>`;
    })
    h1.innerHTML=clutter;
})
 }
 function gsapFirstPage(){
    var tl =gsap.timeline();
tl.
from("#text h1 span",{
    stagger:.1,
    filter:"blur(2px)",
    scale:1.2,
    duration: 2,
    color:"red",
    y: 20,
    opacity: 0,
    ease: Expo,
},)

.from(".navpart h4",{
    stagger:.2,
    duration: 2,
    y: 10,
    opacity: 0,
    ease: Expo,
},"-=2")
.from("#ncenter",{
    duration: 2,
    y: 20,
    opacity: 0,
    ease: Expo,
},"-=2")
.from("#centerline",{
    duration: 2,
    scale:2,
    filter:"blur(1px)",
    ease: Expo,
},"-=2")
.from(".hbottomelm",{
    duration: 2,
    scale:1.5,
    opacity:0,
    y:10,
    stagger:.2,
    ease: Expo,
},"-=2")
}
function gsapSecondPage(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            // markers:true,
            trigger:"#second",
            start:"top 50%",
            scrub:4,
        }
    });

       tl2.from("#photoseries",{
        x:"100%",
        ease:Expo,
        duration:2,
    },"maakda")

      .to("#second h1",{
        x:"-100%",
        ease:Circ,
        duration:5,
     },"maakda")
     console.log("hello")
 }
 function gsapthirdPage(){
    document.querySelector("#third").addEventListener("click",function(dets){
        let dec= 100 - (4-dets.target.id)*4;
        console.log(dets.target.id,dec)
        gsap.to(dets.target,{
            width:dec+"vw",
            duration:3,
            ease:Expo.easeInOut,
        })
    })
 }

 convertMainScreenTexttoChars();
 gsapFirstPage();
 gsapSecondPage();
 gsapthirdPage();