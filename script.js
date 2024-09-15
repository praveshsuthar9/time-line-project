let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let year = document.querySelector('h1');
let img = document.querySelector('img')

let line = document.querySelector('.line')

one.addEventListener('click', () => {
  one.classList.add('active')
  two.classList.remove('active')
  three.classList.remove('active')
  four.classList.remove('active')
  five.classList.remove('active')
  six.classList.remove('active')
  seven.classList.remove('active')
  line.style.width = '0'
  year.innerText = 'April 2018'


})
two.addEventListener('click', () => {
  one.classList.add('active')
  two.classList.add('active')
  three.classList.remove('active')
  four.classList.remove('active')
  five.classList.remove('active')
  line.style.width = '16%'
  year.innerText = 'April 2019'
  img.src = "images/year-img-2.jpg"

})
three.addEventListener('click', () => {
  one.classList.add('active')
  two.classList.add('active')
  three.classList.add('active')
  four.classList.remove('active')
  five.classList.remove('active')
  six.classList.remove('active')
  seven.classList.remove('active')
  line.style.width = '32%'
  year.innerText = 'April 2020'
  img.src = "images/year-img-3.jpeg"
})
four.addEventListener('click', () => {
  one.classList.add('active')
  two.classList.add('active')
  three.classList.add('active')
  four.classList.add('active')
  five.classList.remove('active')
  six.classList.remove('active')
  seven.classList.remove('active')
  line.style.width = '49%'
  year.innerText = 'April 2021'
  img.src = "images/year-img-4.jpg"
})
five.addEventListener('click', () => {
  one.classList.add('active')
  two.classList.add('active')
  three.classList.add('active')
  four.classList.add('active')
  five.classList.add('active')
  six.classList.remove('active')
  seven.classList.remove('active')
  line.style.width = '66%'
  year.innerText = 'April 2022'
  img.src = "images/year-img-5.webp"
})
six.addEventListener('click', () => {
  one.classList.add('active')
  two.classList.add('active')
  three.classList.add('active')
  four.classList.add('active')
  five.classList.add('active')
  six.classList.add('active')
  seven.classList.remove('active')
  line.style.width = '83%'
  year.innerText = 'April 2023'
  img.src = "images/year-img-6.jpg"
})




seven.addEventListener('click', () => {
  one.classList.add('active')
  two.classList.add('active')
  three.classList.add('active')
  four.classList.add('active')
  five.classList.add('active')
  six.classList.add('active')
  seven.classList.add('active')
  line.style.width = '100%'
  year.innerText = 'April 2024'
  img.src = "images/year-img-7.jpeg"

})