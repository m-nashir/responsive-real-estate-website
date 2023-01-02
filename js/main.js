/* CHANGE BACKGROUND HEADER */ 
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SWIPER POPULAR */
var swiperPopular = new Swiper(".popular-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  /* VALUE ACCORDION */
let accordionItems =  document.querySelectorAll('.value-accordion-item')

accordionItems.forEach((item) => {
  let accordionHeader = item.querySelector('.value-accordion-header')

  accordionHeader.addEventListener('click', () => {
    let openItem = document.querySelector('.accordion-open')
    
    toggleItem(item)

    if (openItem && openItem !== item){
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = document.querySelector('.value-accordion-content')

  if (item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}


/* SCROLL SECTION ACTIVE LINKS*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      let sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
}
window.addEventListener('scroll', scrollActive)







