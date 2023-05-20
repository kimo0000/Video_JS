const container = document.querySelector('.container')
const preload = container.querySelector('.preload')
const overlay = container.querySelector('.overlay')
const btns = container.querySelectorAll('.btns button')
const video = container.querySelector('.video')
console.log(btns)
console.log(video)



window.addEventListener('load', () => {
   preload.classList.add('removed')
})

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if(e.target.classList.contains('pause')) {
        container.classList.add('move')
        video.pause()
      } else {
        container.classList.remove('move')
        video.play()
      }
    })
})