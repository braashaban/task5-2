const closee=document.querySelector(".close");
const div1=document.querySelector(".top");

closee.addEventListener('click', function(){
    div1.classList.add("remove")
})





  
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
           <p>${element.desription}</p>
              <p>${element.price}</p>
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
    <li> ${element.name.common} <img src="${element.flags.svg}" alt="" width="20px">  </li>
    `
});
console.log(output);
flags.innerHTML=output;
}










var swiper = new Swiper(".slide-cont", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 3,

fade:'true',
grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
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