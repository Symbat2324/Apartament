let d = document
let leftArrow = d.getElementById('left'),
    rightArrow = d.getElementById('right'),
    firstSlide = d.getElementById('slide1'),
    secondSlide = d.getElementById('slide2'),
    thirdSlide = d.getElementById('slide3'),
    link1 = d.getElementById('link1'),
    link2 = d.getElementById('link2'),
    link3 = d.getElementById('link3'),
    header = d.getElementById ('header'),
    topline = d.getElementById ('topline')


  leftArrow.addEventListener('click', (event) =>{
      event.preventDefault()
      if (secondSlide.classList.contains('active')){
          secondSlide.classList.remove('active')
          firstSlide.classList.add('active')
      }
      else if (thirdSlide.classList.contains('active')){
          thirdSlide.classList.remove('active')
          secondSlide.classList.add('active')
      }
  })  

  rightArrow.addEventListener('click', (event) =>{
    event.preventDefault()
    if(firstSlide.classList.contains('active')){
       firstSlide.classList.remove('active')
       secondSlide.classList.add('active')
    }else if (secondSlide.classList.contains('active')){
        secondSlide.classList.remove('active')
        thirdSlide.classList.add('active')
    }else if (thirdSlide.classList.contains('active')){
        thirdSlide.classList.remove('active')
        firstSlide.classList.add('active')
    }
})  

  firstSlide.addEventListener('click', (event) =>{
      event.preventDefault()
      if(firstSlide.classList.contains('slide1')){
          firstSlide.classList.remove('slide1')
          firstSlide.classList.contains('slide1')
      }
  })

window.addEventListener('scroll',() => {
    setTimeout(() => {
        header.style.cssText = window.pageYOffset > topline.offsetHeight ? 
    `position:fixed; 
    background: #fff; 
    box-shadow: 0px 0px 10px 0px #ccc;
    ` : 
    ''
    },5000)
})

// setTimeout(function,milisec)


  link1.addEventListener('click', event => {
      event.preventDefault()
      firstSlide.classList.add('active')
      secondSlide.classList.remove('active')
      thirdSlide.classList.remove('active')
  })

  link2.addEventListener('click', event => {
    event.preventDefault()
    secondSlide.classList.add('active')
    firstSlide.classList.remove('active')
    thirdSlide.classList.remove('active')
})

link3.addEventListener('click', event => {
    event.preventDefault()
    thirdSlide.classList.add('active')
    secondSlide.classList.remove('active')
    firstSlide.classList.remove('active')
})