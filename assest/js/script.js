const closee=document.querySelector(".close");
const div1=document.querySelector(".top");

closee.addEventListener('click', function(){
    div1.classList.add("remove")
})

const load=document.querySelector(".loading");

function loadd() {
    setTimeout( () => {
        load.style.display='none' 
    },1000)
    
}



  
 fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => console.log(showw(json.products)) );
       
let slidee= document.getElementById("sliders");
function showw(data){
    let xx="";
    data.forEach(element => {
     if(element.id<7){
          
            xx+=
            `
        <div class="cards swiper-slide">
        <div class="imgs-sliser">
           <img src="${element.images[1]}" alt="" class="imgsss" />
           </div>
      <div class="card-contents">
            <h3>${element.title}</h3>
        <div class="icons">
            <i class="fa fa-star icon"> </i>
            <i class="fa fa-star icon"> </i>
            <i class="fa fa-star icon"> </i>
            <i class="fa fa-star icon"> </i>
            </div>
           <p>${element.description}</p>
              <p class="pricss">${element.price +"$"}</p>
    </div>
    </div> 
    `
}});
    slidee.innerHTML=xx;
}






fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(json =>view(json))

let flags=document.getElementById('flagss');
function view(el){
    let output="";

el.forEach(element => {
    output +=
    `
    <li> ${element.name.common} <img src="${element.flags.svg}" alt="flag" width="30px">  </li>
    `
});
console.log(output);
flags.innerHTML=output;
}










var swiper = new Swiper(".slide-cont", {
    slidesPerView:4,
    spaceBetween: 25,
    slidesPerGroup: 4,

fade:'true',
grabCursor:'true',
    pagination: {
   
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        }
    }
  });